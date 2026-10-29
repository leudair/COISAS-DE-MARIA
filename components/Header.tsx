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
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container-content flex h-12 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Ana Liz, voltar ao início">
          <Logo className="h-7 w-auto" />
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[13px] font-semibold text-white/80">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-pink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !min-h-9 !px-4 !py-1.5 !text-sm sm:inline-flex">
            Loja virtual
          </a>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-snow transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 h-0.5 w-5 rounded bg-snow transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div
        id="menu-mobile"
        hidden={!open}
        className="h-[calc(100dvh-48px)] overflow-y-auto border-t border-white/5 bg-chrome lg:hidden"
      >
        <nav aria-label="Menu" className="container-content py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-2xl font-extrabold text-snow transition-colors hover:text-pink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={links.store} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-8 w-full">
            Visite nossa loja virtual
          </a>
        </nav>
      </div>
    </header>
  );
}
