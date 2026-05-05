import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Guia() {
  useEffect(() => {
    document.title = "Guia Completo de Introdução Alimentar 2026 | Papazz";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Guia completo e atualizado de introdução alimentar: quando começar, o que oferecer, alimentos proibidos, BLW vs papinha, cronograma por idade e muito mais. Baseado em OMS e SBP.");

    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Guia Completo de Introdução Alimentar 2026",
      "description": "Tudo que pais e cuidadores precisam saber sobre introdução alimentar: quando começar, métodos, alimentos por fase, cronograma e dicas práticas.",
      "author": { "@type": "Organization", "name": "Papazz" },
      "publisher": { "@type": "Organization", "name": "Papazz", "logo": { "@type": "ImageObject", "url": "https://papazz.vercel.app/logo1.png" } },
      "datePublished": "2026-05-01",
      "dateModified": "2026-05-04",
      "mainEntityOfPage": { "@type": "WebPage", "@id": "https://papazz.vercel.app/guia" },
      "about": [
        { "@type": "Thing", "name": "Introdução Alimentar" },
        { "@type": "Thing", "name": "Nutrição Infantil" },
        { "@type": "Thing", "name": "BLW" }
      ],
      "citation": [
        { "@type": "CreativeWork", "name": "Guia Alimentar para Crianças Brasileiras", "author": { "@type": "Organization", "name": "Ministério da Saúde" } },
        { "@type": "CreativeWork", "name": "Manual de Alimentação: da infância à adolescência", "author": { "@type": "Organization", "name": "Sociedade Brasileira de Pediatria" } }
      ]
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "schema-guia";
    document.head.appendChild(script);
    return () => { document.getElementById("schema-guia")?.remove(); };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <nav className="text-sm font-corpo text-white/70 mb-4">
            <Link to="/" className="hover:text-white">Início</Link> › Guia
          </nav>
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Guia Completo de Introdução Alimentar
          </h1>
          <p className="text-lg text-white/90 font-corpo mb-4">
            Tudo que você precisa saber para começar com segurança e tranquilidade.
            Baseado em diretrizes da OMS, SBP e Ministério da Saúde.
          </p>
          <p className="text-sm text-white/70 font-corpo">Atualizado em maio de 2026 · Leitura: 12 min</p>
        </div>
      </div>

      {/* Índice */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-6">
          <p className="text-xs font-corpo font-semibold text-gray-500 uppercase tracking-wide mb-3">Neste guia</p>
          <div className="flex flex-wrap gap-2">
            {[
              ["#o-que-e", "O que é"],
              ["#quando-comecar", "Quando começar"],
              ["#sinais", "Sinais de prontidão"],
              ["#metodos", "BLW vs Papinha"],
              ["#primeira-semana", "Primeira semana"],
              ["#por-fase", "Alimentos por fase"],
              ["#proibidos", "Proibidos"],
              ["#cronograma", "Cronograma"],
              ["#dicas", "Dicas práticas"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="text-xs font-corpo font-semibold text-[#FF6B6B] bg-red-50 px-3 py-1 rounded-full hover:bg-red-100 transition">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <article className="max-w-4xl mx-auto px-4 md:px-6 py-12 space-y-16 font-corpo text-gray-700 leading-relaxed">

        {/* O que é */}
        <section id="o-que-e">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">O que é a introdução alimentar?</h2>
          <p className="mb-4">
            A <strong>introdução alimentar</strong> é o processo de oferecer alimentos sólidos e semissólidos ao bebê
            pela primeira vez, de forma gradual e progressiva. Ela marca a transição do leite materno (ou fórmula) como
            única fonte de nutrição para uma alimentação variada, rica em sabores, texturas e nutrientes.
          </p>
          <p className="mb-4">
            Segundo a <strong>Organização Mundial da Saúde (OMS)</strong> e a <strong>Sociedade Brasileira de
            Pediatria (SBP)</strong>, o aleitamento materno exclusivo deve ser mantido até os 6 meses de vida.
            A partir daí, inicia-se a introdução alimentar de forma complementar ao leite — que ainda deve
            continuar sendo oferecido.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-[10px] p-4">
            <p className="text-sm"><strong>Importante:</strong> A introdução alimentar não substitui o leite materno.
            Até os 2 anos de idade, o ideal é manter o aleitamento materno junto com a alimentação complementar.</p>
          </div>
        </section>

        {/* Quando começar */}
        <section id="quando-comecar">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Quando começar a introdução alimentar?</h2>
          <p className="mb-4">
            A recomendação universal é iniciar a introdução alimentar aos <strong>6 meses de idade</strong>.
            Antes disso, o sistema digestivo do bebê ainda não está maduro o suficiente para processar alimentos sólidos,
            e o risco de alergias e infecções é maior.
          </p>
          <p className="mb-4">
            Em casos excepcionais, o pediatra pode indicar o início entre 4 e 6 meses — mas isso deve ser uma
            decisão médica individualizada, nunca uma escolha dos pais por iniciativa própria.
          </p>
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {[
              { titulo: "Antes de 4 meses", cor: "red", texto: "Sistema digestivo imaturo. Risco de alergias. Contraindicado." },
              { titulo: "4 a 6 meses", cor: "yellow", texto: "Somente se o pediatra indicar. Casos específicos de desenvolvimento." },
              { titulo: "A partir de 6 meses", cor: "green", texto: "Recomendação da OMS, SBP e Ministério da Saúde. Ideal para a maioria." },
            ].map((item) => (
              <div key={item.titulo} className={`bg-${item.cor}-50 border border-${item.cor}-200 rounded-[10px] p-4`}>
                <h3 className={`font-titulo font-bold text-${item.cor}-800 mb-2 text-sm`}>{item.titulo}</h3>
                <p className={`text-xs font-corpo text-${item.cor}-700`}>{item.texto}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sinais de prontidão */}
        <section id="sinais">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Sinais de prontidão para a introdução alimentar</h2>
          <p className="mb-4">
            Além da idade, é importante observar sinais de <strong>prontidão neuromotora</strong>. O bebê está pronto quando:
          </p>
          <ul className="space-y-3 mb-4">
            {[
              "Consegue sentar com apoio mínimo e manter a cabeça erguida estável",
              "Demonstra interesse pela comida — olha para o prato, abre a boca ao ver alimento",
              "Perdeu o reflexo de protrusão da língua (não empurra tudo que vai à boca para fora)",
              "Consegue coordenar olho-mão-boca (levar objetos à boca com intenção)",
              "Dobrou o peso de nascimento (referência para desenvolvimento adequado)",
            ].map((sinal) => (
              <li key={sinal} className="flex items-start gap-3">
                <span className="text-green-500 text-lg mt-0.5 flex-shrink-0">✓</span>
                <span>{sinal}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-500">
            <em>Sempre confirme com o pediatra antes de iniciar. Este guia tem caráter informativo e não substitui avaliação profissional.</em>
          </p>
        </section>

        {/* BLW vs Papinha */}
        <section id="metodos">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">BLW vs Papinha: qual método escolher?</h2>
          <p className="mb-4">
            Existem dois métodos principais de introdução alimentar, e ambos são válidos e recomendados pela SBP.
            A escolha depende do perfil da família, do bebê e da orientação do pediatra.
          </p>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="border border-gray-200 rounded-[10px] p-5">
              <h3 className="font-titulo font-bold text-gray-900 mb-3 text-lg">🥄 Papinha Tradicional</h3>
              <p className="text-sm mb-3">Alimentos cozidos e amassados ou triturados, oferecidos em colher pelo cuidador.</p>
              <p className="text-sm font-semibold mb-2">Vantagens:</p>
              <ul className="text-sm space-y-1 mb-3">
                <li>• Controle mais fácil da quantidade ingerida</li>
                <li>• Menor risco de engasgos</li>
                <li>• Transição mais gradual de texturas</li>
              </ul>
              <p className="text-sm font-semibold mb-2">A considerar:</p>
              <ul className="text-sm space-y-1">
                <li>• Menos estímulo à autonomia inicial</li>
                <li>• Requer mais preparo do cuidador</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-[10px] p-5">
              <h3 className="font-titulo font-bold text-gray-900 mb-3 text-lg">✋ BLW (Baby-Led Weaning)</h3>
              <p className="text-sm mb-3">Alimentos em pedaços manejáveis que o bebê leva à boca sozinho, estimulando autonomia desde o início.</p>
              <p className="text-sm font-semibold mb-2">Vantagens:</p>
              <ul className="text-sm space-y-1 mb-3">
                <li>• Estimula autonomia e coordenação</li>
                <li>• Exposição a texturas reais desde o início</li>
                <li>• Participação na refeição da família</li>
              </ul>
              <p className="text-sm font-semibold mb-2">A considerar:</p>
              <ul className="text-sm space-y-1">
                <li>• Mais bagunça no início</li>
                <li>• Difícil saber quanto o bebê ingeriu</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-[10px] p-4">
            <p className="text-sm">💡 <strong>Dica:</strong> Muitas famílias combinam os dois métodos — papinha no almoço e pedaços nos lanches, por exemplo. A <strong>abordagem mista</strong> é válida e muito comum no Brasil.</p>
          </div>
        </section>

        {/* Primeira semana */}
        <section id="primeira-semana">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">A primeira semana passo a passo</h2>
          <p className="mb-4">
            A primeira semana é sobre <strong>adaptação</strong>, não nutrição. O leite ainda supre todas as necessidades.
            O objetivo é apresentar sabores e texturas, não garantir ingestão mínima.
          </p>
          <div className="space-y-4">
            {[
              { dia: "Dias 1–2", titulo: "Um alimento por vez", texto: "Comece com um único alimento (ex: batata-doce amassada). Ofereça a mesma coisa 2 dias seguidos para observar reações alérgicas." },
              { dia: "Dias 3–4", titulo: "Introduza um segundo alimento", texto: "Se não houve reação, introduza um segundo alimento novo. Continue observando por 48h." },
              { dia: "Dias 5–7", titulo: "Combine os aceitos", texto: "Pode começar a combinar alimentos já aceitos. Ex: batata-doce + cenoura amassadas juntas." },
            ].map((item) => (
              <div key={item.dia} className="flex gap-4">
                <div className="flex-shrink-0 w-20 h-20 bg-[#FF6B6B] rounded-[10px] flex items-center justify-center text-white text-xs font-titulo font-bold text-center leading-tight p-2">
                  {item.dia}
                </div>
                <div className="flex-1 border border-gray-200 rounded-[10px] p-4">
                  <h3 className="font-titulo font-bold text-gray-900 mb-1">{item.titulo}</h3>
                  <p className="text-sm">{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alimentos por fase */}
        <section id="por-fase">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Alimentos recomendados por fase de idade</h2>
          <div className="space-y-6">
            {[
              {
                fase: "6–8 meses", cor: "#FFB5A7",
                texto: "Início com purês e papas de consistência lisa. Legumes cozidos e amassados, frutas amassadas, cereais sem glúten inicialmente.",
                exemplos: ["Batata-doce", "Abóbora", "Cenoura", "Banana", "Maçã cozida", "Arroz papinha", "Feijão amassado"],
              },
              {
                fase: "8–10 meses", cor: "#FFCC7A",
                texto: "Texturas mais grossas e pedaços pequenos. Proteínas animais começam a ser introduzidas. Glúten pode ser oferecido.",
                exemplos: ["Frango desfiado", "Peixe branco", "Ovos bem cozidos", "Macarrão", "Pão integral", "Iogurte natural"],
              },
              {
                fase: "10–12 meses", cor: "#B5E7DD",
                texto: "Alimentos em pedaços manejáveis. Bebê pode participar das refeições da família (com adaptações — sem sal, sem frituras).",
                exemplos: ["Carne moída", "Leguminosas inteiras", "Queijo branco", "Massa integral", "Folhas cozidas", "Ovos mexidos"],
              },
              {
                fase: "12+ meses", cor: "#A7D8C9",
                texto: "Transição para a mesa da família. Variedade máxima, texturas completas. Leite de vaca integral pode ser introduzido.",
                exemplos: ["Comida da família (sem sal excessivo)", "Leite de vaca", "Mel (a partir de 1 ano)", "Castanhas trituradas", "Frutas cítricas"],
              },
            ].map((item) => (
              <div key={item.fase} className="border border-gray-200 rounded-[10px] overflow-hidden">
                <div className="px-5 py-3 font-titulo font-bold text-gray-900 text-sm" style={{ backgroundColor: item.cor + "40" }}>
                  {item.fase}
                </div>
                <div className="p-5">
                  <p className="text-sm mb-3">{item.texto}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.exemplos.map((e) => (
                      <span key={e} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-corpo">{e}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/receitas" className="inline-block bg-[#FF6B6B] text-white font-corpo font-bold px-6 py-3 rounded-[10px] hover:shadow-lg transition">
              Ver 45 receitas por fase →
            </Link>
          </div>
        </section>

        {/* Proibidos */}
        <section id="proibidos">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Alimentos proibidos no primeiro ano de vida</h2>
          <p className="mb-4">Alguns alimentos não devem ser oferecidos antes dos 12 meses por risco à saúde do bebê:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { item: "Mel", motivo: "Risco de botulismo infantil" },
              { item: "Sal adicionado", motivo: "Sobrecarga renal — use temperos naturais" },
              { item: "Açúcar e adoçantes", motivo: "Formação de paladar para o doce, problemas dentários" },
              { item: "Leite de vaca como bebida principal", motivo: "Pode ser usado em preparações, mas não como substituto do leite materno" },
              { item: "Embutidos e processados", motivo: "Sódio, aditivos e conservantes inadequados" },
              { item: "Frituras", motivo: "Gordura em excesso prejudica o desenvolvimento" },
              { item: "Refrigerantes e sucos industriais", motivo: "Açúcar, corantes e acidez" },
              { item: "Alimentos ultraprocessados", motivo: "Biscoitos recheados, salgadinhos, macarrão instantâneo" },
              { item: "Café, chás estimulantes", motivo: "Cafeína e outras substâncias inadequadas" },
              { item: "Castanhas inteiras", motivo: "Risco de engasgo — triture ou use pasta" },
            ].map((item) => (
              <div key={item.item} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-[8px] p-3">
                <span className="text-red-500 font-bold flex-shrink-0">✗</span>
                <div>
                  <p className="font-corpo font-semibold text-gray-900 text-sm">{item.item}</p>
                  <p className="text-xs text-gray-600">{item.motivo}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Link to="/blog/alimentos-proibidos-bebe-1-ano" className="text-sm text-[#FF6B6B] font-corpo font-semibold hover:underline">
              Lista completa de alimentos proibidos →
            </Link>
          </div>
        </section>

        {/* Cronograma */}
        <section id="cronograma">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Cronograma de refeições por idade</h2>
          <p className="mb-4">A quantidade e frequência de refeições sólidas aumenta progressivamente com a idade:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm" style={{ minWidth: 500 }}>
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left font-titulo font-bold text-gray-900 border-b border-gray-200">Idade</th>
                  <th className="p-3 text-center font-titulo font-bold text-gray-900 border-b border-gray-200">Refeições sólidas/dia</th>
                  <th className="p-3 text-left font-titulo font-bold text-gray-900 border-b border-gray-200">Consistência</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6–8 meses", "2 refeições", "Purês lisos, papas"],
                  ["8–10 meses", "3 refeições", "Purês grossos, pedaços pequenos"],
                  ["10–12 meses", "3–4 refeições", "Pedaços manejáveis"],
                  ["12–18 meses", "3 refeições + 2 lanches", "Comida da família adaptada"],
                ].map(([idade, ref, cons], i) => (
                  <tr key={idade} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-corpo font-semibold text-gray-900">{idade}</td>
                    <td className="p-3 text-center font-corpo text-gray-700">{ref}</td>
                    <td className="p-3 font-corpo text-gray-700">{cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 text-center">
            <Link to="/cronograma" className="inline-block text-[#FF6B6B] font-corpo font-semibold hover:underline text-sm">
              Ver cronograma completo com horários →
            </Link>
          </div>
        </section>

        {/* Dicas práticas */}
        <section id="dicas">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">Dicas práticas para o dia a dia</h2>
          <div className="space-y-4">
            {[
              { emoji: "🔄", titulo: "Reapresente alimentos recusados", texto: "Bebês precisam de até 15 exposições ao mesmo alimento antes de aceitar. Não desista após a primeira ou segunda tentativa." },
              { emoji: "📅", titulo: "Planeje a semana com antecedência", texto: "Organizar o cardápio dos 7 dias no domingo economiza tempo, evita repetições e garante variedade nutricional." },
              { emoji: "🛒", titulo: "Gere a lista de compras antes de ir ao mercado", texto: "Com o cardápio planejado, liste todos os ingredientes necessários para a semana inteira — evita esquecimentos e compras desnecessárias." },
              { emoji: "📖", titulo: "Registre a aceitação de cada refeição", texto: "Anotar o que o bebê aceitou ou recusou ajuda a identificar padrões e a ter dados concretos para levar ao pediatra." },
              { emoji: "⏰", titulo: "Respeite o tempo do bebê", texto: "Refeições devem durar entre 20 e 30 minutos. Não force, não distraia com tela, não ofereça outra coisa se recusar." },
              { emoji: "🌿", titulo: "Use temperos naturais desde cedo", texto: "Alho, cebola, salsinha, cebolinha e outros temperos naturais podem e devem ser usados — desenvolvem o paladar sem risco." },
            ].map((dica) => (
              <div key={dica.titulo} className="flex gap-4 p-4 border border-gray-200 rounded-[10px]">
                <span className="text-2xl flex-shrink-0">{dica.emoji}</span>
                <div>
                  <h3 className="font-titulo font-bold text-gray-900 mb-1">{dica.titulo}</h3>
                  <p className="text-sm">{dica.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA App */}
        <section className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] rounded-[10px] p-8 text-center">
          <h2 className="text-2xl font-titulo font-bold text-white mb-3">O Papazz cuida de tudo isso por você</h2>
          <p className="text-white/90 font-corpo mb-6">
            45 receitas organizadas por fase, planejamento semanal com lista de compras automática e diário de aceitação com análise de padrões.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/receitas" className="px-6 py-3 bg-white text-[#FF6B6B] font-corpo font-bold rounded-[10px] hover:shadow-lg transition">
              Ver Receitas Grátis
            </Link>
            <Link to="/login" className="px-6 py-3 bg-white/20 text-white font-corpo font-bold rounded-[10px] hover:bg-white/30 transition">
              Acessar Premium
            </Link>
          </div>
        </section>

        {/* Referências EEAT */}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="text-lg font-titulo font-bold text-gray-900 mb-4">Referências e embasamento científico</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Organização Mundial da Saúde (OMS) — <em>Infant and young child feeding: model chapter for textbooks</em>, 2009</li>
            <li>• Sociedade Brasileira de Pediatria (SBP) — <em>Manual de Alimentação: da infância à adolescência</em>, 2023</li>
            <li>• Ministério da Saúde — <em>Guia Alimentar para Crianças Brasileiras Menores de 2 Anos</em>, 2019</li>
            <li>• ESPGHAN Committee on Nutrition — <em>Complementary Feeding: A Position Paper</em>, 2017</li>
          </ul>
          <p className="text-xs text-gray-400 mt-4">
            Este guia tem caráter informativo e educacional. Não substitui avaliação médica individualizada. Sempre consulte o pediatra do seu bebê.
          </p>
        </section>

        {/* Links internos */}
        <section>
          <h2 className="text-lg font-titulo font-bold text-gray-900 mb-4">Leia também</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { to: "/blog/quando-comecar-introducao-alimentar", label: "Quando Começar a Introdução Alimentar? Guia Completo" },
              { to: "/blog/blw-vs-papinha-qual-escolher", label: "BLW vs Papinha: Qual Método Escolher?" },
              { to: "/blog/alimentos-proibidos-bebe-1-ano", label: "Alimentos Proibidos Antes de 1 Ano: Lista Completa" },
              { to: "/blog/bebe-nao-quer-comer-solucoes", label: "Bebê Não Quer Comer: 10 Soluções Que Funcionam" },
              { to: "/faq", label: "Perguntas Frequentes sobre Introdução Alimentar" },
              { to: "/cronograma", label: "Cronograma de Refeições por Idade" },
            ].map((link) => (
              <Link key={link.to} to={link.to} className="flex items-center gap-2 p-3 border border-gray-200 rounded-[8px] hover:border-[#FF6B6B] hover:bg-red-50/20 transition text-sm font-corpo font-semibold text-gray-800">
                <span className="text-[#FF6B6B]">→</span> {link.label}
              </Link>
            ))}
          </div>
        </section>

      </article>
    </div>
  );
}
