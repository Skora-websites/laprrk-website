import { useRef } from "react";
import { gsap, useGsapContext } from "../lib/motion";
import type { CSSProperties } from "react";

/**
 * HeroBackdrop — the hero's ground.
 *
 * Ported from the HRCM redesign's studio treatment, recoloured to the
 * stone + emerald system of this site: a softly lit volumetric space with
 * layered radial washes, three drifting blooms, six light panes sweeping
 * around a hub (the windmill), film grain, a corner vignette, a
 * perspective floor plane and an atmospheric haze. Everything is
 * aria-hidden decoration; the mill stops under prefers-reduced-motion.
 */

/** The six panes pick their tint from theme-scoped custom properties. */
const BLADE_TINTS = ["a", "b", "c", "a", "b", "c"] as const;

/** Bloom seeds — placement per bloom, colours live in CSS. */
const BLOOMS = [
  { className: "hx-bloom-a", x: "-8%", y: "-18%", size: "34rem", side: "left" },
  { className: "hx-bloom-b", x: "2%", y: "8%", size: "30rem", side: "right" },
  { className: "hx-bloom-c", x: "18%", y: "-16%", size: "28rem", side: "left" },
];

export function HeroBackdrop() {
  const root = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* The blooms drift on long, offset loops so the light is alive but
       never noticeably moving. Owned by GSAP so it reverts with the
       context (the StackCards-style permanent CSS spin stays in CSS). */
    gsap.utils.toArray<HTMLElement>("[data-bloom]", el).forEach((bloom, i) => {
      gsap.to(bloom, {
        x: i === 1 ? -30 : 26,
        y: i === 0 ? 24 : -20,
        duration: 22 + i * 5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 2.5,
      });
    });
  }, [], root);

  return (
    <div className="hx-backdrop" ref={root} aria-hidden="true">
      {/* volumetric wash — the base studio light, per theme */}
      <div className="hx-stage" />
      {/* atmospheric depth haze — pushes the far plane back */}
      <div className="hx-haze" />
      {/* receding floor plane with converging depth lines */}
      <div className="hx-floor" />
      {/* drifting blooms */}
      {BLOOMS.map((b) => (
        <div
          key={b.className}
          data-bloom
          className={`hx-bloom ${b.className}`}
          style={
            {
              ...(b.side === "right" ? { right: b.x } : { left: b.x }),
              ...(b.className === "hx-bloom-c" ? { bottom: b.y } : { top: b.y }),
              width: b.size,
              height: b.size,
            } as CSSProperties
          }
        />
      ))}
      {/* the windmill — six panes of light sweeping past a hub */}
      <div className="hx-windmill">
        {BLADE_TINTS.map((tint, i) => (
          <div
            key={i}
            className="hx-blade"
            style={{ "--tint": `var(--hx-tint-${tint})` } as CSSProperties}
          />
        ))}
        <div className="hx-hub" />
      </div>
      {/* film grain — keeps the gradients from reading as flat CSS */}
      <div className="hx-grain" />
      {/* corner darkening — what makes it read as a lit space */}
      <div className="hx-vignette" />
    </div>
  );
}
