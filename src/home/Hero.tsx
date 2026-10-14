import { useRef } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "../lib/motion";
import { CountUp } from "../components/motion-primitives";
import { HERO, MARQUEE, STATS } from "../lib/home-data";
import { HeroBackdrop } from "./HeroBackdrop";
import { HeroObject } from "./HeroObject";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Entrance choreography (fromTo: explicit end states, so an interrupted
       tween can never leave content stuck invisible). The 3D board runs its
       own entrance inside HeroObject; this timeline owns the copy column. */
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo("[data-h='eyebrow']", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1 })
      .fromTo("[data-h='title']", { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.35")
      .fromTo("[data-h='lede']", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
      .fromTo("[data-h='cta']", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo("[data-h='stat']", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, "-=0.35");
    // Failsafe for throttled webviews: never leave content hidden.
    window.setTimeout(() => {
      if (tl.progress() < 1) tl.progress(1);
    }, 2600);

    /* Pinned gentle exit: the stage drifts and dims, then reverses on scroll-up. */
    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
      animation: gsap.timeline().to("[data-h='stage']", { y: -40, opacity: 0.55, ease: "none" }),
    });
  }, [], root);

  return (
    <section ref={root} className="hero" id="top">
      <HeroBackdrop />
      <div className="container tn-stage" data-h="stage">
        <div className="tn-copy">
          <p className="eyebrow" data-h="eyebrow">
            <i className="eyebrow-dot" aria-hidden="true" />
            {HERO.eyebrow}
          </p>
          <h1 className="hero-title" data-h="title">
            {HERO.headline.before}
            <span className="em-gold">{HERO.headline.em}</span>
            {HERO.headline.after}
          </h1>
          <p className="lede" data-h="lede">{HERO.lede}</p>
          <div className="hero-ctas" data-h="cta">
            <a className="btn btn-gold btn-lg" href={HERO.ctaPrimary.href}>{HERO.ctaPrimary.label} →</a>
            <a className="tn-play" href={HERO.ctaSecondary.href}>
              <span className="tn-play-btn" aria-hidden="true">→</span>
              <span className="tn-play-text">
                <strong>{HERO.ctaSecondary.label}</strong>
                <small>See what we do</small>
              </span>
            </a>
          </div>
        </div>
        <HeroObject />
        <dl className="tn-stats">
          {STATS.map((s) => (
            <div className="tn-stat" data-h="stat" key={s.label}>
              <dt>
                <CountUp value={s.value} />
                <span className="stat-suffix">{s.suffix}</span>
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="marquee-group" key={k}>
              {MARQUEE.map((m) => <span key={m + k}>{m}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
