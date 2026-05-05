import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="/logo1.png"
              alt="Papazz"
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm font-corpo leading-relaxed">
              Facilitando a introdução alimentar com receitas práticas,
              cronogramas personalizados e muito carinho.
            </p>
          </div>

          <div>
            <h3 className="font-titulo font-bold text-white mb-4">Navegação</h3>
            <ul className="space-y-2 font-corpo text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/receitas"
                  className="text-gray-400 hover:text-white transition"
                >
                  Receitas
                </Link>
              </li>
              <li>
                <Link
                  to="/cronograma"
                  className="text-gray-400 hover:text-white transition"
                >
                  Cronograma
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/guia"
                  className="text-gray-400 hover:text-white transition"
                >
                  Guia de Introdução Alimentar
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-titulo font-bold text-white mb-4">
              Institucional
            </h3>
            <ul className="space-y-2 font-corpo text-sm">
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-400 hover:text-white transition"
                >
                  Sobre o Papazz
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/privacidade"
                  className="text-gray-400 hover:text-white transition"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="text-gray-400 hover:text-white transition"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-titulo font-bold text-white mb-4">Contato</h3>
            <p className="text-gray-400 text-sm font-corpo mb-2">
              Email: contato@papazz.com.br
            </p>
            <p className="text-gray-400 text-sm font-corpo">
              Instagram: @papazz
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-corpo">
            <p>© {currentYear} Papazz. Todos os direitos reservados.</p>
            <p>Feito com amor para facilitar a vida das mamães</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
