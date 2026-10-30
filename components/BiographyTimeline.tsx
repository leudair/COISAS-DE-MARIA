type Item = { title: string; text: string };

/** Etapas da trajetória em ordem, numeradas, separadas por linhas finas. */
export function BiographyTimeline({ items }: { items: Item[] }) {
  return (
    <ol className="grid gap-x-16 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item.title} className="rule grid grid-cols-[2.5rem_1fr] gap-x-4 border-t py-6">
          <span aria-hidden className="font-serif text-2xl leading-none text-pink-deep tabular-nums">
            {i + 1}
          </span>
          <div>
            <h3 className="heading-md">{item.title}</h3>
            <p className="muted mt-2">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
