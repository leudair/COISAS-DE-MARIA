/**
 * Conteúdo editável do site.
 *
 * Fotos: basta salvar o arquivo em public/media/ com o nome indicado em `file`
 * (qualquer extensão: .jpg, .jpeg, .png, .webp ou .avif). Ex.: `file: "01-abertura/ana-liz"`
 * → public/media/01-abertura/ana-liz.jpg. A lista completa está em public/media/LEIA-ME.md.
 * Enquanto o arquivo não existir, o site mostra o placeholder "Foto pendente".
 *
 * Textos marcados com `review: true` precisam ser conferidos e aprovados
 * pela Ana Liz antes da publicação.
 */

export type Media = {
  /** Nome do arquivo em public/media, sem extensão. */
  file?: string;
  /** Caminho explícito em /public (opcional; tem prioridade sobre `file`). */
  src?: string;
  /** Texto alternativo (acessibilidade). */
  alt: string;
  /** Descrição da foto que deve ser enviada (aparece no placeholder). */
  needed: string;
  caption?: string;
  /** Proporção do enquadramento (largura/altura). */
  ratio?: "portrait" | "landscape" | "square" | "wide";
};

export type Testimonial = {
  name: string;
  text: string;
  photo?: Media;
  /** Confirme que a cliente autorizou a publicação. */
  authorized: boolean;
};

export const links = {
  instagramAna: "https://www.instagram.com/analuciadeliz/",
  instagramBrand: "https://www.instagram.com/coisasdemariacb/",
  store: "https://coisasdemariasexshop.com/",
  /** WhatsApp da loja, (47) 99919-9802. */
  whatsapp: "https://wa.me/5547999199802?text=" + encodeURIComponent("Olá! Vim pelo site da Ana Liz."),
  /** TODO: confirmar URL da página de produtos no site comercial. */
  products: "https://coisasdemariasexshop.com/",
};

export const site = {
  name: "Ana Liz | Coisas de Maria",
  url: "https://ana-liz.vercel.app", // TODO: trocar pelo domínio definitivo
  title: "Ana Liz — A mulher por trás da Coisas de Maria",
  description:
    "Uma história de fé, força, amor-próprio e recomeço. Conheça a trajetória de Ana Liz, idealizadora da Coisas de Maria.",
  concept: "Muito além da marca, existe uma história.",
};

export const nav = [
  { href: "#musica", label: "Música" },
  { href: "#historia", label: "História" },
  { href: "#espelho", label: "Espelho" },
  { href: "#familia", label: "Família" },
  { href: "#missao", label: "Missão" },
  { href: "#coisas-de-maria", label: "A marca" },
  { href: "#palestra", label: "Palestra" },
];

export const hero = {
  title: "Ana Liz",
  subtitle: "A mulher por trás da marca.",
  text: "Uma história de fé, força e recomeço que se transformou em uma missão de amor e autoestima.",
  photo: {
    alt: "Ana Liz, de cabeça raspada, em vestido pink sobre fundo escuro",
    file: "01-abertura/ana-liz", needed: "Foto atual da Ana Liz (preferência: cabeça raspada), aprovada por ela",
    ratio: "wide",
  } satisfies Media,
  /** Vídeo de fundo (sem som, em loop). Capa: 01-abertura/video-capa */
  video: { file: "01-abertura/video", poster: "01-abertura/video-capa" },
};

/** Clipe musical da história da Ana (YouTube). */
export const music = {
  title: "A história dela virou música.",
  text: "“A Fé Me Faz Vencer” conta a trajetória da Ana em forma de canção. Dê o play e ouça.",
  youtubeId: "uLtXB9P1eXU",
  videoTitle: "A Fé Me Faz Vencer, clipe da história de Ana Liz",
};

export const childhood = {
  title: "A menina que sonhava além dos limites.",
  quote: "Eu descobri que é ótimo ser ovelha negra, porque ela se destaca.",
  review: true,
  milestones: [
    {
      tag: "Raízes",
      icon: "raiz", title: "A avó Maria",
      text: "A presença da avó Maria marcou a infância de Ana e se tornou uma das maiores referências da sua vida.",
    },
    {
      tag: "Fé",
      icon: "estrela", title: "Uma fé aprendida cedo",
      text: "Desde pequena, Ana aprendeu a fé que a acompanharia em cada fase da sua história.",
    },
    {
      tag: "Desafio",
      icon: "livro", title: "A dislexia",
      text: "A leitura e a escrita vieram com dificuldades. A dislexia transformou a escola em um caminho de obstáculos a superar.",
    },
    {
      tag: "Conquista",
      icon: "capelo", title: "A faculdade",
      text: "Mesmo com as barreiras educacionais, Ana chegou à faculdade e provou para si mesma que podia acreditar em um futuro diferente.",
    },
  ],
  photos: [
    { alt: "Fotografias da trajetória de Ana sobre uma penteadeira, com cetim pink e pérolas", file: "02-infancia/onde-tudo-comecou", needed: "Arte: onde tudo começou", ratio: "wide" },
  ] satisfies Media[],
};

