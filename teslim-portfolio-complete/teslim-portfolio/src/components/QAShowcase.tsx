import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import TestTable from "./TestTable";
import { playwrightSample, testCases } from "@/data/site";

const bug = [
  ["Title", "Login button unresponsive on basic login page"],
  ["Type", "Functional bug"],
  ["Environment", "Chrome, Firefox, Safari"],
  ["Steps to reproduce", "Enter correct email and password, click login."],
  ["Expected", "User gains access to account."],
  ["Actual", "Button does not respond."],
  ["Severity", "High"],
  [
    "Fix applied",
    "Connected frontend button to the login API and verified click event handler.",
  ],
];

export default function QAShowcase() {
  return (
    <section id="qa" className="border-y border-line bg-surface">
      <FadeIn className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20">
        <SectionHeading label="Quality" title="Software QA showcase" />

        <p className="rounded-xl border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-ink/80">
          Note: The following test cases and bug reports are illustrative
          demonstrations of my QA process and methodology, not confidential
          production data.
        </p>

        <div>
          <h3 className="mb-3 font-serif text-xl font-bold">Sample test cases</h3>
          <TestTable testCases={testCases} />
        </div>

        <div>
          <h3 className="mb-3 font-serif text-xl font-bold">Bug report</h3>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-paper">
            {bug.map(([k, v]) => (
              <div key={k} className="grid gap-1 px-5 py-3 md:grid-cols-[200px_1fr]">
                <dt className="text-sm font-semibold text-muted">{k}</dt>
                <dd className="text-sm">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h3 className="mb-1 font-serif text-xl font-bold">Automation sample</h3>
          <p className="mb-3 text-sm text-muted">
            An illustrative Playwright test using the Page Object Model.
          </p>
          <pre className="overflow-x-auto rounded-2xl bg-forest p-5 text-[13px] leading-relaxed text-[#ecfdf5]">
            <code>{playwrightSample}</code>
          </pre>
        </div>
      </FadeIn>
    </section>
  );
}
