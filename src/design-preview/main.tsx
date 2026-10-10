import { MotionProvider } from "../lib/motion";
import { ThemeToggle, SectionHead, GlassCard, Marquee, Stats } from "../components/chrome";
import { Reveal, TiltCard, FloatLoop, CountUp } from "../components/motion-primitives";
import { DevAnnotation } from "../components/DevAnnotation";
import "../../src/styles/global.css";

const marqueeItems = [
  "Agentic AI", "Model Context Protocol", "LangGraph", "OpenAI", "Anthropic Claude",
  "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "React 19", "Next.js",
];

export default function DesignPreview() {
  return (
    <MotionProvider>
      {/* Sticky glass header */}
      <header
        className="glass-strong"
        style={{
          position: "sticky",
          top: 16,
          margin: "16px auto 0",
          maxWidth: 1280,
          width: "calc(100% - 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: '"Bricolage Grotesque", sans-serif', fontWeight: 800, fontSize: 20 }}>
          Laprrk<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-mute)" }}>
            Design system preview
          </span>
          <ThemeToggle />
        </div>
      </header>

      <main>
        {/* ===== Cinematic obsidian hero with floating glass console ===== */}
        <section
          className="ink-band"
          style={{
            margin: "24px auto 0",
            maxWidth: 1280,
            width: "calc(100% - 32px)",
            borderRadius: 22,
            padding: "clamp(48px,6vw,88px) clamp(24px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <Reveal y={28} stagger={0.1}>
            <div style={{ display: "grid", gap: 24 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "#0b654f" }}>
                Design system
              </span>
              <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                Indigo and violet glass
              </h1>
              <p style={{ color: "#b9b7d4", maxWidth: "48ch", fontSize: 18 }}>
                Cinematic 3D glass, one violet accent, both themes shipped together.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="#cards">See components</a>
                <a className="btn btn-ghost-ink" href="#tokens">Tokens</a>
              </div>
            </div>
          </Reveal>

          <FloatLoop>
            <TiltCard className="glass-ink glass-sheen">
              <div style={{ position: "relative", padding: 24, display: "grid", gap: 14 }}>
                <div className="mono" style={{ fontSize: 11.5, color: "#b9b7d4", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Console preview
                </div>
                {["IT Services", "Hiring", "Training"].map((s) => (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 16px",
                      border: "1px solid rgba(14,122,95,.3)",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <b style={{ fontSize: 15 }}>{s}</b>
                    <span className="mono" style={{ fontSize: 11, color: "#0b654f" }}>Live</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </FloatLoop>
        </section>

        {/* ===== Marquee ===== */}
        <section style={{ margin: "48px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <Marquee items={marqueeItems} />
        </section>

        {/* ===== Stats ===== */}
        <section style={{ margin: "56px auto 0", maxWidth: 1280, width: "calc(100% - 32px)", padding: "0 clamp(0px,1vw,4px)" }}>
          <Stats
            items={[
              { value: 2019, suffix: "", label: "Founded, offices in India and the USA" },
              { value: 50, suffix: "+", label: "Clients served" },
              { value: 200, suffix: "+", label: "IT professionals placed" },
              { value: 500, suffix: "+", label: "Professionals trained" },
            ]}
          />
        </section>

        {/* ===== Glass card grid (light-theme surfaces) ===== */}
        <section id="cards" style={{ margin: "96px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <SectionHead
            title="Glass surfaces"
            lede="Four tiers: glass, glass-strong, glass-tint and glass-ink. Tilt and glare on pointer-fine devices, reduced-motion collapses to static."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <GlassCard title=".glass" body="Default card surface. 20px blur, white inner highlight, hairline border." />
            <GlassCard title=".glass-tint" body="Accent-washed panel for featured cards and promos." tint />
            <GlassCard title="Tilt + glare" body="Pointer 3D tilt up to 6 degrees with a glare highlight tracking the cursor." />
            <GlassCard title="Count-up stats" body="Numerals count once on scroll entry, then hold tabular values." />
          </div>
        </section>

        {/* ===== Token swatches ===== */}
        <section id="tokens" style={{ margin: "96px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <SectionHead title="Tokens" lede="One accent family, cool neutrals, no pure black or white. Toggle the theme to verify both." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              ["--base", "Base"], ["--surface", "Surface"], ["--surface-2", "Surface 2"],
              ["--accent", "Accent"], ["--accent-strong", "Accent strong"], ["--text", "Text"],
              ["--text-mute", "Muted"], ["--line", "Hairline"], ["--status", "Status"],
            ].map(([token, name]) => (
              <div key={token} className="glass" style={{ padding: 14, display: "grid", gap: 8 }}>
                <div style={{ height: 44, borderRadius: 8, background: `var(${token})`, border: "1px solid var(--line)" }} />
                <span className="mono" style={{ fontSize: 11.5, color: "var(--text-mute)" }}>{token}</span>
                <span style={{ fontSize: 13.5 }}>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA band with real content numbers ===== */}
        <section
          className="ink-band"
          style={{
            margin: "96px auto 96px",
            maxWidth: 1280,
            width: "calc(100% - 32px)",
            borderRadius: 22,
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <Reveal>
            <div style={{ display: "grid", gap: 16 }}>
              <h2 style={{ fontSize: "clamp(26px,2.8vw,36px)" }}>Ready to review both themes?</h2>
              <p style={{ color: "#b9b7d4", maxWidth: "52ch" }}>
                Toggle light and dark, resize to mobile, and check reduced-motion in your browser settings. Every component collapses gracefully.
              </p>
              <div><a className="btn btn-gold" href="#tokens">Back to tokens</a></div>
            </div>
          </Reveal>
          <div className="glass-ink" style={{ padding: 24, display: "grid", gap: 10 }}>
            <span className="mono" style={{ fontSize: 11.5, color: "#b9b7d4", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Count-up demo
            </span>
            <div className="mono" style={{ fontSize: 44, fontWeight: 500, color: "#0b654f" }}>
              <CountUp value={500} suffix="+" />
            </div>
            <span style={{ fontSize: 14, color: "#b9b7d4" }}>Professionals trained, counted once on view</span>
          </div>
        </section>
      </main>

      <footer style={{ maxWidth: 1280, margin: "0 auto 32px", width: "calc(100% - 32px)", padding: "24px 0", borderTop: "1px solid var(--line)" }}>
        <span className="mono" style={{ fontSize: 12.5, color: "var(--text-mute)" }}>
          Laprrk design system, Phase 0 reference page
        </span>
      </footer>

      {/* Mobile collapse for the grids on this preview page */}
      <style>{`
        @media (max-width: 860px) {
          main section[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <DevAnnotation />
    </MotionProvider>
  );
}
