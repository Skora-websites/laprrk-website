import { Reveal, TiltCard } from "../components/motion-primitives";
import { GlassCard, SectionHead } from "../components/chrome";
import {
  SERVICES_HEAD, DIVISIONS, TRAINING_DIVISION, TECH_HEAD, TECH_CARDS,
  SYNERGY_HEAD, SYNERGY, ROLES_HEAD, ROLES, WHY_HEAD, WHY_CARDS,
  STEPS, CASES_HEAD, CASES, INDUSTRIES, POSTS_HEAD, POSTS, FAQS, CTA,
} from "../lib/home-data";

export function Services() {
  return (
    <section className="section lux-pad" id="services" aria-label="Services">
      <div className="container">
        <SectionHead title={SERVICES_HEAD.title} lede={SERVICES_HEAD.lede} eyebrow="What we do" />
        <div className="div-grid">
          {DIVISIONS.map((d, i) => (
            <Reveal key={d.title}>
              <GlassCard className="div-card">
                <div className="div-top">
                  <div className="div-title-row">
                    <span className="icon-badge" aria-hidden="true">{i === 0 ? "◈" : "✦"}</span>
                    <h3 className="div-title">{d.title}</h3>
                  </div>
                  <span className="div-num">{d.num}</span>
                </div>
                <p className="div-body">{d.body}</p>
                <div className="chip-cloud">
                  {d.subs.map((s) => (
                    <a className="chip-link" key={s.href + s.label} href={s.href}>{s.label}</a>
                  ))}
                </div>
                <a className="text-link" href={d.more.href}>{d.more.label} →</a>
              </GlassCard>
            </Reveal>
          ))}
          <Reveal>
            <GlassCard className="div-card" tint>
              <div className="div-top">
                <div className="div-title-row">
                  <span className="icon-badge" aria-hidden="true">⬢</span>
                  <h3 className="div-title">{TRAINING_DIVISION.title}</h3>
                </div>
                <span className="div-num">{TRAINING_DIVISION.num}</span>
              </div>
              <p className="div-body">{TRAINING_DIVISION.body}</p>
              <div className="train-cols">
                {TRAINING_DIVISION.groups.map((g) => (
                  <div className="train-col" key={g.head}>
                    <a className="train-head" href={g.href}>{g.head} →</a>
                    <ul>
                      {g.links.map((l) => (
                        <li key={l.href + l.label}><a href={l.href}>{l.label}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a className="text-link" href={TRAINING_DIVISION.more.href}>{TRAINING_DIVISION.more.label} →</a>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Tech() {
  return (
    <section className="section lux-pad" aria-label="Technology focus">
      <div className="container">
        <SectionHead title={TECH_HEAD.title} lede={TECH_HEAD.lede} link={{ label: "Explore services", href: "it-services.html" }} />
        <div className="tech-bento">
          {TECH_CARDS.map((c, i) => (
            <Reveal key={c.title}>
              <TiltCard className="h-full"><GlassCard className={`mini-card${i === 0 ? " bento-hero" : ""}`} tint={i === 2 || i === 5}>
                <div className="mini-top">
                  <span className="icon-badge" aria-hidden="true">{["◈", "✦", "⬢", "✧", "⬣", "❖"][i % 6]}</span>
                  <span className="plus-btn" aria-hidden="true">+</span>
                </div>
                <h3><a href={c.href}>{c.title}</a></h3>
                <p>{c.body}</p>
              </GlassCard></TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Synergy() {
  return (
    <section className="section lux-pad" aria-label="Why one partner">
      <div className="container">
        <div className="syn-panel">
          <SectionHead title={SYNERGY_HEAD.title} lede={SYNERGY_HEAD.lede} eyebrow="The Laprrk model" dark />
          <div className="grid-4">
            {SYNERGY.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="syn-card">
                  <span className="syn-num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Roles() {
  return (
    <section className="section lux-pad" aria-label="Roles we recruit">
      <div className="container">
        <SectionHead title={ROLES_HEAD.title} lede={ROLES_HEAD.lede} />
        <div className="grid-4">
          {ROLES.map((r, i) => (
            <Reveal key={r.title}>
              <a className="role-card" href={r.href}>
                <span className="icon-badge role-ic" aria-hidden="true">{["◈", "✦", "⬢", "✧", "⬣", "❖", "⬔", "⬓"][i % 8]}</span>
                <h3>{r.title}</h3>
                <p>{r.small}</p>
                <span className="role-arrow" aria-hidden="true">→</span>
              </a>
            </Reveal>
          ))}
        </div>
        <div className="center-row">
          <a className="btn btn-ghost" href="technologies-roles-we-recruit.html">See all 16 technology groups</a>
        </div>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section lux-pad" aria-label="What working with us is like">
      <div className="container">
        <SectionHead title={WHY_HEAD.title} link={{ label: "About us", href: "about.html" }} />
        <div className="why-grid">
          {WHY_CARDS.map((c, i) => (
            <Reveal key={c.title}>
              <GlassCard className={`mini-card${i === 0 ? " why-feature" : ""}`} tint={i === 2 || i === 4}>
                <div className="mini-top">
                  <span className="icon-badge" aria-hidden="true">{["◈", "✦", "⬢", "✧", "⬣", "❖"][i % 6]}</span>
                </div>
                <h3 style={{ fontSize: 20 }}>{c.title}</h3>
                <p style={{ color: "var(--text-mute)", fontSize: 15, lineHeight: 1.6 }}>{c.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="section lux-pad" aria-label="How we work">
      <div className="container">
        <SectionHead title="Not sure where to start? We make it simple." link={{ label: "Book a free consultation", href: "contact.html" }} />
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

export function Cases() {
  return (
    <section className="section lux-pad" aria-label="Case studies">
      <div className="container">
        <SectionHead title={CASES_HEAD.title} lede={CASES_HEAD.lede} eyebrow="Our work" link={{ label: "All case studies", href: "case-studies.html" }} />
        <div className="case-grid">
          {CASES.map((c, i) => (
            <Reveal key={c.href} delay={i * 0.06}>
              <TiltCard className="h-full"><GlassCard className="case-card">
                <div className="case-top">
                  <span className="pill">{c.pill}</span>
                  <span className="case-sector mono">{c.sector}</span>
                </div>
                <h3><a href={c.href}>{c.title}</a></h3>
                <p>{c.body}</p>
                <dl className="case-stats">
                  {c.stats.map((s) => (
                    <div key={s.l}>
                      <dt>{s.v}</dt>
                      <dd>{s.l}</dd>
                    </div>
                  ))}
                </dl>
                <a className="text-link" href={c.href}>Read the case study →</a>
              </GlassCard></TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Industries() {
  return (
    <section className="band-light section lux-pad" aria-label="Industries">
      <div className="container">
        <SectionHead
          title="Industries we serve"
          lede="Domain context matters. We bring patterns from each of these sectors to every new engagement."
        />
        <div className="grid-5">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.title} delay={(i % 5) * 0.04}>
              <div className="ind-card">
                <h3>{ind.title}</h3>
                <p>{ind.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Posts() {
  return (
    <section className="section lux-pad" aria-label="Blog posts">
      <div className="container">
        <SectionHead title={POSTS_HEAD.title} />
        <div className="post-rows">
          {POSTS.map((p, i) => (
            <Reveal key={p.href}>
              <article className="post-row glass">
                <img
                  src={`https://picsum.photos/seed/laprrk-${["nep-classroom", "ai-upskilling", "hire-train-deploy"][i]}/640/480`}
                  alt=""
                  loading="lazy"
                  width={640}
                  height={480}
                />
                <div className="post-row-body">
                  <div className="case-top">
                    <span className="pill">{p.pill}</span>
                    <span className="case-sector mono">{p.meta}</span>
                  </div>
                  <h3><a href={p.href}>{p.title}</a></h3>
                  <p>{p.body}</p>
                  <a className="text-link" href={p.href}>Read article →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="center-row">
          <a className="btn btn-ghost" href="blog.html">All articles</a>
        </div>
      </div>
    </section>
  );
}

export function Faqs() {
  return (
    <section className="section lux-pad" aria-label="Frequently asked questions">
      <div className="container container-narrow">
        <SectionHead title="Frequently asked questions" />
        <div className="faq-list">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details className="faq glass-tint">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
        <div className="center-row">
          <a className="btn btn-ghost" href="faq.html">All FAQs</a>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="section lux-pad" aria-label="Contact">
      <div className="container">
        <Reveal>
          <div className="cta-panel">
            <div className="cta-inner">
              <h2 className="cta-title">{CTA.title}</h2>
              <p className="lede">{CTA.lede}</p>
              <div className="hero-ctas">
                <a className="btn btn-gold btn-lg" href={CTA.primary.href}>{CTA.primary.label}</a>
                <a className="btn btn-ghost-ink btn-lg" href="it-services.html">Explore services</a>
              </div>
              <div className="cta-contacts">
                {CTA.contacts.map((c) => (
                  <a key={c.href} className="cta-contact" href={c.href}>
                    <small>{c.small}</small>
                    <strong>{c.label}</strong>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
