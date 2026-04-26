export default function Sobre() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Sobre o Papazz
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            Facilitando a introdução alimentar com carinho e informação de
            qualidade
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        {/* Nossa História */}
        <section className="mb-12">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
            Nossa História
          </h2>
          <div className="prose prose-lg max-w-none font-corpo text-gray-700 leading-relaxed space-y-4">
            <p>
              O Papazz nasceu da experiência real de pais que enfrentaram os
              desafios da introdução alimentar. Sabemos como é estressante esse
              momento: dúvidas sobre o que oferecer, quando começar, como
              preparar e se o bebê está comendo o suficiente.
            </p>
            <p>
              Criamos esta plataforma para transformar esse período em algo mais
              leve e prazeroso, reunindo informações confiáveis, receitas
              testadas e cronogramas práticos em um só lugar.
            </p>
          </div>
        </section>

        {/* Missão */}
        <section className="mb-12 bg-[#FFF5F5] rounded-[10px] p-6 md:p-8">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
            Nossa Missão
          </h2>
          <p className="font-corpo text-gray-700 leading-relaxed text-lg">
            Empoderar mães, pais e cuidadores com conhecimento prático e
            acessível sobre introdução alimentar, tornando esse momento especial
            menos estressante e mais prazeroso para toda a família.
          </p>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-6">
            Nossos Valores
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-[10px] p-6">
              <h3 className="text-lg font-titulo font-bold text-[#FF6B6B] mb-2">
                Informação Confiável
              </h3>
              <p className="font-corpo text-gray-600 text-sm leading-relaxed">
                Todo nosso conteúdo é baseado em diretrizes da OMS, SBP e
                Ministério da Saúde. Priorizamos ciência sobre modismos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-[10px] p-6">
              <h3 className="text-lg font-titulo font-bold text-[#FF6B6B] mb-2">
                Praticidade
              </h3>
              <p className="font-corpo text-gray-600 text-sm leading-relaxed">
                Receitas simples, cronogramas claros e dicas aplicáveis no dia a
                dia. Sem complicação.
              </p>
            </div>

            <div className="border border-gray-200 rounded-[10px] p-6">
              <h3 className="text-lg font-titulo font-bold text-[#FF6B6B] mb-2">
                Acolhimento
              </h3>
              <p className="font-corpo text-gray-600 text-sm leading-relaxed">
                Sabemos que cada família é única. Sem julgamentos, apenas
                suporte e orientação respeitosa.
              </p>
            </div>

            <div className="border border-gray-200 rounded-[10px] p-6">
              <h3 className="text-lg font-titulo font-bold text-[#FF6B6B] mb-2">
                Transparência
              </h3>
              <p className="font-corpo text-gray-600 text-sm leading-relaxed">
                Sempre indicamos quando consultar profissionais e deixamos claro
                o que é informação geral vs. orientação individualizada.
              </p>
            </div>
          </div>
        </section>

        {/* O Que Oferecemos */}
        <section className="mb-12">
          <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-6">
            O Que Oferecemos
          </h2>
          <div className="space-y-4 font-corpo text-gray-700">
            <div className="flex items-start gap-3">
              <span className="text-[#FF6B6B] text-xl">✓</span>
              <p>
                <strong>Receitas Práticas:</strong> Papinhas e preparações
                adequadas para cada fase do desenvolvimento.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF6B6B] text-xl">✓</span>
              <p>
                <strong>Cronogramas Personalizados:</strong> Horários e
                quantidades adaptadas à idade do bebê.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF6B6B] text-xl">✓</span>
              <p>
                <strong>Guias Educativos:</strong> Artigos completos sobre BLW,
                alimentos proibidos, texturas e muito mais.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF6B6B] text-xl">✓</span>
              <p>
                <strong>Conteúdo Premium:</strong> Ferramentas avançadas como
                planejamento semanal, lista de compras e diário alimentar.
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="border-l-4 border-[#FF6B6B] bg-gray-50 rounded-[10px] p-6">
          <h3 className="text-lg font-titulo font-bold text-gray-900 mb-3">
            Importante
          </h3>
          <p className="font-corpo text-gray-600 text-sm leading-relaxed">
            O Papazz é uma plataforma informativa e educacional. Nosso conteúdo
            não substitui consultas com pediatras, nutricionistas ou outros
            profissionais de saúde. Sempre consulte o médico do seu bebê antes
            de iniciar a introdução alimentar ou fazer mudanças na dieta.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="font-corpo text-gray-600 mb-4">
            Pronto para facilitar a introdução alimentar?
          </p>

          <a
            href="/receitas"
            className="inline-block bg-gradient-to-r from-[#FF6B6B] to-[#FF8B8B] text-white font-corpo font-bold px-8 py-3 rounded-[10px] hover:shadow-lg transition"
          >
            Explorar Receitas
          </a>
        </div>
      </div>
    </div>
  );
}
