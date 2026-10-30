# Ana Liz | Coisas de Maria

Site biográfico da Ana Liz, idealizadora da Coisas de Maria.
Next.js + TypeScript + Tailwind CSS, mobile first.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Onde editar

- **Textos, links, fotos e depoimentos:** `content/site.ts`
- **Fotos e vídeo:** salve em `public/media/` com os nomes listados em [`public/media/LEIA-ME.md`](public/media/LEIA-ME.md). O site encontra os arquivos sozinho (sem mexer no código). Sem o arquivo, aparece "Foto pendente".
- **Depoimentos:** apenas reais e autorizados (`authorized: true`). Lista vazia mostra "em breve".
- **Logo:** salve `public/media/logo/logo-horizontal.svg` (só após aprovação da nova proposta).
- **Avisos de revisão:** defina `NEXT_PUBLIC_SHOW_REVIEW_NOTES=false` na publicação definitiva.
- **Indexação:** `app/layout.tsx` está com `robots: noindex` até a aprovação; trocar `site.url` pelo domínio final.

## Pendências antes de publicar

- [x] DESIGN-2.md aplicado (tokens, ritmo, raios 28px, keylines sem sombra, faixas Carbon)
- [x] Round Carousel da Originkit integrado e adaptado (`components/RoundCarousel.tsx`)
- [ ] Fotos reais aprovadas pela Ana (hero, infância, trajetória, espelho, cicatrizes, família, missão, loja, palestra)
- [ ] Logo modernizada (principal, horizontal, símbolo, branca, pink, favicon)
- [ ] Depoimentos reais autorizados
- [ ] Vídeo da palestra
- [ ] Revisão da biografia e das informações de saúde pela Ana
- [ ] Conferir links oficiais e categorias do catálogo
- [ ] Política de privacidade e informações institucionais (razão social, CNPJ)