export const journey = {
  title: "Todo grande sonho começa com um primeiro passo.",
  review: true,
  steps: [
    { icon: "capacete", title: "Segurança do trabalho", text: "Antes de empreender, Ana trabalhava na área de segurança do trabalho." },
    { icon: "capelo", title: "A faculdade", text: "Foi na faculdade que ela descobriu o empreendedorismo." },
    { icon: "sacola", title: "Sacoleira", text: "Começou vendendo como sacoleira, com as primeiras peças vindas do Paraguai." },
    { icon: "casa", title: "A casa da avó", text: "O primeiro espaço foi na casa da avó. Depois veio a sala comercial." },
    { icon: "loja", title: "O centro de Lages", text: "A loja chegou ao centro de Lages, enfrentando o preconceito do ramo." },
    { icon: "coracao", title: "Coisas de Maria", text: "Em Balneário Camboriú, a trajetória virou a Coisas de Maria de hoje." },
  ],

  photos: [
    { alt: "Ana Liz de terno pink, sorrindo, apontando para a loja Coisas de Maria", file: "03-trajetoria/ana-apontando-loja", needed: "Arte: Ana de pé ao lado da loja", ratio: "wide" },
  ] satisfies Media[],
};

export const mirror = {
  title: "A mulher por trás do espelho.",
  subtitle: "Quando aprendi a me enxergar com amor.",
  quote: "O meu intuito nunca foi vender somente lingerie, mas resgatar a mulher que está por trás dela.",
  review: true,
  paragraphs: [
    "Ao longo das diferentes fases do corpo, Ana aprendeu a perceber a beleza de outra forma.",
    "Uma amiga experimentou uma peça de lingerie, e aquele momento mudou a maneira como Ana compreendia o papel do que vendia.",
    "Aos poucos, ela voltou a se olhar no espelho. E descobriu no autocuidado uma parte essencial da sua missão.",
  ],
  photo: {
    alt: "Ana Liz diante do espelho, com uma amiga refletida ao lado",
    file: "04-espelho/ana-espelho", needed: "Foto real da Ana para a composição do espelho",
    ratio: "wide",
  } satisfies Media,
};

export const scars = {
  title: "Minhas cicatrizes também contam minha história.",
  quote: "A ausência da mama passou a ser o meu maior sinal de força.",
  /** Informações clínicas: revisar cronologia e termos com a Ana. Não afirmar cura. */
  review: true,
  paragraphs: [
    "Houve um tempo de dor. Uma obstrução intestinal, a perda de peso, cirurgias e a descoberta de nódulos.",
    "Veio a mastectomia, um longo período de dores e recuperação, e o tratamento oncológico.",
    "Em cada etapa, a fé foi abrigo. Amigos e familiares estiveram por perto. E, passo a passo, Ana reconstruiu a sua autoestima.",
  ],
  photo: {
    alt: "Ana Liz sorrindo, com tatuagens no braço e um lírio rosa",
    file: "05-cicatrizes/ana-forca", needed: "Foto escolhida pela própria Ana para esta fase (sem exposição sensacionalista)",
    ratio: "wide",
  } satisfies Media,
};

export const family = {
  title: "Minha família. Meu amor. Minha força.",
  review: true,
  members: "As filhas Maria Eduarda e Maria Valentina, e a avó Maria, que marcou a vida e a fé de Ana.",
  text: "A família é o lugar onde Ana encontra sentido. São as pessoas que acompanharam cada passo da sua trajetória, nos dias difíceis e nos momentos de celebração.",
  /** Álbum do carrossel 3D (formato 16:9). */
  album: [
    { alt: "Ana Liz com o marido", file: "06-familia/familia-e-amor", needed: "Família e amor", caption: "Família e amor", ratio: "wide" },
    { alt: "Ana Liz, o marido e as três filhas", file: "06-familia/uma-nova-historia", needed: "Uma nova história", caption: "Uma nova história", ratio: "wide" },
    { alt: "Fotografias da trajetória de Ana", file: "02-infancia/onde-tudo-comecou", needed: "Onde tudo começou", caption: "Onde tudo começou", ratio: "wide" },
    { alt: "Ana Liz diante do espelho", file: "04-espelho/ana-espelho", needed: "Espelho", caption: "Identidade", ratio: "wide" },
    { alt: "Ana Liz sorrindo", file: "05-cicatrizes/ana-forca", needed: "Renascimento", caption: "Renascimento", ratio: "wide" },
    { alt: "Ana Liz de terno pink", file: "07-missao/proposito", needed: "Propósito", caption: "Propósito", ratio: "wide" },
    { alt: "Ana Liz de branco em uma poltrona", file: "11-encerramento/o-legado-continua", needed: "O legado continua", caption: "O legado continua", ratio: "wide" },
    { alt: "A loja Coisas de Maria", file: "03-trajetoria/empreendedorismo", needed: "Empreendedorismo", caption: "Coisas de Maria", ratio: "wide" },
  ] satisfies Media[],
};

