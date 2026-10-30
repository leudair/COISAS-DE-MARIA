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
| `10-palestra/palco-pink` | Galeria da palestra: terno pink | Paisagem 16:9 |
| `10-palestra/palco-preto-de-pe`, `palco-preto-sentada` | Galeria da palestra: roupa preta | Retrato 4:5 |
| `logo/logo-horizontal` | Logo horizontal **branca** (SVG de preferência), só após aprovação | ~5:1 |

## Artes já colocadas (pasta "COISAS DE MARIA")
As artes enviadas são horizontais (16:9) e foram colocadas assim:

| Arquivo original | Onde está no site | Arquivo no site |
|---|---|---|
| 01_HERO_APRESENTACAO_ANA.mp4 | Abertura (vídeo de fundo, sem som) | `01-abertura/video` |
| Retrato Glamour em Rosa Neon.png | Abertura (imagem reserva do vídeo) | `01-abertura/ana-liz` |
| HISTORIA_ONDE_TUDO_COMECOU.png | Capítulo 01 – infância | `02-infancia/onde-tudo-comecou` |
| EMPREENDEDORISMO_COISAS_DE_MARIA.png | Capítulo 02 – trajetória | `03-trajetoria/empreendedorismo` |
| ESPELHO_IDENTIDADE_TRANSFORMACAO.png | Capítulo 03 – espelho | `04-espelho/ana-espelho` |
| SUPERACAO_E_RENASCIMENTO.png | Capítulo 04 – cicatrizes | `05-cicatrizes/ana-forca` |
| FAMILIA_E_AMOR.png, ANA_FAMILIA_UMA_NOVA_HISTORIA.png | Capítulo 05 – carrossel da família (junto com as outras artes) | `06-familia/…` |
| ANA_PROPOSITO_LEGADO_INSPIRACAO.png | Capítulo 06 – missão | `07-missao/proposito` |
| ANA_HISTORIA_DE_SUPERACAO_E_LEGADO_FINAL.png | Capítulo 07 – a marca | `08-marca/superacao-e-legado` |
| ANA_UMA_HISTORIA_QUE_INSPIRA.mp4 | Capítulo 09 – vídeo (com som, play pelo visitante) | `10-palestra/video` |
| ANA_HISTORIA_SUPERACAO_FINAL.mp4 | Encerramento (vídeo sem som) | `11-encerramento/video` |
| ANA_O_LEGADO_CONTINUA.png | Encerramento (imagem reserva) e carrossel | `11-encerramento/o-legado-continua` |

Ainda faltam: fotos de produtos das 4 categorias (`08-marca/categoria-…`), fotos da palestra (`10-palestra/palestra-1..3`) e logo.

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
