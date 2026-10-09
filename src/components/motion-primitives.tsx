import { useRef, type CSSProperties, type ReactNode } from "react";
import { useGsapContext, gsap } from "../lib/motion";

/* ---------- Reveal: staggered scroll entry ---------- */

export function Reveal({
  children,
  y = 32,
  stagger = 0.08,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  y?: number;
  stagger?: number;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "ul" | "li";
}) {
  const ref = useRef<HTMLElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = el.querySelectorAll<HTMLElement>(":scope > *");
    if (reduce) {
      gsap.set(targets, { clearProps: "all" });
      return;
    }
    gsap.fromTo(
      targets,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        ease: "power3.out",
        stagger,
        scrollTrigger: { trigger: el, start: "top 82%", once: true },
      },
    );
  }, [y, stagger, delay]);

  const Tag = as as "div";
  return (
    <Tag ref={ref as never} className={className}>
      {children}
    </Tag>
  );
}

/* ---------- TiltCard: pointer 3D tilt with glare, desktop only ---------- */

export function TiltCard({
  children,
  className = "",
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
    const glare = el.querySelector<HTMLElement>("[data-glare]");

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(px * max * 2);
      rx(-py * max * 2);
      if (glare) {
        gsap.to(glare, {
          opacity: 0.5,
          background: `radial-gradient(420px circle at ${
            (px + 0.5) * 100
          }% ${(py + 0.5) * 100}%, rgba(255,255,255,0.35), transparent 55%)`,
          duration: 0.4,
        });
      }
    };
    const onLeave = () => {
      rx(0);
      ry(0);
      if (glare) gsap.to(glare, { opacity: 0, duration: 0.5 });
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [max]);

  const style: CSSProperties = { transformStyle: "preserve-3d", perspective: "900px", position: "relative" };
  return (
    <div ref={ref} className={className} style={style}>
      {children}
      <div
        data-glare
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ---------- FloatLoop: gentle perpetual float for hero console ---------- */

export function FloatLoop({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const tween = gsap.to(el, {
      y: -14,
      duration: 3.2,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---------- CountUp: stats count once on view ---------- */

export function CountUp({ to, value, suffix = "" }: { to?: number; value?: number; suffix?: string }) {
  const target = to ?? value ?? 0;
  const ref = useRef<HTMLSpanElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const obj = { n: 0 };
    if (reduce) {
      el.textContent = `${target}${suffix}`;
      return;
    }
    gsap.to(obj, {
      n: target,
      duration: 1.4,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = `${Math.round(obj.n)}${suffix}`;
      },
    });
  }, [target, suffix]);

  return <span ref={ref}>{`0${suffix}`}</span>;
}