export const mission = {
  title: "Não é apenas sobre lingerie. É sobre se reencontrar.",
  quote: "Você é preciosa. Você é única. Tire um tempo para você.",
  pillars: [
    "Incentivar o amor-próprio",
    "Fortalecer a autoestima",
    "Valorizar o autocuidado",
    "Ajudar mulheres a se enxergarem novamente",
    "Incentivar o cuidado com a saúde",
    "Acolher mulheres em todas as fases da vida",
    "Valorizar os relacionamentos com respeito e afeto",
  ],
  photos: [
    { alt: "Ana Liz sorrindo, de terno pink", file: "07-missao/proposito", needed: "Arte: propósito", ratio: "wide" },
  ] satisfies Media[],
};

export const brand = {
  title: "Coisas de Maria.",
  subtitle: "Muito além de lingerie, uma experiência de acolhimento.",
  review: true,
  // TODO: conferir com a Ana a origem exata do nome.
  paragraphs: [
    "A Coisas de Maria nasceu da trajetória de Ana, do primeiro passo como sacoleira até a loja de hoje. O nome está ligado à história da família.",
    "Em Balneário Camboriú, o negócio se adaptou e ganhou um novo propósito: oferecer conforto, bem-estar e autoestima com um atendimento próximo e acolhedor.",
  ],
  differentials: [
    { title: "Atendimento acolhedor", text: "Cada cliente é recebida com escuta, respeito e sem julgamentos." },
    { title: "Relação próxima", text: "Mais do que vender, construir vínculo com quem entra na loja." },
    { title: "Conforto e bem-estar", text: "Peças e produtos escolhidos para valorizar a mulher real." },
  ],
  categoriesTitle: "O que você encontra na loja",
  categories: [
    { title: "Lingerie", photo: { alt: "Conjunto de renda pink com óleo de massagem Tântrica", file: "08-marca/categoria-lingerie", needed: "Foto de produto: lingerie", ratio: "portrait" } },
    { title: "Moda íntima", photo: { alt: "Conjunto rosa de moda íntima", file: "08-marca/categoria-moda-intima", needed: "Foto de produto: moda íntima", ratio: "portrait" } },
    { title: "Cosméticos íntimos", photo: { alt: "Lubrificante CB2, óleo de massagem Tântrica e sais de banho Acqua", file: "08-marca/categoria-bem-estar", needed: "Foto de produto: cosméticos/bem-estar", ratio: "portrait" } },
    { title: "Acessórios", photo: { alt: "Acessórios coloridos para casais sobre fundo escuro", file: "08-marca/categoria-sex-shop", needed: "Foto de produto: acessórios (discreta)", ratio: "portrait" } },
  ] satisfies { title: string; photo: Media }[],
  storePhoto: {
    alt: "Ana Liz em vestido rosa diante da fachada da Coisas de Maria, com memórias da sua história",
    file: "08-marca/superacao-e-legado",
    needed: "Foto real da loja",
    ratio: "wide",
  } satisfies Media,
};

/**
 * Depoimentos REAIS e AUTORIZADOS apenas.
 * Lista vazia = a seção não aparece no site.
 */
export const testimonials: Testimonial[] = [];

export const talk = {
  title: "Minha história também pode fortalecer a sua.",
  talkName: "A Mulher por Trás do Espelho",
  review: true,
  text: "Ana compartilha sua trajetória, suas experiências e mensagens de fé em palestras. Em “A Mulher por Trás do Espelho”, ela fala sobre autoestima, superação e o caminho de volta para si mesma.",
  video: {
    /** public/media/10-palestra/video.mp4 (ou .webm/.mov) */
    file: "10-palestra/video",
    poster: { alt: "Ana Liz", file: "10-palestra/capa-video", needed: "Capa do vídeo da palestra", ratio: "wide" } as Media,
  },
  /** Mosaico: banner pink (16:9, 2 colunas) e duas fotos de preto (4:5). Artes de IA aprovadas pelo Leudair. */
  gallery: [
    { alt: "Ana Liz de terno pink, com microfone, no palco diante do público", file: "10-palestra/palco-pink", needed: "Palestra: terno pink", ratio: "wide" },
    { alt: "Ana Liz de preto, em pé, falando no palco com flores ao fundo", file: "10-palestra/palco-preto-de-pe", needed: "Palestra: roupa preta, de pé", ratio: "portrait" },
    { alt: "Ana Liz de preto, sentada em uma poltrona, conversando com o público", file: "10-palestra/palco-preto-sentada", needed: "Palestra: roupa preta, sentada", ratio: "portrait" },
  ] satisfies Media[],
};

export const closing = {
  title: "Essa história continua. E você faz parte dela.",
  text: "Cada passo desta história foi sustentado pela fé, pela gratidão e pelo amor. Se ela tocou você de alguma forma, venha conhecer a Coisas de Maria e acompanhar a Ana. A sua história também importa.",
  video: { file: "11-encerramento/video", poster: "11-encerramento/video-capa" },
  photo: { alt: "Ana Liz de branco, sorrindo, sentada em uma poltrona", file: "11-encerramento/o-legado-continua", needed: "Arte: o legado continua", ratio: "wide" } satisfies Media,
  values: "Fé, força, família, amor-próprio, recomeço e propósito.",
};
