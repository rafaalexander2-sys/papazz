// 🍼 BANCO DE RECEITAS PAPAZZ
// 45 receitas: 20 grátis + 25 premium
// ✅ IMAGENS ATUALIZADAS - Pexels/Pixabay

export const receitas = [
  // ========================================
  // 🆓 RECEITAS GRÁTIS - FASE 6-8 MESES (10)
  // ========================================

  {
    id: 1,
    nome: "Papa de Batata-doce",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: ["200g de batata-doce", "200ml de água filtrada"],
    preparo:
      "Comece descascando a batata-doce e cortando em cubos de aproximadamente 2cm para garantir cozimento uniforme. Coloque os cubos em uma panela pequena com 200ml de água filtrada e leve ao fogo médio. Deixe cozinhar por 15 a 20 minutos até que a batata esteja bem macia - você deve conseguir espetar facilmente com um garfo. Escorra a água (reserve 2 colheres caso precise ajustar a consistência) e transfira a batata ainda quente para um prato fundo. Com um garfo, amasse vigorosamente até formar um purê homogêneo e sem grumos. Para bebês de 6 meses, adicione um pouco da água do cozimento para deixar mais líquido; para 8 meses, pode manter mais espesso. Sempre teste a temperatura no dorso da mão antes de servir - deve estar morno, nunca quente.",
    nutrientes: {
      calorias: 86,
      proteina: 1.6,
      carboidratos: 20,
      gordura: 0.1,
      ferro: 0.6,
      calcio: 30,
    },
    dicas:
      "A batata-doce é rica em betacaroteno, que o corpo transforma em vitamina A, essencial para a visão e imunidade do bebê. Seu sabor naturalmente doce agrada na introdução alimentar. Não adicione sal ou açúcar - o paladar do bebê está se formando.",
    foto: null,
    tags: ["primeira papa", "vegetais", "doce natural"],
  },

  {
    id: 2,
    nome: "Purê de Abóbora",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "150g de abóbora cabotiá ou japonesa",
      "Água suficiente para cobrir",
    ],
    preparo:
      "Descasque 150g de abóbora, removendo também as sementes e fibras do centro. Corte em cubos de tamanho médio (aproximadamente 3cm) para facilitar o cozimento. Coloque em uma panela com água suficiente para cobrir os pedaços e leve ao fogo médio-alto. Cozinhe por 20 a 25 minutos, até que a abóbora esteja completamente macia e se desfaça ao pressionar com o garfo. Escorra bem a água e transfira para um prato ou tigela. Amasse energicamente com garfo ou passe pelo processador se quiser textura mais lisa. A abóbora tem bastante água natural, então não precisa adicionar líquido extra na maioria dos casos. Se necessário ajustar a consistência, use uma ou duas colheres da própria água do cozimento. Sirva em temperatura morna.",
    nutrientes: {
      calorias: 26,
      proteina: 1,
      carboidratos: 6.5,
      gordura: 0.1,
      ferro: 0.8,
      calcio: 21,
    },
    dicas:
      "A abóbora tem sabor naturalmente doce e suave que os bebês adoram. É rica em vitamina A e fibras, ajudando no funcionamento intestinal. Prefira abóbora cabotiá ou japonesa, que são mais secas e saborosas.",
    foto: null,
    tags: ["vegetais", "fácil digestão", "vitamina A"],
  },

  {
    id: 3,
    nome: "Papa de Cenoura",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 cenoura média (aproximadamente 100g)",
      "Água para cozimento",
    ],
    preparo:
      "Lave bem a cenoura em água corrente, esfregando para remover impurezas. Descasque com um descascador de legumes e corte em rodelas de cerca de 1cm de espessura - rodelas finas cozinham mais rápido e de forma uniforme. Coloque as rodelas em uma panela pequena, cubra com água e leve ao fogo médio. Cozinhe por 15 a 20 minutos até que as rodelas estejam bem macias. Você pode testar espetando com um garfo - deve entrar sem resistência. Escorra a água e amasse as rodelas ainda quentes com um garfo, fazendo movimentos circulares até obter uma papa lisa e homogênea. Se preferir textura mais cremosa, use um mixer ou processador por alguns segundos. Para ajustar a consistência, adicione colheradas pequenas da água do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 41,
      proteina: 0.9,
      carboidratos: 9.6,
      gordura: 0.2,
      ferro: 0.3,
      calcio: 33,
    },
    dicas:
      "A cenoura é riquíssima em vitamina A (betacaroteno), fundamental para a visão e desenvolvimento do bebê. Sua cor alaranjada vibrante chama atenção e estimula visualmente. Cenouras orgânicas têm sabor mais adocicado.",
    foto: null,
    tags: ["vegetais", "vitamina A", "cor vibrante"],
  },

  {
    id: 4,
    nome: "Banana Amassada",
    fase: "6-8",
    tempo: 5,
    dificuldade: "Fácil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["1/2 banana nanica ou prata bem madura"],
    preparo:
      "Escolha uma banana bem madura - aquelas com pontinhos marrons na casca são perfeitas, pois têm mais açúcar natural e são mais fáceis de digerir. Descasque meia banana e coloque em um prato limpo. Com um garfo, pressione a banana fazendo movimentos de esmagamento até formar uma pasta cremosa e sem pedaços grandes. Para bebês de 6 meses, amasse até ficar bem lisinho. Para 8 meses, pode deixar alguns gruminhos pequenos para estimular a mastigação. A banana oxida rapidamente (fica marrom ao contato com o ar), por isso prepare e sirva imediatamente. Se demorar mais de 5 minutos, pinga algumas gotas de limão para evitar oxidação. Não precisa aquecer nem cozinhar - sirva em temperatura ambiente.",
    nutrientes: {
      calorias: 89,
      proteina: 1.1,
      carboidratos: 23,
      gordura: 0.3,
      ferro: 0.3,
      calcio: 5,
    },
    dicas:
      "Banana é fonte rápida de energia, rica em potássio e fibras solúveis que ajudam o intestino. Escolha sempre bananas bem maduras - as verdes podem causar constipação. É uma das primeiras frutas oferecidas pela facilidade de preparo.",
    foto: null,
    tags: ["frutas", "rápido", "energia", "potássio"],
  },

  {
    id: 5,
    nome: "Papa de Mandioquinha",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "2 mandioquinhas médias (batata-baroa)",
      "Água para cozimento",
    ],
    preparo:
      "Lave as mandioquinhas em água corrente, esfregando para remover toda terra. Descasque cuidadosamente com faca afiada - a casca é fina mas grudenta. Corte em rodelas grossas de aproximadamente 2cm. Coloque em panela média com água suficiente para cobrir completamente e leve ao fogo alto. Quando começar a ferver, reduza para fogo médio e cozinhe por 20 a 25 minutos. A mandioquinha está pronta quando você conseguir atravessar facilmente com um garfo e ela começar a se desfazer. Escorra bem, pois a mandioquinha absorve bastante água. Transfira ainda quente para um prato e amasse vigorosamente com garfo - ela tem textura naturalmente cremosa e aveludada. Não precisa adicionar líquido, mas se achar necessário, use uma colher da água do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 133,
      proteina: 1.4,
      carboidratos: 32,
      gordura: 0.2,
      ferro: 0.5,
      calcio: 15,
    },
    dicas:
      "Mandioquinha (ou batata-baroa) é excelente fonte de energia para bebês ativos. Tem digestão fácil e textura naturalmente cremosa que dispensa adição de líquidos. Rico em vitaminas do complexo B.",
    foto: null,
    tags: ["vegetais", "energia", "cremoso"],
  },

  {
    id: 6,
    nome: "Purê de Chuchu",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 chuchu pequeno (aproximadamente 150g)",
      "Água para cozimento",
    ],
    preparo:
      "Lave bem o chuchu em água corrente. Descasque com descascador de legumes - a casca do chuchu pode deixar as mãos pegajosas, por isso algumas pessoas preferem usar luvas. Corte ao meio e remova o miolo central (o caroço). Pique em cubos de aproximadamente 2cm. Coloque em uma panela pequena, cubra com água e leve ao fogo médio. Cozinhe por 15 a 20 minutos até ficar bem macio. O chuchu tem bastante água, então ficará muito mole quando estiver pronto. Escorra muito bem, pressionando levemente com uma colher para eliminar excesso de água. Amasse com garfo até formar um purê homogêneo. Como o chuchu tem sabor muito suave (quase neutro), é ótimo para misturar com outros vegetais mais tarde. Sirva morno.",
    nutrientes: {
      calorias: 19,
      proteina: 0.8,
      carboidratos: 4.5,
      gordura: 0.1,
      ferro: 0.3,
      calcio: 17,
    },
    dicas:
      "Chuchu é um dos vegetais mais leves e de fácil digestão, ideal para bebês com intestino sensível. Tem alto teor de água e ajuda na hidratação. Sabor neutro é ótimo para combinar com outros alimentos.",
    foto: null,
    tags: ["vegetais", "leve", "fácil digestão"],
  },

  {
    id: 7,
    nome: "Maçã Raspada",
    fase: "6-8",
    tempo: 5,
    dificuldade: "Fácil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["1/2 maçã fuji ou gala"],
    preparo:
      "Escolha uma maçã fresca, de preferência orgânica. Lave muito bem em água corrente, esfregando a casca para remover qualquer resíduo. Não precisa descascar - a casca tem fibras importantes. Corte a maçã ao meio e remova as sementes e o miolo duro do centro. Segure firme a metade da maçã com uma mão e, com uma colher de sopa, raspe a polpa fazendo movimentos leves e curtos. A maçã raspada vai formando uma pasta fina e aerada. Raspe apenas o suficiente para uma porção, pois a maçã oxida muito rápido e fica marrom em poucos minutos. Sirva imediatamente após raspar. Se precisar esperar alguns minutos, pingue 2 gotas de limão para evitar oxidação. A textura raspada é perfeita para bebês que ainda estão se acostumando com sólidos.",
    nutrientes: {
      calorias: 52,
      proteina: 0.3,
      carboidratos: 14,
      gordura: 0.2,
      ferro: 0.1,
      calcio: 6,
    },
    dicas:
      "Maçã raspada tem textura aerada e leve, perfeita para iniciantes. Rica em fibras solúveis (pectina) que ajudam a regular o intestino. Sempre sirva na hora pois oxida rapidamente. Maçãs mais doces (fuji, gala) são preferíveis.",
    foto: null,
    tags: ["frutas", "rápido", "fibras"],
  },

  {
    id: 8,
    nome: "Papa de Inhame",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: [
      "1 inhame pequeno (aproximadamente 150g)",
      "Água para cozimento",
    ],
    preparo:
      "O inhame tem casca bem grossa e pode deixar as mãos coçando, então use luvas ao manipular. Lave bem o inhame em água corrente com escovinha para remover toda terra. Descasque com faca afiada, removendo uma camada generosa da casca. Corte em cubos de aproximadamente 2cm - cubos menores cozinham mais rápido. Coloque em panela com água suficiente para cobrir e leve ao fogo alto. Assim que ferver, reduza para fogo médio e cozinhe por 20 a 25 minutos. O inhame está pronto quando você conseguir esmagar um cubo facilmente entre os dedos. Escorra bem a água e amasse ainda quente com um garfo até formar purê liso. O inhame tem textura levemente fibrosa, então amasse bem para quebrar as fibras. Se necessário, adicione uma ou duas colheres da água do cozimento para ajustar consistência. Sirva morno.",
    nutrientes: {
      calorias: 118,
      proteina: 1.5,
      carboidratos: 28,
      gordura: 0.2,
      ferro: 0.5,
      calcio: 17,
    },
    dicas:
      "Inhame é conhecido por fortalecer o sistema imunológico e tem propriedades anti-inflamatórias naturais. É excelente fonte de carboidratos complexos. Use luvas ao descascar para evitar coceira nas mãos.",
    foto: null,
    tags: ["vegetais", "imunidade", "energia"],
  },

  {
    id: 9,
    nome: "Mamão Amassado",
    fase: "6-8",
    tempo: 5,
    dificuldade: "Fácil",
    categoria: "Frutas",
    premium: false,
    ingredientes: ["3 colheres de sopa de mamão papaya maduro"],
    preparo:
      "Escolha um mamão papaya bem maduro - deve ceder levemente ao apertar e ter cheiro doce característico. Corte o mamão ao meio e retire todas as sementes pretas com uma colher. Com uma colher limpa, retire aproximadamente 3 colheres de sopa da polpa alaranjada. Coloque em um prato ou tigela e amasse delicadamente com um garfo até formar uma pasta cremosa. O mamão maduro é naturalmente muito macio, então não precisa de muita força. Para bebês de 6 meses, amasse até ficar completamente liso. Para 8 meses, pode deixar pequenos pedacinhos para estimular a mastigação. Sirva em temperatura ambiente ou levemente gelado (mas não direto da geladeira). O mamão não precisa ser aquecido. Consuma logo após preparar, pois fermenta rapidamente.",
    nutrientes: {
      calorias: 43,
      proteina: 0.5,
      carboidratos: 11,
      gordura: 0.1,
      ferro: 0.2,
      calcio: 20,
    },
    dicas:
      "Mamão é rico em papaína, enzima que ajuda na digestão e regula o intestino. Excelente para bebês com prisão de ventre. Escolha sempre mamões bem maduros, mais doces e fáceis de digerir. Sirva fresco.",
    foto: null,
    tags: ["frutas", "digestão", "enzimas"],
  },

  {
    id: 10,
    nome: "Papa de Beterraba",
    fase: "6-8",
    tempo: 30,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: false,
    ingredientes: ["1 beterraba pequena", "Água para cozimento"],
    preparo:
      "Lave muito bem a beterraba com escovinha em água corrente para remover toda terra. Descasque com cuidado usando faca afiada - a beterraba mancha tudo de roxo, então use uma tábua que possa manchar. Corte em cubos de aproximadamente 2cm. Coloque os cubos em uma panela, cubra com água e leve ao fogo médio-alto. A beterraba demora mais para cozinhar que outros vegetais - deixe por 25 a 30 minutos em fogo médio até que os cubos estejam completamente macios. Você deve conseguir atravessar facilmente com um garfo. Escorra a água (que ficará roxa) e amasse os cubos ainda quentes com um garfo até formar um purê homogêneo de cor roxa vibrante. A beterraba tem sabor levemente terroso e doce. Se achar necessário, adicione uma colher de água do cozimento para ajustar consistência. Sirva morno.",
    nutrientes: {
      calorias: 43,
      proteina: 1.6,
      carboidratos: 9.6,
      gordura: 0.2,
      ferro: 0.8,
      calcio: 16,
    },
    dicas:
      "Beterraba é rica em ferro, ácido fólico e antioxidantes. Ótima para prevenir anemia. A cor roxa vibrante chama atenção do bebê. Pode manchar fraldas e roupas, mas é normal e sai na lavagem.",
    foto: null,
    tags: ["vegetais", "ferro", "ácido fólico"],
  },

  // ========================================
  // 🆓 RECEITAS GRÁTIS - FASE 8-10 MESES (10)
  // ========================================

  {
    id: 11,
    nome: "Papa de Frango com Legumes",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de peito de frango sem pele",
      "1 batata pequena (100g)",
      "1 cenoura pequena (80g)",
      "200ml de água",
    ],
    preparo:
      "Corte 50g de peito de frango sem pele em cubinhos pequenos de aproximadamente 1cm. Em uma panela pequena, coloque o frango com 200ml de água e leve ao fogo médio. Enquanto o frango cozinha (cerca de 10 minutos), descasque e pique a batata e a cenoura em cubos de 2cm. Quando o frango estiver cozido e esbranquiçado, adicione os legumes picados na mesma panela. Deixe cozinhar tudo junto por mais 15 a 20 minutos até que os legumes estejam bem macios e o frango totalmente cozido. Com um garfo, desfie levemente o frango dentro da própria panela. Para bebês de 8 meses, amasse tudo junto até formar uma papa úmida com pequenos pedaços. Para 10 meses, pode deixar pedaços maiores para estimular mastigação. Ajuste a consistência com o próprio caldo do cozimento. Sirva morno.",
    nutrientes: {
      calorias: 165,
      proteina: 15,
      carboidratos: 20,
      gordura: 2,
      ferro: 1.2,
      calcio: 25,
    },
    dicas:
      "Esta é geralmente a primeira receita com proteína animal que o bebê experimenta. O frango é proteína magra e de fácil digestão. Certifique-se de que está completamente cozido (nada de rosa no centro).",
    foto: null,
    tags: ["proteína", "completa", "primeira proteína"],
  },

  {
    id: 12,
    nome: "Risoto Baby de Frango",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Média",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de arroz",
      "50g de frango desfiado",
      "1/2 tomate sem pele e sem sementes",
      "1 colher (chá) de salsinha picada",
      "300ml de água",
    ],
    preparo:
      "Cozinhe 50g de peito de frango em água até ficar bem macio (15 minutos). Retire, deixe esfriar um pouco e desfie com as mãos em fios bem finos. Reserve. Na mesma água do cozimento (que virou um caldinho de frango), adicione 2 colheres de sopa de arroz lavado. Cozinhe em fogo baixo por cerca de 20 minutos, mexendo ocasionalmente. O arroz vai absorver o caldo e ficar cremoso, como um risoto. Quando o arroz estiver quase no ponto (macio mas ainda com um pouco de caldo), adicione o frango desfiado de volta, o tomate picadinho (sem pele e sementes) e a salsinha. Cozinhe por mais 3 minutos, mexendo para incorporar tudo. A consistência deve ser cremosa e úmida, não seca. Se necessário, adicione mais água quente. Sirva morno.",
    nutrientes: {
      calorias: 180,
      proteina: 14,
      carboidratos: 25,
      gordura: 2.5,
      ferro: 1,
      calcio: 20,
    },
    dicas:
      "O formato risoto tem consistência pastosa perfeita para essa fase. O arroz cozido no caldo de frango fica saboroso e cremoso naturalmente, sem precisar de laticínios.",
    foto: null,
    tags: ["arroz", "proteína", "cremoso"],
  },

  {
    id: 13,
    nome: "Papa de Carne com Abóbora",
    fase: "8-10",
    tempo: 40,
    dificuldade: "Média",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de carne moída magra (patinho ou coxão mole)",
      "100g de abóbora",
      "1 batata pequena",
      "2 folhas de couve picadas",
      "250ml de água",
    ],
    preparo:
      "Em uma panela pequena, coloque 50g de carne moída magra (escolha cortes magros como patinho) com um fio de água e leve ao fogo médio. Mexa com uma colher de pau para desfazer os torrões da carne enquanto cozinha. Deixe por cerca de 10 minutos até a carne estar completamente cozida e soltinha. Enquanto isso, descasque e corte em cubos de 2cm: 100g de abóbora e 1 batata pequena. Adicione os cubos de abóbora e batata na panela com a carne já cozida. Acrescente 250ml de água, mexa bem e deixe cozinhar por mais 20 minutos em fogo médio-baixo até os legumes ficarem bem macios. Nos últimos 3 minutos, adicione 2 folhas de couve picadinha. Para servir, amasse levemente com garfo se o bebê tiver 8 meses, ou deixe em pedaços pequenos para 10 meses. A consistência deve ser úmida. Sirva morno.",
    nutrientes: {
      calorias: 195,
      proteina: 16,
      carboidratos: 22,
      gordura: 4,
      ferro: 2.5,
      calcio: 35,
    },
    dicas:
      "Carne vermelha é fonte importante de ferro heme (melhor absorvido pelo corpo). Escolha sempre cortes magros para bebês. A abóbora adiciona doçura natural que equilibra o sabor da carne.",
    foto: null,
    tags: ["carne", "ferro", "completa"],
  },

  {
    id: 14,
    nome: "Sopa de Lentilha",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Fácil",
    categoria: "Vegetariana",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de lentilha",
      "1 cenoura pequena",
      "1 batata pequena",
      "300ml de água",
    ],
    preparo:
      "Lave 2 colheres de sopa de lentilha em água corrente usando uma peneira fina. Coloque a lentilha lavada em uma panela pequena com 300ml de água e leve ao fogo médio. Enquanto a lentilha começa a cozinhar, descasque e pique em cubos pequenos 1 cenoura e 1 batata. Após 10 minutos de cozimento da lentilha, adicione os legumes picados na panela. Continue cozinhando por mais 20 a 25 minutos até que a lentilha esteja completamente macia e os legumes desfeitos. A lentilha cozinha rápido e não precisa de pré-molho. No final, com um garfo, amasse parcialmente - deixe alguns grãos inteiros para textura, mas certifique-se de que a maioria está amassado. A sopa deve ficar espessa e cremosa. Se necessário, adicione um pouco mais de água quente para ajustar a consistência. Sirva morno.",
    nutrientes: {
      calorias: 155,
      proteina: 9,
      carboidratos: 28,
      gordura: 0.5,
      ferro: 3.3,
      calcio: 25,
    },
    dicas:
      "Lentilha é proteína vegetal completa e riquíssima em ferro - melhor opção vegetariana. Não precisa de molho prévio como outros grãos. Cozinha rápido e tem sabor suave que bebês aceitam bem.",
    foto: null,
    tags: ["leguminosa", "ferro", "vegetariano", "proteína vegetal"],
  },

  {
    id: 15,
    nome: "Papa de Feijão com Arroz",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Fácil",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 colheres (sopa) de feijão cozido (sem tempero forte)",
      "2 colheres (sopa) de arroz branco",
      "1 cenoura ralada",
      "Caldo do feijão para umedecer",
    ],
    preparo:
      "Se você já tiver feijão cozido em casa (feito sem alho, cebola, sal ou temperos fortes), use 2 colheres de sopa dos grãos. Caso contrário, cozinhe uma pequena porção de feijão em água pura até ficar macio (30 minutos na panela de pressão). Em um prato fundo, amasse bem os grãos de feijão com um garfo até formar uma pasta grossa. Em outra panela, cozinhe 2 colheres de sopa de arroz branco em água por 15 minutos até ficar bem macio e úmido. Rale finamente meia cenoura crua. Em um prato de servir, misture o feijão amassado, o arroz cozido e a cenoura ralada. Umedeça com 2 a 3 colheres do caldo do feijão para criar uma papa úmida e cremosa. Para bebês de 8 meses, deixe tudo bem misturado e pastoso. Para 10 meses, pode deixar o arroz em grãos soltos. Sirva morno.",
    nutrientes: {
      calorias: 140,
      proteina: 7,
      carboidratos: 26,
      gordura: 1,
      ferro: 2,
      calcio: 30,
    },
    dicas:
      "Feijão com arroz é a combinação brasileira clássica e forma proteína completa (com todos aminoácidos essenciais). Use feijão cozido sem temperos fortes - o paladar do bebê é sensível.",
    foto: null,
    tags: ["feijão", "arroz", "brasileiro", "proteína completa"],
  },

  {
    id: 16,
    nome: "Frango Desfiado com Purê",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Fácil",
    categoria: "Proteína",
    premium: false,
    ingredientes: [
      "60g de peito de frango",
      "2 batatas médias",
      "1 fio de azeite extravirgem",
    ],
    preparo:
      "Coloque 60g de peito de frango (sem pele e sem osso) em uma panela pequena com água suficiente para cobrir. Leve ao fogo médio e cozinhe por 15 a 20 minutos até o frango estar completamente cozido e branco por dentro - não pode ter nenhuma parte rosada. Enquanto o frango cozinha, descasque 2 batatas médias, corte em cubos e cozinhe em outra panela com água por 15 minutos até ficarem bem macias. Quando o frango estiver pronto, retire da água e deixe esfriar um pouco até poder manusear. Com as mãos ou usando dois garfos, desfie o frango em fios finos - quanto mais desfiado, melhor para o bebê. Escorra as batatas e amasse ainda quentes até formar um purê liso. Adicione um fio fino de azeite extravirgem ao purê para dar cremosidade. No prato, coloque uma base de purê de batata e por cima espalhe o frango desfiado. Sirva morno.",
    nutrientes: {
      calorias: 185,
      proteina: 18,
      carboidratos: 20,
      gordura: 3,
      ferro: 1,
      calcio: 15,
    },
    dicas:
      "Apresentar o frango desfiado (em fios), não moído, ajuda o bebê a identificar as texturas. O azeite extravirgem adiciona gorduras boas essenciais para o desenvolvimento cerebral.",
    foto: null,
    tags: ["frango", "purê", "proteína"],
  },

  {
    id: 17,
    nome: "Carne Moída com Cenoura",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Média",
    categoria: "Proteína",
    premium: false,
    ingredientes: [
      "50g de carne moída magra",
      "1 cenoura média",
      "1/2 tomate sem pele",
      "1 colher (chá) de cebola picada",
      "200ml de água",
    ],
    preparo:
      "Em uma panela pequena, coloque 1 colher de chá de cebola picadinha com um fio de água e deixe murchar em fogo baixo por 2 minutos - isso tira o sabor muito forte da cebola crua. Adicione 50g de carne moída magra e mexa bem com uma colher de pau para desfazer os torrões. Deixe a carne cozinhar por 5 minutos, mexendo ocasionalmente, até ficar completamente dourada e soltinha. Enquanto isso, descasque e pique 1 cenoura em cubinhos bem pequenos (meio centímetro). Retire a pele e as sementes de meio tomate e pique fino. Adicione a cenoura picada na panela com a carne, mexa e acrescente 200ml de água. Deixe cozinhar em fogo médio-baixo por 20 a 25 minutos até a cenoura ficar bem macia. Nos últimos 5 minutos, adicione o tomate picado. A carne deve estar soltinha e úmida, não seca. Sirva morno.",
    nutrientes: {
      calorias: 160,
      proteina: 14,
      carboidratos: 8,
      gordura: 8,
      ferro: 2.2,
      calcio: 20,
    },
    dicas:
      "Escolha sempre carne moída magra (patinho ou coxão mole) para bebês. A cenoura adiciona doçura natural e vitamina A. Certifique-se de que não há torrões grandes de carne.",
    foto: null,
    tags: ["carne", "legumes", "ferro"],
  },

  {
    id: 18,
    nome: "Papa de Peixe com Batata",
    fase: "8-10",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Proteína",
    premium: false,
    ingredientes: [
      "50g de filé de peixe branco (pescada, tilápia ou merluza)",
      "1 batata média",
      "1 cenoura pequena",
      "1 colher (chá) de salsinha picada",
    ],
    preparo:
      "Use apenas peixes brancos de carne firme como pescada, tilápia ou merluza - evite peixes gordurosos nessa idade. Inspecione muito bem o filé de peixe à luz, passando os dedos para sentir se há alguma espinha. Remova qualquer espinha encontrada com uma pinça limpa. Cozinhe o filé no vapor ou em água fervente por 8 a 10 minutos até estar completamente cozido e opaco (branco). Enquanto isso, descasque e cozinhe em cubos 1 batata e 1 cenoura pequena por 15 minutos até ficarem macias. Quando o peixe esfriar um pouco, desfie completamente com as mãos, sentindo novamente para garantir que não há nenhuma espinha - isso é MUITO importante. Amasse a batata e cenoura juntas. Misture o peixe desfiado ao purê de batata e cenoura. Finalize com salsinha picadinha. Sirva morno.",
    nutrientes: {
      calorias: 145,
      proteina: 15,
      carboidratos: 18,
      gordura: 1.5,
      ferro: 0.5,
      calcio: 25,
    },
    dicas:
      "ATENÇÃO com espinhas - verifique múltiplas vezes! Peixe é excelente fonte de proteína magra e ômega 3. Introduza peixe gradualmente, observando reações alérgicas. Use apenas peixes frescos.",
    foto: null,
    tags: ["peixe", "ômega 3", "proteína magra"],
  },

  {
    id: 19,
    nome: "Sopa de Legumes com Carne",
    fase: "8-10",
    tempo: 40,
    dificuldade: "Média",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "50g de carne magra em cubos pequenos",
      "1 batata pequena",
      "1 cenoura",
      "1/4 de chuchu",
      "1 punhado de macarrão cabelo de anjo",
      "2 folhas de couve picadas",
      "400ml de água",
    ],
    preparo:
      "Corte 50g de carne magra (patinho ou músculo) em cubinhos de menos de 1cm. Em uma panela média, coloque os cubos de carne com 400ml de água e leve ao fogo médio. Deixe cozinhar por 20 minutos - a carne precisa ficar bem macia para bebês. Enquanto isso, descasque e pique em cubinhos pequenos: 1 batata, 1 cenoura e um pedaço de chuchu. Após os 20 minutos de cozimento da carne, adicione todos os legumes picados na panela. Continue cozinhando por mais 15 minutos até os legumes estarem macios. Quebre um punhado pequeno de macarrão cabelo de anjo em pedaços menores e adicione à sopa. Cozinhe por mais 3 minutos. Por último, adicione 2 folhas de couve picadinhas e deixe por mais 2 minutos. A sopa deve ficar encorpada mas úmida. Para bebês de 8 meses, amasse levemente. Sirva morno.",
    nutrientes: {
      calorias: 190,
      proteina: 14,
      carboidratos: 24,
      gordura: 4,
      ferro: 2,
      calcio: 40,
    },
    dicas:
      "Sopa completa com proteína, carboidratos e vegetais. O macarrão cabelo de anjo cozinha rapidamente. A couve adicionada no final mantém mais nutrientes. Ótima opção para refeições únicas.",
    foto: null,
    tags: ["sopa", "completa", "nutritiva"],
  },

  {
    id: 20,
    nome: "Mandioquinha com Frango",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Fácil",
    categoria: "Completa",
    premium: false,
    ingredientes: [
      "2 mandioquinhas médias",
      "60g de peito de frango",
      "3 florzinhas de brócolis",
      "1 colher (chá) de azeite extravirgem",
    ],
    preparo:
      "Descasque 2 mandioquinhas e corte em rodelas grossas. Corte 60g de peito de frango em cubinhos de 1cm. Em uma panela média, coloque as rodelas de mandioquinha e os cubos de frango com água suficiente para cobrir. Leve ao fogo médio e cozinhe por 20 minutos - a mandioquinha e o frango devem cozinhar juntos, assim a mandioquinha absorve o sabor do frango. Enquanto isso, lave bem 3 florzinhas pequenas de brócolis e separe em pedaços menores. Nos últimos 5 minutos de cozimento, adicione o brócolis na panela. Quando tudo estiver macio, escorra a água (reserve um pouco). Em um prato, amasse a mandioquinha ainda quente - ela fica naturalmente cremosa. Desfie o frango com as mãos em fios finos. Pique o brócolis em pedaços bem pequenos. Misture tudo, adicionando 1 colher de chá de azeite extravirgem. Se necessário, umedeça com a água reservada. Sirva morno.",
    nutrientes: {
      calorias: 200,
      proteina: 16,
      carboidratos: 28,
      gordura: 3,
      ferro: 1.2,
      calcio: 35,
    },
    dicas:
      "Mandioquinha dá cremosidade natural à preparação sem precisar de laticínios. O brócolis adicionado no final mantém cor verde vibrante e mais nutrientes. Rico em cálcio.",
    foto: null,
    tags: ["frango", "energia", "cálcio"],
  },

  // ========================================
  // 👑 RECEITAS PREMIUM - FASE 6-8 MESES (15)
  // ========================================

  {
    id: 101,
    nome: "Papa de Quinoa com Abóbora e Espinafre",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 colheres (sopa) de quinoa em flocos",
      "100g de abóbora cabotiá",
      "3 folhas de espinafre baby",
      "1 fio de azeite extravirgem",
      "Água filtrada",
    ],
    preparo:
      "Descasque 100g de abóbora cabotiá, remova as sementes e corte em cubos de 2cm. Coloque em uma panela pequena com água suficiente para cobrir e cozinhe em fogo médio por 15 minutos até ficar completamente macia - deve desfazer ao pressionar com garfo. Enquanto isso, lave muito bem 3 folhas de espinafre baby em água corrente. Em outra panela pequena, prepare 2 colheres de sopa de quinoa em flocos conforme instruções da embalagem (geralmente 5 minutos em água fervente). O espinafre baby é mais suave que o normal - pique finamente e refogue levemente em uma gotinha de azeite por apenas 1 minuto até murchar. Escorra a abóbora e amasse ainda quente até formar purê liso. Incorpore a quinoa cozida ao purê de abóbora, mexendo bem. Por último, adicione o espinafre refogado e misture delicadamente. Finalize com um fio bem fino de azeite extravirgem. A consistência deve ser cremosa. Sirva morno logo após o preparo para manter todos os nutrientes.",
    nutrientes: {
      calorias: 95,
      proteina: 3.5,
      carboidratos: 16,
      gordura: 2,
      ferro: 2.1,
      calcio: 45,
    },
    dicas:
      "Quinoa é um dos poucos alimentos vegetais com proteína completa (todos os 9 aminoácidos essenciais). O espinafre baby tem sabor mais suave e folhas tenras. Combinação perfeita de carboidrato, proteína vegetal e ferro.",
    foto: null,
    tags: ["superalimento", "proteína vegetal", "ferro", "gourmet"],
  },

  {
    id: 102,
    nome: "Purê de Batata Baroa com Pera",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 batatas baroa (mandioquinha)",
      "1/2 pera williams madura",
      "1 pitada de canela em pó (opcional)",
      "Água mineral",
    ],
    preparo:
      "Descasque 2 batatas baroa (mandioquinha), removendo toda a casca grudenta com faca afiada. Corte em rodelas de 2cm de espessura. Coloque as rodelas em uma panela com água mineral suficiente para cobrir e leve ao fogo médio. Cozinhe por 15 a 20 minutos até as rodelas estarem completamente macias e começando a se desfazer. Enquanto isso, escolha meia pera williams bem madura (deve ceder levemente ao apertar), descasque e corte em cubos pequenos. A pera williams tem textura amanteigada e sabor suave. Escorra a batata baroa e amasse ainda quente em um prato fundo - ela tem textura naturalmente aveludada e cremosa. Adicione os cubos de pera e amasse junto, criando uma mistura homogênea de cor alaranjada com pedacinhos de pera. Se desejar, polvilhe uma pitada mínima de canela em pó para realçar o sabor doce - use com moderação. A canela é opcional mas combina perfeitamente. Não precisa adicionar água, a mistura fica cremosa naturalmente. Sirva morno.",
    nutrientes: {
      calorias: 110,
      proteina: 1.2,
      carboidratos: 26,
      gordura: 0.2,
      ferro: 0.6,
      calcio: 18,
    },
    dicas:
      "A combinação de batata baroa com pera cria um equilíbrio perfeito entre doce e cremoso. A batata baroa tem textura aveludada única. A pera ajuda no funcionamento intestinal. Canela em pequena quantidade é segura para bebês.",
    foto: null,
    tags: ["doce natural", "digestão", "cremoso"],
  },

  {
    id: 103,
    nome: "Papa Verde Detox Baby",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "3 folhas de couve manteiga",
      "1 abobrinha pequena",
      "1/2 maçã verde",
      "1 folha de hortelã fresca",
      "50ml de água de coco natural",
    ],
    preparo:
      "Lave muito bem 1 abobrinha pequena, descasque e corte em rodelas de 1cm. Cozinhe as rodelas em água fervente por 12 minutos até ficarem bem macias. Enquanto isso, lave 3 folhas grandes de couve manteiga em água corrente, retire o talo central grosso (use apenas a parte mais macia da folha) e pique grosseiramente. Em outra panela pequena, ferva água e quando estiver em ebulição, desligue o fogo e mergulhe as folhas de couve picadas por apenas 30 segundos - esse processo chama-se escaldar e mantém a cor verde vibrante enquanto amacia levemente. Retire e escorra. Descasque meia maçã verde (granny smith de preferência) e rale finamente. Em um liquidificador ou processador, coloque a abobrinha cozida escorrida, a couve escaldada, a maçã ralada, 1 folha de hortelã fresca lavada e 50ml de água de coco natural (não use água de coco de caixinha, apenas natural). Bata até obter uma pasta verde lisa e cremosa. A hortelã deve ser usada com moderação - uma folha é suficiente. Sirva em temperatura ambiente ou levemente morno.",
    nutrientes: {
      calorias: 52,
      proteina: 2,
      carboidratos: 11,
      gordura: 0.3,
      ferro: 1.5,
      calcio: 60,
    },
    dicas:
      "Papa leve e refrescante, perfeita para dias quentes. A cor verde vibrante chama atenção do bebê. A hortelã em pequena quantidade ajuda na digestão e não altera muito o sabor. Água de coco hidrata e adiciona eletrólitos naturais.",
    foto: null,
    tags: ["verde", "leve", "hidratante", "detox"],
  },

  {
    id: 104,
    nome: "Purê de Batata Doce Roxa com Coco",
    fase: "6-8",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 batata doce roxa média",
      "2 colheres (sopa) de leite de coco caseiro",
      "1 pitada de noz moscada",
      "Raspas de limão siciliano",
    ],
    preparo:
      "Preaqueça o forno a 180°C. Lave bem 1 batata doce roxa (aquela de casca e polpa roxas) e seque. Enrole em papel alumínio e coloque diretamente na grade do forno. Asse por 25 a 30 minutos até ficar macia - você deve conseguir perfurar facilmente com um garfo. Assar concentra o sabor doce e cria textura diferente do cozido. Enquanto assa, prepare o leite de coco caseiro: bata 2 colheres de coco fresco ralado com 3 colheres de água morna no liquidificador, coe e reserve - fica mais saudável que o leite de coco industrializado. Quando a batata estiver assada, retire do forno, deixe esfriar um pouco para poder manusear e retire a casca. A polpa estará roxa vibrante. Amasse a polpa ainda morna até formar purê liso. Adicione as 2 colheres de leite de coco morno e misture bem até ficar cremoso. Adicione uma pitada mínima de noz moscada ralada na hora - o sabor é suave e aromático. Finalize ralando um pouquinho de casca de limão siciliano por cima (apenas a parte amarela, não a branca que é amarga). Sirva morno.",
    nutrientes: {
      calorias: 125,
      proteina: 2,
      carboidratos: 24,
      gordura: 3,
      ferro: 0.8,
      calcio: 25,
    },
    dicas:
      "A batata doce roxa tem antocianinas (antioxidantes poderosos) que dão a cor roxa. Assar no forno concentra o sabor adocicado. O leite de coco caseiro é mais nutritivo e sem conservantes. A noz moscada tem propriedades digestivas.",
    foto: null,
    tags: ["antioxidante", "cremoso", "assado", "exótico"],
  },

  {
    id: 105,
    nome: "Papa de Cenoura com Gengibre Baby",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 cenouras orgânicas médias",
      "1 raspinha de gengibre fresco (tamanho de unha)",
      "1 colher (chá) de azeite extravirgem",
      "Salsinha fresca",
    ],
    preparo:
      "Descasque 2 cenouras orgânicas médias e corte em rodelas finas de meio centímetro. Descasque um pedaço pequeníssimo de gengibre fresco (do tamanho de uma unha) e faça raspinhas bem finas com uma faca afiada - vai usar muito pouco pois o sabor é forte para bebês. Em uma panela pequena, coloque as rodelas de cenoura com água suficiente para cobrir e adicione as raspinhas de gengibre. Leve ao fogo médio e cozinhe por 15 a 18 minutos até as cenouras estarem completamente macias. O gengibre vai perfumar delicadamente a cenoura durante o cozimento. Com uma escumadeira, retire apenas as raspinhas de gengibre e descarte - elas serviram para dar aroma, mas não devem ser consumidas pelo bebê. Escorra as cenouras (reserve 2 colheres da água do cozimento) e amasse ainda quentes até formar purê liso e alaranjado. Adicione 1 colher de chá de azeite extravirgem e misture bem - o azeite ajuda na absorção da vitamina A. Se necessário, adicione uma colher da água reservada para ajustar consistência. Lave e pique finamente folhas frescas de salsinha e polvilhe por cima como decoração. Sirva morno.",
    nutrientes: {
      calorias: 65,
      proteina: 1,
      carboidratos: 12,
      gordura: 2.5,
      ferro: 0.4,
      calcio: 35,
    },
    dicas:
      "O gengibre em quantidade mínima ajuda a fortalecer o sistema imunológico sem irritar o estômago sensível do bebê. O azeite extravirgem facilita a absorção da vitamina A (lipossolúvel). Cenouras orgânicas têm sabor mais doce e menos agrotóxicos.",
    foto: null,
    tags: ["imunidade", "vitamina A", "aromático"],
  },

  {
    id: 106,
    nome: "Purê de Beterraba com Maçã e Canela",
    fase: "6-8",
    tempo: 30,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 beterraba pequena",
      "1/2 maçã fuji",
      "1 pitada de canela em pó",
      "Água",
    ],
    preparo:
      "Lave muito bem 1 beterraba pequena com escovinha para remover toda terra. Descasque com faca afiada - use luvas ou lave as mãos imediatamente pois beterraba mancha muito. Corte em cubos de 2cm. Coloque em panela com água suficiente para cobrir e leve ao fogo médio-alto. Beterrabas demoram para cozinhar - deixe por 25 a 30 minutos até os cubos estarem muito macios. Enquanto a beterraba cozinha, descasque meia maçã fuji (escolha maçãs doces) e rale usando o lado fino do ralador. Reserve a maçã ralada. Quando a beterraba estiver macia, escorra e amasse ainda quente até formar um purê de cor roxa/vermelha vibrante. A beterraba tem sabor terroso característico. Misture a maçã ralada ao purê quente de beterraba - a maçã vai suavizar o sabor terroso e adicionar doçura natural. Polvilhe uma pitada bem pequena de canela em pó por cima e misture delicadamente. A canela realça o sabor doce. A mistura final terá cor roxa linda com pedacinhos claros de maçã. Sirva morno.",
    nutrientes: {
      calorias: 58,
      proteina: 1.8,
      carboidratos: 13,
      gordura: 0.2,
      ferro: 1.2,
      calcio: 20,
    },
    dicas:
      "A beterraba é riquíssima em ácido fólico e ferro. A maçã suaviza o sabor terroso que algumas crianças estranha. A cor roxa vibrante é visualmente estimulante. Pode manchar fraldas de roxo - é normal!",
    foto: null,
    tags: ["ferro", "ácido fólico", "doce"],
  },

  {
    id: 107,
    nome: "Papa de Inhame com Espinafre e Azeite",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 inhame médio (200g)",
      "4 folhas de espinafre baby",
      "1 colher (chá) de azeite extravirgem português",
      "Água",
    ],
    preparo:
      "Use luvas ao manusear inhame pois pode causar coceira nas mãos. Descasque 1 inhame médio removendo toda casca grossa marrom e corte em cubos de 2cm. Lave os cubos em água corrente. Coloque em panela com água suficiente para cobrir e cozinhe em fogo médio por 20 a 25 minutos até ficar completamente macio - deve desfazer ao pressionar. Enquanto o inhame cozinha, lave muito bem 4 folhas de espinafre baby em água corrente - o espinafre baby é mais tenro e tem sabor mais suave que o normal. Seque e reserve. Quando o inhame estiver macio, escorra e amasse ainda quente até formar purê liso e esbranquiçado. O inhame tem textura levemente fibrosa, então amasse com força. Em uma frigideira pequena, aqueça levemente 1 colher de chá de azeite extravirgem português (tem sabor mais suave). Pique fino as folhas de espinafre e adicione ao azeite morno, mexendo por apenas 30 segundos até murchar - não cozinhe demais para manter nutrientes. Adicione o espinafre refogado ao purê de inhame e misture bem. A cor ficará verde-clara salpicada. Sirva morno.",
    nutrientes: {
      calorias: 135,
      proteina: 2.5,
      carboidratos: 28,
      gordura: 2.5,
      ferro: 1.8,
      calcio: 50,
    },
    dicas:
      "Inhame é conhecido por fortalecer o sistema imunológico - contém diosgenina. Espinafre baby tem menos ácido oxálico que o normal. O azeite português de primeira prensagem a frio mantém todos nutrientes.",
    foto: null,
    tags: ["imunidade", "verde", "energia"],
  },

  {
    id: 108,
    nome: "Purê de Cará com Banana e Aveia",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "100g de cará",
      "1/2 banana prata",
      "1 colher (sopa) de aveia baby",
      "Canela em pó",
    ],
    preparo:
      "Descasque 100g de cará (pode usar luvas pois irrita a pele) e corte em cubos de 2cm. O cará é um tubérculo branco parecido com inhame mas mais seco. Coloque em panela com água suficiente para cobrir e cozinhe em fogo médio por 20 minutos até ficar bem macio. O cará demora um pouco mais que batata para amolecer. Enquanto isso, descasque meia banana prata (escolha uma bem madura com pontinhos) e amasse em um prato. Reserve. Quando o cará estiver macio, escorra e amasse ainda quente até formar purê - o cará fica mais seco e granulado que batata, então amasse bem. Misture a banana amassada ao purê de cará ainda quente - a banana vai adicionar umidade e doçura. Adicione 1 colher de sopa de aveia baby (específica para bebês, mais fina) e misture bem. A aveia vai absorver líquido e dar cremosidade. Polvilhe uma pitada de canela em pó por cima. A consistência final será espessa e nutritiva. Sirva morno.",
    nutrientes: {
      calorias: 148,
      proteina: 2.5,
      carboidratos: 32,
      gordura: 0.8,
      ferro: 0.7,
      calcio: 22,
    },
    dicas:
      "O cará tem digestão lenta, proporcionando saciedade prolongada. A aveia baby é processada especialmente para bebês. A combinação fornece energia duradoura. Perfeito para bebês que acordam com fome durante a noite.",
    foto: null,
    tags: ["saciedade", "energia", "doce"],
  },

  {
    id: 109,
    nome: "Papa de Mandioquinha com Alho-poró",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 mandioquinhas médias",
      "3cm de alho-poró (apenas parte branca)",
      "Salsinha fresca",
      "1 fio de azeite",
    ],
    preparo:
      "Descasque 2 mandioquinhas e corte em rodelas grossas de 2cm. Coloque em panela com água suficiente para cobrir e cozinhe em fogo médio por 18 a 20 minutos até ficarem bem macias. Enquanto cozinha, prepare o alho-poró: corte um pedaço de 3cm da parte branca do alho-poró (descarte a parte verde que tem sabor muito forte). Lave muito bem entre as camadas pois acumula terra. Pique fino apenas a parte branca - tem sabor suave e levemente adocicado, perfeito para bebês. Em uma frigideira pequena, coloque um fio fino de azeite e aqueça em fogo baixo. Adicione o alho-poró picado e refogue por 3 a 4 minutos até murchar e ficar translúcido - não deixe dourar. Quando a mandioquinha estiver macia, escorra e amasse ainda quente até formar purê cremoso. A mandioquinha tem cremosidade natural. Misture o alho-poró refogado ao purê. Lave e pique folhas frescas de salsinha e adicione. Misture tudo delicadamente. Sirva morno.",
    nutrientes: {
      calorias: 142,
      proteina: 1.6,
      carboidratos: 32,
      gordura: 2,
      ferro: 0.6,
      calcio: 18,
    },
    dicas:
      "O alho-poró tem sabor muito mais suave que alho ou cebola - perfeito para introduzir sabores aromáticos. Use apenas a parte branca. A mandioquinha dá cremosidade natural sem precisar adicionar líquido.",
    foto: null,
    tags: ["cremoso", "suave", "aromático"],
  },

  {
    id: 110,
    nome: "Purê de Abóbora Japonesa com Erva-doce",
    fase: "6-8",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "150g de abóbora japonesa (kabocha)",
      "1 colher (chá) de sementes de erva-doce",
      "Azeite extravirgem",
      "Água",
    ],
    preparo:
      "Preaqueça o forno a 180°C. Descasque 150g de abóbora japonesa (kabocha) - ela tem casca bem dura, use faca afiada com cuidado. Corte em fatias de 2cm de espessura. Coloque as fatias em uma assadeira levemente untada com azeite e leve ao forno por 25 a 30 minutos até ficar macia e levemente dourada nas bordas. Assar concentra o sabor adocicado da abóbora japonesa. Enquanto assa, prepare um chá leve de erva-doce: ferva 100ml de água, adicione 1 colher de chá de sementes de erva-doce, desligue o fogo e deixe em infusão por 5 minutos tampado. Coe e reserve - esse chá ajuda a aliviar cólicas e gases em bebês. Quando a abóbora assada estiver macia, retire do forno e deixe esfriar um pouco. Amasse ainda morna até formar purê liso e alaranjado. A abóbora japonesa é mais seca e doce que outras. Umedeça o purê com 2 a 3 colheres do chá de erva-doce morno até obter consistência cremosa. Finalize com um fio bem fino de azeite extravirgem. Sirva morno.",
    nutrientes: {
      calorias: 72,
      proteina: 1.5,
      carboidratos: 15,
      gordura: 2,
      ferro: 0.5,
      calcio: 28,
    },
    dicas:
      "A erva-doce (funcho) tem propriedades carminativas que aliviam cólicas e gases - perfeita para bebês. A abóbora japonesa é mais saborosa que outras variedades. Assar no forno realça o sabor natural.",
    foto: null,
    tags: ["cólica", "digestão", "assado"],
  },

  {
    id: 111,
    nome: "Papa de Batata Yacon com Pêra",
    fase: "6-8",
    tempo: 20,
    dificuldade: "Fácil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: ["1 batata yacon média", "1/2 pêra madura", "Canela", "Água"],
    preparo:
      "A batata yacon (ou batata diet) parece muito com batata doce mas tem sabor levemente adocicado e crocante quando crua. Descasque 1 batata yacon média - oxida rápido então coloque imediatamente em água com algumas gotas de limão. Corte em cubos de 2cm. Cozinhe em água por 15 a 18 minutos em fogo médio até ficar macia - yacon cozinha mais rápido que batata comum. Enquanto cozinha, descasque meia pêra bem madura (deve ceder ao apertar levemente) e rale usando ralador grosso. Reserve. Quando a yacon estiver macia, escorra bem e amasse ainda quente. A yacon tem textura mais aquosa que outras batatas. Misture a pêra ralada ao purê de yacon - a pêra adiciona umidade, sabor e fibras. Polvilhe uma pitada mínima de canela em pó e misture. A canela combina perfeitamente com pêra. A mistura terá cor clara cremosa com pedacinhos de pêra. Não precisa adicionar água extra. Sirva morno.",
    nutrientes: {
      calorias: 65,
      proteina: 1,
      carboidratos: 14,
      gordura: 0.2,
      ferro: 0.3,
      calcio: 15,
    },
    dicas:
      "A batata yacon tem baixo índice glicêmico e é rica em inulina (prebiótico). Ajuda a regular o açúcar no sangue e alimenta bactérias boas do intestino. Sabor levemente adocicado que bebês adoram.",
    foto: null,
    tags: ["baixo IG", "doce natural", "prebiótico"],
  },

  {
    id: 112,
    nome: "Purê Tricolor (Batata + Beterraba + Espinafre)",
    fase: "6-8",
    tempo: 35,
    dificuldade: "Difícil",
    categoria: "Vegetais",
    premium: true,
    ingredientes: ["1 batata", "1/2 beterraba", "3 folhas espinafre", "Azeite"],
    preparo:
      "Esta receita é visualmente linda e estimula o bebê! Você vai fazer 3 purês separados. Descasque 1 batata e corte em cubos. Cozinhe em água por 15 minutos até macia. Escorra, amasse e reserve em uma tigela. Limpe bem a panela. Descasque meia beterraba pequena (use luvas), corte em cubos e cozinhe em água limpa por 25 minutos até macia. Escorra, amasse separadamente e coloque em outra tigela. A beterraba fica roxa vibrante. Limpe a panela novamente. Lave 3 folhas de espinafre, pique grosso e escalde em água fervente por apenas 30 segundos. Escorra muito bem apertando para tirar excesso de água. Bata no liquidificador com 1 colher de sopa de água até virar pasta verde lisa. Coloque em terceira tigela. Agora você tem 3 purês: branco (batata), roxo (beterraba) e verde (espinafre). Em um prato de servir, monte em camadas ou lado a lado criando um arco-íris. Finalize com um fio fino de azeite por cima. A apresentação colorida estimula visualmente o bebê. Sirva morno misturando tudo.",
    nutrientes: {
      calorias: 95,
      proteina: 2.5,
      carboidratos: 18,
      gordura: 2,
      ferro: 1.5,
      calcio: 40,
    },
    dicas:
      "A apresentação visual colorida estimula o interesse do bebê pela comida. Cada cor representa nutrientes diferentes: branco (energia), roxo (antioxidantes), verde (ferro e folato). Ótimo para fotos!",
    foto: null,
    tags: ["colorido", "visual", "nutritivo"],
  },

  {
    id: 113,
    nome: "Papa de Cenoura Roxa com Gengibre",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "2 cenouras roxas",
      "1 raspinha de gengibre (tamanho de unha)",
      "Azeite",
      "Hortelã fresca",
    ],
    preparo:
      "As cenouras roxas são mais exóticas e têm sabor levemente mais adocicado que as laranjas. Descasque 2 cenouras roxas médias - a polpa interna pode ser laranja ou roxa. Corte em rodelas de meio centímetro. Descasque um pedacinho minúsculo de gengibre fresco (tamanho de unha) e faça raspas finas. Coloque as rodelas de cenoura em panela com água suficiente para cobrir, adicione as raspinhas de gengibre e cozinhe em fogo médio por 20 minutos até as cenouras ficarem muito macias. O gengibre perfumará delicadamente. Com escumadeira, retire e descarte as raspas de gengibre - serviram para aromatizar. Escorra as cenouras (reserve um pouco da água roxa) e amasse ainda quentes até formar purê liso de cor roxa vibrante. Adicione 1 colher de chá de azeite e misture. Se necessário, adicione colheradas da água roxa reservada para ajustar consistência. Lave 1 folhinha de hortelã fresca, pique muito finamente e polvilhe por cima. A hortelã adiciona frescor. Sirva morno.",
    nutrientes: {
      calorias: 68,
      proteina: 1,
      carboidratos: 13,
      gordura: 2.5,
      ferro: 0.5,
      calcio: 38,
    },
    dicas:
      "Cenoura roxa tem ainda mais antioxidantes (antocianinas) que a laranja. O gengibre em quantidade mínima fortalece imunidade. A cor roxa vibrante é visualmente estimulante para bebês.",
    foto: null,
    tags: ["antioxidante", "exótico", "colorido"],
  },

  {
    id: 114,
    nome: "Purê de Chuchu com Quinoa Real",
    fase: "6-8",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "1 chuchu",
      "2 colheres de quinoa real",
      "Salsinha",
      "Azeite",
    ],
    preparo:
      "Descasque 1 chuchu pequeno (use luvas se a casca deixar mãos pegajosas), corte ao meio, remova o caroço central e pique em cubos de 2cm. Coloque em panela com água suficiente para cobrir e cozinhe por 15 minutos até ficar bem macio. O chuchu tem muita água então ficará muito mole. Enquanto isso, prepare a quinoa real: lave 2 colheres de sopa de quinoa real (mistura de quinoa vermelha, preta e branca) em água corrente usando peneira fina para remover a saponina (substância amarga). Cozinhe a quinoa em 100ml de água por 12 a 15 minutos até os grãozinhos abrirem e ficarem translúcidos com rabinho branco aparecendo. Escorra o chuchu muito bem, apertando para eliminar excesso de água. Amasse o chuchu até formar purê liso e esbranquiçado. Misture a quinoa cozida ao purê de chuchu. Lave e pique finamente folhas de salsinha fresca e adicione. Finalize com 1 colher de chá de azeite e misture tudo. A textura ficará cremosa com grãozinhos coloridos de quinoa. Sirva morno.",
    nutrientes: {
      calorias: 88,
      proteina: 3,
      carboidratos: 15,
      gordura: 2,
      ferro: 1.8,
      calcio: 25,
    },
    dicas:
      "Quinoa real (tricolor) tem ainda mais nutrientes que a branca. É proteína completa vegetal. O chuchu tem sabor neutro que não compete com a quinoa. Leve, nutritivo e colorido.",
    foto: null,
    tags: ["proteína", "completo", "leve"],
  },

  {
    id: 115,
    nome: "Papa de Abóbora com Amêndoas Trituradas",
    fase: "6-8",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Vegetais",
    premium: true,
    ingredientes: [
      "150g abóbora",
      "1 colher (sopa) de amêndoas sem pele",
      "Canela",
      "Água",
    ],
    preparo:
      "Descasque 150g de abóbora cabotiá, remova sementes e corte em fatias de 2cm. Coloque em assadeira levemente untada e asse em forno pré-aquecido a 180°C por 25 minutos até ficar macia e levemente dourada. Assar concentra o sabor doce. Enquanto assa, prepare a farinha de amêndoas: coloque 1 colher de sopa de amêndoas sem pele (amêndoas brancas já descascadas - vendidas assim) em um processador ou liquidificador potente. Bata em pulsos curtos até virar uma farinha fina - cuidado para não bater demais senão vira pasta. Não use amêndoas inteiras ou em lascas para bebês pelo risco de engasgo. Quando a abóbora assada estiver macia, retire do forno e amasse ainda quente até formar purê liso alaranjado. Adicione a farinha de amêndoas ao purê quente e misture muito bem até incorporar completamente. A amêndoa vai adicionar cremosidade, proteína e gorduras boas. Polvilhe uma pitada de canela em pó por cima. A textura ficará mais espessa e nutritiva. Sirva morno.",
    nutrientes: {
      calorias: 115,
      proteina: 3.5,
      carboidratos: 16,
      gordura: 4.5,
      ferro: 0.8,
      calcio: 42,
    },
    dicas:
      "Amêndoas adicionam proteína vegetal e gorduras monoinsaturadas (boas para o cérebro). SEMPRE triture até virar farinha fina - nunca ofereça pedaços inteiros pelo risco de engasgo. Rico em vitamina E.",
    foto: null,
    tags: ["oleaginosa", "proteína", "gordura boa"],
  },

  // ========================================
  // 👑 RECEITAS PREMIUM - FASE 8-10 MESES (10)
  // ========================================

  {
    id: 201,
    nome: "Risoto de Quinoa com Frango Orgânico e Brócolis",
    fase: "8-10",
    tempo: 40,
    dificuldade: "Difícil",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "3 colheres (sopa) de quinoa em grãos",
      "80g de peito de frango orgânico",
      "5 florzinhas de brócolis ninja",
      "1/2 tomate sem pele e sem semente",
      "1 colher (chá) de cebola roxa picada",
      "2cm de alho-poró",
      "Azeite extravirgem português",
      "Manjericão fresco",
      "300ml de caldo de legumes caseiro",
    ],
    preparo:
      "Esta é uma receita gourmet que leva tempo mas vale a pena! Primeiro prepare um caldo de legumes caseiro fervendo cenoura, cebola e aipo em 400ml de água por 20 minutos. Coe e reserve 300ml do caldo quente. Em uma panela média, aqueça 1 colher de chá de azeite português em fogo baixo. Adicione 1 colher de chá de cebola roxa picadinha (mais suave) e 2cm de alho-poró picado. Refogue por 2 minutos até murchar. Corte 80g de peito de frango orgânico em cubinhos de meio centímetro e adicione na panela. Refogue por 5 minutos até o frango ficar branco. Lave 3 colheres de quinoa em grãos em peneira fina e adicione ao frango. Refogue a quinoa por 2 minutos mexendo - ela vai ficar levemente translúcida. Agora vem a parte do risoto: adicione o caldo quente aos poucos, uma concha por vez, mexendo sempre. Só adicione mais caldo quando o anterior secar. Esse processo demora 20 minutos mas cria textura cremosa. Enquanto o risoto cozinha, cozinhe 5 florzinhas pequenas de brócolis ninja (mais macio) no vapor por 5 minutos e pique fino. Retire pele e sementes de meio tomate e pique. Quando a quinoa estiver macia e cremosa, incorpore o brócolis e tomate. Finalize com folhas frescas de manjericão picadas. Sirva morno.",
    nutrientes: {
      calorias: 245,
      proteina: 22,
      carboidratos: 28,
      gordura: 5,
      ferro: 3.2,
      calcio: 65,
    },
    dicas:
      "Este risoto cremoso não usa laticínios - a cremosidade vem da técnica de adicionar caldo aos poucos. Quinoa é proteína completa. Frango orgânico tem menos hormônios. Brócolis ninja é variedade baby mais macia.",
    foto: null,
    tags: ["gourmet", "proteína completa", "cremoso", "superalimento"],
  },

  {
    id: 202,
    nome: "Bolinho de Carne com Batata Doce e Chia",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Média",
    categoria: "Proteína",
    premium: true,
    ingredientes: [
      "100g de carne moída orgânica (patinho)",
      "1 batata doce pequena cozida",
      "1 colher (sopa) de chia hidratada",
      "Cenoura ralada fininha",
      "Salsinha picada",
      "Cebola roxa",
    ],
    preparo:
      "Comece hidratando 1 colher de sopa de sementes de chia em 3 colheres de água por 10 minutos até virar gel - isso substitui ovo como ligante. Cozinhe 1 batata doce pequena até ficar macia, descasque e amasse bem. Reserve. Em uma tigela grande, coloque 100g de carne moída orgânica magra (escolha patinho que é mais magro), o purê de batata doce, a chia hidratada (vai estar gelatinosa), 2 colheres de cenoura ralada bem fina, 1 colher de chá de cebola roxa picadinha e salsinha fresca picada. Misture tudo muito bem com as mãos até incorporar completamente - a mistura deve ficar úmida mas firme. Se estiver muito mole, adicione 1 colher de farinha de aveia. Com as mãos levemente úmidas, forme bolinhos pequenos do tamanho de uma noz. Preaqueça o forno a 180°C. Coloque os bolinhos em assadeira forrada com papel manteiga, sem untar. Asse por 20 minutos. Na metade do tempo (10min), vire os bolinhos para dourar dos dois lados. Devem ficar levemente dourados e firmes. Sirva morno - formato perfeito para bebê pegar com as mãos (BLW).",
    nutrientes: {
      calorias: 185,
      proteina: 18,
      carboidratos: 15,
      gordura: 6,
      ferro: 2.8,
      calcio: 48,
    },
    dicas:
      "Chia hidratada substitui ovo como ligante e adiciona ômega 3. Formato de bolinho incentiva autonomia (pegar com a mão). Asse sem óleo - a própria carne tem gordura suficiente. Pode congelar em porções.",
    foto: null,
    tags: ["finger food", "BLW", "ômega 3", "ferro"],
  },

  {
    id: 203,
    nome: "Sopa Cremosa de Lentilha Vermelha com Cúrcuma",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Vegetariana",
    premium: true,
    ingredientes: [
      "1/2 xícara de lentilha vermelha",
      "1 cenoura",
      "1 batata",
      "1 pitada de cúrcuma (açafrão-da-terra)",
      "Raspinha de gengibre fresco (tamanho de unha)",
      "2 colheres (sopa) de leite de coco",
      "Coentro fresco",
    ],
    preparo:
      "A lentilha vermelha é especial porque cozinha rápido e se desfaz naturalmente criando textura cremosa. Lave meia xícara de lentilha vermelha em água corrente. Em uma panela média, coloque a lentilha com 400ml de água e leve ao fogo médio. Enquanto começa a cozinhar, descasque e pique em cubos pequenos 1 cenoura e 1 batata. Adicione os legumes na panela com a lentilha. Adicione também uma pitada bem pequena de cúrcuma em pó (açafrão-da-terra - tem propriedades anti-inflamatórias) e raspas mínimas de gengibre fresco (tamanho de unha). Cozinhe tudo junto por 20 a 25 minutos mexendo ocasionalmente. A lentilha vermelha vai se desfazer e engrossar a sopa naturalmente. Quando estiver bem cozido e cremoso, transfira para um liquidificador e bata até obter consistência de creme liso e alaranjado. Volte para a panela, adicione 2 colheres de leite de coco e mexa bem em fogo baixo por 2 minutos. Lave folhas frescas de coentro, pique finamente e polvilhe por cima ao servir. Sirva morno.",
    nutrientes: {
      calorias: 168,
      proteina: 11,
      carboidratos: 26,
      gordura: 3.5,
      ferro: 4.2,
      calcio: 35,
    },
    dicas:
      "Lentilha vermelha cozinha em 20min (não precisa molho). Cúrcuma tem curcumina (anti-inflamatório natural). O gengibre fortalece imunidade. Leite de coco adiciona cremosidade e gorduras boas. Sopa fica linda alaranjada!",
    foto: null,
    tags: ["vegetariano", "anti-inflamatório", "cremoso", "ferro"],
  },

  {
    id: 204,
    nome: "Frango Desfiado com Purê de Mandioquinha e Shimeji",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Difícil",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "80g de peito de frango orgânico",
      "3 mandioquinhas médias",
      "50g de cogumelo shimeji baby",
      "2cm de alho-poró",
      "Azeite trufado (gotas)",
      "Tomilho fresco",
    ],
    preparo:
      "Cozinhe 80g de peito de frango orgânico em água por 20 minutos até ficar completamente cozido. Retire, deixe esfriar um pouco e desfie em fios bem finos com as mãos ou dois garfos. Reserve. Descasque 3 mandioquinhas, corte em rodelas e cozinhe em água por 20 minutos até ficarem muito macias. Enquanto isso, limpe 50g de cogumelo shimeji baby (variedade pequena e mais macia): corte a base que prende os cogumelos e separe em pedaços pequenos. Lave rapidamente (cogumelo absorve muita água). Pique 2cm de alho-poró fininho (só parte branca). Em uma frigideira pequena, aqueça 1 colher de chá de azeite comum, refogue o alho-poró por 1 minuto, adicione o shimeji e refogue por 3 a 4 minutos até murchar. O shimeji tem sabor suave e umami. Quando a mandioquinha estiver macia, escorra e amasse até formar purê cremoso e aveludado. No prato, coloque uma base generosa de purê de mandioquinha. Por cima, espalhe o frango desfiado. Distribua o shimeji refogado. Finalize com 2 a 3 gotas de azeite trufado (tem sabor forte, use pouco) e folhinhas de tomilho fresco. Sirva morno.",
    nutrientes: {
      calorias: 215,
      proteina: 20,
      carboidratos: 24,
      gordura: 5,
      ferro: 1.5,
      calcio: 28,
    },
    dicas:
      "Shimeji baby é mais macio e tem sabor umami suave. Azeite trufado em gotas dá toque gourmet mas use com moderação (sabor forte). Tomilho fresco é aromático. Apresentação de restaurante!",
    foto: null,
    tags: ["gourmet", "cogumelos", "proteína", "aromático"],
  },

  {
    id: 205,
    nome: "Mini Hambúrguer de Salmão com Abacate",
    fase: "8-10",
    tempo: 25,
    dificuldade: "Média",
    categoria: "Proteína",
    premium: true,
    ingredientes: [
      "100g de salmão fresco sem pele",
      "1/4 de abacate maduro",
      "1 colher (sopa) de aveia em flocos",
      "Endro fresco (dill)",
      "Suco de limão siciliano",
    ],
    preparo:
      "Use apenas salmão fresco e de qualidade - nunca defumado para bebês. Remova qualquer pele e espinhas do filé de salmão. Inspecione bem passando os dedos. Corte 100g de salmão em cubos pequenos. Coloque em um processador de alimentos e pulse algumas vezes até picar grosseiramente - não deixe virar pasta, deve ter pequenos pedaços visíveis. Transfira para uma tigela. Adicione 1 colher de sopa de aveia em flocos finos e folhas frescas de endro (dill) picadas - endro combina perfeitamente com salmão. Misture bem. A aveia vai absorver umidade e ajudar a ligar. Com as mãos levemente úmidas, forme mini hambúrgueres pequenos (tamanho de uma moeda grande) - devem ser finos para cozinhar bem. Preaqueça o forno a 180°C. Coloque os mini hambúrgueres em assadeira forrada com papel manteiga. Asse por 12 a 15 minutos até ficarem firmes e levemente dourados. Enquanto assam, amasse 1/4 de abacate maduro com algumas gotas de limão siciliano. Quando os hambúrgueres estiverem prontos, sirva acompanhados do abacate amassado. Bebê pode pegar com as mãos. Sirva morno.",
    nutrientes: {
      calorias: 198,
      proteina: 18,
      carboidratos: 8,
      gordura: 11,
      ferro: 0.8,
      calcio: 25,
    },
    dicas:
      "Salmão é riquíssimo em ômega 3 DHA (essencial para desenvolvimento do cérebro). Abacate tem gorduras monoinsaturadas saudáveis. Endro (dill) é erva aromática que combina perfeitamente. Formato finger food estimula autonomia.",
    foto: null,
    tags: ["ômega 3", "DHA", "finger food", "gourmet"],
  },

  {
    id: 206,
    nome: "Cuscuz Marroquino com Frango e Tâmaras",
    fase: "8-10",
    tempo: 30,
    dificuldade: "Média",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "3 colheres (sopa) de cuscuz marroquino",
      "60g de frango",
      "2 tâmaras sem caroço",
      "Cenoura ralada",
      "Canela em pó",
      "Azeite",
    ],
    preparo:
      "O cuscuz marroquino é diferente do cuscuz nordestino - são grãos pequenos de semolina que preparam rapidamente. Coloque 3 colheres de sopa de cuscuz marroquino em uma tigela. Ferva 100ml de água e despeje sobre o cuscuz. Tampe com prato e deixe hidratar por 5 minutos - o cuscuz vai absorver toda água e ficar fofinho. Solte com garfo. Enquanto hidrata, cozinhe 60g de frango em cubinhos pequenos em água por 15 minutos. Escorra e desfie fininho. Pegue 2 tâmaras medjool sem caroço (mais macias e doces) e pique em pedacinhos bem pequenos - tâmaras são muito doces naturalmente e grudentas, corte com cuidado. Rale finamente um pedaço de cenoura. Em uma tigela, misture o cuscuz hidratado, o frango desfiado, os pedacinhos de tâmara e a cenoura ralada. Adicione uma pitada mínima de canela em pó e 1 colher de chá de azeite. Misture tudo delicadamente - a textura deve ficar soltinha com pontos coloridos. O sabor será levemente adocicado das tâmaras. Sirva em temperatura ambiente ou morno.",
    nutrientes: {
      calorias: 195,
      proteina: 16,
      carboidratos: 28,
      gordura: 3,
      ferro: 1.2,
      calcio: 30,
    },
    dicas:
      "Cuscuz marroquino prepara em apenas 5 minutos! Tâmaras dão doçura natural intensa - use apenas 2. Sabor exótico do Oriente Médio expande o paladar do bebê. Canela combina perfeitamente com tâmaras.",
    foto: null,
    tags: ["exótico", "rápido", "doce natural"],
  },

  {
    id: 207,
    nome: "Nhoque de Batata Baroa com Molho de Tomate Caseiro",
    fase: "8-10",
    tempo: 45,
    dificuldade: "Difícil",
    categoria: "Massas",
    premium: true,
    ingredientes: [
      "3 batatas baroa médias",
      "3 colheres (sopa) de farinha de arroz",
      "1 gema de ovo",
      "4 tomates maduros",
      "Manjericão fresco",
      "Azeite",
    ],
    preparo:
      "Esta receita tem trabalho mas o resultado é lindo! Cozinhe 3 batatas baroa com casca em água por 20 minutos até ficarem macias. Escorra, deixe esfriar um pouco, descasque e amasse ainda mornas até virar purê bem liso e sem grumos - é importante amassar enquanto quente. Deixe o purê esfriar até morno. Adicione ao purê: 1 gema de ovo (reserve clara para outro uso) e 3 colheres de farinha de arroz (sem glúten). Misture com as mãos até formar uma massa macia e levemente grudenta - não adicione mais farinha senão fica duro. Enfarinhe levemente uma superfície e divida a massa em 4 porções. Role cada porção formando rolinhos compridos de 1cm de espessura. Corte os rolinhos em pedacinhos de 2cm - esses são os nhoques. Opcional: pressione levemente cada nhoque com um garfo para fazer desenhos. Enquanto faz os nhoques, prepare molho simples: pique 4 tomates maduros sem pele, refogue em 1 colher de azeite por 10 minutos com manjericão fresco. Amasse até virar molho grosso. Ferva água em panela grande, adicione os nhoques e cozinhe por 2 a 3 minutos - quando subirem à superfície estão prontos. Retire com escumadeira, misture com molho. Sirva morno.",
    nutrientes: {
      calorias: 175,
      proteina: 5,
      carboidratos: 32,
      gordura: 3.5,
      ferro: 1,
      calcio: 35,
    },
    dicas:
      "Batata baroa deixa nhoque amarelinho e mais nutritivo. Farinha de arroz torna sem glúten. Formato divertido estimula bebê. Quando sobem na água estão prontos! Pode congelar nhoques crus.",
    foto: null,
    tags: ["massa", "sem glúten", "caseiro", "italiano"],
  },

  {
    id: 208,
    nome: "Escondidinho de Carne com Purê de Abóbora",
    fase: "8-10",
    tempo: 40,
    dificuldade: "Média",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "100g de carne moída magra",
      "200g de abóbora",
      "1/2 tomate",
      "Cebola roxa",
      "Cenoura ralada",
      "1 colher (chá) de queijo minas ralado (opcional)",
    ],
    preparo:
      "Preaqueça o forno a 180°C. Para o recheio: em uma panela, refogue 1 colher de chá de cebola roxa picada em um fio de água. Adicione 100g de carne moída magra e mexa para desfazer. Cozinhe por 5 minutos. Adicione meio tomate picado sem pele e 2 colheres de cenoura ralada fina. Cozinhe mais 10 minutos até a carne estar bem cozida e os legumes macios. A mistura deve ficar úmida mas não ensopada. Reserve. Para o purê: descasque 200g de abóbora, corte em cubos e cozinhe em água por 20 minutos até bem macia. Escorra e amasse até formar purê liso alaranjado. A abóbora tem doçura natural que equilibra o sabor da carne. Em um refratário pequeno untado levemente com azeite, monte camadas: primeiro coloque metade do purê de abóbora no fundo, espalhe toda carne por cima, cubra com o restante do purê de abóbora. Alise a superfície. Se quiser, polvilhe 1 colher de chá de queijo minas ralado por cima (opcional). Leve ao forno por 15 minutos até aquecer e dourar levemente a superfície. Deixe esfriar 5 minutos antes de servir. Sirva morno.",
    nutrientes: {
      calorias: 210,
      proteina: 18,
      carboidratos: 22,
      gordura: 6,
      ferro: 2.5,
      calcio: 45,
    },
    dicas:
      "Apresentação bonita em camadas estimula apetite. Abóbora dá doçura que equilibra sabor da carne. Pode fazer em porções individuais em forminha de muffin. Congela muito bem.",
    foto: null,
    tags: ["gratinado", "completo", "congelável"],
  },

  {
    id: 209,
    nome: "Sopa de Frango com Macarrão de Arroz e Legumes",
    fase: "8-10",
    tempo: 35,
    dificuldade: "Média",
    categoria: "Completa",
    premium: true,
    ingredientes: [
      "80g de peito de frango",
      "30g de macarrão de arroz (ninho)",
      "Cenoura, abobrinha, batata picadas",
      "2 folhas de couve",
      "Salsinha",
      "Azeite",
    ],
    preparo:
      "Em uma panela média, coloque 80g de peito de frango em cubos com 500ml de água e leve ao fogo médio. Deixe cozinhar por 15 minutos até o frango ficar macio e o líquido virar um caldo saboroso. Enquanto o frango cozinha, descasque e pique bem pequeno: meia cenoura, um pedaço de abobrinha e uma batata pequena - cubos de meio centímetro. Quando o frango estiver cozido, retire com escumadeira, deixe esfriar e desfie em fios bem finos. Retorne o frango desfiado para o caldo. Adicione todos os legumes picados no caldo fervendo. Cozinhe por 12 minutos até os legumes ficarem macios. O macarrão de arroz é sem glúten e cozinha rápido: quebre um ninho pequeno de macarrão de arroz em pedaços menores (facilita para o bebê comer). Adicione o macarrão quebrado na sopa e cozinhe por apenas 3 a 4 minutos - macarrão de arroz cozinha muito rápido, não deixe passar. Lave 2 folhas de couve, retire o talo, pique fino e adicione nos últimos 2 minutos. A couve deve murchar mas manter cor verde. Finalize com salsinha picada e 1 colher de chá de azeite. A sopa deve ficar encorpada e colorida. Sirva morna.",
    nutrientes: {
      calorias: 195,
      proteina: 17,
      carboidratos: 24,
      gordura: 4,
      ferro: 1.8,
      calcio: 45,
    },
    dicas:
      "Macarrão de arroz é sem glúten e tem textura macia perfeita para bebês. Cozinha em 3min - não deixe passar. Sopa completa com proteína, carboidrato e vegetais coloridos. Conforto em tigela!",
    foto: null,
    tags: ["sopa", "sem glúten", "completo", "conforto"],
  },

  {
    id: 210,
    nome: "Panqueca de Banana com Aveia e Ovo",
    fase: "8-10",
    tempo: 15,
    dificuldade: "Fácil",
    categoria: "Lanche",
    premium: true,
    ingredientes: [
      "1 banana madura grande",
      "1 ovo inteiro",
      "2 colheres (sopa) de aveia em flocos finos",
      "Canela em pó",
      "Óleo de coco para untar",
    ],
    preparo:
      "Esta receita tem apenas 3 ingredientes principais! Descasque 1 banana madura grande (com pontinhos marrons - mais doce) e coloque em uma tigela. Amasse muito bem com garfo até virar pasta lisa sem grumos. Quebre 1 ovo inteiro e adicione à banana amassada. Misture bem com garfo ou batedor pequeno até incorporar completamente - a mistura vai ficar líquida. Adicione 2 colheres de sopa de aveia em flocos finos (não use aveia grossa) e misture. A aveia vai absorver um pouco do líquido. Polvilhe uma pitada de canela em pó e misture. Deixe a massa descansar 5 minutos para a aveia hidratar - ficará mais espessa. Aqueça uma frigideira antiaderente em fogo médio-baixo. Unte levemente com óleo de coco (apenas uma passada). Com uma colher, coloque porções pequenas da massa na frigideira formando mini panquecas (tamanho de uma moeda grande). Cozinhe por 2 minutos de um lado até fazer bolhinhas, vire com espátula e cozinhe mais 2 minutos do outro lado. Devem ficar douradas mas macias. Faça várias mini panquecas. Sirva morno - formato perfeito para bebê pegar com a mão.",
    nutrientes: {
      calorias: 165,
      proteina: 7,
      carboidratos: 24,
      gordura: 5,
      ferro: 1.2,
      calcio: 35,
    },
    dicas:
      "Apenas 3 ingredientes! Sem farinha, sem açúcar, sem leite. Banana madura dá toda doçura. Formato finger food estimula autonomia. Ótimo para café da manhã ou lanche. Pode congelar.",
    foto: null,
    tags: ["café da manhã", "BLW", "rápido", "3 ingredientes"],
  },
];

export default receitas;
