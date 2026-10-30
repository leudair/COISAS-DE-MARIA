import type { Metadata, Viewport } from "next";
import "@fontsource-variable/playfair-display/index.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "@fontsource-variable/hanken-grotesk/index.css";
import "./globals.css";
import { site } from "@/content/site";
import { CookieBanner } from "@/components/CookieBanner";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: site.title,
    description: site.description,
    url: site.url,
    // Arquivo em public/ sem query string: o WhatsApp lê melhor uma URL de imagem simples.
    images: [{ url: `${site.url}/og-ana-liz.jpg`, width: 1200, height: 630, type: "image/jpeg", alt: site.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [`${site.url}/og-ana-liz.jpg`],
  },
  // Versão de aprovação: não indexar até a publicação definitiva.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-pink-deep focus:px-4 focus:py-2 focus:font-semibold">
          Pular para o conteúdo
        </a>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
