import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isPremium } = useAuth();

  const isActive = (path) => location.pathname === path;

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo1.png" alt="Papazz" className="h-14 md:h-16" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/receitas"
              className={`font-corpo font-semibold transition ${
                isActive("/receitas")
                  ? "text-[#FF6B6B]"
                  : "text-gray-700 hover:text-[#FF6B6B]"
              }`}
            >
              Receitas
            </Link>
            <Link
              to="/cronograma"
              className={`font-corpo font-semibold transition ${
                isActive("/cronograma")
                  ? "text-[#FF6B6B]"
                  : "text-gray-700 hover:text-[#FF6B6B]"
              }`}
            >
              Cronograma
            </Link>
            <Link
              to="/blog"
              className={`font-corpo font-semibold transition ${
                isActive("/blog") || location.pathname.startsWith("/blog/")
                  ? "text-[#FF6B6B]"
                  : "text-gray-700 hover:text-[#FF6B6B]"
              }`}
            >
              Blog
            </Link>

            {/* Dropdown Premium - só aparece se for premium */}
            {user && isPremium && (
              <div className="relative group">
                <button className="font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B] transition flex items-center gap-1">
                  <span>👑 Premium</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-[10px] shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    to="/planejamento"
                    className="block px-4 py-3 text-sm font-corpo text-gray-700 hover:bg-gray-50 rounded-t-[10px]"
                  >
                    📅 Planejamento Semanal
                  </Link>
                  <Link
                    to="/lista-compras"
                    className="block px-4 py-3 text-sm font-corpo text-gray-700 hover:bg-gray-50"
                  >
                    🛒 Lista de Compras
                  </Link>
                  <Link
                    to="/diario"
                    className="block px-4 py-3 text-sm font-corpo text-gray-700 hover:bg-gray-50 rounded-b-[10px]"
                  >
                    📖 Diário Alimentar
                  </Link>
                </div>
              </div>
            )}

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 font-corpo">
                  {user.email} {isPremium && "👑"}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-gray-200 text-gray-700 font-corpo font-bold rounded-[10px] hover:bg-gray-300 transition text-sm"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold rounded-[10px] hover:shadow-lg transition text-sm"
              >
                Entrar / Premium
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                to="/receitas"
                className="font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B]"
                onClick={() => setIsMenuOpen(false)}
              >
                Receitas
              </Link>
              <Link
                to="/cronograma"
                className="font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B]"
                onClick={() => setIsMenuOpen(false)}
              >
                Cronograma
              </Link>
              <Link
                to="/blog"
                className="font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B]"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Links Premium no Mobile */}
              {user && isPremium && (
                <>
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <p className="text-xs font-corpo font-bold text-gray-500 mb-3 px-2">
                      👑 PREMIUM
                    </p>
                    <Link
                      to="/planejamento"
                      className="block font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B] mb-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      📅 Planejamento Semanal
                    </Link>
                    <Link
                      to="/lista-compras"
                      className="block font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B] mb-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      🛒 Lista de Compras
                    </Link>
                    <Link
                      to="/diario"
                      className="block font-corpo font-semibold text-gray-700 hover:text-[#FF6B6B]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      📖 Diário Alimentar
                    </Link>
                  </div>
                </>
              )}

              {user ? (
                <>
                  <span className="text-sm text-gray-600 font-corpo border-t border-gray-200 pt-4">
                    {user.email} {isPremium && "👑"}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="px-6 py-2 bg-gray-200 text-gray-700 font-corpo font-bold rounded-[10px] hover:bg-gray-300 transition text-sm w-full"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold rounded-[10px] hover:shadow-lg transition text-sm text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Entrar / Premium
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
