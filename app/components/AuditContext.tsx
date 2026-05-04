import { Container } from "./Container";
import { ScoreCircle } from "./ScoreCircle";
import { SectionLabel } from "./SectionLabel";

export function AuditContext() {
  return (
    <section
      id="audit"
      className="border-t border-[color:var(--rule-soft)] py-20 md:py-24"
    >
      <Container>
        <SectionLabel index="§ I">The audit</SectionLabel>

        <div className="grid gap-8 md:grid-cols-[120px_1fr] md:items-center">
          <ScoreCircle score={76} letter="C+" size={104} />
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
              Sherpa Conversion Brief &middot; pulsent.ai
            </p>
            <h2 className="display mt-3 text-2xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-3xl">
              Visual Hierarchy 74 &middot; CTA Clarity 80 &middot; Trust
              Signals 62
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
              Thirteen annotated findings, three Must Fix, scored in
              under a minute. Live audit on Sherpa&rsquo;s domain:{" "}
              <a
                href="https://www.withsherpa.ai/audit/pulsent.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="mono"
              >
                withsherpa.ai/audit/pulsent.ai
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <p className="text-base leading-relaxed text-[color:var(--ink-soft)]">
            The audit is good at what an automated CRO read should be good
            at: visual structure, CTA placement, copy density, scroll-stop
            patterns. It&rsquo;s less able to make business-context
            judgments &mdash; which finding matters most for{" "}
            <em>your</em> buyer, how to sequence experiments by leverage,
            where the headline opens a frame the rest of the page
            doesn&rsquo;t close. This brief picks up there.
          </p>
        </div>
      </Container>
    </section>
  );
}
