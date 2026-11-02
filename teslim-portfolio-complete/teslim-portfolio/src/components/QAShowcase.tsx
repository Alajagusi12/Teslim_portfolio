import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { testCases } from "@/data/site";

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
          <div className="overflow-x-auto rounded-2xl border border-line">
            <table className="w-full min-w-[820px] border-collapse text-left text-sm">
              <thead className="bg-paper text-xs uppercase tracking-[0.08em] text-muted">
                <tr>
                  {["ID", "Feature", "Steps", "Expected result", "Actual result", "Status"].map(
                    (h) => (
                      <th key={h} scope="col" className="px-4 py-3 font-semibold">
                        {h}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {testCases.map((t) => (
                  <tr key={t.id} className="border-t border-line align-top">
                    <td className="px-4 py-3 font-semibold">{t.id}</td>
                    <td className="px-4 py-3">{t.feature}</td>
                    <td className="px-4 py-3 text-muted">{t.steps}</td>
                    <td className="px-4 py-3 text-muted">{t.expected}</td>
                    <td className="px-4 py-3 text-muted">{t.actual}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          t.status === "Pass"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      </FadeIn>
    </section>
  );
}
