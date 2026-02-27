import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrench, LayoutGrid, Users, Phone } from 'lucide-react';

export default function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const quickLinks = [
    {
      key: 'nav.services',
      path: `/${lang}/servicios`,
      icon: <Wrench size={28} className="text-[#1B4E8C]" />,
      desc: lang === 'es' ? 'Mantenimiento preventivo y correctivo estructurado.' : 'Structured preventive and corrective maintenance.',
    },
    {
      key: 'nav.model',
      path: `/${lang}/modelo`,
      icon: <LayoutGrid size={28} className="text-[#1B4E8C]" />,
      desc: lang === 'es' ? 'Proceso en 4 pasos para activar su programa.' : '4-step process to activate your program.',
    },
    {
      key: 'nav.about',
      path: `/${lang}/nosotros`,
      icon: <Users size={28} className="text-[#1B4E8C]" />,
      desc: lang === 'es' ? 'Quiénes somos y nuestros valores.' : 'Who we are and our values.',
    },
    {
      key: 'nav.contact',
      path: `/${lang}/contacto`,
      icon: <Phone size={28} className="text-[#1B4E8C]" />,
      desc: lang === 'es' ? 'Solicite una propuesta hoy.' : 'Request a proposal today.',
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center px-4 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl font-bold tracking-wide text-white mb-2">
            AG Facility Services
          </p>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-200 mb-6">
            {t('home.hero_tagline')}
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-8">
            {t('home.hero_title')}
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-10 max-w-xl mx-auto">
            {t('home.hero_desc')}
          </p>
          <Link
            to={`/${lang}/contacto`}
            className="inline-block bg-[#1B4E8C] text-white text-sm font-semibold px-8 py-4 rounded hover:bg-[#163e70] transition-colors"
          >
            {t('home.hero_cta')}
          </Link>
        </div>
      </section>

      {/* Brief description */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B4E8C] mb-4">{t('home.brief_title')}</h2>
          <p className="text-base text-[#333333] leading-relaxed">{t('home.brief_text')}</p>
        </div>
      </section>

      {/* Quick access */}
      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-[#333333] text-center mb-10 uppercase tracking-widest text-sm">
            {t('home.quick_access')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col gap-3 hover:shadow-md hover:border-[#1B4E8C] transition-all group"
              >
                <div>{item.icon}</div>
                <h3 className="text-base font-semibold text-[#333333] group-hover:text-[#1B4E8C] transition-colors">
                  {t(item.key)}
                </h3>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

