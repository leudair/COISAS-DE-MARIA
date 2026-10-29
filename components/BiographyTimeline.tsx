import { Reveal } from "./Reveal";

type Item = { tag?: string; title: string; text: string };

/** Linha do tempo vertical; no desktop alterna os lados. */
export function BiographyTimeline({ items, alternate = false }: { items: Item[]; alternate?: boolean }) {
  return (
    <ol className="relative">
      <span
        aria-hidden
        className={`absolute top-2 bottom-2 w-px bg-gradient-to-b from-pink/70 via-blush/30 to-transparent left-[7px] ${
          alternate ? "lg:left-1/2 lg:-translate-x-1/2" : ""
        }`}
      />
      {items.map((item, i) => {
        const right = alternate && i % 2 === 1;
        return (
          <li
            key={item.title}
            className={`relative pb-10 pl-10 last:pb-0 ${
              alternate ? `lg:w-1/2 lg:pl-0 ${right ? "lg:ml-auto lg:pl-14" : "lg:pr-14 lg:text-right"}` : ""
            }`}
          >
            <span
              aria-hidden
              className={`absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border-2 border-pink bg-black ${
                alternate ? (right ? "lg:-left-[7.5px]" : "lg:left-auto lg:-right-[7.5px]") : ""
              }`}
            />
            <Reveal delay={Math.min(i, 3) * 80} className="card p-6 lg:p-7">
              {item.tag && <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blush">{item.tag}</p>}
              <h3 className="mt-1 text-xl font-extrabold text-snow">{item.title}</h3>
              <p className="mt-2 text-ash">{item.text}</p>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
