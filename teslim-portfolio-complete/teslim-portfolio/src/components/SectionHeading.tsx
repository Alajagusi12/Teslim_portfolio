export default function SectionHeading({
  label,
  title,
  intro,
}: {
  label?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      {label && (
        <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent">
          {label}
        </p>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {intro && <p className="max-w-2xl text-base text-muted">{intro}</p>}
    </div>
  );
}
