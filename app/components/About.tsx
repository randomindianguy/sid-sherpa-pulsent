import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-[color:var(--rule-soft)] py-20 md:py-24"
    >
      <Container>
        <SectionLabel index="§ V">About this brief</SectionLabel>

        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
          <p>
            I built this as a sample of how I read a CRO audit and turn
            it into something specific enough to act on. The 30-second
            audit handles the structural read; this brief adds the layer
            it can&rsquo;t generate &mdash; what matters most for your
            specific buyer, why one finding outranks the other twelve,
            what to test first.
          </p>
          <p>
            Nothing here requires Pulsent to do anything with me. If
            something landed, you&rsquo;ve already gotten the value.
            Ship Experiment 01 and watch what happens to the trial-to-paid
            curve over the next two weeks.
          </p>
        </div>

        <div className="mt-12 max-w-3xl border-t border-[color:var(--rule-soft)] pt-8">
          <h3 className="display text-xl font-medium text-[color:var(--ink)]">
            Sidharth Sundaram
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink-soft)]">
            Engineering Management master&rsquo;s, Purdue. Four years of
            B2B product &mdash; learner activation, cohort progression,
            paywall conversion, A/B testing on mid-funnel flows. This is
            the twelfth deployed brief I&rsquo;ve built using a
            company&rsquo;s product on a real prospect of theirs.
          </p>
          <p className="mt-5 text-sm text-[color:var(--ink-soft)]">
            <a href="mailto:sidharth.rama@gmail.com" className="mono">
              sidharth.rama@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
