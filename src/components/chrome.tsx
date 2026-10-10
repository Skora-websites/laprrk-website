import type { ReactNode } from "react";
import { useTheme } from "../lib/theme";
import { Reveal, CountUp } from "./motion-primitives";

/* ---------- ThemeToggle ---------- */

export function ThemeToggle() {
  const [theme, toggle] = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className="glass btn"
      style={{ padding: "10px 16px" }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? "Dark" : "Light"} mode
    </button>
  );
}

/* ---------- Section header (no eyebrow by default) ---------- */

export function SectionHead({
  title,
  lede,
  eyebrow,
  dark = false,
  link,
}: {
  title: string;
  lede?: string;
  eyebrow?: string;
  dark?: boolean;
  link?: { label: string; href: string };
}) {
  return (
    <Reveal>
      <div className="lumina-head">
        <div className="lumina-head-main">
          {eyebrow ? (
            <p
              className="lumina-eyebrow"
              style={dark ? { background: "rgba(52,211,153,.13)", borderColor: "rgba(52,211,153,.4)", color: "#6ee7b7" } : undefined}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2 className="lumina-title" style={dark ? { color: "#ffffff" } : undefined}>
            {title}
          </h2>
          {lede ? (
            <p className="lumina-lede" style={dark ? { color: "#d6d3d1" } : undefined}>{lede}</p>
          ) : null}
        </div>
        {link ? (
          <a className="lumina-link" href={link.href} style={dark ? { color: "#6ee7b7" } : undefined}>
            {link.label} <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}

/* ---------- GlassCard with tilt + reveal ---------- */

export function GlassCard({
  title,
  body,
  tint = false,
  className = "",
  children,
}: {
  title?: string;
  body?: string;
  tint?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  if (children) {
    return (
      <div className={`${tint ? "glass-tint" : "glass"} ${className}`} style={{ height: "100%" }}>
        {children}
      </div>
    );
  }
  return (
    <div
      className={`${tint ? "glass-tint" : "glass"} ${className}`}
      style={{ padding: 28, display: "grid", gap: 12, height: "100%", alignContent: "start" }}
    >
      {title ? <h3 style={{ fontSize: 20, letterSpacing: "-0.015em" }}>{title}</h3> : null}
      {body ? <p style={{ color: "var(--text-mute)", fontSize: 15.5, lineHeight: 1.6 }}>{body}</p> : null}
    </div>
  );
}

/* ---------- Marquee (max one per page) ---------- */

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "18px 0",
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", gap: 12, width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="chip">
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .marquee-track { animation: lux-scroll 60s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        }
        @keyframes lux-scroll { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

/* ---------- Stats band ---------- */

export function Stats({ items }: { items: { value: number; suffix: string; label: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
        borderTop: "1px solid var(--line)",
        paddingTop: 32,
      }}
    >
      {items.map((s) => (
        <div key={s.label} style={{ display: "grid", gap: 6 }}>
          <strong
            className="mono"
            style={{ fontSize: "clamp(34px,4vw,50px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            <CountUp value={s.value} suffix={s.suffix} />
          </strong>
          <span style={{ color: "var(--text-mute)", fontSize: 14.5 }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
