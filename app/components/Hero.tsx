import { Container } from "./Container";

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 md:pt-28 md:pb-32">
      <Container>
        <div className="fade-in-up">
          <p className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
            Conversion brief · pulsent.ai
          </p>

          <h1 className="display mt-6 text-4xl font-medium leading-[1.05] tracking-tight text-[color:var(--ink)] md:text-6xl">
            Sherpa scored you{" "}
            <span className="text-[color:var(--terracotta)]">76</span>{" "}
            in 30 seconds.
            <br />
            Here&rsquo;s the 30-minute
            <br />
            follow-up.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            Sherpa&rsquo;s audit catches the structural CRO findings on
            pulsent.ai cleanly &mdash; visual hierarchy, CTA clarity, the
            obvious tactical fixes. What an automated audit can&rsquo;t do
            is read those findings against your specific buyer, your
            specific positioning, and your specific business model.
            That&rsquo;s the layer below.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--ink-soft)]">
            One strategic priority across all 13 findings. Six findings to
            ship in order of leverage. Three experiments worth running
            first. Built for your team to read and act on.
          </p>

          <div className="mt-10 flex items-center gap-3 mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
            <span>Sidharth Sundaram</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--rule)]" />
            <span>April 2026</span>
            <span className="h-1 w-1 rounded-full bg-[color:var(--rule)]" />
            <a href="#audit">Begin &darr;</a>
          </div>
        </div>
      </Container>
    </section>
  );
}
