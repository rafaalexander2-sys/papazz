// ðŸ¼ BANCO DE RECEITAS PAPAZZ
// 45 receitas: 20 grÃ¡tis + 25 premium
// âœ… IMAGENS ATUALIZADAS - Pexels/Pixabay

export const receitas = [
  // ========================================
  // ðŸ†“ RECEITAS GRÃTIS - FASE 6-8 MESES (10)
  // ========================================

  {
    id: 1,
    nome: "Papa de Batata-doce",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: ["200g de batata-doce", "200ml de Ã¡gua filtrada"],
    preparo:
      "Comece descascando a batata-doce e cortando em cubos de aproximadamente 2cm para garantir cozimento uniforme. Coloque os cubos em uma panela pequena com 200ml de Ã¡gua filtrada e leve ao fogo mÃ©dio. Deixe cozinhar por 15 a 20 minutos atÃ© que a batata esteja bem macia - vocÃª deve conseguir espetar facilmente com um garfo. Escorra a Ã¡gua (reserve 2 colheres caso precise ajustar a consistÃªncia) e transfira a batata ainda quente para um prato fundo. Com um garfo, amasse vigorosamente atÃ© formar um purÃª homogÃªneo e sem grumos. Para bebÃªs de 6 meses, adicione um pouco da Ã¡gua do cozimento para deixar mais lÃ­quido; para 8 meses, pode manter mais espesso. Sempre teste a temperatura no dorso da mÃ£o antes de servir - deve estar morno, nunca quente.",
    nutrientes: {
      calorias: 86,
      proteina: 1.6,
      carboidratos: 20,
      gordura: 0.1,
      ferro: 0.6,
      calcio: 30,
    },
    dicas:
      "A batata-doce Ã© rica em betacaroteno, que o corpo transforma em vitamina A, essencial para a visÃ£o e imunidade do bebÃª. Seu sabor naturalmente doce agrada na introduÃ§Ã£o alimentar. NÃ£o adicione sal ou aÃ§Ãºcar - o paladar do bebÃª estÃ¡ se formando.",
    foto: null,
    tags: ["primeira papa", "vegetais", "doce natural"],
  },

  {
    id: 2,
    nome: "PurÃª de AbÃ³bora",
    fase: "6-8",
    tempo: 25,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "150g de abÃ³bora cabotiÃ¡ ou japonesa",
      "Ãgua suficiente para cobrir",
    ],
    preparo:
      "Descasque 150g de abÃ³bora, removendo tambÃ©m as sementes e fibras do centro. Corte em cubos de tamanho mÃ©dio (aproximadamente 3cm) para facilitar o cozimento. Coloque em uma panela com Ã¡gua suficiente para cobrir os pedaÃ§os e leve ao fogo mÃ©dio-alto. Cozinhe por 20 a 25 minutos, atÃ© que a abÃ³bora esteja completamente macia e se desfaÃ§a ao pressionar com o garfo. Escorra bem a Ã¡gua e transfira para um prato ou tigela. Amasse energicamente com garfo ou passe pelo processador se quiser textura mais lisa. A abÃ³bora tem bastante Ã¡gua natural, entÃ£o nÃ£o precisa adicionar lÃ­quido extra na maioria dos casos. Se necessÃ¡rio ajustar a consistÃªncia, use uma ou duas colheres da prÃ³pria Ã¡gua do cozimento. Sirva em temperatura morna.",
    nutrientes: {
      calorias: 26,
      proteina: 1,
      carboidratos: 6.5,
      gordura: 0.1,
      ferro: 0.8,
      calcio: 21,
    },
    dicas:
      "A abÃ³bora tem sabor naturalmente doce e suave que os bebÃªs adoram. Ã‰ rica em vitamina A e fibras, ajudando no funcionamento intestinal. Prefira abÃ³bora cabotiÃ¡ ou japonesa, que sÃ£o mais secas e saborosas.",
    foto: null,
    tags: ["vegetais", "fÃ¡cil digestÃ£o", "vitamina A"],
  },

  {
    id: 3,
    nome: "Papa de Cenoura",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 cenoura mÃ©dia (aproximadamente 100g)",
      "Ãgua para cozimento",
    ],
    preparo:
      "Lave bem a cenoura em Ã¡gua corrente, esfregando para remover impurezas. Descasque com um descascador de legumes e corte em rodelas de cerca de 1cm de espessura - rodelas finas cozinham mais rÃ¡pido e de forma uniforme. Coloque as rodelas em uma panela pequena, cubra com Ã¡gua e leve ao fogo mÃ©dio. Cozinhe por 15 a 20 minutos atÃ© que as rodelas estejam bem macias. VocÃª pode testar espetando com um garfo - deve entrar sem resistÃªncia. Escorra a Ã¡gua e amasse as rodelas ainda quentes com um garfo, fazendo movimentos circulares atÃ© obter uma papa lisa e homogÃªnea. Se preferir textura mais cremosa, use um mixer ou processador por alguns segundos. Para ajustar a consistÃªncia, adicione colheradas pequenas da Ã¡gua do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 41,
      proteina: 0.9,
      carboidratos: 9.6,
      gordura: 0.2,
      ferro: 0.3,
      calcio: 33,
    },
    dicas:
      "A cenoura Ã© riquÃ­ssima em vitamina A (betacaroteno), fundamental para a visÃ£o e desenvolvimento do bebÃª. Sua cor alaranjada vibrante chama atenÃ§Ã£o e estimula visualmente. Cenouras orgÃ¢nicas tÃªm sabor mais adocicado.",
    foto: null,
    tags: ["vegetais", "vitamina A", "cor vibrante"],
  },

  {
    id: 4,
    nome: "Banana Amassada",
    fase: "6-8",
    tempo: 5,
    dificuldade: "FÃ¡cil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["1/2 banana nanica ou prata bem madura"],
    preparo:
      "Escolha uma banana bem madura - aquelas com pontinhos marrons na casca sÃ£o perfeitas, pois tÃªm mais aÃ§Ãºcar natural e sÃ£o mais fÃ¡ceis de digerir. Descasque meia banana e coloque em um prato limpo. Com um garfo, pressione a banana fazendo movimentos de esmagamento atÃ© formar uma pasta cremosa e sem pedaÃ§os grandes. Para bebÃªs de 6 meses, amasse atÃ© ficar bem lisinho. Para 8 meses, pode deixar alguns gruminhos pequenos para estimular a mastigaÃ§Ã£o. A banana oxida rapidamente (fica marrom ao contato com o ar), por isso prepare e sirva imediatamente. Se demorar mais de 5 minutos, pinga algumas gotas de limÃ£o para evitar oxidaÃ§Ã£o. NÃ£o precisa aquecer nem cozinhar - sirva em temperatura ambiente.",
    nutrientes: {
      calorias: 89,
      proteina: 1.1,
      carboidratos: 23,
      gordura: 0.3,
      ferro: 0.3,
      calcio: 5,
    },
    dicas:
      "Banana Ã© fonte rÃ¡pida de energia, rica em potÃ¡ssio e fibras solÃºveis que ajudam o intestino. Escolha sempre bananas bem maduras - as verdes podem causar constipaÃ§Ã£o. Ã‰ uma das primeiras frutas oferecidas pela facilidade de preparo.",
    foto: null,
    tags: ["frutas", "rÃ¡pido", "energia", "potÃ¡ssio"],
  },

  {
    id: 5,
    nome: "Papa de Mandioquinha",
    fase: "6-8",
    tempo: 25,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "2 mandioquinhas mÃ©dias (batata-baroa)",
      "Ãgua para cozimento",
    ],
    preparo:
      "Lave as mandioquinhas em Ã¡gua corrente, esfregando para remover toda terra. Descasque cuidadosamente com faca afiada - a casca Ã© fina mas grudenta. Corte em rodelas grossas de aproximadamente 2cm. Coloque em panela mÃ©dia com Ã¡gua suficiente para cobrir completamente e leve ao fogo alto. Quando comeÃ§ar a ferver, reduza para fogo mÃ©dio e cozinhe por 20 a 25 minutos. A mandioquinha estÃ¡ pronta quando vocÃª conseguir atravessar facilmente com um garfo e ela comeÃ§ar a se desfazer. Escorra bem, pois a mandioquinha absorve bastante Ã¡gua. Transfira ainda quente para um prato e amasse vigorosamente com garfo - ela tem textura naturalmente cremosa e aveludada. NÃ£o precisa adicionar lÃ­quido, mas se achar necessÃ¡rio, use uma colher da Ã¡gua do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 133,
      proteina: 1.4,
      carboidratos: 32,
      gordura: 0.2,
      ferro: 0.5,
      calcio: 15,
    },
    dicas:
      "Mandioquinha (ou batata-baroa) Ã© excelente fonte de energia para bebÃªs ativos. Tem digestÃ£o fÃ¡cil e textura naturalmente cremosa que dispensa adiÃ§Ã£o de lÃ­quidos. Rico em vitaminas do complexo B.",
    foto: null,
    tags: ["vegetais", "energia", "cremoso"],
  },

  {
    id: 6,
    nome: "PurÃª de Chuchu",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 chuchu pequeno (aproximadamente 150g)",
      "Ãgua para cozimento",
    ],
    preparo:
      "Lave bem o chuchu em Ã¡gua corrente. Descasque com descascador de legumes - a casca do chuchu pode deixar as mÃ£os pegajosas, por isso algumas pessoas preferem usar luvas. Corte ao meio e remova o miolo central (o caroÃ§o). Pique em cubos de aproximadamente 2cm. Coloque em uma panela pequena, cubra com Ã¡gua e leve ao fogo mÃ©dio. Cozinhe por 15 a 20 minutos atÃ© ficar bem macio. O chuchu tem bastante Ã¡gua, entÃ£o ficarÃ¡ muito mole quando estiver pronto. Escorra muito bem, pressionando levemente com uma colher para eliminar excesso de Ã¡gua. Amasse com garfo atÃ© formar um purÃª homogÃªneo. Como o chuchu tem sabor muito suave (quase neutro), Ã© Ã³timo para misturar com outros vegetais mais tarde. Sirva morno.",
    nutrientes: {
      calorias: 19,
      proteina: 0.8,
      carboidratos: 4.5,
      gordura: 0.1,
      ferro: 0.3,
      calcio: 17,
    },
    dicas:
      "Chuchu Ã© um dos vegetais mais leves e de fÃ¡cil digestÃ£o, ideal para bebÃªs com intestino sensÃ­vel. Tem alto teor de Ã¡gua e ajuda na hidrataÃ§Ã£o. Sabor neutro Ã© Ã³timo para combinar com outros alimentos.",
    foto: null,
    tags: ["vegetais", "leve", "fÃ¡cil digestÃ£o"],
  },

  {
    id: 7,
    nome: "MaÃ§Ã£ Raspada",
    fase: "6-8",
    tempo: 5,
    dificuldade: "FÃ¡cil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["1/2 maÃ§Ã£ fuji ou gala"],
    preparo:
      "Escolha uma maÃ§Ã£ fresca, de preferÃªncia orgÃ¢nica. Lave muito bem em Ã¡gua corrente, esfregando a casca para remover qualquer resÃ­duo. NÃ£o precisa descascar - a casca tem fibras importantes. Corte a maÃ§Ã£ ao meio e remova as sementes e o miolo duro do centro. Segure firme a metade da maÃ§Ã£ com uma mÃ£o e, com uma colher de sopa, raspe a polpa fazendo movimentos leves e curtos. A maÃ§Ã£ raspada vai formando uma pasta fina e aerada. Raspe apenas o suficiente para uma porÃ§Ã£o, pois a maÃ§Ã£ oxida muito rÃ¡pido e fica marrom em poucos minutos. Sirva imediatamente apÃ³s raspar. Se precisar esperar alguns minutos, pingue 2 gotas de limÃ£o para evitar oxidaÃ§Ã£o. A textura raspada Ã© perfeita para bebÃªs que ainda estÃ£o se acostumando com sÃ³lidos.",
    nutrientes: {
      calorias: 52,
      proteina: 0.3,
      carboidratos: 14,
      gordura: 0.2,
      ferro: 0.1,
      calcio: 6,
    },
    dicas:
      "MaÃ§Ã£ raspada tem textura aerada e leve, perfeita para iniciantes. Rica em fibras solÃºveis (pectina) que ajudam a regular o intestino. Sempre sirva na hora pois oxida rapidamente. MaÃ§Ã£s mais doces (fuji, gala) sÃ£o preferÃ­veis.",
    foto: null,
    tags: ["frutas", "rÃ¡pido", "fibras"],
  },

  {
    id: 8,
    nome: "Papa de Inhame",
    fase: "6-8",
    tempo: 25,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 inhame pequeno (aproximadamente 150g)",
      "Ãgua para cozimento",
    ],
    preparo:
      "O inhame tem casca bem grossa e pode deixar as mÃ£os coÃ§ando, entÃ£o use luvas ao manipular. Lave bem o inhame em Ã¡gua corrente com escovinha para remover toda terra. Descasque com faca afiada, removendo uma camada generosa da casca. Corte em cubos de aproximadamente 2cm - cubos menores cozinham mais rÃ¡pido. Coloque em panela com Ã¡gua suficiente para cobrir e leve ao fogo alto. Assim que ferver, reduza para fogo mÃ©dio e cozinhe por 20 a 25 minutos. O inhame estÃ¡ pronto quando vocÃª conseguir esmagar um cubo facilmente entre os dedos. Escorra bem a Ã¡gua e amasse ainda quente com um garfo atÃ© formar purÃª liso. O inhame tem textura levemente fibrosa, entÃ£o amasse bem para quebrar as fibras. Se necessÃ¡rio, adicione uma ou duas colheres da Ã¡gua do cozimento para ajustar consistÃªncia. Sirva morno.",
    nutrientes: {
      calorias: 118,
      proteina: 1.5,
      carboidratos: 28,
      gordura: 0.2,
      ferro: 0.5,
      calcio: 17,
    },
    dicas:
      "Inhame Ã© conhecido por fortalecer o sistema imunolÃ³gico e tem propriedades anti-inflamatÃ³rias naturais. Ã‰ excelente fonte de carboidratos complexos. Use luvas ao descascar para evitar coceira nas mÃ£os.",
    foto: null,
    tags: ["vegetais", "imunidade", "energia"],
  },

  {
    id: 9,
    nome: "MamÃ£o Amassado",
    fase: "6-8",
    tempo: 5,
    dificuldade: "FÃ¡cil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["3 colheres de sopa de mamÃ£o papaya maduro"],
    preparo:
      "Escolha um mamÃ£o papaya bem maduro - deve ceder levemente ao apertar e ter cheiro doce caracterÃ­stico. Corte o mamÃ£o ao meio e retire todas as sementes pretas com uma colher. Com uma colher limpa, retire aproximadamente 3 colheres de sopa da polpa alaranjada. Coloque em um prato ou tigela e amasse delicadamente com um garfo atÃ© formar uma pasta cremosa. O mamÃ£o maduro Ã© naturalmente muito macio, entÃ£o nÃ£o precisa de muita forÃ§a. Para bebÃªs de 6 meses, amasse atÃ© ficar completamente liso. Para 8 meses, pode deixar pequenos pedacinhos para estimular a mastigaÃ§Ã£o. Sirva em temperatura ambiente ou levemente gelado (mas nÃ£o direto da geladeira). O mamÃ£o nÃ£o precisa ser aquecido. Consuma logo apÃ³s preparar, pois fermenta rapidamente.",
    nutrientes: {
      calorias: 43,
      proteina: 0.5,
      carboidratos: 11,
      gordura: 0.1,
      ferro: 0.2,
      calcio: 20,
    },
    dicas:
      "MamÃ£o Ã© rico em papaÃ­na, enzima que ajuda na digestÃ£o e regula o intestino. Excelente para bebÃªs com prisÃ£o de ventre. Escolha sempre mamÃµes bem maduros, mais doces e fÃ¡ceis de digerir. Sirva fresco.",
    foto: null,
    tags: ["frutas", "digestÃ£o", "enzimas"],
  },

  {
    id: 10,
    nome: "Papa de Beterraba",
    fase: "6-8",
    tempo: 30,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: ["1 beterraba pequena", "Ãgua para cozimento"],
    preparo:
      "Lave muito bem a beterraba com escovinha em Ã¡gua corrente para remover toda terra. Descasque com cuidado usando faca afiada - a beterraba mancha tudo de roxo, entÃ£o use uma tÃ¡bua que possa manchar. Corte em cubos de aproximadamente 2cm. Coloque os cubos em uma panela, cubra com Ã¡gua e leve ao fogo mÃ©dio-alto. A beterraba demora mais para cozinhar que outros vegetais - deixe por 25 a 30 minutos em fogo mÃ©dio atÃ© que os cubos estejam completamente macios. VocÃª deve conseguir atravessar facilmente com um garfo. Escorra a Ã¡gua (que ficarÃ¡ roxa) e amasse os cubos ainda quentes com um garfo atÃ© formar um purÃª homogÃªneo de cor roxa vibrante. A beterraba tem sabor levemente terroso e doce. Se achar necessÃ¡rio, adicione uma colher de Ã¡gua do cozimento para ajustar consistÃªncia. Sirva morno.",
    nutrientes: {
      calorias: 43,
      proteina: 1.6,
      carboidratos: 9.6,
      gordura: 0.2,
      ferro: 0.8,
      calcio: 16,
    },
    dicas:
      "Beterraba Ã© rica em ferro, Ã¡cido fÃ³lico e antioxidantes. Ã“tima para prevenir anemia. A cor roxa vibrante chama atenÃ§Ã£o do bebÃª. Pode manchar fraldas e roupas, mas Ã© normal e sai na lavagem.",
    foto: null,
    tags: ["vegetais", "ferro", "Ã¡cido fÃ³lico"],
  },

  // ========================================
  // ðŸ†“ RECEITAS GRÃTIS - FASE 8-10 MESES (10)
  // ========================================

  {
    id: 11,
    nome: "Papa de Frango com Legumes",
    fase: "8-10",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de peito de frango sem pele",
      "1 batata pequena (100g)",
      "1 cenoura pequena (80g)",
      "200ml de Ã¡gua",
    ],
    preparo:
      "Corte 50g de peito de frango sem pele em cubinhos pequenos de aproximadamente 1cm. Em uma panela pequena, coloque o frango com 200ml de Ã¡gua e leve ao fogo mÃ©dio. Enquanto o frango cozinha (cerca de 10 minutos), descasque e pique a batata e a cenoura em cubos de 2cm. Quando o frango estiver cozido e esbranquiÃ§ado, adicione os legumes picados na mesma panela. Deixe cozinhar tudo junto por mais 15 a 20 minutos atÃ© que os legumes estejam bem macios e o frango totalmente cozido. Com um garfo, desfie levemente o frango dentro da prÃ³pria panela. Para bebÃªs de 8 meses, amasse tudo junto atÃ© formar uma papa Ãºmida com pequenos pedaÃ§os. Para 10 meses, pode deixar pedaÃ§os maiores para estimular mastigaÃ§Ã£o. Ajuste a consistÃªncia com o prÃ³prio caldo do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 165,
      proteina: 15,
      carboidratos: 20,
      gordura: 2,
      ferro: 1.2,
      calcio: 25,
    },
    dicas:
      "Esta Ã© geralmente a primeira receita com proteÃ­na animal que o bebÃª experimenta. O frango Ã© proteÃ­na magra e de fÃ¡cil digestÃ£o. Certifique-se de que estÃ¡ completamente cozido (nada de rosa no centro).",
    foto: null,
    tags: ["proteÃ­na", "completa", "primeira proteÃ­na"],
  },

  {
    id: 12,
    nome: "Risoto Baby de Frango",
    fase: "8-10",
    tempo: 35,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de arroz",
      "50g de frango desfiado",
      "1/2 tomate sem pele e sem sementes",
      "1 colher (chÃ¡) de salsinha picada",
      "300ml de Ã¡gua",
    ],
    preparo:
      "Cozinhe 50g de peito de frango em Ã¡gua atÃ© ficar bem macio (15 minutos). Retire, deixe esfriar um pouco e desfie com as mÃ£os em fios bem finos. Reserve. Na mesma Ã¡gua do cozimento (que virou um caldinho de frango), adicione 2 colheres de sopa de arroz lavado. Cozinhe em fogo baixo por cerca de 20 minutos, mexendo ocasionalmente. O arroz vai absorver o caldo e ficar cremoso, como um risoto. Quando o arroz estiver quase no ponto (macio mas ainda com um pouco de caldo), adicione o frango desfiado de volta, o tomate picadinho (sem pele e sementes) e a salsinha. Cozinhe por mais 3 minutos, mexendo para incorporar tudo. A consistÃªncia deve ser cremosa e Ãºmida, nÃ£o seca. Se necessÃ¡rio, adicione mais Ã¡gua quente. Sirva morno.",
    nutrientes: {
      calorias: 180,
      proteina: 14,
      carboidratos: 25,
      gordura: 2.5,
      ferro: 1,
      calcio: 20,
    },
    dicas:
      "O formato risoto tem consistÃªncia pastosa perfeita para essa fase. O arroz cozido no caldo de frango fica saboroso e cremoso naturalmente, sem precisar de laticÃ­nios.",
    foto: null,
    tags: ["arroz", "proteÃ­na", "cremoso"],
  },

  {
    id: 13,
    nome: "Papa de Carne com AbÃ³bora",
    fase: "8-10",
    tempo: 40,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de carne moÃ­da magra (patinho ou coxÃ£o mole)",
      "100g de abÃ³bora",
      "1 batata pequena",
      "2 folhas de couve picadas",
      "250ml de Ã¡gua",
    ],
    preparo:
      "Em uma panela pequena, coloque 50g de carne moÃ­da magra (escolha cortes magros como patinho) com um fio de Ã¡gua e leve ao fogo mÃ©dio. Mexa com uma colher de pau para desfazer os torrÃµes da carne enquanto cozinha. Deixe por cerca de 10 minutos atÃ© a carne estar completamente cozida e soltinha. Enquanto isso, descasque e corte em cubos de 2cm: 100g de abÃ³bora e 1 batata pequena. Adicione os cubos de abÃ³bora e batata na panela com a carne jÃ¡ cozida. Acrescente 250ml de Ã¡gua, mexa bem e deixe cozinhar por mais 20 minutos em fogo mÃ©dio-baixo atÃ© os legumes ficarem bem macios. Nos Ãºltimos 3 minutos, adicione 2 folhas de couve picadinha. Para servir, amasse levemente com garfo se o bebÃª tiver 8 meses, ou deixe em pedaÃ§os pequenos para 10 meses. A consistÃªncia deve ser Ãºmida. Sirva morno.",
    nutrientes: {
      calorias: 195,
      proteina: 16,
      carboidratos: 22,
      gordura: 4,
      ferro: 2.5,
      calcio: 35,
    },
    dicas:
      "Carne vermelha Ã© fonte importante de ferro heme (melhor absorvido pelo corpo). Escolha sempre cortes magros para bebÃªs. A abÃ³bora adiciona doÃ§ura natural que equilibra o sabor da carne.",
    foto: null,
    tags: ["carne", "ferro", "completa"],
  },

  {
    id: 14,
    nome: "Sopa de Lentilha",
    fase: "8-10",
    tempo: 35,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetariana",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de lentilha",
      "1 cenoura pequena",
      "1 batata pequena",
      "300ml de Ã¡gua",
    ],
    preparo:
      "Lave 2 colheres de sopa de lentilha em Ã¡gua corrente usando uma peneira fina. Coloque a lentilha lavada em uma panela pequena com 300ml de Ã¡gua e leve ao fogo mÃ©dio. Enquanto a lentilha comeÃ§a a cozinhar, descasque e pique em cubos pequenos 1 cenoura e 1 batata. ApÃ³s 10 minutos de cozimento da lentilha, adicione os legumes picados na panela. Continue cozinhando por mais 20 a 25 minutos atÃ© que a lentilha esteja completamente macia e os legumes desfeitos. A lentilha cozinha rÃ¡pido e nÃ£o precisa de prÃ©-molho. No final, com um garfo, amasse parcialmente - deixe alguns grÃ£os inteiros para textura, mas certifique-se de que a maioria estÃ¡ amassado. A sopa deve ficar espessa e cremosa. Se necessÃ¡rio, adicione um pouco mais de Ã¡gua quente para ajustar a consistÃªncia. Sirva morno.",
    nutrientes: {
      calorias: 155,
      proteina: 9,
      carboidratos: 28,
      gordura: 0.5,
      ferro: 3.3,
      calcio: 25,
    },
    dicas:
      "Lentilha Ã© proteÃ­na vegetal completa e riquÃ­ssima em ferro - melhor opÃ§Ã£o vegetariana. NÃ£o precisa de molho prÃ©vio como outros grÃ£os. Cozinha rÃ¡pido e tem sabor suave que bebÃªs aceitam bem.",
    foto: null,
    tags: ["leguminosa", "ferro", "vegetariano", "proteÃ­na vegetal"],
  },

  {
    id: 15,
    nome: "Papa de FeijÃ£o com Arroz",
    fase: "8-10",
    tempo: 30,
    dificuldade: "FÃ¡cil",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de feijÃ£o cozido (sem tempero forte)",
      "2 colheres (sopa) de arroz branco",
      "1 cenoura ralada",
      "Caldo do feijÃ£o para umedecer",
    ],
    preparo:
      "Se vocÃª jÃ¡ tiver feijÃ£o cozido em casa (feito sem alho, cebola, sal ou temperos fortes), use 2 colheres de sopa dos grÃ£os. Caso contrÃ¡rio, cozinhe uma pequena porÃ§Ã£o de feijÃ£o em Ã¡gua pura atÃ© ficar macio (30 minutos na panela de pressÃ£o). Em um prato fundo, amasse bem os grÃ£os de feijÃ£o com um garfo atÃ© formar uma pasta grossa. Em outra panela, cozinhe 2 colheres de sopa de arroz branco em Ã¡gua por 15 minutos atÃ© ficar bem macio e Ãºmido. Rale finamente meia cenoura crua. Em um prato de servir, misture o feijÃ£o amassado, o arroz cozido e a cenoura ralada. UmedeÃ§a com 2 a 3 colheres do caldo do feijÃ£o para criar uma papa Ãºmida e cremosa. Para bebÃªs de 8 meses, deixe tudo bem misturado e pastoso. Para 10 meses, pode deixar o arroz em grÃ£os soltos. Sirva morno.",
    nutrientes: {
      calorias: 140,
      proteina: 7,
      carboidratos: 26,
      gordura: 1,
      ferro: 2,
      calcio: 30,
    },
    dicas:
      "FeijÃ£o com arroz Ã© a combinaÃ§Ã£o brasileira clÃ¡ssica e forma proteÃ­na completa (com todos aminoÃ¡cidos essenciais). Use feijÃ£o cozido sem temperos fortes - o paladar do bebÃª Ã© sensÃ­vel.",
    foto: null,
    tags: ["feijÃ£o", "arroz", "brasileiro", "proteÃ­na completa"],
  },

  {
    id: 16,
    nome: "Frango Desfiado com PurÃª",
    fase: "8-10",
    tempo: 30,
    dificuldade: "FÃ¡cil",
    categoria: "ProteÃ­na",
    premium: false,
    ingredientes: [
      "60g de peito de frango",
      "2 batatas mÃ©dias",
      "1 fio de azeite extravirgem",
    ],
    preparo:
      "Coloque 60g de peito de frango (sem pele e sem osso) em uma panela pequena com Ã¡gua suficiente para cobrir. Leve ao fogo mÃ©dio e cozinhe por 15 a 20 minutos atÃ© o frango estar completamente cozido e branco por dentro - nÃ£o pode ter nenhuma parte rosada. Enquanto o frango cozinha, descasque 2 batatas mÃ©dias, corte em cubos e cozinhe em outra panela com Ã¡gua por 15 minutos atÃ© ficarem bem macias. Quando o frango estiver pronto, retire da Ã¡gua e deixe esfriar um pouco atÃ© poder manusear. Com as mÃ£os ou usando dois garfos, desfie o frango em fios finos - quanto mais desfiado, melhor para o bebÃª. Escorra as batatas e amasse ainda quentes atÃ© formar um purÃª liso. Adicione um fio fino de azeite extravirgem ao purÃª para dar cremosidade. No prato, coloque uma base de purÃª de batata e por cima espalhe o frango desfiado. Sirva morno.",
    nutrientes: {
      calorias: 185,
      proteina: 18,
      carboidratos: 20,
      gordura: 3,
      ferro: 1,
      calcio: 15,
    },
    dicas:
      "Apresentar o frango desfiado (em fios), nÃ£o moÃ­do, ajuda o bebÃª a identificar as texturas. O azeite extravirgem adiciona gorduras boas essenciais para o desenvolvimento cerebral.",
    foto: null,
    tags: ["frango", "purÃª", "proteÃ­na"],
  },

  {
    id: 17,
    nome: "Carne MoÃ­da com Cenoura",
    fase: "8-10",
    tempo: 35,
    dificuldade: "MÃ©dia",
    categoria: "ProteÃ­na",
    premium: false,
    ingredientes: [
      "50g de carne moÃ­da magra",
      "1 cenoura mÃ©dia",
      "1/2 tomate sem pele",
      "1 colher (chÃ¡) de cebola picada",
      "200ml de Ã¡gua",
    ],
    preparo:
      "Em uma panela pequena, coloque 1 colher de chÃ¡ de cebola picadinha com um fio de Ã¡gua e deixe murchar em fogo baixo por 2 minutos - isso tira o sabor muito forte da cebola crua. Adicione 50g de carne moÃ­da magra e mexa bem com uma colher de pau para desfazer os torrÃµes. Deixe a carne cozinhar por 5 minutos, mexendo ocasionalmente, atÃ© ficar completamente dourada e soltinha. Enquanto isso, descasque e pique 1 cenoura em cubinhos bem pequenos (meio centÃ­metro). Retire a pele e as sementes de meio tomate e pique fino. Adicione a cenoura picada na panela com a carne, mexa e acrescente 200ml de Ã¡gua. Deixe cozinhar em fogo mÃ©dio-baixo por 20 a 25 minutos atÃ© a cenoura ficar bem macia. Nos Ãºltimos 5 minutos, adicione o tomate picado. A carne deve estar soltinha e Ãºmida, nÃ£o seca. Sirva morno.",
    nutrientes: {
      calorias: 160,
      proteina: 14,
      carboidratos: 8,
      gordura: 8,
      ferro: 2.2,
      calcio: 20,
    },
    dicas:
      "Escolha sempre carne moÃ­da magra (patinho ou coxÃ£o mole) para bebÃªs. A cenoura adiciona doÃ§ura natural e vitamina A. Certifique-se de que nÃ£o hÃ¡ torrÃµes grandes de carne.",
    foto: null,
    tags: ["carne", "legumes", "ferro"],
  },

  {
    id: 18,
    nome: "Papa de Peixe com Batata",
    fase: "8-10",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "ProteÃ­na",
    premium: false,
    ingredientes: [
      "50g de filÃ© de peixe branco (pescada, tilÃ¡pia ou merluza)",
      "1 batata mÃ©dia",
      "1 cenoura pequena",
      "1 colher (chÃ¡) de salsinha picada",
    ],
    preparo:
      "Use apenas peixes brancos de carne firme como pescada, tilÃ¡pia ou merluza - evite peixes gordurosos nessa idade. Inspecione muito bem o filÃ© de peixe Ã  luz, passando os dedos para sentir se hÃ¡ alguma espinha. Remova qualquer espinha encontrada com uma pinÃ§a limpa. Cozinhe o filÃ© no vapor ou em Ã¡gua fervente por 8 a 10 minutos atÃ© estar completamente cozido e opaco (branco). Enquanto isso, descasque e cozinhe em cubos 1 batata e 1 cenoura pequena por 15 minutos atÃ© ficarem macias. Quando o peixe esfriar um pouco, desfie completamente com as mÃ£os, sentindo novamente para garantir que nÃ£o hÃ¡ nenhuma espinha - isso Ã© MUITO importante. Amasse a batata e cenoura juntas. Misture o peixe desfiado ao purÃª de batata e cenoura. Finalize com salsinha picadinha. Sirva morno.",
    nutrientes: {
      calorias: 145,
      proteina: 15,
      carboidratos: 18,
      gordura: 1.5,
      ferro: 0.5,
      calcio: 25,
    },
    dicas:
      "ATENÃ‡ÃƒO com espinhas - verifique mÃºltiplas vezes! Peixe Ã© excelente fonte de proteÃ­na magra e Ã´mega 3. Introduza peixe gradualmente, observando reaÃ§Ãµes alÃ©rgicas. Use apenas peixes frescos.",
    foto: null,
    tags: ["peixe", "Ã´mega 3", "proteÃ­na magra"],
  },

  {
    id: 19,
    nome: "Sopa de Legumes com Carne",
    fase: "8-10",
    tempo: 40,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de carne magra em cubos pequenos",
      "1 batata pequena",
      "1 cenoura",
      "1/4 de chuchu",
      "1 punhado de macarrÃ£o cabelo de anjo",
      "2 folhas de couve picadas",
      "400ml de Ã¡gua",
    ],
    preparo:
      "Corte 50g de carne magra (patinho ou mÃºsculo) em cubinhos de menos de 1cm. Em uma panela mÃ©dia, coloque os cubos de carne com 400ml de Ã¡gua e leve ao fogo mÃ©dio. Deixe cozinhar por 20 minutos - a carne precisa ficar bem macia para bebÃªs. Enquanto isso, descasque e pique em cubinhos pequenos: 1 batata, 1 cenoura e um pedaÃ§o de chuchu. ApÃ³s os 20 minutos de cozimento da carne, adicione todos os legumes picados na panela. Continue cozinhando por mais 15 minutos atÃ© os legumes estarem macios. Quebre um punhado pequeno de macarrÃ£o cabelo de anjo em pedaÃ§os menores e adicione Ã  sopa. Cozinhe por mais 3 minutos. Por Ãºltimo, adicione 2 folhas de couve picadinhas e deixe por mais 2 minutos. A sopa deve ficar encorpada mas Ãºmida. Para bebÃªs de 8 meses, amasse levemente. Sirva morno.",
    nutrientes: {
      calorias: 190,
      proteina: 14,
      carboidratos: 24,
      gordura: 4,
      ferro: 2,
      calcio: 40,
    },
    dicas:
      "Sopa completa com proteÃ­na, carboidratos e vegetais. O macarrÃ£o cabelo de anjo cozinha rapidamente. A couve adicionada no final mantÃ©m mais nutrientes. Ã“tima opÃ§Ã£o para refeiÃ§Ãµes Ãºnicas.",
    foto: null,
    tags: ["sopa", "completa", "nutritiva"],
  },

  {
    id: 20,
    nome: "Mandioquinha com Frango",
    fase: "8-10",
    tempo: 30,
    dificuldade: "FÃ¡cil",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 mandioquinhas mÃ©dias",
      "60g de peito de frango",
      "3 florzinhas de brÃ³colis",
      "1 colher (chÃ¡) de azeite extravirgem",
    ],
    preparo:
      "Descasque 2 mandioquinhas e corte em rodelas grossas. Corte 60g de peito de frango em cubinhos de 1cm. Em uma panela mÃ©dia, coloque as rodelas de mandioquinha e os cubos de frango com Ã¡gua suficiente para cobrir. Leve ao fogo mÃ©dio e cozinhe por 20 minutos - a mandioquinha e o frango devem cozinhar juntos, assim a mandioquinha absorve o sabor do frango. Enquanto isso, lave bem 3 florzinhas pequenas de brÃ³colis e separe em pedaÃ§os menores. Nos Ãºltimos 5 minutos de cozimento, adicione o brÃ³colis na panela. Quando tudo estiver macio, escorra a Ã¡gua (reserve um pouco). Em um prato, amasse a mandioquinha ainda quente - ela fica naturalmente cremosa. Desfie o frango com as mÃ£os em fios finos. Pique o brÃ³colis em pedaÃ§os bem pequenos. Misture tudo, adicionando 1 colher de chÃ¡ de azeite extravirgem. Se necessÃ¡rio, umedeÃ§a com a Ã¡gua reservada. Sirva morno.",
    nutrientes: {
      calorias: 200,
      proteina: 16,
      carboidratos: 28,
      gordura: 3,
      ferro: 1.2,
      calcio: 35,
    },
    dicas:
      "Mandioquinha dÃ¡ cremosidade natural Ã  preparaÃ§Ã£o sem precisar de laticÃ­nios. O brÃ³colis adicionado no final mantÃ©m cor verde vibrante e mais nutrientes. Rico em cÃ¡lcio.",
    foto: null,
    tags: ["frango", "energia", "cÃ¡lcio"],
  },

  // ========================================
  // ðŸ‘‘ RECEITAS PREMIUM - FASE 6-8 MESES (15)
  // ========================================

  {
    id: 101,
    nome: "Papa de Quinoa com AbÃ³bora e Espinafre",
    fase: "6-8",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 colheres (sopa) de quinoa em flocos",
      "100g de abÃ³bora cabotiÃ¡",
      "3 folhas de espinafre baby",
      "1 fio de azeite extravirgem",
      "Ãgua filtrada",
    ],
    preparo:
      "Descasque 100g de abÃ³bora cabotiÃ¡, remova as sementes e corte em cubos de 2cm. Coloque em uma panela pequena com Ã¡gua suficiente para cobrir e cozinhe em fogo mÃ©dio por 15 minutos atÃ© ficar completamente macia - deve desfazer ao pressionar com garfo. Enquanto isso, lave muito bem 3 folhas de espinafre baby em Ã¡gua corrente. Em outra panela pequena, prepare 2 colheres de sopa de quinoa em flocos conforme instruÃ§Ãµes da embalagem (geralmente 5 minutos em Ã¡gua fervente). O espinafre baby Ã© mais suave que o normal - pique finamente e refogue levemente em uma gotinha de azeite por apenas 1 minuto atÃ© murchar. Escorra a abÃ³bora e amasse ainda quente atÃ© formar purÃª liso. Incorpore a quinoa cozida ao purÃª de abÃ³bora, mexendo bem. Por Ãºltimo, adicione o espinafre refogado e misture delicadamente. Finalize com um fio bem fino de azeite extravirgem. A consistÃªncia deve ser cremosa. Sirva morno logo apÃ³s o preparo para manter todos os nutrientes.",
    nutrientes: {
      calorias: 95,
      proteina: 3.5,
      carboidratos: 16,
      gordura: 2,
      ferro: 2.1,
      calcio: 45,
    },
    dicas:
      "Quinoa Ã© um dos poucos alimentos vegetais com proteÃ­na completa (todos os 9 aminoÃ¡cidos essenciais). O espinafre baby tem sabor mais suave e folhas tenras. CombinaÃ§Ã£o perfeita de carboidrato, proteÃ­na vegetal e ferro.",
    foto: null,
    tags: ["superalimento", "proteÃ­na vegetal", "ferro", "gourmet"],
  },

  {
    id: 102,
    nome: "PurÃª de Batata Baroa com Pera",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 batatas baroa (mandioquinha)",
      "1/2 pera williams madura",
      "1 pitada de canela em pÃ³ (opcional)",
      "Ãgua mineral",
    ],
    preparo:
      "Descasque 2 batatas baroa (mandioquinha), removendo toda a casca grudenta com faca afiada. Corte em rodelas de 2cm de espessura. Coloque as rodelas em uma panela com Ã¡gua mineral suficiente para cobrir e leve ao fogo mÃ©dio. Cozinhe por 15 a 20 minutos atÃ© as rodelas estarem completamente macias e comeÃ§ando a se desfazer. Enquanto isso, escolha meia pera williams bem madura (deve ceder levemente ao apertar), descasque e corte em cubos pequenos. A pera williams tem textura amanteigada e sabor suave. Escorra a batata baroa e amasse ainda quente em um prato fundo - ela tem textura naturalmente aveludada e cremosa. Adicione os cubos de pera e amasse junto, criando uma mistura homogÃªnea de cor alaranjada com pedacinhos de pera. Se desejar, polvilhe uma pitada mÃ­nima de canela em pÃ³ para realÃ§ar o sabor doce - use com moderaÃ§Ã£o. A canela Ã© opcional mas combina perfeitamente. NÃ£o precisa adicionar Ã¡gua, a mistura fica cremosa naturalmente. Sirva morno.",
    nutrientes: {
      calorias: 110,
      proteina: 1.2,
      carboidratos: 26,
      gordura: 0.2,
      ferro: 0.6,
      calcio: 18,
    },
    dicas:
      "A combinaÃ§Ã£o de batata baroa com pera cria um equilÃ­brio perfeito entre doce e cremoso. A batata baroa tem textura aveludada Ãºnica. A pera ajuda no funcionamento intestinal. Canela em pequena quantidade Ã© segura para bebÃªs.",
    foto: null,
    tags: ["doce natural", "digestÃ£o", "cremoso"],
  },

  {
    id: 103,
    nome: "Papa Verde Detox Baby",
    fase: "6-8",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "3 folhas de couve manteiga",
      "1 abobrinha pequena",
      "1/2 maÃ§Ã£ verde",
      "1 folha de hortelÃ£ fresca",
      "50ml de Ã¡gua de coco natural",
    ],
    preparo:
      "Lave muito bem 1 abobrinha pequena, descasque e corte em rodelas de 1cm. Cozinhe as rodelas em Ã¡gua fervente por 12 minutos atÃ© ficarem bem macias. Enquanto isso, lave 3 folhas grandes de couve manteiga em Ã¡gua corrente, retire o talo central grosso (use apenas a parte mais macia da folha) e pique grosseiramente. Em outra panela pequena, ferva Ã¡gua e quando estiver em ebuliÃ§Ã£o, desligue o fogo e mergulhe as folhas de couve picadas por apenas 30 segundos - esse processo chama-se escaldar e mantÃ©m a cor verde vibrante enquanto amacia levemente. Retire e escorra. Descasque meia maÃ§Ã£ verde (granny smith de preferÃªncia) e rale finamente. Em um liquidificador ou processador, coloque a abobrinha cozida escorrida, a couve escaldada, a maÃ§Ã£ ralada, 1 folha de hortelÃ£ fresca lavada e 50ml de Ã¡gua de coco natural (nÃ£o use Ã¡gua de coco de caixinha, apenas natural). Bata atÃ© obter uma pasta verde lisa e cremosa. A hortelÃ£ deve ser usada com moderaÃ§Ã£o - uma folha Ã© suficiente. Sirva em temperatura ambiente ou levemente morno.",
    nutrientes: {
      calorias: 52,
      proteina: 2,
      carboidratos: 11,
      gordura: 0.3,
      ferro: 1.5,
      calcio: 60,
    },
    dicas:
      "Papa leve e refrescante, perfeita para dias quentes. A cor verde vibrante chama atenÃ§Ã£o do bebÃª. A hortelÃ£ em pequena quantidade ajuda na digestÃ£o e nÃ£o altera muito o sabor. Ãgua de coco hidrata e adiciona eletrÃ³litos naturais.",
    foto: null,
    tags: ["verde", "leve", "hidratante", "detox"],
  },

  {
    id: 104,
    nome: "PurÃª de Batata Doce Roxa com Coco",
    fase: "6-8",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 batata doce roxa mÃ©dia",
      "2 colheres (sopa) de leite de coco caseiro",
      "1 pitada de noz moscada",
      "Raspas de limÃ£o siciliano",
    ],
    preparo:
      "PreaqueÃ§a o forno a 180Â°C. Lave bem 1 batata doce roxa (aquela de casca e polpa roxas) e seque. Enrole em papel alumÃ­nio e coloque diretamente na grade do forno. Asse por 25 a 30 minutos atÃ© ficar macia - vocÃª deve conseguir perfurar facilmente com um garfo. Assar concentra o sabor doce e cria textura diferente do cozido. Enquanto assa, prepare o leite de coco caseiro: bata 2 colheres de coco fresco ralado com 3 colheres de Ã¡gua morna no liquidificador, coe e reserve - fica mais saudÃ¡vel que o leite de coco industrializado. Quando a batata estiver assada, retire do forno, deixe esfriar um pouco para poder manusear e retire a casca. A polpa estarÃ¡ roxa vibrante. Amasse a polpa ainda morna atÃ© formar purÃª liso. Adicione as 2 colheres de leite de coco morno e misture bem atÃ© ficar cremoso. Adicione uma pitada mÃ­nima de noz moscada ralada na hora - o sabor Ã© suave e aromÃ¡tico. Finalize ralando um pouquinho de casca de limÃ£o siciliano por cima (apenas a parte amarela, nÃ£o a branca que Ã© amarga). Sirva morno.",
    nutrientes: {
      calorias: 125,
      proteina: 2,
      carboidratos: 24,
      gordura: 3,
      ferro: 0.8,
      calcio: 25,
    },
    dicas:
      "A batata doce roxa tem antocianinas (antioxidantes poderosos) que dÃ£o a cor roxa. Assar no forno concentra o sabor adocicado. O leite de coco caseiro Ã© mais nutritivo e sem conservantes. A noz moscada tem propriedades digestivas.",
    foto: null,
    tags: ["antioxidante", "cremoso", "assado", "exÃ³tico"],
  },

  {
    id: 105,
    nome: "Papa de Cenoura com Gengibre Baby",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 cenouras orgÃ¢nicas mÃ©dias",
      "1 raspinha de gengibre fresco (tamanho de unha)",
      "1 colher (chÃ¡) de azeite extravirgem",
      "Salsinha fresca",
    ],
    preparo:
      "Descasque 2 cenouras orgÃ¢nicas mÃ©dias e corte em rodelas finas de meio centÃ­metro. Descasque um pedaÃ§o pequenÃ­ssimo de gengibre fresco (do tamanho de uma unha) e faÃ§a raspinhas bem finas com uma faca afiada - vai usar muito pouco pois o sabor Ã© forte para bebÃªs. Em uma panela pequena, coloque as rodelas de cenoura com Ã¡gua suficiente para cobrir e adicione as raspinhas de gengibre. Leve ao fogo mÃ©dio e cozinhe por 15 a 18 minutos atÃ© as cenouras estarem completamente macias. O gengibre vai perfumar delicadamente a cenoura durante o cozimento. Com uma escumadeira, retire apenas as raspinhas de gengibre e descarte - elas serviram para dar aroma, mas nÃ£o devem ser consumidas pelo bebÃª. Escorra as cenouras (reserve 2 colheres da Ã¡gua do cozimento) e amasse ainda quentes atÃ© formar purÃª liso e alaranjado. Adicione 1 colher de chÃ¡ de azeite extravirgem e misture bem - o azeite ajuda na absorÃ§Ã£o da vitamina A. Se necessÃ¡rio, adicione uma colher da Ã¡gua reservada para ajustar consistÃªncia. Lave e pique finamente folhas frescas de salsinha e polvilhe por cima como decoraÃ§Ã£o. Sirva morno.",
    nutrientes: {
      calorias: 65,
      proteina: 1,
      carboidratos: 12,
      gordura: 2.5,
      ferro: 0.4,
      calcio: 35,
    },
    dicas:
      "O gengibre em quantidade mÃ­nima ajuda a fortalecer o sistema imunolÃ³gico sem irritar o estÃ´mago sensÃ­vel do bebÃª. O azeite extravirgem facilita a absorÃ§Ã£o da vitamina A (lipossolÃºvel). Cenouras orgÃ¢nicas tÃªm sabor mais doce e menos agrotÃ³xicos.",
    foto: null,
    tags: ["imunidade", "vitamina A", "aromÃ¡tico"],
  },

  {
    id: 106,
    nome: "PurÃª de Beterraba com MaÃ§Ã£ e Canela",
    fase: "6-8",
    tempo: 30,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 beterraba pequena",
      "1/2 maÃ§Ã£ fuji",
      "1 pitada de canela em pÃ³",
      "Ãgua",
    ],
    preparo:
      "Lave muito bem 1 beterraba pequena com escovinha para remover toda terra. Descasque com faca afiada - use luvas ou lave as mÃ£os imediatamente pois beterraba mancha muito. Corte em cubos de 2cm. Coloque em panela com Ã¡gua suficiente para cobrir e leve ao fogo mÃ©dio-alto. Beterrabas demoram para cozinhar - deixe por 25 a 30 minutos atÃ© os cubos estarem muito macios. Enquanto a beterraba cozinha, descasque meia maÃ§Ã£ fuji (escolha maÃ§Ã£s doces) e rale usando o lado fino do ralador. Reserve a maÃ§Ã£ ralada. Quando a beterraba estiver macia, escorra e amasse ainda quente atÃ© formar um purÃª de cor roxa/vermelha vibrante. A beterraba tem sabor terroso caracterÃ­stico. Misture a maÃ§Ã£ ralada ao purÃª quente de beterraba - a maÃ§Ã£ vai suavizar o sabor terroso e adicionar doÃ§ura natural. Polvilhe uma pitada bem pequena de canela em pÃ³ por cima e misture delicadamente. A canela realÃ§a o sabor doce. A mistura final terÃ¡ cor roxa linda com pedacinhos claros de maÃ§Ã£. Sirva morno.",
    nutrientes: {
      calorias: 58,
      proteina: 1.8,
      carboidratos: 13,
      gordura: 0.2,
      ferro: 1.2,
      calcio: 20,
    },
    dicas:
      "A beterraba Ã© riquÃ­ssima em Ã¡cido fÃ³lico e ferro. A maÃ§Ã£ suaviza o sabor terroso que algumas crianÃ§as estranha. A cor roxa vibrante Ã© visualmente estimulante. Pode manchar fraldas de roxo - Ã© normal!",
    foto: null,
    tags: ["ferro", "Ã¡cido fÃ³lico", "doce"],
  },

  {
    id: 107,
    nome: "Papa de Inhame com Espinafre e Azeite",
    fase: "6-8",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 inhame mÃ©dio (200g)",
      "4 folhas de espinafre baby",
      "1 colher (chÃ¡) de azeite extravirgem portuguÃªs",
      "Ãgua",
    ],
    preparo:
      "Use luvas ao manusear inhame pois pode causar coceira nas mÃ£os. Descasque 1 inhame mÃ©dio removendo toda casca grossa marrom e corte em cubos de 2cm. Lave os cubos em Ã¡gua corrente. Coloque em panela com Ã¡gua suficiente para cobrir e cozinhe em fogo mÃ©dio por 20 a 25 minutos atÃ© ficar completamente macio - deve desfazer ao pressionar. Enquanto o inhame cozinha, lave muito bem 4 folhas de espinafre baby em Ã¡gua corrente - o espinafre baby Ã© mais tenro e tem sabor mais suave que o normal. Seque e reserve. Quando o inhame estiver macio, escorra e amasse ainda quente atÃ© formar purÃª liso e esbranquiÃ§ado. O inhame tem textura levemente fibrosa, entÃ£o amasse com forÃ§a. Em uma frigideira pequena, aqueÃ§a levemente 1 colher de chÃ¡ de azeite extravirgem portuguÃªs (tem sabor mais suave). Pique fino as folhas de espinafre e adicione ao azeite morno, mexendo por apenas 30 segundos atÃ© murchar - nÃ£o cozinhe demais para manter nutrientes. Adicione o espinafre refogado ao purÃª de inhame e misture bem. A cor ficarÃ¡ verde-clara salpicada. Sirva morno.",
    nutrientes: {
      calorias: 135,
      proteina: 2.5,
      carboidratos: 28,
      gordura: 2.5,
      ferro: 1.8,
      calcio: 50,
    },
    dicas:
      "Inhame Ã© conhecido por fortalecer o sistema imunolÃ³gico - contÃ©m diosgenina. Espinafre baby tem menos Ã¡cido oxÃ¡lico que o normal. O azeite portuguÃªs de primeira prensagem a frio mantÃ©m todos nutrientes.",
    foto: null,
    tags: ["imunidade", "verde", "energia"],
  },

  {
    id: 108,
    nome: "PurÃª de CarÃ¡ com Banana e Aveia",
    fase: "6-8",
    tempo: 25,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "100g de carÃ¡",
      "1/2 banana prata",
      "1 colher (sopa) de aveia baby",
      "Canela em pÃ³",
    ],
    preparo:
      "Descasque 100g de carÃ¡ (pode usar luvas pois irrita a pele) e corte em cubos de 2cm. O carÃ¡ Ã© um tubÃ©rculo branco parecido com inhame mas mais seco. Coloque em panela com Ã¡gua suficiente para cobrir e cozinhe em fogo mÃ©dio por 20 minutos atÃ© ficar bem macio. O carÃ¡ demora um pouco mais que batata para amolecer. Enquanto isso, descasque meia banana prata (escolha uma bem madura com pontinhos) e amasse em um prato. Reserve. Quando o carÃ¡ estiver macio, escorra e amasse ainda quente atÃ© formar purÃª - o carÃ¡ fica mais seco e granulado que batata, entÃ£o amasse bem. Misture a banana amassada ao purÃª de carÃ¡ ainda quente - a banana vai adicionar umidade e doÃ§ura. Adicione 1 colher de sopa de aveia baby (especÃ­fica para bebÃªs, mais fina) e misture bem. A aveia vai absorver lÃ­quido e dar cremosidade. Polvilhe uma pitada de canela em pÃ³ por cima. A consistÃªncia final serÃ¡ espessa e nutritiva. Sirva morno.",
    nutrientes: {
      calorias: 148,
      proteina: 2.5,
      carboidratos: 32,
      gordura: 0.8,
      ferro: 0.7,
      calcio: 22,
    },
    dicas:
      "O carÃ¡ tem digestÃ£o lenta, proporcionando saciedade prolongada. A aveia baby Ã© processada especialmente para bebÃªs. A combinaÃ§Ã£o fornece energia duradoura. Perfeito para bebÃªs que acordam com fome durante a noite.",
    foto: null,
    tags: ["saciedade", "energia", "doce"],
  },

  {
    id: 109,
    nome: "Papa de Mandioquinha com Alho-porÃ³",
    fase: "6-8",
    tempo: 20,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 mandioquinhas mÃ©dias",
      "3cm de alho-porÃ³ (apenas parte branca)",
      "Salsinha fresca",
      "1 fio de azeite",
    ],
    preparo:
      "Descasque 2 mandioquinhas e corte em rodelas grossas de 2cm. Coloque em panela com Ã¡gua suficiente para cobrir e cozinhe em fogo mÃ©dio por 18 a 20 minutos atÃ© ficarem bem macias. Enquanto cozinha, prepare o alho-porÃ³: corte um pedaÃ§o de 3cm da parte branca do alho-porÃ³ (descarte a parte verde que tem sabor muito forte). Lave muito bem entre as camadas pois acumula terra. Pique fino apenas a parte branca - tem sabor suave e levemente adocicado, perfeito para bebÃªs. Em uma frigideira pequena, coloque um fio fino de azeite e aqueÃ§a em fogo baixo. Adicione o alho-porÃ³ picado e refogue por 3 a 4 minutos atÃ© murchar e ficar translÃºcido - nÃ£o deixe dourar. Quando a mandioquinha estiver macia, escorra e amasse ainda quente atÃ© formar purÃª cremoso. A mandioquinha tem cremosidade natural. Misture o alho-porÃ³ refogado ao purÃª. Lave e pique folhas frescas de salsinha e adicione. Misture tudo delicadamente. Sirva morno.",
    nutrientes: {
      calorias: 142,
      proteina: 1.6,
      carboidratos: 32,
      gordura: 2,
      ferro: 0.6,
      calcio: 18,
    },
    dicas:
      "O alho-porÃ³ tem sabor muito mais suave que alho ou cebola - perfeito para introduzir sabores aromÃ¡ticos. Use apenas a parte branca. A mandioquinha dÃ¡ cremosidade natural sem precisar adicionar lÃ­quido.",
    foto: null,
    tags: ["cremoso", "suave", "aromÃ¡tico"],
  },

  {
    id: 110,
    nome: "PurÃª de AbÃ³bora Japonesa com Erva-doce",
    fase: "6-8",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "150g de abÃ³bora japonesa (kabocha)",
      "1 colher (chÃ¡) de sementes de erva-doce",
      "Azeite extravirgem",
      "Ãgua",
    ],
    preparo:
      "PreaqueÃ§a o forno a 180Â°C. Descasque 150g de abÃ³bora japonesa (kabocha) - ela tem casca bem dura, use faca afiada com cuidado. Corte em fatias de 2cm de espessura. Coloque as fatias em uma assadeira levemente untada com azeite e leve ao forno por 25 a 30 minutos atÃ© ficar macia e levemente dourada nas bordas. Assar concentra o sabor adocicado da abÃ³bora japonesa. Enquanto assa, prepare um chÃ¡ leve de erva-doce: ferva 100ml de Ã¡gua, adicione 1 colher de chÃ¡ de sementes de erva-doce, desligue o fogo e deixe em infusÃ£o por 5 minutos tampado. Coe e reserve - esse chÃ¡ ajuda a aliviar cÃ³licas e gases em bebÃªs. Quando a abÃ³bora assada estiver macia, retire do forno e deixe esfriar um pouco. Amasse ainda morna atÃ© formar purÃª liso e alaranjado. A abÃ³bora japonesa Ã© mais seca e doce que outras. UmedeÃ§a o purÃª com 2 a 3 colheres do chÃ¡ de erva-doce morno atÃ© obter consistÃªncia cremosa. Finalize com um fio bem fino de azeite extravirgem. Sirva morno.",
    nutrientes: {
      calorias: 72,
      proteina: 1.5,
      carboidratos: 15,
      gordura: 2,
      ferro: 0.5,
      calcio: 28,
    },
    dicas:
      "A erva-doce (funcho) tem propriedades carminativas que aliviam cÃ³licas e gases - perfeita para bebÃªs. A abÃ³bora japonesa Ã© mais saborosa que outras variedades. Assar no forno realÃ§a o sabor natural.",
    foto: null,
    tags: ["cÃ³lica", "digestÃ£o", "assado"],
  },

  {
    id: 111,
    nome: "Papa de Batata Yacon com PÃªra",
    fase: "6-8",
    tempo: 20,
    dificuldade: "FÃ¡cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: ["1 batata yacon mÃ©dia", "1/2 pÃªra madura", "Canela", "Ãgua"],
    preparo:
      "A batata yacon (ou batata diet) parece muito com batata doce mas tem sabor levemente adocicado e crocante quando crua. Descasque 1 batata yacon mÃ©dia - oxida rÃ¡pido entÃ£o coloque imediatamente em Ã¡gua com algumas gotas de limÃ£o. Corte em cubos de 2cm. Cozinhe em Ã¡gua por 15 a 18 minutos em fogo mÃ©dio atÃ© ficar macia - yacon cozinha mais rÃ¡pido que batata comum. Enquanto cozinha, descasque meia pÃªra bem madura (deve ceder ao apertar levemente) e rale usando ralador grosso. Reserve. Quando a yacon estiver macia, escorra bem e amasse ainda quente. A yacon tem textura mais aquosa que outras batatas. Misture a pÃªra ralada ao purÃª de yacon - a pÃªra adiciona umidade, sabor e fibras. Polvilhe uma pitada mÃ­nima de canela em pÃ³ e misture. A canela combina perfeitamente com pÃªra. A mistura terÃ¡ cor clara cremosa com pedacinhos de pÃªra. NÃ£o precisa adicionar Ã¡gua extra. Sirva morno.",
    nutrientes: {
      calorias: 65,
      proteina: 1,
      carboidratos: 14,
      gordura: 0.2,
      ferro: 0.3,
      calcio: 15,
    },
    dicas:
      "A batata yacon tem baixo Ã­ndice glicÃªmico e Ã© rica em inulina (prebiÃ³tico). Ajuda a regular o aÃ§Ãºcar no sangue e alimenta bactÃ©rias boas do intestino. Sabor levemente adocicado que bebÃªs adoram.",
    foto: null,
    tags: ["baixo IG", "doce natural", "prebiÃ³tico"],
  },

  {
    id: 112,
    nome: "PurÃª Tricolor (Batata + Beterraba + Espinafre)",
    fase: "6-8",
    tempo: 35,
    dificuldade: "DifÃ­cil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: ["1 batata", "1/2 beterraba", "3 folhas espinafre", "Azeite"],
    preparo:
      "Esta receita Ã© visualmente linda e estimula o bebÃª! VocÃª vai fazer 3 purÃªs separados. Descasque 1 batata e corte em cubos. Cozinhe em Ã¡gua por 15 minutos atÃ© macia. Escorra, amasse e reserve em uma tigela. Limpe bem a panela. Descasque meia beterraba pequena (use luvas), corte em cubos e cozinhe em Ã¡gua limpa por 25 minutos atÃ© macia. Escorra, amasse separadamente e coloque em outra tigela. A beterraba fica roxa vibrante. Limpe a panela novamente. Lave 3 folhas de espinafre, pique grosso e escalde em Ã¡gua fervente por apenas 30 segundos. Escorra muito bem apertando para tirar excesso de Ã¡gua. Bata no liquidificador com 1 colher de sopa de Ã¡gua atÃ© virar pasta verde lisa. Coloque em terceira tigela. Agora vocÃª tem 3 purÃªs: branco (batata), roxo (beterraba) e verde (espinafre). Em um prato de servir, monte em camadas ou lado a lado criando um arco-Ã­ris. Finalize com um fio fino de azeite por cima. A apresentaÃ§Ã£o colorida estimula visualmente o bebÃª. Sirva morno misturando tudo.",
    nutrientes: {
      calorias: 95,
      proteina: 2.5,
      carboidratos: 18,
      gordura: 2,
      ferro: 1.5,
      calcio: 40,
    },
    dicas:
      "A apresentaÃ§Ã£o visual colorida estimula o interesse do bebÃª pela comida. Cada cor representa nutrientes diferentes: branco (energia), roxo (antioxidantes), verde (ferro e folato). Ã“timo para fotos!",
    foto: null,
    tags: ["colorido", "visual", "nutritivo"],
  },

  {
    id: 113,
    nome: "Papa de Cenoura Roxa com Gengibre",
    fase: "6-8",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 cenouras roxas",
      "1 raspinha de gengibre (tamanho de unha)",
      "Azeite",
      "HortelÃ£ fresca",
    ],
    preparo:
      "As cenouras roxas sÃ£o mais exÃ³ticas e tÃªm sabor levemente mais adocicado que as laranjas. Descasque 2 cenouras roxas mÃ©dias - a polpa interna pode ser laranja ou roxa. Corte em rodelas de meio centÃ­metro. Descasque um pedacinho minÃºsculo de gengibre fresco (tamanho de unha) e faÃ§a raspas finas. Coloque as rodelas de cenoura em panela com Ã¡gua suficiente para cobrir, adicione as raspinhas de gengibre e cozinhe em fogo mÃ©dio por 20 minutos atÃ© as cenouras ficarem muito macias. O gengibre perfumarÃ¡ delicadamente. Com escumadeira, retire e descarte as raspas de gengibre - serviram para aromatizar. Escorra as cenouras (reserve um pouco da Ã¡gua roxa) e amasse ainda quentes atÃ© formar purÃª liso de cor roxa vibrante. Adicione 1 colher de chÃ¡ de azeite e misture. Se necessÃ¡rio, adicione colheradas da Ã¡gua roxa reservada para ajustar consistÃªncia. Lave 1 folhinha de hortelÃ£ fresca, pique muito finamente e polvilhe por cima. A hortelÃ£ adiciona frescor. Sirva morno.",
    nutrientes: {
      calorias: 68,
      proteina: 1,
      carboidratos: 13,
      gordura: 2.5,
      ferro: 0.5,
      calcio: 38,
    },
    dicas:
      "Cenoura roxa tem ainda mais antioxidantes (antocianinas) que a laranja. O gengibre em quantidade mÃ­nima fortalece imunidade. A cor roxa vibrante Ã© visualmente estimulante para bebÃªs.",
    foto: null,
    tags: ["antioxidante", "exÃ³tico", "colorido"],
  },

  {
    id: 114,
    nome: "PurÃª de Chuchu com Quinoa Real",
    fase: "6-8",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 chuchu",
      "2 colheres de quinoa real",
      "Salsinha",
      "Azeite",
    ],
    preparo:
      "Descasque 1 chuchu pequeno (use luvas se a casca deixar mÃ£os pegajosas), corte ao meio, remova o caroÃ§o central e pique em cubos de 2cm. Coloque em panela com Ã¡gua suficiente para cobrir e cozinhe por 15 minutos atÃ© ficar bem macio. O chuchu tem muita Ã¡gua entÃ£o ficarÃ¡ muito mole. Enquanto isso, prepare a quinoa real: lave 2 colheres de sopa de quinoa real (mistura de quinoa vermelha, preta e branca) em Ã¡gua corrente usando peneira fina para remover a saponina (substÃ¢ncia amarga). Cozinhe a quinoa em 100ml de Ã¡gua por 12 a 15 minutos atÃ© os grÃ£ozinhos abrirem e ficarem translÃºcidos com rabinho branco aparecendo. Escorra o chuchu muito bem, apertando para eliminar excesso de Ã¡gua. Amasse o chuchu atÃ© formar purÃª liso e esbranquiÃ§ado. Misture a quinoa cozida ao purÃª de chuchu. Lave e pique finamente folhas de salsinha fresca e adicione. Finalize com 1 colher de chÃ¡ de azeite e misture tudo. A textura ficarÃ¡ cremosa com grÃ£ozinhos coloridos de quinoa. Sirva morno.",
    nutrientes: {
      calorias: 88,
      proteina: 3,
      carboidratos: 15,
      gordura: 2,
      ferro: 1.8,
      calcio: 25,
    },
    dicas:
      "Quinoa real (tricolor) tem ainda mais nutrientes que a branca. Ã‰ proteÃ­na completa vegetal. O chuchu tem sabor neutro que nÃ£o compete com a quinoa. Leve, nutritivo e colorido.",
    foto: null,
    tags: ["proteÃ­na", "completo", "leve"],
  },

  {
    id: 115,
    nome: "Papa de AbÃ³bora com AmÃªndoas Trituradas",
    fase: "6-8",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "150g abÃ³bora",
      "1 colher (sopa) de amÃªndoas sem pele",
      "Canela",
      "Ãgua",
    ],
    preparo:
      "Descasque 150g de abÃ³bora cabotiÃ¡, remova sementes e corte em fatias de 2cm. Coloque em assadeira levemente untada e asse em forno prÃ©-aquecido a 180Â°C por 25 minutos atÃ© ficar macia e levemente dourada. Assar concentra o sabor doce. Enquanto assa, prepare a farinha de amÃªndoas: coloque 1 colher de sopa de amÃªndoas sem pele (amÃªndoas brancas jÃ¡ descascadas - vendidas assim) em um processador ou liquidificador potente. Bata em pulsos curtos atÃ© virar uma farinha fina - cuidado para nÃ£o bater demais senÃ£o vira pasta. NÃ£o use amÃªndoas inteiras ou em lascas para bebÃªs pelo risco de engasgo. Quando a abÃ³bora assada estiver macia, retire do forno e amasse ainda quente atÃ© formar purÃª liso alaranjado. Adicione a farinha de amÃªndoas ao purÃª quente e misture muito bem atÃ© incorporar completamente. A amÃªndoa vai adicionar cremosidade, proteÃ­na e gorduras boas. Polvilhe uma pitada de canela em pÃ³ por cima. A textura ficarÃ¡ mais espessa e nutritiva. Sirva morno.",
    nutrientes: {
      calorias: 115,
      proteina: 3.5,
      carboidratos: 16,
      gordura: 4.5,
      ferro: 0.8,
      calcio: 42,
    },
    dicas:
      "AmÃªndoas adicionam proteÃ­na vegetal e gorduras monoinsaturadas (boas para o cÃ©rebro). SEMPRE triture atÃ© virar farinha fina - nunca ofereÃ§a pedaÃ§os inteiros pelo risco de engasgo. Rico em vitamina E.",
    foto: null,
    tags: ["oleaginosa", "proteÃ­na", "gordura boa"],
  },

  // ========================================
  // ðŸ‘‘ RECEITAS PREMIUM - FASE 8-10 MESES (10)
  // ========================================

  {
    id: 201,
    nome: "Risoto de Quinoa com Frango OrgÃ¢nico e BrÃ³colis",
    fase: "8-10",
    tempo: 40,
    dificuldade: "DifÃ­cil",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "3 colheres (sopa) de quinoa em grÃ£os",
      "80g de peito de frango orgÃ¢nico",
      "5 florzinhas de brÃ³colis ninja",
      "1/2 tomate sem pele e sem semente",
      "1 colher (chÃ¡) de cebola roxa picada",
      "2cm de alho-porÃ³",
      "Azeite extravirgem portuguÃªs",
      "ManjericÃ£o fresco",
      "300ml de caldo de legumes caseiro",
    ],
    preparo:
      "Esta Ã© uma receita gourmet que leva tempo mas vale a pena! Primeiro prepare um caldo de legumes caseiro fervendo cenoura, cebola e aipo em 400ml de Ã¡gua por 20 minutos. Coe e reserve 300ml do caldo quente. Em uma panela mÃ©dia, aqueÃ§a 1 colher de chÃ¡ de azeite portuguÃªs em fogo baixo. Adicione 1 colher de chÃ¡ de cebola roxa picadinha (mais suave) e 2cm de alho-porÃ³ picado. Refogue por 2 minutos atÃ© murchar. Corte 80g de peito de frango orgÃ¢nico em cubinhos de meio centÃ­metro e adicione na panela. Refogue por 5 minutos atÃ© o frango ficar branco. Lave 3 colheres de quinoa em grÃ£os em peneira fina e adicione ao frango. Refogue a quinoa por 2 minutos mexendo - ela vai ficar levemente translÃºcida. Agora vem a parte do risoto: adicione o caldo quente aos poucos, uma concha por vez, mexendo sempre. SÃ³ adicione mais caldo quando o anterior secar. Esse processo demora 20 minutos mas cria textura cremosa. Enquanto o risoto cozinha, cozinhe 5 florzinhas pequenas de brÃ³colis ninja (mais macio) no vapor por 5 minutos e pique fino. Retire pele e sementes de meio tomate e pique. Quando a quinoa estiver macia e cremosa, incorpore o brÃ³colis e tomate. Finalize com folhas frescas de manjericÃ£o picadas. Sirva morno.",
    nutrientes: {
      calorias: 245,
      proteina: 22,
      carboidratos: 28,
      gordura: 5,
      ferro: 3.2,
      calcio: 65,
    },
    dicas:
      "Este risoto cremoso nÃ£o usa laticÃ­nios - a cremosidade vem da tÃ©cnica de adicionar caldo aos poucos. Quinoa Ã© proteÃ­na completa. Frango orgÃ¢nico tem menos hormÃ´nios. BrÃ³colis ninja Ã© variedade baby mais macia.",
    foto: null,
    tags: ["gourmet", "proteÃ­na completa", "cremoso", "superalimento"],
  },

  {
    id: 202,
    nome: "Bolinho de Carne com Batata Doce e Chia",
    fase: "8-10",
    tempo: 35,
    dificuldade: "MÃ©dia",
    categoria: "ProteÃ­na",
    premium: true,
    ingredientes: [
      "100g de carne moÃ­da orgÃ¢nica (patinho)",
      "1 batata doce pequena cozida",
      "1 colher (sopa) de chia hidratada",
      "Cenoura ralada fininha",
      "Salsinha picada",
      "Cebola roxa",
    ],
    preparo:
      "Comece hidratando 1 colher de sopa de sementes de chia em 3 colheres de Ã¡gua por 10 minutos atÃ© virar gel - isso substitui ovo como ligante. Cozinhe 1 batata doce pequena atÃ© ficar macia, descasque e amasse bem. Reserve. Em uma tigela grande, coloque 100g de carne moÃ­da orgÃ¢nica magra (escolha patinho que Ã© mais magro), o purÃª de batata doce, a chia hidratada (vai estar gelatinosa), 2 colheres de cenoura ralada bem fina, 1 colher de chÃ¡ de cebola roxa picadinha e salsinha fresca picada. Misture tudo muito bem com as mÃ£os atÃ© incorporar completamente - a mistura deve ficar Ãºmida mas firme. Se estiver muito mole, adicione 1 colher de farinha de aveia. Com as mÃ£os levemente Ãºmidas, forme bolinhos pequenos do tamanho de uma noz. PreaqueÃ§a o forno a 180Â°C. Coloque os bolinhos em assadeira forrada com papel manteiga, sem untar. Asse por 20 minutos. Na metade do tempo (10min), vire os bolinhos para dourar dos dois lados. Devem ficar levemente dourados e firmes. Sirva morno - formato perfeito para bebÃª pegar com as mÃ£os (BLW).",
    nutrientes: {
      calorias: 185,
      proteina: 18,
      carboidratos: 15,
      gordura: 6,
      ferro: 2.8,
      calcio: 48,
    },
    dicas:
      "Chia hidratada substitui ovo como ligante e adiciona Ã´mega 3. Formato de bolinho incentiva autonomia (pegar com a mÃ£o). Asse sem Ã³leo - a prÃ³pria carne tem gordura suficiente. Pode congelar em porÃ§Ãµes.",
    foto: null,
    tags: ["finger food", "BLW", "Ã´mega 3", "ferro"],
  },

  {
    id: 203,
    nome: "Sopa Cremosa de Lentilha Vermelha com CÃºrcuma",
    fase: "8-10",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Vegetariana",
    premium: true,
    ingredientes: [
      "1/2 xÃ­cara de lentilha vermelha",
      "1 cenoura",
      "1 batata",
      "1 pitada de cÃºrcuma (aÃ§afrÃ£o-da-terra)",
      "Raspinha de gengibre fresco (tamanho de unha)",
      "2 colheres (sopa) de leite de coco",
      "Coentro fresco",
    ],
    preparo:
      "A lentilha vermelha Ã© especial porque cozinha rÃ¡pido e se desfaz naturalmente criando textura cremosa. Lave meia xÃ­cara de lentilha vermelha em Ã¡gua corrente. Em uma panela mÃ©dia, coloque a lentilha com 400ml de Ã¡gua e leve ao fogo mÃ©dio. Enquanto comeÃ§a a cozinhar, descasque e pique em cubos pequenos 1 cenoura e 1 batata. Adicione os legumes na panela com a lentilha. Adicione tambÃ©m uma pitada bem pequena de cÃºrcuma em pÃ³ (aÃ§afrÃ£o-da-terra - tem propriedades anti-inflamatÃ³rias) e raspas mÃ­nimas de gengibre fresco (tamanho de unha). Cozinhe tudo junto por 20 a 25 minutos mexendo ocasionalmente. A lentilha vermelha vai se desfazer e engrossar a sopa naturalmente. Quando estiver bem cozido e cremoso, transfira para um liquidificador e bata atÃ© obter consistÃªncia de creme liso e alaranjado. Volte para a panela, adicione 2 colheres de leite de coco e mexa bem em fogo baixo por 2 minutos. Lave folhas frescas de coentro, pique finamente e polvilhe por cima ao servir. Sirva morno.",
    nutrientes: {
      calorias: 168,
      proteina: 11,
      carboidratos: 26,
      gordura: 3.5,
      ferro: 4.2,
      calcio: 35,
    },
    dicas:
      "Lentilha vermelha cozinha em 20min (nÃ£o precisa molho). CÃºrcuma tem curcumina (anti-inflamatÃ³rio natural). O gengibre fortalece imunidade. Leite de coco adiciona cremosidade e gorduras boas. Sopa fica linda alaranjada!",
    foto: null,
    tags: ["vegetariano", "anti-inflamatÃ³rio", "cremoso", "ferro"],
  },

  {
    id: 204,
    nome: "Frango Desfiado com PurÃª de Mandioquinha e Shimeji",
    fase: "8-10",
    tempo: 35,
    dificuldade: "DifÃ­cil",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "80g de peito de frango orgÃ¢nico",
      "3 mandioquinhas mÃ©dias",
      "50g de cogumelo shimeji baby",
      "2cm de alho-porÃ³",
      "Azeite trufado (gotas)",
      "Tomilho fresco",
    ],
    preparo:
      "Cozinhe 80g de peito de frango orgÃ¢nico em Ã¡gua por 20 minutos atÃ© ficar completamente cozido. Retire, deixe esfriar um pouco e desfie em fios bem finos com as mÃ£os ou dois garfos. Reserve. Descasque 3 mandioquinhas, corte em rodelas e cozinhe em Ã¡gua por 20 minutos atÃ© ficarem muito macias. Enquanto isso, limpe 50g de cogumelo shimeji baby (variedade pequena e mais macia): corte a base que prende os cogumelos e separe em pedaÃ§os pequenos. Lave rapidamente (cogumelo absorve muita Ã¡gua). Pique 2cm de alho-porÃ³ fininho (sÃ³ parte branca). Em uma frigideira pequena, aqueÃ§a 1 colher de chÃ¡ de azeite comum, refogue o alho-porÃ³ por 1 minuto, adicione o shimeji e refogue por 3 a 4 minutos atÃ© murchar. O shimeji tem sabor suave e umami. Quando a mandioquinha estiver macia, escorra e amasse atÃ© formar purÃª cremoso e aveludado. No prato, coloque uma base generosa de purÃª de mandioquinha. Por cima, espalhe o frango desfiado. Distribua o shimeji refogado. Finalize com 2 a 3 gotas de azeite trufado (tem sabor forte, use pouco) e folhinhas de tomilho fresco. Sirva morno.",
    nutrientes: {
      calorias: 215,
      proteina: 20,
      carboidratos: 24,
      gordura: 5,
      ferro: 1.5,
      calcio: 28,
    },
    dicas:
      "Shimeji baby Ã© mais macio e tem sabor umami suave. Azeite trufado em gotas dÃ¡ toque gourmet mas use com moderaÃ§Ã£o (sabor forte). Tomilho fresco Ã© aromÃ¡tico. ApresentaÃ§Ã£o de restaurante!",
    foto: null,
    tags: ["gourmet", "cogumelos", "proteÃ­na", "aromÃ¡tico"],
  },

  {
    id: 205,
    nome: "Mini HambÃºrguer de SalmÃ£o com Abacate",
    fase: "8-10",
    tempo: 25,
    dificuldade: "MÃ©dia",
    categoria: "ProteÃ­na",
    premium: true,
    ingredientes: [
      "100g de salmÃ£o fresco sem pele",
      "1/4 de abacate maduro",
      "1 colher (sopa) de aveia em flocos",
      "Endro fresco (dill)",
      "Suco de limÃ£o siciliano",
    ],
    preparo:
      "Use apenas salmÃ£o fresco e de qualidade - nunca defumado para bebÃªs. Remova qualquer pele e espinhas do filÃ© de salmÃ£o. Inspecione bem passando os dedos. Corte 100g de salmÃ£o em cubos pequenos. Coloque em um processador de alimentos e pulse algumas vezes atÃ© picar grosseiramente - nÃ£o deixe virar pasta, deve ter pequenos pedaÃ§os visÃ­veis. Transfira para uma tigela. Adicione 1 colher de sopa de aveia em flocos finos e folhas frescas de endro (dill) picadas - endro combina perfeitamente com salmÃ£o. Misture bem. A aveia vai absorver umidade e ajudar a ligar. Com as mÃ£os levemente Ãºmidas, forme mini hambÃºrgueres pequenos (tamanho de uma moeda grande) - devem ser finos para cozinhar bem. PreaqueÃ§a o forno a 180Â°C. Coloque os mini hambÃºrgueres em assadeira forrada com papel manteiga. Asse por 12 a 15 minutos atÃ© ficarem firmes e levemente dourados. Enquanto assam, amasse 1/4 de abacate maduro com algumas gotas de limÃ£o siciliano. Quando os hambÃºrgueres estiverem prontos, sirva acompanhados do abacate amassado. BebÃª pode pegar com as mÃ£os. Sirva morno.",
    nutrientes: {
      calorias: 198,
      proteina: 18,
      carboidratos: 8,
      gordura: 11,
      ferro: 0.8,
      calcio: 25,
    },
    dicas:
      "SalmÃ£o Ã© riquÃ­ssimo em Ã´mega 3 DHA (essencial para desenvolvimento do cÃ©rebro). Abacate tem gorduras monoinsaturadas saudÃ¡veis. Endro (dill) Ã© erva aromÃ¡tica que combina perfeitamente. Formato finger food estimula autonomia.",
    foto: null,
    tags: ["Ã´mega 3", "DHA", "finger food", "gourmet"],
  },

  {
    id: 206,
    nome: "Cuscuz Marroquino com Frango e TÃ¢maras",
    fase: "8-10",
    tempo: 30,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "3 colheres (sopa) de cuscuz marroquino",
      "60g de frango",
      "2 tÃ¢maras sem caroÃ§o",
      "Cenoura ralada",
      "Canela em pÃ³",
      "Azeite",
    ],
    preparo:
      "O cuscuz marroquino Ã© diferente do cuscuz nordestino - sÃ£o grÃ£os pequenos de semolina que preparam rapidamente. Coloque 3 colheres de sopa de cuscuz marroquino em uma tigela. Ferva 100ml de Ã¡gua e despeje sobre o cuscuz. Tampe com prato e deixe hidratar por 5 minutos - o cuscuz vai absorver toda Ã¡gua e ficar fofinho. Solte com garfo. Enquanto hidrata, cozinhe 60g de frango em cubinhos pequenos em Ã¡gua por 15 minutos. Escorra e desfie fininho. Pegue 2 tÃ¢maras medjool sem caroÃ§o (mais macias e doces) e pique em pedacinhos bem pequenos - tÃ¢maras sÃ£o muito doces naturalmente e grudentas, corte com cuidado. Rale finamente um pedaÃ§o de cenoura. Em uma tigela, misture o cuscuz hidratado, o frango desfiado, os pedacinhos de tÃ¢mara e a cenoura ralada. Adicione uma pitada mÃ­nima de canela em pÃ³ e 1 colher de chÃ¡ de azeite. Misture tudo delicadamente - a textura deve ficar soltinha com pontos coloridos. O sabor serÃ¡ levemente adocicado das tÃ¢maras. Sirva em temperatura ambiente ou morno.",
    nutrientes: {
      calorias: 195,
      proteina: 16,
      carboidratos: 28,
      gordura: 3,
      ferro: 1.2,
      calcio: 30,
    },
    dicas:
      "Cuscuz marroquino prepara em apenas 5 minutos! TÃ¢maras dÃ£o doÃ§ura natural intensa - use apenas 2. Sabor exÃ³tico do Oriente MÃ©dio expande o paladar do bebÃª. Canela combina perfeitamente com tÃ¢maras.",
    foto: null,
    tags: ["exÃ³tico", "rÃ¡pido", "doce natural"],
  },

  {
    id: 207,
    nome: "Nhoque de Batata Baroa com Molho de Tomate Caseiro",
    fase: "8-10",
    tempo: 45,
    dificuldade: "DifÃ­cil",
    categoria: "Massas",
    premium: true,
    ingredientes: [
      "3 batatas baroa mÃ©dias",
      "3 colheres (sopa) de farinha de arroz",
      "1 gema de ovo",
      "4 tomates maduros",
      "ManjericÃ£o fresco",
      "Azeite",
    ],
    preparo:
      "Esta receita tem trabalho mas o resultado Ã© lindo! Cozinhe 3 batatas baroa com casca em Ã¡gua por 20 minutos atÃ© ficarem macias. Escorra, deixe esfriar um pouco, descasque e amasse ainda mornas atÃ© virar purÃª bem liso e sem grumos - Ã© importante amassar enquanto quente. Deixe o purÃª esfriar atÃ© morno. Adicione ao purÃª: 1 gema de ovo (reserve clara para outro uso) e 3 colheres de farinha de arroz (sem glÃºten). Misture com as mÃ£os atÃ© formar uma massa macia e levemente grudenta - nÃ£o adicione mais farinha senÃ£o fica duro. Enfarinhe levemente uma superfÃ­cie e divida a massa em 4 porÃ§Ãµes. Role cada porÃ§Ã£o formando rolinhos compridos de 1cm de espessura. Corte os rolinhos em pedacinhos de 2cm - esses sÃ£o os nhoques. Opcional: pressione levemente cada nhoque com um garfo para fazer desenhos. Enquanto faz os nhoques, prepare molho simples: pique 4 tomates maduros sem pele, refogue em 1 colher de azeite por 10 minutos com manjericÃ£o fresco. Amasse atÃ© virar molho grosso. Ferva Ã¡gua em panela grande, adicione os nhoques e cozinhe por 2 a 3 minutos - quando subirem Ã  superfÃ­cie estÃ£o prontos. Retire com escumadeira, misture com molho. Sirva morno.",
    nutrientes: {
      calorias: 175,
      proteina: 5,
      carboidratos: 32,
      gordura: 3.5,
      ferro: 1,
      calcio: 35,
    },
    dicas:
      "Batata baroa deixa nhoque amarelinho e mais nutritivo. Farinha de arroz torna sem glÃºten. Formato divertido estimula bebÃª. Quando sobem na Ã¡gua estÃ£o prontos! Pode congelar nhoques crus.",
    foto: null,
    tags: ["massa", "sem glÃºten", "caseiro", "italiano"],
  },

  {
    id: 208,
    nome: "Escondidinho de Carne com PurÃª de AbÃ³bora",
    fase: "8-10",
    tempo: 40,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "100g de carne moÃ­da magra",
      "200g de abÃ³bora",
      "1/2 tomate",
      "Cebola roxa",
      "Cenoura ralada",
      "1 colher (chÃ¡) de queijo minas ralado (opcional)",
    ],
    preparo:
      "PreaqueÃ§a o forno a 180Â°C. Para o recheio: em uma panela, refogue 1 colher de chÃ¡ de cebola roxa picada em um fio de Ã¡gua. Adicione 100g de carne moÃ­da magra e mexa para desfazer. Cozinhe por 5 minutos. Adicione meio tomate picado sem pele e 2 colheres de cenoura ralada fina. Cozinhe mais 10 minutos atÃ© a carne estar bem cozida e os legumes macios. A mistura deve ficar Ãºmida mas nÃ£o ensopada. Reserve. Para o purÃª: descasque 200g de abÃ³bora, corte em cubos e cozinhe em Ã¡gua por 20 minutos atÃ© bem macia. Escorra e amasse atÃ© formar purÃª liso alaranjado. A abÃ³bora tem doÃ§ura natural que equilibra o sabor da carne. Em um refratÃ¡rio pequeno untado levemente com azeite, monte camadas: primeiro coloque metade do purÃª de abÃ³bora no fundo, espalhe toda carne por cima, cubra com o restante do purÃª de abÃ³bora. Alise a superfÃ­cie. Se quiser, polvilhe 1 colher de chÃ¡ de queijo minas ralado por cima (opcional). Leve ao forno por 15 minutos atÃ© aquecer e dourar levemente a superfÃ­cie. Deixe esfriar 5 minutos antes de servir. Sirva morno.",
    nutrientes: {
      calorias: 210,
      proteina: 18,
      carboidratos: 22,
      gordura: 6,
      ferro: 2.5,
      calcio: 45,
    },
    dicas:
      "ApresentaÃ§Ã£o bonita em camadas estimula apetite. AbÃ³bora dÃ¡ doÃ§ura que equilibra sabor da carne. Pode fazer em porÃ§Ãµes individuais em forminha de muffin. Congela muito bem.",
    foto: null,
    tags: ["gratinado", "completo", "congelÃ¡vel"],
  },

  {
    id: 209,
    nome: "Sopa de Frango com MacarrÃ£o de Arroz e Legumes",
    fase: "8-10",
    tempo: 35,
    dificuldade: "MÃ©dia",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "80g de peito de frango",
      "30g de macarrÃ£o de arroz (ninho)",
      "Cenoura, abobrinha, batata picadas",
      "2 folhas de couve",
      "Salsinha",
      "Azeite",
    ],
    preparo:
      "Em uma panela mÃ©dia, coloque 80g de peito de frango em cubos com 500ml de Ã¡gua e leve ao fogo mÃ©dio. Deixe cozinhar por 15 minutos atÃ© o frango ficar macio e o lÃ­quido virar um caldo saboroso. Enquanto o frango cozinha, descasque e pique bem pequeno: meia cenoura, um pedaÃ§o de abobrinha e uma batata pequena - cubos de meio centÃ­metro. Quando o frango estiver cozido, retire com escumadeira, deixe esfriar e desfie em fios bem finos. Retorne o frango desfiado para o caldo. Adicione todos os legumes picados no caldo fervendo. Cozinhe por 12 minutos atÃ© os legumes ficarem macios. O macarrÃ£o de arroz Ã© sem glÃºten e cozinha rÃ¡pido: quebre um ninho pequeno de macarrÃ£o de arroz em pedaÃ§os menores (facilita para o bebÃª comer). Adicione o macarrÃ£o quebrado na sopa e cozinhe por apenas 3 a 4 minutos - macarrÃ£o de arroz cozinha muito rÃ¡pido, nÃ£o deixe passar. Lave 2 folhas de couve, retire o talo, pique fino e adicione nos Ãºltimos 2 minutos. A couve deve murchar mas manter cor verde. Finalize com salsinha picada e 1 colher de chÃ¡ de azeite. A sopa deve ficar encorpada e colorida. Sirva morna.",
    nutrientes: {
      calorias: 195,
      proteina: 17,
      carboidratos: 24,
      gordura: 4,
      ferro: 1.8,
      calcio: 45,
    },
    dicas:
      "MacarrÃ£o de arroz Ã© sem glÃºten e tem textura macia perfeita para bebÃªs. Cozinha em 3min - nÃ£o deixe passar. Sopa completa com proteÃ­na, carboidrato e vegetais coloridos. Conforto em tigela!",
    foto: null,
    tags: ["sopa", "sem glÃºten", "completo", "conforto"],
  },

  {
    id: 210,
    nome: "Panqueca de Banana com Aveia e Ovo",
    fase: "8-10",
    tempo: 15,
    dificuldade: "FÃ¡cil",
    categoria: "Lanche",
    premium: true,
    ingredientes: [
      "1 banana madura grande",
      "1 ovo inteiro",
      "2 colheres (sopa) de aveia em flocos finos",
      "Canela em pÃ³",
      "Ã“leo de coco para untar",
    ],
    preparo:
      "Esta receita tem apenas 3 ingredientes principais! Descasque 1 banana madura grande (com pontinhos marrons - mais doce) e coloque em uma tigela. Amasse muito bem com garfo atÃ© virar pasta lisa sem grumos. Quebre 1 ovo inteiro e adicione Ã  banana amassada. Misture bem com garfo ou batedor pequeno atÃ© incorporar completamente - a mistura vai ficar lÃ­quida. Adicione 2 colheres de sopa de aveia em flocos finos (nÃ£o use aveia grossa) e misture. A aveia vai absorver um pouco do lÃ­quido. Polvilhe uma pitada de canela em pÃ³ e misture. Deixe a massa descansar 5 minutos para a aveia hidratar - ficarÃ¡ mais espessa. AqueÃ§a uma frigideira antiaderente em fogo mÃ©dio-baixo. Unte levemente com Ã³leo de coco (apenas uma passada). Com uma colher, coloque porÃ§Ãµes pequenas da massa na frigideira formando mini panquecas (tamanho de uma moeda grande). Cozinhe por 2 minutos de um lado atÃ© fazer bolhinhas, vire com espÃ¡tula e cozinhe mais 2 minutos do outro lado. Devem ficar douradas mas macias. FaÃ§a vÃ¡rias mini panquecas. Sirva morno - formato perfeito para bebÃª pegar com a mÃ£o.",
    nutrientes: {
      calorias: 165,
      proteina: 7,
      carboidratos: 24,
      gordura: 5,
      ferro: 1.2,
      calcio: 35,
    },
    dicas:
      "Apenas 3 ingredientes! Sem farinha, sem aÃ§Ãºcar, sem leite. Banana madura dÃ¡ toda doÃ§ura. Formato finger food estimula autonomia. Ã“timo para cafÃ© da manhÃ£ ou lanche. Pode congelar.",
    foto: null,
    tags: ["cafÃ© da manhÃ£", "BLW", "rÃ¡pido", "3 ingredientes"],
  },
];

export default receitas;

