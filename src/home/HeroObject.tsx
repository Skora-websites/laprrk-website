import { useRef, type CSSProperties } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "../lib/motion";
import { CONSOLE_ROWS, CONSOLE_TRAINING } from "../lib/home-data";

/**
 * HeroObject — the hero's centrepiece.
 *
 * A translucent glass delivery board with the three practices sitting at
 * different depths inside it, and satellite chips floating around it at
 * their own focal distances. Built with real 3D transforms, driven by GSAP
 * (the project's motion standard — the HRCM redesign's framer-motion
 * composition, ported):
 *
 *   group 1 — the scroll tumble (rotationX + y + scale as the hero leaves)
 *   group 2 — the pointer tilt (quickTo springs, ±16° / ±12°) + idle float
 *   group 3 — a continuous showcase turn, so the object never sits still
 *
 * Pointer tilt composes with the showcase turn instead of fighting it:
 * the turn lives on an inner element, the tilt on an outer one, so each
 * keeps its own transform components. Every inner layer carries its own
 * translateZ, so tilting produces real parallax. Inert under
 * prefers-reduced-motion: flat, no tilt, no turn, no float.
 */

const ICONS = ["◈", "⬢", "✦"] as const;

/** The three practices, with the depth each row sits at inside the glass. */
const ROWS = [
  { ...CONSOLE_ROWS[0], icon: ICONS[0], depth: 46 },
  { ...CONSOLE_ROWS[1], icon: ICONS[1], depth: 38 },
  {
    ...CONSOLE_TRAINING,
    sub: "Corporate tracks and institute programmes · around 70% hands-on",
    icon: ICONS[2],
    depth: 30,
  },
];

/** Satellite chips — each at its own depth and float phase. */
const SATELLITES = [
  { label: "5–7 day shortlist", note: "screened", className: "hx3d-sat-a", z: 130 },
  { label: "2-week sprints", note: "demo each", className: "hx3d-sat-b", z: 104 },
  { label: "~70% hands-on", note: "lab time", className: "hx3d-sat-c", z: 118 },
  { label: "NDA day one", note: "weekly reports", className: "hx3d-sat-d", z: 142 },
];

