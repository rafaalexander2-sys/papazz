import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LogOut, UtensilsCrossed, BookOpen, ShieldAlert } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AdminReceitas from "./AdminReceitas";
import AdminBlog from "./AdminBlog";

const TABS = [
  { id: "receitas", label: "Receitas", icon: UtensilsCrossed },
  { id: "blog", label: "Blog", icon: BookOpen },
];

export default function AdminPanel() {
  const { user, isAdmin, logout } = useAuth();
  const [tab, setTab] = useState("receitas");

  // Não logado → login
  if (!user) return <Navigate to="/login" replace />;

  // Logado mas sem permissão → bloqueio visual
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-[10px] border border-gray-200 p-10 max-w-md w-full text-center shadow-sm">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldAlert size={32} className="text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Acesso Negado</h1>
          <p className="text-gray-500 mb-6">
            Você não tem permissão para acessar o painel admin.
            <br />
            <span className="text-sm">Email: {user.email}</span>
          </p>
          <button
            onClick={() => logout()}
            className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-[10px] font-medium hover:bg-gray-200 transition"
          >
            Sair
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/icon-app.png" alt="Papazz" className="w-8 h-8 rounded-[10px] object-cover" />
            <span className="font-bold text-gray-900">Papazz Admin</span>
            <span className="hidden sm:block text-xs bg-[#FF6B6B]/10 text-[#FF6B6B] px-2 py-0.5 rounded-full font-medium">
              Painel de Controle
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 hidden sm:block">{user.email}</span>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition"
            >
              <LogOut size={16} />
              Sair
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex gap-1">
            {TABS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-semibold border-b-2 transition ${
                  tab === id
                    ? "border-[#FF6B6B] text-[#FF6B6B]"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {tab === "receitas" && <AdminReceitas />}
        {tab === "blog" && <AdminBlog />}
      </main>
    </div>
  );
}
