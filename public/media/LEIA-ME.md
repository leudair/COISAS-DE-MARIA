# Fotos e vídeos do site

**Como funciona:** salve cada arquivo na pasta indicada, com o nome exato da tabela.
A extensão pode ser `.jpg`, `.jpeg`, `.png`, `.webp` ou `.avif` (vídeo: `.mp4`, `.webm` ou `.mov`).
O site encontra o arquivo sozinho no próximo `npm run dev` ou `npm run build`. Não é preciso mexer no código.
Enquanto um arquivo não existir, o site mostra "Foto pendente" no lugar.

> **Importante (prompt mestre):** fotos da Ana, das filhas e da família devem ser **fotografias reais**,
> sem rosto gerado ou alterado por IA. Só são permitidos corte, enquadramento e ajustes leves de luz.
> IA (GPT, Flow) pode ser usada para fundos, texturas e elementos decorativos.

Formato: **retrato 4:5** (ex.: 1600×2000 px) ou **paisagem 4:3** (ex.: 2000×1500 px). Mínimo recomendado: 1200 px no lado maior. Até ~500 KB por foto (o site otimiza, mas arquivos menores carregam mais rápido).
O enquadramento é feito por corte central (sem distorcer). Deixe o rosto perto do centro.

| Pasta / nome do arquivo | O que é | Formato |
|---|---|---|
| `01-abertura/ana-liz` | Foto atual da Ana (preferência: cabeça raspada), aprovada por ela | Retrato 4:5 |
| `02-infancia/infancia` | Foto de infância da Ana | Retrato 4:5 |
| `02-infancia/avo-maria` | Ana com a avó Maria | Retrato 4:5 |
| `03-trajetoria/inicio` | Início: vendas como sacoleira ou primeiro espaço | Paisagem 4:3 |
| `03-trajetoria/lages` | Loja no centro de Lages | Paisagem 4:3 |
| `03-trajetoria/balneario-camboriu` | Loja em Balneário Camboriú | Paisagem 4:3 |
| `04-espelho/ana-espelho` | Foto real da Ana para a seção do espelho | Retrato 4:5 |
| `05-cicatrizes/ana-forca` | Foto escolhida pela Ana para a fase da saúde (sem exposição sensacionalista) | Retrato 4:5 |
| `06-familia/01-ana-com-as-filhas` | Carrossel 3D: Ana com as filhas | Retrato 3:4 ou 4:5 |
| `06-familia/02-maria-eduarda` | Carrossel 3D: Ana com Maria Eduarda | Retrato 3:4 ou 4:5 |
| `06-familia/03-maria-valentina` | Carrossel 3D: Ana com Maria Valentina | Retrato 3:4 ou 4:5 |
| `06-familia/04-familia` | Carrossel 3D: Ana com familiares | Retrato 3:4 ou 4:5 |
| `06-familia/05-momentos-especiais` | Carrossel 3D: momento importante | Retrato 3:4 ou 4:5 |
| `06-familia/06-gratidao` | Carrossel 3D: gratidão ou celebração | Retrato 3:4 ou 4:5 |
| `06-familia/07-trajetoria` | Carrossel 3D: trajetória pessoal | Retrato 3:4 ou 4:5 |
| `06-familia/08-vo-maria` | Carrossel 3D: Ana com a avó Maria | Retrato 3:4 ou 4:5 |
| `07-missao/atendimento` | Atendimento ou acolhimento na loja | Paisagem 4:3 |
| `08-marca/loja` | Foto real da loja | Paisagem 4:3 |
| `08-marca/categoria-lingerie` | Produto: lingerie | Retrato 4:5 |
| `08-marca/categoria-moda-intima` | Produto: moda íntima | Retrato 4:5 |
| `08-marca/categoria-bem-estar` | Produto: bem-estar e autocuidado | Retrato 4:5 |
| `08-marca/categoria-sex-shop` | Produto: sex shop (discreto) | Retrato 4:5 |
| `10-palestra/video` | Vídeo da palestra (MP4 H.264, 1920×1080, até ~30 MB) | Vídeo 16:9 |
| `10-palestra/capa-video` | Capa do vídeo | Paisagem 16:9 |
| `10-palestra/palestra-1` | Foto da palestra | Paisagem 4:3 |
| `10-palestra/palestra-2` | Foto da palestra | Paisagem 4:3 |
| `10-palestra/palestra-3` | Foto da palestra | Paisagem 4:3 |
| `logo/logo-horizontal` | Logo horizontal **branca** (SVG de preferência), só após aprovação | ~5:1 |

## Legendas e textos alternativos
Ficam em `content/site.ts` (campos `caption` e `alt`), se quiser trocar.

## Depoimentos (`09-clientes`)
Só reais e autorizados. Adicione em `content/site.ts`, na lista `testimonials`:

```ts
{ name: "Primeiro nome", text: "Depoimento autorizado.", authorized: true,
  photo: { file: "09-clientes/primeiro-nome", alt: "Foto de Primeiro nome", needed: "" } }
```
A foto é opcional (quadrada, 400×400 px).

## Favicon
Substitua `app/icon.svg` pelo símbolo reduzido aprovado.
