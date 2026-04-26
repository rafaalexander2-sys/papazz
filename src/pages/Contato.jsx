import { useState } from "react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#FF8B94] to-[#FFB5A7] border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-titulo font-bold text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-lg text-white/90 font-corpo">
            Estamos aqui para ajudar! Envie sua dúvida, sugestão ou feedback.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-6">
              Envie uma Mensagem
            </h2>

            {enviado && (
              <div className="bg-green-50 border border-green-200 rounded-[10px] p-4 mb-6">
                <p className="text-green-800 font-corpo text-sm">
                  Mensagem enviada com sucesso! Responderemos em breve.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-corpo font-semibold text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] font-corpo text-sm"
                  placeholder="Como podemos te chamar?"
                />
              </div>

              <div>
                <label className="block text-sm font-corpo font-semibold text-gray-700 mb-2">
                  Seu Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] font-corpo text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-corpo font-semibold text-gray-700 mb-2">
                  Assunto
                </label>
                <select
                  name="assunto"
                  required
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] font-corpo text-sm"
                >
                  <option value="">Selecione...</option>
                  <option value="duvida">Dúvida sobre Receitas</option>
                  <option value="sugestao">Sugestão de Conteúdo</option>
                  <option value="problema">Problema Técnico</option>
                  <option value="parceria">Parceria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-corpo font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  required
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] font-corpo text-sm resize-none"
                  placeholder="Escreva sua mensagem aqui..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B6B] to-[#FF8B8B] text-white font-corpo font-bold py-3 rounded-[10px] hover:shadow-lg transition"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-titulo font-bold text-gray-900 mb-6">
              Outras Formas de Contato
            </h2>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-[10px] p-5">
                <h3 className="font-titulo font-bold text-gray-900 mb-2">
                  Email
                </h3>

                <a
                  href="mailto:contato@papazz.com.br"
                  className="text-[#FF6B6B] font-corpo text-sm hover:underline"
                >
                  contato@papazz.com.br
                </a>
                <p className="text-gray-600 font-corpo text-xs mt-2">
                  Respondemos em até 48 horas
                </p>
              </div>

              <div className="border border-gray-200 rounded-[10px] p-5">
                <h3 className="font-titulo font-bold text-gray-900 mb-2">
                  Redes Sociais
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700 font-corpo text-sm">
                    Instagram: @papazz
                  </p>
                  <p className="text-gray-700 font-corpo text-sm">
                    Facebook: /papazz
                  </p>
                </div>
              </div>

              <div className="bg-[#FFF5F5] rounded-[10px] p-5">
                <h3 className="font-titulo font-bold text-gray-900 mb-2">
                  Sugestões de Receitas
                </h3>
                <p className="text-gray-600 font-corpo text-sm leading-relaxed">
                  Tem uma receita incrível? Compartilhe conosco! Podemos
                  incluí-la no app com os créditos para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
