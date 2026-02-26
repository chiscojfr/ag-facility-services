import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <footer className="bg-[#1B4E8C] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src={`${import.meta.env.BASE_URL}logo2.png`}
                alt="AG Facility Services"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-blue-200">{t('footer.tagline')}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
              {lang === 'es' ? 'Páginas' : 'Pages'}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to={`/${lang}/`} className="text-sm text-blue-100 hover:text-white transition-colors">{t('nav.home')}</Link>
              <Link to={`/${lang}/servicios`} className="text-sm text-blue-100 hover:text-white transition-colors">{t('nav.services')}</Link>
              <Link to={`/${lang}/modelo`} className="text-sm text-blue-100 hover:text-white transition-colors">{t('nav.model')}</Link>
              <Link to={`/${lang}/nosotros`} className="text-sm text-blue-100 hover:text-white transition-colors">{t('nav.about')}</Link>
              <Link to={`/${lang}/contacto`} className="text-sm text-blue-100 hover:text-white transition-colors">{t('nav.contact')}</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-blue-200 mb-3">
              {lang === 'es' ? 'Contacto' : 'Contact'}
            </h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+17875901577" className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors">
                <Phone size={14} />
                (787) 590-1577
              </a>
              <a href="mailto:admin@agfacilitypr.com" className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors">
                <Mail size={14} />
                admin@agfacilitypr.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-10 pt-6 text-center">
          <p className="text-xs text-blue-300">{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

