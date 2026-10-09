import { useEffect, useRef, useState } from "react";
import { CONTACT, MEGA, RESOURCES_CARDS } from "../lib/nav-data";
import { useOfficeClocks } from "../lib/clocks";
import { useTheme } from "../lib/theme";
import { useGsapContext, gsap } from "../lib/motion";

/* ---------- Brand mark (same geometry as the original logo) ---------- */

export function Brand({ onInk = false }: { onInk?: boolean }) {
  return (
    <a href="index.html" aria-label="Laprrk Technology Solutions home" style={{ display: "inline-flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
      <svg viewBox="0 0 40 40" width={38} height={38} aria-hidden="true">
        <rect width="40" height="40" rx="12" fill={onInk ? "#1a1b4d" : "#14153d"} stroke={onInk ? "rgba(167,139,250,0.4)" : "none"} strokeWidth={onInk ? 1 : 0} />
        <path d="M14 10.5v19h13.5" stroke="#a78bfa" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="27.2" cy="13.4" r="3.3" fill="#8b5cf6" />
      </svg>
      <span style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 20, letterSpacing: "-0.03em", lineHeight: 1 }}>
        Laprrk
        <small className="mono" style={{ display: "block", fontWeight: 400, fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: onInk ? "#a5a2c5" : "var(--text-mute)", marginTop: 4 }}>
          Technology Solutions LLP
        </small>
      </span>
    </a>
  );
}

/* ---------- Icons (Tabler geometry, consistent 1.75 stroke) ---------- */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg className="ic" viewBox="0 0 24 24" width={16} height={16} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ---------- Live dots (semantic state only) ---------- */

function Dot({ live }: { live: boolean }) {
  return (
    <i
      aria-hidden="true"
      style={{
        width: 7,
        height: 7,
        borderRadius: "50%",
        flex: "none",
        display: "inline-block",
        background: live ? "#a78bfa" : "var(--text-mute)",
        boxShadow: live ? "0 0 0 3px rgba(167,139,250,.22), 0 0 10px rgba(167,139,250,.8)" : "none",
      }}
    />
  );
}

/* ---------- Topbar ---------- */

function Topbar() {
  const c = useOfficeClocks();
  return (
    <div style={{ background: "#0c0d2b", color: "#a5a2c5", borderBottom: "1px solid rgba(167,139,250,.16)", fontSize: 13, position: "relative", zIndex: 60 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "8px clamp(16px,4vw,36px)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div className="mono" style={{ display: "flex", gap: 18, alignItems: "center", fontSize: 12, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
            <Dot live={c.istOpen} /> Greater Noida <b style={{ color: "#f1effc", fontWeight: 500 }}>{c.ist}</b> IST
          </span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
            <Dot live={c.usOpen} /> Louisville <b style={{ color: "#f1effc", fontWeight: 500 }}>{c.us}</b> ET
          </span>
        </div>
        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }} className="topbar-links">
          <a href={`mailto:${CONTACT.email}`} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT.email}</a>
          <a href={CONTACT.phoneInHref} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT.phoneIn}</a>
          <a href={CONTACT.phoneUsHref} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT.phoneUs}</a>
        </div>
      </div>
      <style>{`@media (max-width: 720px) { .topbar-links { display: none !important; } }`}</style>
    </div>
  );
}

/* ---------- Glass mega menu ---------- */

