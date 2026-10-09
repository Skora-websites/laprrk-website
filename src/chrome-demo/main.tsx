import { useState } from "react";
import { MotionProvider } from "../lib/motion";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer, SiteFooter, WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { Reveal } from "../components/motion-primitives";
import "../styles/global.css";

export default function ChromeDemo() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <MotionProvider>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <main>
        {/* Placeholder band to demonstrate the scroll-aware glass header */}
        <section
          className="ink-band"
          style={{
            margin: "24px auto 0",
            maxWidth: 1280,
            width: "calc(100% - 32px)",
            borderRadius: 22,
            padding: "clamp(48px,6vw,88px) clamp(24px,4vw,56px)",
          }}
        >
          <Reveal>
            <div style={{ display: "grid", gap: 20 }}>
              <h1 style={{ fontSize: "clamp(2.2rem,4.5vw,3.6rem)", letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                Phase 1 chrome demo
              </h1>
              <p style={{ color: "#b9b7d4", maxWidth: "56ch", fontSize: 18 }}>
                Scroll to see the glass header tighten. Open the mega menus, toggle the theme,
                resize below 1080px for the drawer. Footer clocks and WhatsApp pill are live.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="contact.html">Book a free consultation</a>
                <a className="btn btn-ghost-ink" href="it-services.html">Explore services</a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Filler sections to make scrolling meaningful */}
        {[1, 2, 3].map((n) => (
          <section key={n} style={{ margin: "64px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
            <div className="glass" style={{ padding: 40, display: "grid", gap: 10 }}>
              <h2 style={{ fontSize: 26 }}>Scroll section {n}</h2>
              <p style={{ color: "var(--text-mute)", maxWidth: "62ch" }}>
                Placeholder content for verifying header behavior on scroll. Replaced in Phase 2
                with the real home page sections, content preserved one-to-one.
              </p>
            </div>
          </section>
        ))}
      </main>

      <SiteFooter />
      <WhatsAppFab />
      <DevAnnotation />
    </MotionProvider>
  );
}