export function HeroObject({ className = "" }: { className?: string }) {
  const scene = useRef<HTMLDivElement>(null);
  const tumble = useRef<HTMLDivElement>(null);
  const tilt = useRef<HTMLDivElement>(null);
  const spin = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = scene.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- entrance: the board settles into depth, rows stagger in ---- */
    const board = el.querySelector<HTMLElement>(".hx3d-board");
    const rows = gsap.utils.toArray<HTMLElement>(".hx3d-row", el);
    const sats = gsap.utils.toArray<HTMLElement>("[data-sat]", el);

    if (reduce) {
      gsap.set([board, ...rows, ...sats], { opacity: 1, y: 0, scale: 1 });
    } else {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.35 });
      tl.fromTo(board, { opacity: 0, scale: 0.92, y: 30 }, { opacity: 1, scale: 1, y: 0, duration: 0.9 })
        .fromTo(
          rows,
          { opacity: 0, y: 24, z: (i: number) => ROWS[i].depth - 40 },
          { opacity: 1, y: 0, z: (i: number) => ROWS[i].depth, duration: 0.7, stagger: 0.1 },
          "-=0.55",
        )
        .from(".hx3d-footer", { opacity: 0, y: 14, duration: 0.5 }, "-=0.4")
        .fromTo(
          sats,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55, stagger: 0.09 },
          "-=0.35",
        );
      // Failsafe for throttled webviews: never leave content hidden.
      window.setTimeout(() => {
        if (tl.progress() < 1) tl.progress(1);
      }, 2600);
    }

    if (reduce) return;

    /* ---- group 3: the continuous showcase turn ---- */
    gsap.fromTo(
      spin.current,
      { rotationY: -22 },
      { rotationY: 22, duration: 16, ease: "sine.inOut", repeat: -1, yoyo: true },
    );

    /* ---- group 2b: idle float on the tilt group (composes with rotation) ---- */
    gsap.to(tilt.current, {
      y: -10,
      duration: 6,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    /* ---- satellites: each chip floats on its own phase ---- */
    sats.forEach((sat, i) => {
      gsap.to(sat, {
        y: -9,
        duration: 5.2 + i * 0.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 1.1,
      });
    });

    /* ---- group 2a: pointer tilt, desktop only ---- */
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (fine && tumble.current && tilt.current) {
      const rx = gsap.quickTo(tilt.current, "rotationX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(tilt.current, "rotationY", { duration: 0.6, ease: "power3.out" });
      const sheen = el.querySelector<HTMLElement>("[data-sheen]");
      const setSheenX = sheen ? gsap.quickSetter(sheen, "left", "%") : null;
      const setSheenY = sheen ? gsap.quickSetter(sheen, "top", "%") : null;

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        ry((px - 0.5) * -32);
        rx((py - 0.5) * 24);
        if (setSheenX && setSheenY) {
          setSheenX(18 + px * 64);
          setSheenY(12 + py * 58);
        }
      };
      const onLeave = () => {
        rx(0);
        ry(0);
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", onLeave);
    }

    /* ---- group 1: the scroll tumble — the object turns as the hero leaves ---- */
    if (tumble.current) {
      const hero = el.closest<HTMLElement>(".hero") ?? el;
      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        })
        .fromTo(
          tumble.current,
          { rotationX: 10, y: 40, scale: 0.94 },
          { rotationX: -14, y: -70, scale: 1.06, ease: "none" },
        );
    }
  }, []);

  return (
    <div className={`hx3d-scene ${className}`} ref={scene}>
      <div className="hx3d-tumble" ref={tumble}>
        <div className="hx3d-tilt" ref={tilt}>
          <div className="hx3d-spin" ref={spin}>
            {/* coloured refraction inside the glass */}
            <div className="hx3d-refraction" aria-hidden="true" />
            {/* the glass board */}
            <div className="hx3d-board">
              <div className="hx3d-board-inner">
                {/* specular streak — tracks the pointer */}
                <div className="hx3d-sheen" data-sheen aria-hidden="true" />
                {/* top gloss */}
                <div className="hx3d-gloss" aria-hidden="true" />
                {/* deep watermark */}
                <div className="hx3d-mark" aria-hidden="true">3</div>

                <div className="hx3d-head">
                  <span className="hx3d-head-l">
                    <span className="hx3d-pulse" aria-hidden="true" />
                    Delivery board
                  </span>
                  <span className="hx3d-head-r mono">3 practices · 1 partner</span>
                </div>

                <ul className="hx3d-rows">
                  {ROWS.map((r) => (
                    <li
                      key={r.href}
                      className="hx3d-row"
                      style={{ "--z": r.depth } as CSSProperties}
                    >
                      <a href={r.href}>
                        <span className="hx3d-row-ic" aria-hidden="true">{r.icon}</span>
                        <span className="hx3d-row-text">
                          <strong>{r.title}</strong>
                          <small>{r.sub}</small>
                        </span>
                        <span className="hx3d-row-k mono" aria-hidden="true">
                          {r.tag}
                          <span className="hx3d-row-arrow" aria-hidden="true">→</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>

                <a className="hx3d-footer" href="contact.html">
                  <span className="hx3d-footer-l">India delivery · USA hours</span>
                  <span className="hx3d-footer-r mono">IST + ET overlap</span>
                </a>
              </div>
            </div>

            {/* satellites at their own depths */}
            {SATELLITES.map((s) => (
              <div
                key={s.label}
                className={`hx3d-sat ${s.className}`}
                style={{ "--z": s.z } as CSSProperties}
                aria-hidden="true"
              >
                <span className="hx3d-chip" data-sat>
                  <strong>{s.label}</strong>
                  <small>{s.note}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* contact shadow — grounds the object in the light */}
      <div className="hx3d-shadow" aria-hidden="true" />
    </div>
  );
}
