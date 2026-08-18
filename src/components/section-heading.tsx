export function SectionHeading({
  label,
  title,
  copy,
  align = "left",
}: {
  label?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <header className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
      {label ? <span className="section-label">{label}</span> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </header>
  );
}
