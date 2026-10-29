import { testimonials } from "@/content/site";
import { showReviewNotes } from "@/content/flags";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

/**
 * Exibe SOMENTE depoimentos reais e autorizados (authorized: true).
 * Sem depoimentos, mostra uma mensagem neutra — nunca conteúdo fictício.
 */
export function Testimonials() {
  const items = testimonials.filter((t) => t.authorized);

  return (
    <section id="clientes" aria-labelledby="clientes-title" className="section bg-graphite">
      <div className="container-content">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">Capítulo 08</p>
          <h2 id="clientes-title" className="heading-lg mt-4">Histórias que nos conectam.</h2>
          <p className="lead mt-4">Mais do que clientes, pessoas que fazem parte da nossa história.</p>
        </Reveal>

        {items.length > 0 ? (
          <ul className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0 lg:gap-6">
            {items.map((t, i) => (
              <li key={i} className="card flex w-[85%] flex-none snap-start flex-col p-7 sm:w-[46%] lg:w-[31%]">
                {t.photo && <Photo media={{ ...t.photo, ratio: "square" }} className="mb-6 !h-16 !w-16 !rounded-full" sizes="64px" />}
                <blockquote className="flex-1 text-lg leading-relaxed text-snow/85">“{t.text}”</blockquote>
                <p className="mt-6 font-extrabold text-pink">{t.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          <Reveal className="card mt-12 p-8 text-center lg:p-12">
            <p className="text-lg font-semibold text-snow/80">Em breve, histórias reais de clientes da Coisas de Maria.</p>
            {showReviewNotes && (
              <p className="mt-3 text-sm text-champagne">
                Aguardando depoimentos reais e autorizados. Nenhum depoimento fictício será publicado.
              </p>
            )}
          </Reveal>
        )}
      </div>
    </section>
  );
}
