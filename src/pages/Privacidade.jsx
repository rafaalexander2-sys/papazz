const EMAIL = "contato@casacriative.com.br";

function Secao({ id, titulo, children }) {
  return (
    <section id={id}>
      <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-4">{titulo}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Email() {
  return (
    <a href={`mailto:${EMAIL}`} className="text-[#FF6B6B] hover:underline">
      {EMAIL}
    </a>
  );
}

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <h1 className="text-xl md:text-2xl font-titulo font-bold text-white mb-1">
            Política de Privacidade
          </h1>
          <p className="text-sm text-white/90 font-corpo">
            Última atualização: 3 de outubro de 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="font-corpo text-gray-700 leading-relaxed space-y-10">
          <Secao titulo="1. Quem somos">
            <p>
              O Papazz é um serviço de apoio à introdução alimentar de bebês, disponível no site
              www.papazz.com.br e no app Papazz para Android (br.com.papazz). O Papazz é mantido pela
              Casa Criative Digital, responsável pelo tratamento dos dados descritos nesta política.
            </p>
            <p>
              Contato sobre privacidade: <Email />
            </p>
          </Secao>

          <Secao titulo="2. Dados que coletamos">
            <p>
              <strong>Dados da conta.</strong> Quando você cria uma conta, coletamos seu nome, seu
              e-mail e um identificador de usuário. Se você entrar com o Google, recebemos também a
              foto do perfil. A autenticação é feita pelo Firebase Authentication, do Google.
            </p>
            <p>
              <strong>Dados da assinatura.</strong> Se você assinar o Premium pelo site, guardamos o
              status da assinatura, o plano, a data e o número do pagamento. O pagamento é processado
              pelo Mercado Pago. Não recebemos nem armazenamos dados do seu cartão.
            </p>
            <p>
              <strong>Dados de uso.</strong> Usamos o Google Analytics para entender como o site e o
              app são usados: páginas visitadas, tipo de aparelho, navegador, região aproximada e
              identificadores de cookie.
            </p>
            <p>
              <strong>Dados que ficam só no seu aparelho.</strong> O planejamento semanal, a lista de
              compras e o diário alimentar são salvos apenas no armazenamento local do seu navegador
              ou do app. Esses dados não são enviados para os nossos servidores.
            </p>
          </Secao>

          <Secao titulo="3. Como usamos os dados">
            <p>
              Usamos seus dados para criar e manter sua conta, liberar os recursos Premium, responder
              seus contatos, entender o uso do serviço para melhorá-lo e cumprir obrigações legais.
            </p>
          </Secao>

          <Secao titulo="4. Com quem compartilhamos">
            <p>Não vendemos seus dados. Compartilhamos apenas com os serviços que fazem o Papazz funcionar:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Google (Firebase Authentication, Firestore, Google Analytics e, no site, Google AdSense)</li>
              <li>Mercado Pago, para processar pagamentos feitos no site</li>
              <li>Vercel, que hospeda o site e o app</li>
            </ul>
            <p>Também podemos compartilhar dados quando exigido por lei ou por ordem judicial.</p>
          </Secao>

          <Secao titulo="5. Anúncios e cookies">
            <p>
              O site www.papazz.com.br exibe anúncios do Google AdSense. O Google pode usar cookies
              para personalizar esses anúncios. Você pode gerenciar suas preferências em
              adssettings.google.com. O app Papazz para Android não exibe anúncios.
            </p>
            <p>
              Usamos cookies e armazenamento local para manter você conectado, lembrar preferências
              e medir o uso do serviço.
            </p>
          </Secao>

          <Secao id="excluir-conta" titulo="6. Exclusão da conta e dos dados">
            <p>
              Para excluir sua conta do Papazz e os dados associados, envie um e-mail para <Email />{" "}
              com o assunto "Excluir conta", a partir do e-mail cadastrado. Excluímos a conta, o nome,
              o e-mail e os dados da assinatura em até 30 dias e confirmamos por e-mail.
            </p>
            <p>
              Registros de pagamento podem ser mantidos pelo prazo exigido pela legislação fiscal.
              Os dados salvos apenas no seu aparelho são apagados ao limpar os dados do app ou do
              navegador, ou ao desinstalar o app.
            </p>
          </Secao>

          <Secao titulo="7. Por quanto tempo guardamos">
            <p>
              Mantemos os dados da conta enquanto ela estiver ativa. Os dados do Google Analytics são
              mantidos por até 14 meses.
            </p>
          </Secao>

          <Secao titulo="8. Segurança">
            <p>
              Os dados trafegam com criptografia (HTTPS) e ficam em servidores do Google e da Vercel,
              com acesso restrito.
            </p>
          </Secao>

          <Secao titulo="9. Público">
            <p>
              O Papazz é destinado a mães, pais e responsáveis maiores de 18 anos. O serviço não é
              direcionado a crianças e não coletamos dados pessoais de crianças.
            </p>
          </Secao>

          <Secao titulo="10. Seus direitos (LGPD)">
            <p>
              Você pode pedir acesso, correção, portabilidade ou exclusão dos seus dados, e revogar
              consentimentos, a qualquer momento pelo e-mail <Email />.
            </p>
          </Secao>

          <Secao titulo="11. Alterações">
            <p>
              Podemos atualizar esta política. A data da última atualização fica no topo da página.
            </p>
          </Secao>
        </div>
      </div>
    </div>
  );
}