function MegaMenu({ item, open, onToggle }: { item: (typeof MEGA)[number]; open: boolean; onToggle: () => void }) {
  return (
    <div
      style={{ position: "static" }}
      onMouseEnter={(e) => {
        if (window.matchMedia("(hover:hover)").matches && !open) onToggle();
      }}
      onMouseLeave={(e) => {
        if (window.matchMedia("(hover:hover)").matches && open) onToggle();
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        style={{
          font: "500 15px/1 'Instrument Sans', sans-serif",
          color: open ? "var(--accent)" : "var(--text)",
          background: open ? "var(--accent-soft)" : "none",
          border: 0,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "11px 12px",
          borderRadius: 999,
        }}
      >
        {item.label} <Chevron open={open} />
      </button>
      <div
        className="glass-strong glass-sheen"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: "100%",
          display: open ? "block" : "none",
          borderRadius: 0,
          borderTop: 0,
          zIndex: 40,
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px clamp(16px,4vw,36px) 36px", display: "grid", gridTemplateColumns: `repeat(${item.cols.length + 1}, 1fr)`, gap: 28 }}>
          {item.cols.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 17, marginBottom: 6 }}>
                {col.href ? <a href={col.href} style={{ textDecoration: "none", color: "inherit" }}>{col.title}</a> : col.title}
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: "1px solid var(--line)", paddingTop: 10, display: "grid", gap: 2 }}>
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} style={{ display: "block", textDecoration: "none", fontSize: 14.5, padding: "6px 0", color: "var(--text)" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="glass-tint" style={{ padding: 22, display: "grid", gap: 10, alignContent: "start", borderRadius: 14 }}>
            <span className="mono" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>Featured</span>
            <b style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 19, lineHeight: 1.25 }}>
              {item.id === "mega-hiring" ? "Setting up a GCC or India team?" : "Generative AI & agentic AI training"}
            </b>
            <span style={{ color: "var(--text-mute)", fontSize: 14, lineHeight: 1.5 }}>
              {item.id === "mega-hiring"
                ? "Leadership first, then a foundation team of 20-50, then scale. See the phase-by-phase plan."
                : "Separate tracks for leaders, business teams and developers, with a working RAG app and agent as the capstone."}
            </span>
            <a href={item.id === "mega-hiring" ? "gcc-hiring.html" : "generative-ai-training.html"} style={{ color: "var(--accent)", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
              {item.id === "mega-hiring" ? "GCC hiring" : "View programme"}
            </a>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--line)", background: "var(--surface-2)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px clamp(16px,4vw,36px)", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 14, color: "var(--text-mute)" }}>
            <span>{item.foot}</span>
            <a href={item.footHref} style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>{item.footLabel}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Resources mega row ---------- */

function ResourcesMenu({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <div style={{ position: "static" }}>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        style={{
          font: "500 15px/1 'Instrument Sans', sans-serif",
          color: open ? "var(--accent)" : "var(--text)",
          background: open ? "var(--accent-soft)" : "none",
          border: 0,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "11px 12px",
          borderRadius: 999,
        }}
      >
        Resources <Chevron open={open} />
      </button>
      <div
        className="glass-strong"
        style={{ position: "absolute", left: 0, right: 0, top: "100%", display: open ? "block" : "none", borderRadius: 0, borderTop: 0, zIndex: 40 }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "32px clamp(16px,4vw,36px) 36px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {RESOURCES_CARDS.map((c) => (
            <a key={c.href} href={c.href} className="glass" style={{ padding: 20, display: "grid", gap: 8, textDecoration: "none", color: "inherit", alignContent: "start" }}>
              <b style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 18 }}>{c.label}</b>
              <span style={{ color: "var(--text-mute)", fontSize: 14 }}>
                {c.href === "blog.html" ? "Practical guides on AI, QA, hiring and upskilling." : c.href === "case-studies.html" ? "Representative engagements across IT, hiring and training." : "Answers on pricing, process, IP, hiring terms and training."}
              </span>
            </a>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--line)", background: "var(--surface-2)" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "14px clamp(16px,4vw,36px)", display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 14, color: "var(--text-mute)" }}>
            <span>Guides, case studies and answers from our engineers, recruiters and trainers.</span>
            <a href="resources.html" style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none" }}>All resources</a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Theme switch (nav toggle, right of the CTA) ---------- */

function ThemeSwitch() {
  const [theme, toggleTheme] = useTheme();
  const dark = theme === "dark";
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label="Toggle color theme"
      title={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggleTheme}
      className="theme-switch"
    >
      <span className="theme-knob" aria-hidden="true" />
    </button>
  );
}

/* ---------- Header with scroll-aware glass ---------- */

export function SiteHeader({ onOpenDrawer }: { onOpenDrawer: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const headRef = useRef<HTMLElement>(null);

  /* Glass intensifies + pill tightens subtly after 40px scroll (ScrollTrigger, no listeners) */
  useGsapContext(() => {
    const el = headRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const pill = el.querySelector("[data-pill]");
    if (!pill) return;
    gsap.to(pill, {
      paddingTop: 6,
      paddingBottom: 6,
      ease: "none",
      scrollTrigger: { start: 40, end: 120, scrub: true },
    });
  }, []);

  /* Close menus on Escape and outside click (same behavior as original) */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[style*='position: static']")) setOpenId(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <>
      <Topbar />
      <header
        ref={headRef}
        style={{
          position: "sticky",
          top: 8,
          zIndex: 50,
          margin: 0,
          padding: "8px clamp(12px,3vw,32px) 0",
          background: "transparent",
        }}
      >
        <div
          data-pill
          className="glass-strong"
          style={{
            maxWidth: 1200,
            width: "100%",
            margin: "0 auto",
            padding: "10px 10px 10px clamp(16px,2vw,24px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            borderRadius: 999,
            background: "color-mix(in srgb, var(--surface) 86%, transparent)",
            backdropFilter: "blur(24px) saturate(170%)",
            WebkitBackdropFilter: "blur(24px) saturate(170%)",
            boxShadow: "0 16px 40px -18px rgba(76,62,170,.3), inset 0 1px 0 var(--glass-border)",
            border: "1px solid var(--line)",
          }}
        >
          <Brand />
          <nav aria-label="Main" style={{ display: "flex", alignItems: "center", gap: 2 }} className="site-nav">
            {MEGA.map((item) => (
              <MegaMenu key={item.id} item={item} open={openId === item.id} onToggle={() => setOpenId(openId === item.id ? null : item.id)} />
            ))}
            <ResourcesMenu open={openId === "resources"} onToggle={() => setOpenId(openId === "resources" ? null : "resources")} />
            <a href="about.html" style={{ font: "500 15px/1 'Instrument Sans', sans-serif", color: "var(--text)", textDecoration: "none", padding: "11px 12px" }}>About</a>
            <a href="contact.html" style={{ font: "500 15px/1 'Instrument Sans', sans-serif", color: "var(--text)", textDecoration: "none", padding: "11px 12px" }}>Contact</a>
            <a className="btn btn-gold" href="contact.html" style={{ marginLeft: 8, padding: "13px 20px" }}>
              Book a free consultation
            </a>
            <ThemeSwitch />
          </nav>
          <button
            type="button"
            className="btn btn-ghost burger-btn"
            onClick={onOpenDrawer}
            aria-label="Open menu"
            style={{ display: "none", padding: 12 }}
          >
            <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <style>{`
          @media (max-width: 1180px) {
            .site-nav > a.btn, .site-nav > button[aria-label="Toggle color theme"] { display: none !important; }
          }
          @media (max-width: 1080px) {
            .site-nav { display: none !important; }
            .burger-btn { display: inline-flex !important; }
          }
        `}</style>
      </header>
    </>
  );
}
