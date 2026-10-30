"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cookieConsentVersion } from "@/content/legal";

/**
 * Banner de consentimento de cookies (LGPD).
 *
 * Hoje o site só usa o armazenamento necessário para guardar esta escolha.
 * Se no futuro entrar alguma ferramenta de estatística ou anúncio (Google Analytics,
 * Meta Pixel etc.), carregue-a apenas quando `hasConsent("analytics")` ou
 * `hasConsent("marketing")` for verdadeiro, e escute o evento `cookie-consent`.
 */
export type ConsentCategory = "analytics" | "marketing";
type Consent = { v: number; date: string; analytics: boolean; marketing: boolean };

const KEY = "cdm-cookie-consent";
const OPEN_EVENT = "cookie-preferences";
/** A escolha vale por 12 meses; depois o banner pergunta de novo. */
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

function read(): Consent | null {
  try {
    const c = JSON.parse(localStorage.getItem(KEY) ?? "null") as Consent | null;
    return c && c.v === cookieConsentVersion && Date.now() - Date.parse(c.date) < MAX_AGE_MS ? c : null;
  } catch {
    return null;
  }
}

export function hasConsent(category: ConsentCategory) {
  return read()?.[category] === true;
}

/** Reabre o banner (link "Preferências de cookies" do rodapé). */
export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const show = () => {
      const c = read();
      setAnalytics(c?.analytics ?? false);
      setMarketing(c?.marketing ?? false);
      setCustom(Boolean(c));
      setOpen(true);
    };
    if (!read()) setOpen(true);
    window.addEventListener(OPEN_EVENT, show);
    return () => window.removeEventListener(OPEN_EVENT, show);
  }, []);

  const save = (a: boolean, m: boolean) => {
    const c: Consent = { v: cookieConsentVersion, date: new Date().toISOString(), analytics: a, marketing: m };
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {}
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: c }));
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="false" aria-labelledby="cookie-title" className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/15 bg-noir/95 backdrop-blur">
      <div className="container-content py-5 text-[15px] lg:flex lg:items-end lg:justify-between lg:gap-10">
        <div className="max-w-2xl">
          <p id="cookie-title" className="font-semibold text-snow">Sua privacidade</p>
          <p className="mt-2 text-mist">
            Usamos apenas o necessário para o site funcionar. Ferramentas de estatística ou anúncios só são ativadas com a sua
            autorização. Saiba mais na <Link href="/cookies" className="link text-snow">Política de cookies</Link>.
          </p>
          {custom && (
            <fieldset className="mt-4 space-y-3">
              <legend className="sr-only">Escolha os cookies</legend>
              <label className="flex items-start gap-3 text-snow/70">
                <input type="checkbox" checked disabled className="mt-1 size-4 accent-pink" />
                <span><strong className="text-snow">Necessários</strong>: guardam esta escolha. Sempre ativos.</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1 size-4 accent-pink" />
                <span><strong>Estatística</strong>: medir visitas de forma agregada.</span>
              </label>
              <label className="flex items-start gap-3">
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1 size-4 accent-pink" />
                <span><strong>Marketing</strong>: medir campanhas em redes sociais.</span>
              </label>
            </fieldset>
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3 lg:mt-0 lg:shrink-0">
          {custom ? (
            <button type="button" className="btn btn-primary !min-h-11 !px-5 !py-2.5 !text-[15px]" onClick={() => save(analytics, marketing)}>Salvar escolhas</button>
          ) : (
            <>
              <button type="button" className="btn btn-primary !min-h-11 !px-5 !py-2.5 !text-[15px]" onClick={() => save(true, true)}>Aceitar todos</button>
              <button type="button" className="btn btn-ghost !min-h-11 !px-5 !py-2.5 !text-[15px]" onClick={() => save(false, false)}>Somente necessários</button>
              <button type="button" className="link px-1 text-[15px]" onClick={() => setCustom(true)}>Personalizar</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
