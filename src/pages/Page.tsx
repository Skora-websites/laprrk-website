import { useState } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer, SiteFooter, WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { SectionHead } from "../components/chrome";
import { Reveal } from "../components/motion-primitives";
import { CtaBand } from "../home/sections";
import { STEPS } from "../lib/home-data";
import type { PageData } from "./data/types";

const BADGES = ["◈", "✦", "⬢", "✧", "⬣", "❖"];

export function Page({ data }: { data: PageData }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main">
        <section className="hero page-hero" aria-label={data.title}>
          <div className="hero-veil" aria-hidden="true" />
          <div className="hero-grid" aria-hidden="true" />
          <div className="container page-hero-inner">
            <nav className="crumbs mono" aria-label="Breadcrumb">
              <a href="index.html">Home</a>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{data.crumb ?? data.title}</span>
            </nav>
            <p className="eyebrow">{data.eyebrow}</p>
            <h1 className="page-title">{data.title}</h1>
            <p className="lede">{data.lede}</p>
            <div className="hero-ctas">
              <a className="btn btn-gold btn-lg" href="contact.html">Book a free consultation</a>
              <a className="btn btn-ghost-ink btn-lg" href={data.secondaryHref ?? "contact.html"}>
                {data.secondaryLabel ?? "Talk to a specialist"}
              </a>
            </div>
          </div>
        </section>

        {data.blocks.map((b, bi) => {
          if (b.kind === "scope") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  <div className="tech-bento">
                    {b.items.map((it, i) => (
                      <Reveal key={it.title}>
                        <div className={`glass mini-card${i === 0 && b.items.length > 4 ? " bento-hero" : ""}`} style={{ height: "100%" }}>
                          <div className="mini-top">
                            <span className="icon-badge" aria-hidden="true">{BADGES[i % BADGES.length]}</span>
                            <span className="plus-btn" aria-hidden="true">+</span>
                          </div>
                          <h3>{it.title}</h3>
                          <p>{it.body}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "points") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title} style={b.tint ? { background: "var(--surface-2)", borderBlock: "1px solid var(--line)" } : undefined}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  <div className="why-grid">
                    {b.items.map((t, i) => (
                      <Reveal key={t.slice(0, 32) + i}>
                        <div className={`glass mini-card${i === 0 && b.items.length % 2 === 1 ? " why-feature" : ""}`} style={{ height: "100%" }}>
                          <p style={{ margin: 0, fontSize: 16, display: "flex", gap: 12 }}>
                            <span aria-hidden="true" style={{ color: "var(--accent-strong)", fontWeight: 800 }}>✓</span>
                            <span>{t}</span>
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "stats") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Key numbers"}>
                <div className="container">
                  {b.title ? <SectionHead title={b.title} /> : null}
                  <div className="stats-grid">
                    {b.items.map((s) => (
                      <div key={s.l}>
                        <div className="stat-num">{s.v}</div>
                        <p className="stat-label">{s.l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "steps") {
            return (
              <section className="section lux-pad" key={bi} aria-label="How we work">
                <div className="container">
                  <SectionHead title={b.title ?? "How we start"} lede={b.lede} />
                  <ol className="steps">
                    {STEPS.map((s) => (
                      <Reveal key={s.n} as="li">
                        <div className="step-card">
                          <span className="step-n">{s.n}</span>
                          <h3>{s.title}</h3>
                          <p>{s.body}</p>
                        </div>
                      </Reveal>
                    ))}
                  </ol>
                </div>
              </section>
            );
          }
          if (b.kind === "faqs") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Questions"}>
                <div className="container container-narrow">
                  <SectionHead title={b.title ?? "Frequently asked questions"} />
                  <div className="faq-list">
                    {b.items.map((f) => (
                      <details className="faq glass-tint" key={f.q}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "articles") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  <div className="post-rows">
                    {b.items.map((p) => (
                      <Reveal key={p.href}>
                        <article className="post-row glass">
                          <img src={`https://picsum.photos/seed/laprrk-${p.href.replace(".html", "")}/640/480`} alt="" loading="lazy" width={640} height={480} />
                          <div className="post-row-body">
                            <div className="case-top">
                              <span className="pill">{p.pill}</span>
                              <span className="case-sector mono">{p.meta}</span>
                            </div>
                            <h3><a href={p.href}>{p.title}</a></h3>
                            <p>{p.body}</p>
                            <a className="text-link" href={p.href}>{p.linkLabel ?? "Read more →"}</a>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "body") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Details"}>
                <div className="container container-narrow">
                  {b.title ? <SectionHead title={b.title} /> : null}
                  <div className="legal-body">
                    {b.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "roles") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  {b.groups.map((g) => (
                    <div key={g.id} id={g.id} style={{ scrollMarginTop: 120, marginBottom: 40 }}>
                      <h3 style={{ fontSize: 22, marginBottom: 16 }}>{g.title}</h3>
                      <div className="grid-4">
                        {g.roles.map((r, i) => (
                          <Reveal key={r}>
                            <div className="role-card" style={{ cursor: "default" }}>
                              <span className="icon-badge role-ic" aria-hidden="true">{BADGES[i % BADGES.length]}</span>
                              <h3>{r}</h3>
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }
          return null;
        })}

        {data.related.length > 0 && (
          <section className="section lux-pad" aria-label="Related pages">
            <div className="container">
              <SectionHead title="Continue exploring" />
              <div className="chip-cloud" style={{ gap: 10 }}>
                {data.related.map((r) => (
                  <a className="chip-link" key={r.href} href={r.href} style={{ fontSize: 15, padding: "10px 18px" }}>{r.label} →</a>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <DevAnnotation />
    </>
  );
}
