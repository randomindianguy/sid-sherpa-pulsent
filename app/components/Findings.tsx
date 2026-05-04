import { Container } from "./Container";
import { Finding } from "./Finding";
import { SectionLabel } from "./SectionLabel";

export function Findings() {
  return (
    <section
      id="findings"
      className="border-t border-[color:var(--rule-soft)] py-20 md:py-24"
    >
      <Container>
        <SectionLabel index="§ III">Six findings, in order of leverage</SectionLabel>

        <h2 className="display text-3xl font-medium leading-tight tracking-tight text-[color:var(--ink)] md:text-5xl">
          What to ship,{" "}
          <span className="text-[color:var(--terracotta)]">
            in priority order
          </span>
          .
        </h2>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[color:var(--ink-soft)]">
          Sequenced by leverage, not by where they appear on the page.
          The first three are the load-bearing ones &mdash; if Pulsent
          shipped only those, the page would convert meaningfully better
          for a numbers-driven buyer. The last three are
          worth-knowing-now items that the audit either flagged tactically
          or missed entirely.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <Finding
            index={1}
            severity="danger"
            title="Close the numbers promise"
            customLabel="Must Fix · Highest leverage"
          >
            Replace the most prominent qualitative testimonial with one
            carrying a measured outcome &mdash; trial-to-paid lift,
            time-to-value, pipeline added. Even a single concrete metric
            reverses the trust decay the headline opens. This is the
            single fix that, if shipped alone, would lift conversion
            most.
          </Finding>

          <Finding
            index={2}
            severity="danger"
            title="Add pricing transparency"
            customLabel="Must Fix"
          >
            No pricing on the page forces every visitor into a sales
            call. Even a &ldquo;starting at $X&rdquo; or
            &ldquo;tiered, contact us for enterprise&rdquo; reduces
            qualifying friction, lets self-serve buyers self-qualify, and
            lifts demo-call quality on the ones who still book.
          </Finding>

          <Finding
            index={3}
            severity="danger"
            title="Render integrations as a logo strip"
            customLabel="Must Fix"
          >
            PostHog, Mixpanel, Amplitude, Snowflake, BigQuery, Attio,
            Intercom, Loops, Customer.io &mdash; nine integrations
            already named in body copy, zero rendered as recognizable
            marks. A growth lead scanning &ldquo;does this fit my
            stack&rdquo; converts on logos in 3 seconds; prose takes 30.
          </Finding>

          <Finding
            index={4}
            severity="warn"
            title="Sharpen positioning beyond the category claim"
            customLabel="Should Fix"
          >
            <em>&ldquo;Turn free users into revenue,
            automatically&rdquo;</em> is a category claim &mdash; the same
            line could appear on Pendo, Userpilot, AppCues, HubSpot, or
            Mixpanel + Iterable. The actual differentiator is the agent
            (autonomous, not workflow-based, not template-based).
            Position against autonomy, not the outcome the category
            already claims.
          </Finding>

          <Finding
            index={5}
            severity="warn"
            title="Verify the logo bar — the audit miscategorized it"
            customLabel="Worth checking"
          >
            Sherpa&rsquo;s audit reported the customer logos as{" "}
            <span className="mono">
              Learnair, Plexlr, Softimize, Lengo, Qvirea
            </span>{" "}
            on desktop and{" "}
            <span className="mono">Piet9r, Maaway, Bosah</span> on mobile
            &mdash; when they&rsquo;re actually{" "}
            <span className="mono">Pletor</span>,{" "}
            <span className="mono">Leadbay</span>,{" "}
            <span className="mono">Basalt</span>. Worth checking that
            alt-text, structured data, and any indexing references match
            what&rsquo;s rendered.
          </Finding>

          <Finding
            index={6}
            severity="warn"
            title="Test the responsive headline carefully"
            customLabel="Worth checking"
          >
            Sherpa&rsquo;s audit gave the same headline opposite verdicts
            across surfaces &mdash; &ldquo;nails the value prop&rdquo; on
            desktop, &ldquo;lacks specificity&rdquo; on mobile. Whatever
            an automated audit sees inconsistently, a human visitor
            probably reads inconsistently too. Worth a quick read-through
            on phone vs. laptop.
          </Finding>
        </div>
      </Container>
    </section>
  );
}
