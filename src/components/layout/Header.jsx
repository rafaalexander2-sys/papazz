import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Receitas", path: "/receitas" },
    { name: "Cronograma", path: "/cronograma" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - MAIOR */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo1.png"
              alt="Papazz - Receitas para Introdução Alimentar"
              className="h-14 md:h-16 group-hover:scale-105 transition"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-corpo font-semibold transition text-base ${
                  isActive(link.path)
                    ? "text-[#FF6B6B]"
                    : "text-gray-700 hover:text-[#FF6B6B]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button - ARREDONDADO */}
          <div className="hidden md:block">
            <Link
              to="/#premium"
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold px-6 py-3 rounded-[10px] hover:shadow-lg transition text-sm"
            >
              👑 Assinar Premium
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#FF6B6B] transition"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-corpo font-semibold transition text-base ${
                    isActive(link.path) ? "text-[#FF6B6B]" : "text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/#premium"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-white font-corpo font-bold px-6 py-3 rounded-[10px] text-center text-sm"
              >
                👑 Assinar Premium
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
