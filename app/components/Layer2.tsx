import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

export function Layer2() {
  return (
    <section
      id="strategic"
      className="border-t border-[color:var(--rule-soft)] bg-[color:var(--paper-shade)] py-20 md:py-24"
    >
      <Container>
        <SectionLabel index="§ II">The strategic priority</SectionLabel>

        <h2 className="display text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          The headline{" "}
          <span className="highlight">promises ROI</span>.
          <br />
          The page <span className="highlight">hides the proof</span>.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[color:var(--ink-soft)]">
          <p>
            <em>&ldquo;Turn free users into revenue,
            automatically&rdquo;</em>{" "}
            opens an ROI frame the moment a visitor lands. Then the page
            goes numbers-dark in social proof. Every customer quote is
            qualitative: <em>&ldquo;found upsell opportunities,&rdquo;</em>{" "}
            <em>&ldquo;whisper in the ears of our users,&rdquo;</em>{" "}
            <em>&ldquo;conversion rates went up.&rdquo;</em> Your buyer is
            a growth lead who evaluates everything by ROI &mdash; the
            headline opens that frame and the page abandons it.
          </p>
          <p>
            Sherpa&rsquo;s audit catches this as a tactical finding
            (&ldquo;testimonials lack quantified results&rdquo;, Must
            Fix). The deeper read: it&rsquo;s also the structural
            priority across all 13 findings. Closing the headline&rsquo;s
            numbers promise is the single highest-leverage fix on the
            page, because it reverses the trust decay the visitor
            experiences between hero and CTA.
          </p>
        </div>
      </Container>
    </section>
  );
}
