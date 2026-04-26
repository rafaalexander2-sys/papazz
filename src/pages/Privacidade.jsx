export default function Privacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            Última atualização: 25 de abril de 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="font-corpo text-gray-700 leading-relaxed space-y-6">
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              1. Introdução
            </h2>
            <p>
              O Papazz está comprometido em proteger sua privacidade. Esta
              Política de Privacidade explica como coletamos, usamos,
              armazenamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              2. Informações Coletadas
            </h2>
            <p>
              Coletamos informações fornecidas diretamente por você e dados
              coletados automaticamente durante o uso do site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              3. Cookies
            </h2>
            <p>
              Utilizamos cookies para melhorar sua experiência e analisar o uso
              do site.
            </p>
          </section>

          <section className="bg-yellow-50 border border-yellow-200 rounded-[10px] p-6">
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              4. Google AdSense
            </h2>
            <p>
              Utilizamos o Google AdSense para exibir anúncios. O Google pode
              usar cookies para personalizar anúncios.
            </p>
            <p className="mt-4">
              Você pode gerenciar suas preferências de anúncios nas
              configurações do Google.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              5. Uso das Informações
            </h2>
            <p>
              Usamos suas informações para fornecer e melhorar nossos serviços,
              personalizar sua experiência e processar pagamentos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              6. LGPD
            </h2>
            <p>
              De acordo com a LGPD, você tem direito a acessar, corrigir e
              excluir seus dados.
            </p>
            <p className="mt-4">
              Contato:{" "}
              <a
                href="mailto:privacidade@papazz.com.br"
                className="text-[#FF6B6B] hover:underline"
              >
                privacidade@papazz.com.br
              </a>
            </p>
          </section>

          <section className="bg-gray-50 rounded-[10px] p-6">
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              Contato
            </h2>
            <p>
              Dúvidas? Entre em contato pelo email:{" "}
              <a
                href="mailto:privacidade@papazz.com.br"
                className="text-[#FF6B6B] hover:underline"
              >
                privacidade@papazz.com.br
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
