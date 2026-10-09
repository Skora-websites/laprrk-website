import { useRef } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "../lib/motion";
import { TiltCard } from "../components/motion-primitives";
import { useOfficeClocks } from "../lib/clocks";
import { HERO, CONSOLE_ROWS, CONSOLE_TRAINING, MARQUEE } from "../lib/home-data";

function GlassConsole() {
  const c = useOfficeClocks();
  return (
    <div className="glass-console">
      <div className="console-bar">
        <span className="dot" /><span className="dot" /><span className="dot" />
        <span className="console-title">Book a free consultation</span>
      </div>
      <div className="console-body">
        <div className="console-steps" aria-hidden="true">
          <span className="console-step"><i>1</i> Build</span>
          <span className="console-step-sep" />
          <span className="console-step"><i>2</i> Hire</span>
          <span className="console-step-sep" />
          <span className="console-step done"><i>3</i> Upskill</span>
          <span className="console-step-sep" />
          <span className="console-step done"><i>4</i> Scale</span>
        </div>
        {CONSOLE_ROWS.map((r) => (
          <a key={r.href} className="console-row" href={r.href}>
            <span className="console-tag">{r.tag}</span>
            <span className="console-main">
              <strong>{r.title}</strong>
              <small>{r.sub}</small>
            </span>
            <span className="console-arrow">→</span>
          </a>
        ))}
        <a className="console-row" href={CONSOLE_TRAINING.href}>
          <span className="console-tag">{CONSOLE_TRAINING.tag}</span>
          <span className="console-main">
            <strong>{CONSOLE_TRAINING.title}</strong>
            <small>{CONSOLE_TRAINING.sub}</small>
          </span>
          <span className="console-arrow">→</span>
        </a>
        <div className="console-split">
          {CONSOLE_TRAINING.subs.map((s) => (
            <a key={s.href} className="console-mini" href={s.href}>
              <strong>{s.title}</strong>
              <small>{s.small}</small>
            </a>
          ))}
        </div>
        <a className="console-cta" href="contact.html">Book a free consultation →</a>
        <div className="console-clock">
          <div>
            <small>Greater Noida · IST</small>
            <strong>{c.ist}</strong>
          </div>
          <div>
            <small>Louisville · ET</small>
            <strong>{c.us}</strong>
          </div>
        </div>
        <div className="console-status">
          <span>{c.status}</span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Entrance choreography: eyebrow → headline → lede → console */
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from("[data-h='eyebrow']", { y: 24, opacity: 0, duration: 0.7, delay: 0.1 })
      .from("[data-h='line']", { y: 56, opacity: 0, duration: 0.9, stagger: 0.08 }, "-=0.35")
      .from("[data-h='lede']", { y: 28, opacity: 0, duration: 0.7 }, "-=0.45")
      .from("[data-h='cta']", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from("[data-h='console']", { y: 64, opacity: 0, rotateX: 8, duration: 1.1, ease: "power4.out" }, 0.35);

    /* Pinned gentle exit: the stage drifts and dims as you scroll, then
       reverses cleanly on scroll-up. The console itself has no scrubbed
       tween (it rides with the stage), so it can never get stuck hidden. */
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
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb" aria-hidden="true" />
      <div className="container hero-stage" data-h="stage">
        <div className="hero-copy">
          <p className="eyebrow" data-h="eyebrow">{HERO.eyebrow}</p>
          <h1 className="hero-title">
            <span data-h="line">{HERO.headline.before}<span className="em-gold">{HERO.headline.em}</span>{HERO.headline.after}</span>
          </h1>
          <p className="lede" data-h="lede">{HERO.lede}</p>
          <div className="hero-ctas" data-h="cta">
            <a className="btn btn-gold btn-lg" href={HERO.ctaPrimary.href}>{HERO.ctaPrimary.label}</a>
            <a className="btn btn-ghost btn-lg" href={HERO.ctaSecondary.href}>{HERO.ctaSecondary.label}</a>
          </div>
        </div>
        <div className="hero-console" data-h="console">
          <TiltCard max={5}><GlassConsole /></TiltCard>
        </div>
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
