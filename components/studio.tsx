const principles = [
  {
    label: "Simple",
    text: "No unnecessary complexity. Every feature earns its place.",
  },
  {
    label: "Useful",
    text: "Software should solve real problems clearly and directly.",
  },
  {
    label: "Clear",
    text: "Good tools get out of the way. Clean interfaces, obvious behavior.",
  },
];

const focus = ["Apps", "Tools", "Automation"];

export function Studio() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-bg-subtle border-y border-border-subtle">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <p className="text-[13px] font-medium tracking-widest uppercase text-accent mb-3">
            Studio
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text max-w-lg">
            Independent development studio focused on useful software and simple tools.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {principles.map((p) => (
            <div key={p.label} className="space-y-2">
              <h3 className="text-[15px] font-semibold text-text">
                {p.label}
              </h3>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {p.text}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-border-subtle pt-8">
          <p className="text-[12px] font-medium uppercase tracking-widest text-text-muted mb-4">
            Focus areas
          </p>
          <div className="flex flex-wrap gap-3">
            {focus.map((f) => (
              <span
                key={f}
                className="inline-flex items-center h-8 px-4 text-[13px] font-medium rounded-full border border-border bg-bg text-text-secondary"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
