import { links } from "@/content/site";

const items = [
  { href: links.instagramAna, label: "Instagram da Ana Liz", handle: "@analuciadeliz" },
  { href: links.instagramBrand, label: "Instagram da Coisas de Maria", handle: "@coisasdemariacb" },
  { href: links.store, label: "Loja virtual Coisas de Maria", handle: "coisasdemariasexshop.com" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-x-6 gap-y-3 ${className}`}>
      {items.map((i) => (
        <li key={i.href + i.handle}>
          <a href={i.href} target="_blank" rel="noopener noreferrer" aria-label={`${i.label} (abre em nova aba)`} className="text-snow/80 transition-colors hover:text-snow">
            {i.handle}
          </a>
        </li>
      ))}
    </ul>
  );
}
