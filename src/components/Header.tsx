import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Menu, X } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const lang = i18n.language;

  const navItems = [
    { key: 'nav.home', path: `/${lang}/` },
    { key: 'nav.services', path: `/${lang}/servicios` },
    { key: 'nav.model', path: `/${lang}/modelo` },
    { key: 'nav.about', path: `/${lang}/nosotros` },
    { key: 'nav.contact', path: `/${lang}/contacto` },
  ];

  const switchLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    // Rewrite current path to new language prefix
    const currentPath = location.pathname.replace(`/${lang}`, `/${newLang}`);
    navigate(currentPath);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to={`/${lang}/`} className="flex items-center shrink-0">
            <img
              src="/logo2.png"
              alt="AG Facility Services"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-sm font-medium text-[#333333] hover:text-[#1B4E8C] transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Phone + lang switcher */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17875901577"
              className="flex items-center gap-1.5 text-sm font-medium text-[#1B4E8C]"
            >
              <Phone size={14} />
              {t('header.phone')}
            </a>
            <button
              onClick={switchLang}
              className="text-xs font-semibold border border-[#1B4E8C] text-[#1B4E8C] px-2 py-1 rounded hover:bg-[#1B4E8C] hover:text-white transition-colors"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#333333]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="text-sm font-medium text-[#333333] hover:text-[#1B4E8C] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <a
              href="tel:+17875901577"
              className="flex items-center gap-1.5 text-sm font-medium text-[#1B4E8C] mt-1"
            >
              <Phone size={14} />
              {t('header.phone')}
            </a>
            <button
              onClick={() => { switchLang(); setMenuOpen(false); }}
              className="text-xs font-semibold border border-[#1B4E8C] text-[#1B4E8C] px-2 py-1 rounded w-fit hover:bg-[#1B4E8C] hover:text-white transition-colors"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

