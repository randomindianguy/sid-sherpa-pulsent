import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { SeverityTag } from "./SeverityTag";

export function Experiments() {
  return (
    <section
      id="experiments"
      className="border-t border-[color:var(--rule-soft)] bg-[color:var(--paper-shade)] py-20 md:py-24"
    >
      <Container>
        <SectionLabel index="§ IV">Three experiments worth running first</SectionLabel>

        <h2 className="display text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          What to test first.
          <br />
          <span className="text-[color:var(--terracotta)]">
            With prediction bands.
          </span>
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
          Each one ties back to a finding above. Run them in order
          &mdash; the sequence matters because positioning bets compound
          with proof, and you want proof first.
        </p>

        <div className="mt-10 space-y-5">
          {/* Experiment 1 — carries the JTBD effort-contrast for the whole section */}
          <article className="card p-6 md:p-7">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
                Experiment 01
              </span>
              <SeverityTag severity="danger" label="Highest priority" />
            </div>
            <h3 className="display mt-3 text-2xl font-medium leading-tight text-[color:var(--ink)]">
              Inject one concrete metric into social proof.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
              Replace the most prominent qualitative quote with one
              carrying a measured outcome &mdash; trial-to-paid lift,
              time-to-value, pipeline added. Even a single metric closes
              the headline&rsquo;s numbers promise.
            </p>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-3">
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Predicted lift
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  +14&ndash;22%{" "}
                  <span className="text-[color:var(--ink-muted)]">
                    &middot; high confidence
                  </span>
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Surface
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Hero &middot; testimonial cluster
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Reads as
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Trust act, not aesthetic
                </dd>
              </div>
            </dl>

            <hr className="rule-soft my-6" />

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Effort without an autonomous CRO loop
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-soft)]">
                  PMM drafts copy &middot; designer mocks variant
                  &middot; dev wires test &middot; analyst reads PostHog.
                  2&ndash;3 weeks. Four people coordinated. The kind of
                  cost that keeps experiments like this on the
                  &ldquo;someday&rdquo; list.
                </p>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--terracotta)]">
                  Effort with one
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]">
                  Approve &middot; ship &middot; measure. One person, one
                  afternoon. Whether you build it, buy it, or stitch it
                  together, the unlock is the same: collapse the
                  coordination cost that&rsquo;s been keeping this fix
                  unrun.
                </p>
              </div>
            </div>
          </article>

          {/* Experiment 2 */}
          <article className="card p-6 md:p-7">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
                Experiment 02
              </span>
              <SeverityTag severity="warn" label="High priority" />
            </div>
            <h3 className="display mt-3 text-2xl font-medium leading-tight text-[color:var(--ink)]">
              Convert integrations from prose to a logo strip.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
              A growth lead scanning &ldquo;does this fit my stack&rdquo;
              converts on logos in 3 seconds. Reading paragraph copy
              about PostHog + Mixpanel + Amplitude + Snowflake + BigQuery
              + Attio + Intercom + Loops + Customer.io takes 30. Same
              integrations, different scan time.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-3">
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Predicted lift
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  +6&ndash;10%{" "}
                  <span className="text-[color:var(--ink-muted)]">
                    &middot; medium confidence
                  </span>
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Surface
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Below hero &middot; trust band
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Reads as
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Stack-fit signal
                </dd>
              </div>
            </dl>
          </article>

          {/* Experiment 3 */}
          <article className="card p-6 md:p-7">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="mono text-xs uppercase tracking-[0.2em] text-[color:var(--terracotta)]">
                Experiment 03
              </span>
              <SeverityTag severity="warn" label="Positioning bet" />
            </div>
            <h3 className="display mt-3 text-2xl font-medium leading-tight text-[color:var(--ink)]">
              Replace the headline with a category-defining claim.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[color:var(--ink-soft)]">
              <em>&ldquo;Turn free users into revenue,
              automatically&rdquo;</em> is table-stakes for the PLG
              analytics category. The differentiator is the agent
              &mdash; autonomous, not workflow-based. Test a headline
              that names the category Pulsent is creating
              (&ldquo;autonomous post-signup engagement&rdquo; rather
              than &ldquo;PLG conversion tool&rdquo;), not the outcome
              the existing category already claims.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-3">
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Predicted lift
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  -4 to +18%{" "}
                  <span className="text-[color:var(--ink-muted)]">
                    &middot; high variance
                  </span>
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Surface
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Hero headline
                </dd>
              </div>
              <div>
                <dt className="mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
                  Reads as
                </dt>
                <dd className="mt-1 text-[color:var(--ink)]">
                  Run last
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-sm italic text-[color:var(--ink-muted)]">
              Run after 01 &amp; 02 win. Positioning bets compound with
              proof; they don&rsquo;t generate it.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
