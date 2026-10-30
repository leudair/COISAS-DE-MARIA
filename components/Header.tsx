"use client";
import { useEffect, useState } from "react";
import { links, nav } from "@/content/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-snow transition-colors duration-300 ${
        scrolled || open ? "border-b border-white/10 bg-noir" : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="Ana Liz, voltar ao início">
          <Logo className="h-7 w-auto" />
        </a>
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[15px] text-snow/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-snow">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="link hidden text-[15px] sm:inline">
            Loja virtual
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6" aria-hidden>
              <span className={`absolute left-0 h-px w-6 bg-snow transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-px w-6 bg-snow transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="h-[calc(100dvh-64px)] overflow-y-auto bg-noir lg:hidden">
        <nav aria-label="Menu" className="container-content py-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-white/10">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 font-serif text-3xl">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-10 w-full">
            Visitar a loja virtual
          </a>
        </nav>
      </div>
    </header>
  );
}
