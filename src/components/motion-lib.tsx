import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "../lib/motion";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

/* ---------- BlurReveal: port of flexoglobal.org's data-ui-animate system.

   The reference site declares animation on markup
   (`data-ui-animate data-direction="up" data-offset="60" data-rotation="3"
     data-delay="0.2" data-duration="0.6"`)
   and animates from opacity 0 + blur(16px) to opaque + sharp when the element
   crosses `start`/`end` on scroll. `rotation` is applied as the entry offset so
   cards settle with a slight tilt, matching the source. */

export type BlurDirection = "up" | "down" | "left" | "right";

const DIRECTION_OFFSET: Record<BlurDirection, { x: number; y: number }> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

export function BlurReveal({
  children,
  direction = "up",
  offset = 60,
  rotation = 0,
  delay = 0,
  duration = 0.6,
  start = "top 90%",
  once = true,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  direction?: BlurDirection;
  offset?: number;
  rotation?: number;
  delay?: number;
  duration?: number;
  start?: string;
  once?: boolean;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement>(null);
  const dir = DIRECTION_OFFSET[direction] ?? DIRECTION_OFFSET.up;

  useGsapContext(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(el, { opacity: 1, filter: "none", x: 0, y: 0, rotation: 0 });
        return;
      }

      gsap.fromTo(
        el,
        {
          opacity: 0,
          filter: "blur(16px)",
          x: dir.x * offset,
          y: dir.y * offset,
          rotation,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          x: 0,
          y: 0,
          rotation: 0,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start,
            once,
          },
        },
      );
    },
    [direction, offset, rotation, delay, duration, start, once],
  );

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- StackCards: port of the reference site's card pile.

   Each card pins at `center center` and scales down by 2.5% per remaining card
   (`scale = 1 - (count - index) * 0.025`) with the transform origin pushed to
   the last card's start so the stack collapses toward the bottom. pinSpacing is
   false so the section height is unchanged. */

export function StackCards({
  children,
  scaleStep = 0.025,
  start = "center center",
  className = "",
}: {
  children: ReactNode;
  scaleStep?: number;
  start?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // The reference gates this on desktop: pinning a card pile on a phone
    // produces very long scroll jail.
    if (!window.matchMedia("(min-width: 992px)").matches) return;

     const cards = gsap.utils.toArray<HTMLElement>("[data-stack-card]", root);
     if (cards.length < 2) return;

     // The last card is the reference point every earlier card scales toward.
     const lastCard = cards[cards.length - 1];
     const lastStart = ScrollTrigger.create({
       trigger: lastCard,
       start,
     }).start;

     cards.forEach((card, index) => {
       const scaleDown = gsap.to(card, {
         scale: 1 - (cards.length - index) * scaleStep,
         transformOrigin: `50% ${lastStart - card.offsetTop}px`,
         ease: "none",
       });

      ScrollTrigger.create({
        trigger: card,
        start,
        end: () => lastStart,
        pin: true,
        pinSpacing: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });
  }, [scaleStep, start]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---------- PinnedHead: section title pinned while its caller scrolls past,
   scaling up and fading out (the reference site's .fix-title-sec treatment). */

export function PinnedHead({
  children,
  scaleTo = 1.3,
  className = "",
}: {
  children: ReactNode;
  scaleTo?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    const head = el.querySelector<HTMLElement>("[data-pinned-head]");
    if (!head) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom bottom",
          scrub: true,
          pin: head,
        },
      })
      .to(head, { scale: scaleTo, opacity: 0, ease: "none" });
  }, [scaleTo]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---------- RevealWords: colour scrubs per word from --text-mute to --text
   as the paragraph scrolls through the viewport, so the text is progressively
   emphasised rather than progressively revealed. SplitText ships with the
   installed GSAP, so no extra dependency is added. */

export function RevealWords({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useGsapContext(
    () => {
      const el = ref.current;
      if (!el) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // SplitText replaces the paragraph's text with per-word nodes and adds an
      // aria-label on the container plus aria-hidden on the words. Both are
      // wrong for our case: the aria-label duplicates the visible text (prohibited
      // on a <p>) and the aria-hidden words break the accessibility tree.
      const split = new SplitText(el, { type: "words", wordsClass: "split-word" });
      split.words.forEach((w) => {
        w.removeAttribute("aria-hidden");
        w.removeAttribute("aria-label");
      });
      if (el.getAttribute("aria-label")) el.removeAttribute("aria-label");

      // Dim state expressed as a color change, not opacity: opacity on the
      // full-strength text can land below WCAG 1.4.3 contrast mid-scroll, while
      // --text-mute is already an approved accessible color on --base.
      const wordsEls = split.words;
      gsap.fromTo(
        wordsEls,
        { color: "var(--text-mute)", opacity: 1 },
        {
          color: "var(--text)",
          opacity: 1,
          stagger: 0.04,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    },
    [],
  );

  return <p ref={ref} className={className}>{children}</p>;
}
