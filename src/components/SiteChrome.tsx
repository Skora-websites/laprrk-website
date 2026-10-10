import { useState } from "react";
import { CONTACT, DRAWER_GROUPS, FOOTER_COLS } from "../lib/nav-data";
import { useOfficeClocks } from "../lib/clocks";
import { Brand } from "./SiteHeader";
import { Reveal } from "./motion-primitives";

/* ---------- Mobile drawer (obsidian glass, full-screen) ---------- */

export function SiteDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  if (typeof document !== "undefined") {
    document.body.style.overflow = open ? "hidden" : "";
  }

  return (
    <div
      hidden={!open}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        overflowY: "auto",
        background: "rgba(12,13,43,0.92)",
        backdropFilter: "blur(28px) saturate(150%)",
        WebkitBackdropFilter: "blur(28px) saturate(150%)",
        color: "#fafaf9",
        padding: "16px clamp(16px,4vw,36px) 32px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <Brand onInk />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="btn btn-ghost-ink"
          style={{ padding: 12 }}
        >
          <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav aria-label="Mobile">
        <a href="index.html" style={{ display: "block", fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 26, fontWeight: 600, padding: "12px 0", borderBottom: "1px solid rgba(214,211,209,.16)", textDecoration: "none", color: "inherit" }}>
          Home
        </a>
        {DRAWER_GROUPS.map((g) => {
          const isOpen = openGroup === g.label;
          return (
            <div key={g.label} style={{ borderBottom: "1px solid rgba(214,211,209,.16)" }}>
              <button
                type="button"
                onClick={() => setOpenGroup(isOpen ? null : g.label)}
                aria-expanded={isOpen}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: 0,
                  cursor: "pointer",
                  color: "inherit",
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontSize: 26,
                  fontWeight: 600,
                  padding: "12px 0",
                }}
              >
                {g.label}
                <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: isOpen ? "0 0 14px" : 0,
                  display: isOpen ? "grid" : "none",
                  gap: 2,
                }}
              >
                {g.links.map((l, i) => (
                  <li key={`${l.href}-${i}`}>
                    <a href={l.href} style={{ display: "block", padding: "8px 0", color: "#d6d3d1", textDecoration: "none", fontSize: 16 }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <a href="about.html" style={{ display: "block", fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 26, fontWeight: 600, padding: "12px 0", borderBottom: "1px solid rgba(214,211,209,.16)", textDecoration: "none", color: "inherit" }}>
          About
        </a>
        <a href="contact.html" style={{ display: "block", fontFamily: '"Bricolage Grotesque", sans-serif', fontSize: 26, fontWeight: 600, padding: "12px 0", textDecoration: "none", color: "inherit" }}>
          Contact
        </a>
      </nav>
      <a className="btn btn-gold" href="contact.html" style={{ marginTop: 26, width: "100%", justifyContent: "center" }}>
        Book a free consultation
      </a>
    </div>
  );
}

/* ---------- Footer (obsidian, glass office cards, 1:1 links) ---------- */

export function SiteFooter() {
  const c = useOfficeClocks();
  return (
    <footer style={{ background: "linear-gradient(180deg, #292524, #1c1917)", color: "#d6d3d1", padding: "72px 0 32px", fontSize: 15, marginTop: 96, borderRadius: "clamp(24px,4vw,44px) clamp(24px,4vw,44px) 0 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px,4vw,36px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.3fr repeat(4, 1fr)", gap: 36 }} className="foot-top-grid">
          <div style={{ display: "grid", gap: 18, alignContent: "start" }}>
            <Brand onInk />
            <p style={{ maxWidth: "40ch", lineHeight: 1.6 }}>
              IT services, IT hiring consultation and corporate training, delivered from Greater Noida West, India and Louisville, Kentucky, USA.
            </p>
            <a className="btn btn-gold" href="contact.html" style={{ justifySelf: "start" }}>
              Book a free consultation
            </a>
          </div>
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4 className="mono" style={{ color: "#fafaf9", fontSize: 11.5, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 16 }}>
                <a href={col.href} style={{ textDecoration: "none", color: "inherit" }}>{col.title}</a>
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9 }}>
                {col.links.map((l, i) => (
                  <li key={`${l.href}-${i}`}>
                    <a href={l.href} style={{ textDecoration: "none", fontSize: 14.5, color: "inherit" }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1080px) { .foot-top-grid { grid-template-columns: 1fr 1fr 1fr !important; } }
          @media (max-width: 620px)  { .foot-top-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 420px)  { .foot-top-grid { grid-template-columns: 1fr !important; } }
        `}</style>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: 18, marginTop: 52, paddingTop: 32, borderTop: "1px solid rgba(214,211,209,.16)" }}>
          <div className="glass-ink" style={{ padding: 20, display: "grid", gap: 6, fontSize: 14.5, lineHeight: 1.55, borderRadius: 18 }}>
            <b style={{ color: "#fff", fontWeight: 600 }}>India office</b>
            <span>Office No. 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, Uttar Pradesh 201318, India</span>
            <a href={CONTACT.phoneInHref} style={{ color: "#6ee7b7", textDecoration: "none" }}>{CONTACT.phoneIn}</a>
          </div>
          <div className="glass-ink" style={{ padding: 20, display: "grid", gap: 6, fontSize: 14.5, lineHeight: 1.55, borderRadius: 18 }}>
            <b style={{ color: "#fff", fontWeight: 600 }}>USA office</b>
            <span>Louisville, Kentucky, United States</span>
            <a href={CONTACT.phoneUsHref} style={{ color: "#6ee7b7", textDecoration: "none" }}>{CONTACT.phoneUs}</a>
          </div>
          <div className="glass-ink" style={{ padding: 20, display: "grid", gap: 6, fontSize: 14.5, lineHeight: 1.55, borderRadius: 18 }}>
            <b style={{ color: "#fff", fontWeight: 600 }}>Email</b>
            <a href={`mailto:${CONTACT.email}`} style={{ color: "#6ee7b7", textDecoration: "none" }}>{CONTACT.email}</a>
            <span>Mon-Sat, 10:00-19:00 IST · Mon-Fri, 9:00-17:00 ET</span>
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 14, marginTop: 40, paddingTop: 24, borderTop: "1px solid rgba(214,211,209,.16)", fontSize: 13.5 }}>
          <span>&copy; <span id="year">2026</span> Laprrk Technology Solutions LLP. GSTIN 09AAHFL0399D1ZU. MSME registered.</span>
          <nav aria-label="Legal" style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <a href="privacy-policy.html" style={{ color: "inherit", textDecoration: "none" }}>Privacy</a>
            <a href="terms.html" style={{ color: "inherit", textDecoration: "none" }}>Terms</a>
            <a href="sitemap.xml" style={{ color: "inherit", textDecoration: "none" }}>Sitemap</a>
          </nav>
        </div>
        <div className="mono" style={{ marginTop: 16, fontSize: 12, display: "inline-flex", alignItems: "center", gap: 8 }}>
          <i aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: c.istOpen || c.usOpen ? "#34d399" : "#57504a", display: "inline-block" }} />
          {c.status}
        </div>
      </div>
    </footer>
  );
}

/* ---------- WhatsApp floating pill (glass, semantic) ---------- */

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${CONTACT.waNumber}`}
      target="_blank"
      rel="noopener"
      className="glass"
      style={{
        position: "fixed",
        right: "max(18px, env(safe-area-inset-right, 0px))",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 18px)",
        zIndex: 55,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        color: "#fff",
        textDecoration: "none",
        fontWeight: 600,
        fontSize: 15,
        padding: "13px 18px 13px 14px",
        borderRadius: 999,
        background: "rgba(29,170,97,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 14px 30px -10px rgba(10,22,34,.5)",
      }}
      aria-label="Chat with Laprrk on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width={22} height={22} fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
      </svg>
      <span className="wa-label">WhatsApp us</span>
      <style>{`@media (max-width: 560px) { .wa-label { display: none; } }`}</style>
    </a>
  );
}
