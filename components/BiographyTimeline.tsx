import { StoryIcon } from "./StoryIcon";

type Item = { title: string; text: string; icon?: string };

/**
 * Etapas da história em grade: 2 por linha no celular, até 5 no desktop.
 * `numbered` mostra a ordem quando as etapas são uma sequência.
 */
export function BiographyTimeline({ items, numbered = false, columns = 5 }: { items: Item[]; numbered?: boolean; columns?: 2 | 4 | 5 }) {
  const cols = { 2: "sm:grid-cols-2", 4: "sm:grid-cols-2 lg:grid-cols-4", 5: "sm:grid-cols-3 lg:grid-cols-5" }[columns];
  const List = numbered ? "ol" : "ul";
  return (
    <List className={`grid grid-cols-2 gap-3 sm:gap-4 ${cols}`}>
      {items.map((item, i) => (
        <li key={item.title} className="step-card">
          <div className="flex items-start justify-between">
            <StoryIcon name={item.icon ?? "estrela"} />
            {numbered && (
              <span aria-hidden className="font-serif text-lg leading-none text-gold tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            )}
          </div>
          <h3 className="mt-5 font-serif text-[17px] leading-tight sm:text-xl">{item.title}</h3>
          <p className="muted mt-2 text-[14px] leading-snug sm:text-[15px]">{item.text}</p>
        </li>
      ))}
    </List>
  );
}
