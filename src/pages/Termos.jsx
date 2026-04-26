export default function Termos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Termos de Uso
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            Última atualização: 25 de abril de 2025
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="prose prose-lg max-w-none font-corpo text-gray-700 leading-relaxed space-y-8">
          {/* Aceitação */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e usar o Papazz ("plataforma", "site", "serviço"), você
              concorda em cumprir estes Termos de Uso. Se você não concorda com
              qualquer parte destes termos, não use nossos serviços.
            </p>
            <p className="mt-4">
              Reservamo-nos o direito de modificar estes termos a qualquer
              momento. Mudanças significativas serão notificadas por email ou
              aviso no site.
            </p>
          </section>

          {/* Descrição do Serviço */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              2. Descrição do Serviço
            </h2>
            <p>O Papazz é uma plataforma educacional que oferece:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Receitas e guias sobre introdução alimentar infantil</li>
              <li>Cronogramas personalizados por idade</li>
              <li>Conteúdo educativo sobre nutrição infantil</li>
              <li>Ferramentas de planejamento (versão premium)</li>
            </ul>
            <p className="mt-4">
              <strong>Importante:</strong> O conteúdo é informativo e
              educacional. Não substitui orientação médica profissional.
            </p>
          </section>

          {/* Cadastro */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              3. Cadastro e Conta
            </h2>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              3.1 Criação de Conta
            </h3>
            <p>
              Para acessar funcionalidades premium, você deve criar uma conta
              fornecendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email válido</li>
              <li>Senha segura</li>
              <li>Informações de pagamento (para assinatura premium)</li>
            </ul>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              3.2 Responsabilidades do Usuário
            </h3>
            <p>Você é responsável por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manter a confidencialidade da sua senha</li>
              <li>Todas as atividades realizadas em sua conta</li>
              <li>Notificar-nos imediatamente sobre uso não autorizado</li>
              <li>Fornecer informações precisas e atualizadas</li>
            </ul>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              3.3 Idade Mínima
            </h3>
            <p>
              Você deve ter pelo menos 18 anos para criar uma conta. Menores de
              18 anos devem usar o serviço sob supervisão dos pais ou
              responsáveis.
            </p>
          </section>

          {/* Assinatura Premium */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-[10px] p-6">
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              4. Assinatura Premium
            </h2>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-4 mb-3">
              4.1 Planos Disponíveis
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Mensal:</strong> R$ 19,90/mês, renovação automática
              </li>
              <li>
                <strong>Anual:</strong> R$ 149/ano (economia de 37%)
              </li>
            </ul>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              4.2 Renovação Automática
            </h3>
            <p>
              Assinaturas são renovadas automaticamente no final de cada
              período, exceto se canceladas antes da data de renovação.
            </p>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              4.3 Cancelamento
            </h3>
            <p>
              Você pode cancelar sua assinatura a qualquer momento através das
              configurações da conta. O cancelamento entra em vigor no final do
              período de cobrança atual. Não há reembolso proporcional.
            </p>

            <h3 className="text-xl font-titulo font-bold text-gray-900 mt-6 mb-3">
              4.4 Garantia de 7 Dias
            </h3>
            <p>
              Oferecemos reembolso total se você cancelar dentro de 7 dias após
              a primeira assinatura. Após esse período, não há reembolsos.
            </p>
          </section>

          {/* Uso Aceitável */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              5. Uso Aceitável
            </h2>
            <p>Você concorda em NÃO:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Copiar, reproduzir ou distribuir conteúdo sem autorização</li>
              <li>Usar o serviço para fins ilegais ou não autorizados</li>
              <li>Tentar acessar áreas restritas do sistema</li>
              <li>Interferir no funcionamento do serviço</li>
              <li>Criar múltiplas contas para fraudar o sistema</li>
              <li>Compartilhar credenciais de conta premium</li>
              <li>Fazer engenharia reversa ou descompilar o site</li>
              <li>Usar bots ou scripts automatizados</li>
            </ul>
          </section>

          {/* Propriedade Intelectual */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              6. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo do Papazz (textos, receitas, imagens, logos,
              código) é protegido por direitos autorais e propriedade
              intelectual.
            </p>
            <p className="mt-4">
              <strong>Você pode:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Visualizar e usar o conteúdo para uso pessoal não comercial
              </li>
              <li>Imprimir receitas para uso próprio</li>
              <li>Compartilhar links para o site</li>
            </ul>
            <p className="mt-4">
              <strong>Você NÃO pode:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republicar conteúdo em outros sites ou blogs</li>
              <li>Usar conteúdo para fins comerciais</li>
              <li>Remover marcas ou atribuições</li>
            </ul>
          </section>

          {/* Disclaimer Médico */}
          <section className="bg-red-50 border border-red-200 rounded-[10px] p-6">
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              7. Isenção de Responsabilidade Médica
            </h2>
            <p>
              <strong>IMPORTANTE:</strong> O Papazz fornece informações
              educacionais e gerais sobre introdução alimentar. Este conteúdo
              NÃO constitui aconselhamento médico, nutricional ou profissional.
            </p>
            <p className="mt-4">
              <strong>Você concorda que:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Sempre consultará um pediatra antes de iniciar introdução
                alimentar
              </li>
              <li>
                Não usará nosso conteúdo como substituto de consulta médica
              </li>
              <li>Cada bebê é único e pode ter necessidades diferentes</li>
              <li>Algumas receitas podem não ser adequadas para seu bebê</li>
              <li>
                Alergias e restrições devem ser avaliadas por profissionais
              </li>
            </ul>
            <p className="mt-4">
              Em caso de dúvidas sobre saúde ou nutrição do seu bebê, procure um
              profissional qualificado.
            </p>
          </section>

          {/* Limitação de Responsabilidade */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              8. Limitação de Responsabilidade
            </h2>
            <p>O Papazz não se responsabiliza por:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Reações alérgicas ou problemas de saúde relacionados ao uso de
                receitas
              </li>
              <li>Decisões tomadas com base no conteúdo fornecido</li>
              <li>Interrupções, erros ou falhas no serviço</li>
              <li>Perda de dados ou conteúdo</li>
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Conteúdo de terceiros (anúncios, links externos)</li>
            </ul>
            <p className="mt-4">
              <strong>Nossa responsabilidade máxima</strong> está limitada ao
              valor pago pela assinatura nos últimos 12 meses.
            </p>
          </section>

          {/* Anúncios */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              9. Publicidade
            </h2>
            <p>
              Usuários da versão gratuita verão anúncios exibidos pelo Google
              AdSense. Não controlamos o conteúdo desses anúncios e não nos
              responsabilizamos por eles.
            </p>
            <p className="mt-4">Assinantes premium não visualizam anúncios.</p>
          </section>

          {/* Rescisão */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              10. Rescisão
            </h2>
            <p>
              Podemos suspender ou encerrar sua conta imediatamente, sem aviso
              prévio, se você:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violar estes Termos de Uso</li>
              <li>Usar o serviço de forma fraudulenta</li>
              <li>Causar danos à plataforma ou outros usuários</li>
              <li>Não pagar assinatura devida</li>
            </ul>
            <p className="mt-4">
              Você pode encerrar sua conta a qualquer momento através das
              configurações.
            </p>
          </section>

          {/* Lei Aplicável */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              11. Lei Aplicável e Jurisdição
            </h2>
            <p>
              Estes Termos são regidos pelas leis brasileiras. Qualquer disputa
              será resolvida nos tribunais da comarca de [Sua Cidade], Brasil.
            </p>
          </section>

          {/* Disposições Gerais */}
          <section>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              12. Disposições Gerais
            </h2>
            <p>
              <strong>Integralidade:</strong> Estes termos constituem o acordo
              completo entre você e o Papazz.
            </p>
            <p className="mt-4">
              <strong>Divisibilidade:</strong> Se alguma cláusula for
              considerada inválida, as demais permanecem em vigor.
            </p>
            <p className="mt-4">
              <strong>Renúncia:</strong> Nossa falha em fazer cumprir qualquer
              direito não constitui renúncia.
            </p>
          </section>

          {/* Contato */}
          <section className="bg-gray-50 rounded-[10px] p-6">
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">
              13. Contato
            </h2>
            <p>Para dúvidas sobre estes Termos de Uso:</p>
            <ul className="mt-4 space-y-2">
              <li>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:legal@papazz.com.br"
                  className="text-[#FF6B6B] hover:underline"
                >
                  legal@papazz.com.br
                </a>
              </li>
              <li>
                <strong>Formulário:</strong>{" "}
                <a href="/contato" className="text-[#FF6B6B] hover:underline">
                  Página de Contato
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
