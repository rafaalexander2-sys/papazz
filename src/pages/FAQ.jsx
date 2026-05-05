import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PERGUNTAS = [
  {
    q: "Com quantos meses começa a introdução alimentar?",
    a: "A introdução alimentar deve começar aos 6 meses de vida, conforme recomendação da Organização Mundial da Saúde (OMS) e da Sociedade Brasileira de Pediatria (SBP). Antes disso, o sistema digestivo do bebê ainda não está maduro o suficiente. Em casos excepcionais, o pediatra pode indicar o início entre 4 e 6 meses — mas sempre como decisão médica individualizada.",
  },
  {
    q: "Qual é o primeiro alimento a oferecer ao bebê?",
    a: "Não existe um alimento obrigatoriamente 'primeiro'. A recomendação atual é começar com legumes e verduras cozidos e amassados (batata-doce, cenoura, abobrinha, abóbora) ou frutas amassadas (banana, pera cozida, maçã cozida). O mais importante é começar com um alimento de cada vez e observar reações por 48 horas antes de introduzir o próximo.",
  },
  {
    q: "Posso dar sal para o bebê na introdução alimentar?",
    a: "Não. O sal adicionado é contraindicado durante todo o primeiro ano de vida. Os rins do bebê ainda não têm capacidade de processar o excesso de sódio, e o consumo precoce de sal está associado a problemas renais e ao desenvolvimento de preferência excessiva pelo sabor salgado. Use temperos naturais como alho, cebola, salsinha, cebolinha e manjericão — sem restrições.",
  },
  {
    q: "Posso dar mel para o bebê?",
    a: "Não, nunca antes de 1 ano de idade. O mel pode conter esporos de Clostridium botulinum, bactéria que causa o botulismo infantil — doença grave que pode levar à paralisia e morte. Isso vale para qualquer tipo de mel, incluindo mel orgânico ou artesanal. Após 12 meses, o organismo da criança já tem maturidade para inativar os esporos naturalmente.",
  },
  {
    q: "O que é BLW e é seguro para bebês?",
    a: "BLW (Baby-Led Weaning, ou desmame guiado pelo bebê) é um método de introdução alimentar em que o bebê recebe alimentos em pedaços manejáveis e se alimenta sozinho, sem colher nem purê. É reconhecido como seguro e eficaz pela SBP quando iniciado no momento certo (6 meses) e com alimentos no formato e consistência adequados. Estimula autonomia, desenvolvimento motor e exploração de texturas reais. A principal preocupação — risco de engasgo — é mitigada com o formato correto dos alimentos e supervisão constante do adulto.",
  },
  {
    q: "Qual é a quantidade ideal de comida para bebê de 6 meses?",
    a: "Nos primeiros meses de introdução, a quantidade é secundária — o objetivo é exploração e adaptação, não ingestão calórica (o leite ainda cumpre esse papel). Uma ou duas colheres já é um sucesso. Gradualmente, a quantidade aumenta: aos 6–8 meses, em torno de 2–3 colheres de sopa por refeição; aos 8–10 meses, meia tigela (120–150ml); aos 12 meses, em torno de uma tigela completa. Nunca force — o bebê tem mecanismos naturais de saciedade.",
  },
  {
    q: "O bebê recusou o alimento. O que fazer?",
    a: "Não insista na mesma refeição. A recusa faz parte do processo — pesquisas mostram que crianças precisam de até 15 exposições ao mesmo alimento antes de aceitá-lo. A estratégia certa é reapresentar o mesmo alimento após 10 a 15 dias, sem pressão e sem associar a experiência negativa. Oferecer o alimento em diferentes formas de preparo (cru, cozido, amassado, em pedaços) também ajuda. Se a recusa for generalizada e o bebê não estiver ganhando peso adequadamente, consulte o pediatra.",
  },
  {
    q: "Posso dar clara de ovo para o bebê?",
    a: "Sim. A recomendação atual da SBP e ESPGHAN é oferecer ovo inteiro (incluindo a clara) a partir dos 6 meses, bem cozido. A restrição à clara que existia no passado foi revisada — a exposição precoce ao ovo, ao contrário, pode reduzir o risco de alergia. O ovo deve ser sempre bem cozido (sem partes cruas ou líquidas) para evitar risco de salmonela.",
  },
  {
    q: "Como fazer a papinha perfeita para o bebê?",
    a: "A papinha ideal é feita com legumes e proteínas cozidos no vapor ou em pouca água para preservar nutrientes. Amasse com garfo (textura mais grossa, estimula mastigação) ou passe pelo mixer (textura mais lisa, para os primeiros dias). Não adicione sal, açúcar, manteiga ou óleo em excesso. Uma papinha equilibrada inclui: carboidrato (batata, arroz, macarrão), proteína (frango, carne, ovo, feijão), legume e verdura. Sirva sempre morna — nunca quente.",
  },
  {
    q: "O bebê pode comer a comida da família?",
    a: "A partir dos 10–12 meses, o bebê pode progressivamente participar das refeições da família, desde que a comida seja adaptada: sem sal adicionado em excesso, sem frituras, sem ultraprocessados e sem alimentos proibidos. A partir de 12 meses, a transição é mais ampla. O objetivo final da introdução alimentar é exatamente esse — integrar o bebê à mesa da família.",
  },
  {
    q: "Posso dar iogurte para o bebê antes de 1 ano?",
    a: "Sim. O iogurte natural integral (sem adição de açúcar, corantes ou aromatizantes) pode ser oferecido a partir dos 8 meses. O iogurte é uma exceção às restrições do leite de vaca — os processos de fermentação tornam as proteínas mais fáceis de digerir. Prefira iogurte integral natural sem sabor. Evite os iogurtes infantis industrializados que frequentemente contêm açúcar.",
  },
  {
    q: "Com que frequência devo oferecer alimentos ao bebê de 6 meses?",
    a: "Aos 6 meses, o recomendado é começar com 2 refeições por dia (almoço e jantar, ou almoço e lanche). A partir dos 8–9 meses, avança para 3 refeições. A partir dos 12 meses, 3 refeições principais + 2 lanches por dia. Nos intervalos, continua o leite materno. Não há horário fixo obrigatório — adapte à rotina da família, mas mantenha consistência.",
  },
  {
    q: "O leite materno deve continuar na introdução alimentar?",
    a: "Sim, com certeza. A introdução alimentar é complementar ao leite materno, não uma substituição. A OMS recomenda manter o aleitamento materno até os 2 anos de idade ou mais, junto com a alimentação complementar. O leite materno continua sendo importante fonte de imunidade, nutrição e vínculo durante esse período.",
  },
  {
    q: "Como usar o Papazz para organizar a introdução alimentar?",
    a: "O Papazz oferece 45 receitas organizadas por fase de idade (6–8m, 8–10m, 10–12m, 12+m), um cronograma de refeições interativo, e para usuários premium: planejamento semanal com grid de 7 dias × 5 refeições, lista de compras gerada automaticamente do planejamento, e diário alimentar com análise de aceitação. Tudo baseado nas diretrizes da OMS e SBP.",
  },
  {
    q: "Quais são os sinais de alergia alimentar no bebê?",
    a: "Os principais sinais de reação alérgica incluem: urticária (manchas avermelhadas na pele), inchaço de lábios ou face, vômitos, diarreia intensa, dificuldade para respirar ou choro excessivo após a introdução de um alimento. Se identificar qualquer sinal, suspenda o alimento imediatamente e consulte o pediatra. Por isso introduz-se um alimento por vez, com 48 horas de intervalo — para identificar o possível causador.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState(null);

  useEffect(() => {
    document.title = "Perguntas Frequentes sobre Introdução Alimentar | Papazz";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Respostas completas para as principais dúvidas sobre introdução alimentar: quando começar, o que oferecer, BLW, alimentos proibidos, quantidade e muito mais.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": PERGUNTAS.map((p) => ({
        "@type": "Question",
        "name": p.q,
        "acceptedAnswer": { "@type": "Answer", "text": p.a },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "schema-faq";
    document.head.appendChild(script);
    return () => { document.getElementById("schema-faq")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <nav className="text-sm font-corpo text-white/70 mb-4">
            <Link to="/" className="hover:text-white">Início</Link> › FAQ
          </nav>
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Perguntas Frequentes sobre Introdução Alimentar
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            {PERGUNTAS.length} respostas baseadas em diretrizes da OMS, SBP e Ministério da Saúde.
          </p>
        </div>
      </div>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-3">
          {PERGUNTAS.map((p, i) => (
            <div key={i} className="border border-gray-200 rounded-[10px] overflow-hidden">
              <button
                onClick={() => setAberta(aberta === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition"
              >
                <span className="font-corpo font-semibold text-gray-900 pr-4 leading-snug">{p.q}</span>
                <svg
                  className={`flex-shrink-0 w-5 h-5 text-[#FF6B6B] transition-transform ${aberta === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aberta === i && (
                <div className="px-5 pb-5 font-corpo text-gray-700 leading-relaxed text-sm border-t border-gray-100 pt-4">
                  {p.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer EEAT */}
        <div className="mt-10 bg-gray-50 border border-gray-200 rounded-[10px] p-5">
          <p className="text-sm font-corpo text-gray-600">
            <strong>Aviso:</strong> As respostas acima têm caráter informativo e educacional, baseadas em diretrizes
            da OMS, SBP e Ministério da Saúde. Não substituem consulta com pediatra ou nutricionista.
            Cada bebê é único — sempre valide com o profissional de saúde do seu filho.
          </p>
        </div>

        {/* Links relacionados */}
        <div className="mt-10">
          <h2 className="text-lg font-titulo font-bold text-gray-900 mb-4">Aprofunde o tema</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { to: "/guia", label: "Guia Completo de Introdução Alimentar" },
              { to: "/receitas", label: "45 Receitas por Fase de Idade" },
              { to: "/cronograma", label: "Cronograma de Refeições por Idade" },
              { to: "/blog/blw-vs-papinha-qual-escolher", label: "BLW vs Papinha: Qual Método Escolher?" },
              { to: "/blog/alimentos-proibidos-bebe-1-ano", label: "Alimentos Proibidos no 1º Ano" },
              { to: "/blog/bebe-nao-quer-comer-solucoes", label: "Bebê Não Quer Comer: 10 Soluções" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 p-3 border border-gray-200 rounded-[8px] hover:border-[#FF6B6B] hover:bg-red-50/20 transition text-sm font-corpo font-semibold text-gray-800">
                <span className="text-[#FF6B6B]">→</span> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
