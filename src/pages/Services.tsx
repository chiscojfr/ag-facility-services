import { useTranslation } from 'react-i18next';
import { Zap, Droplets, Wind, Building2 } from 'lucide-react';

const icons = [
  <Zap size={32} className="text-[#1B4E8C]" />,
  <Droplets size={32} className="text-[#1B4E8C]" />,
  <Wind size={32} className="text-[#1B4E8C]" />,
  <Building2 size={32} className="text-[#1B4E8C]" />,
];

export default function Services() {
  const { t } = useTranslation();
  const areas: string[] = t('services.areas', { returnObjects: true }) as string[];

  return (
    <main>
      {/* Page header */}
      <section className="bg-[#1B4E8C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('services.page_title')}</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('services.intro')}
          </p>
        </div>
      </section>

      {/* Sub intro */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#333333] text-base leading-relaxed">{t('services.sub_intro')}</p>
        </div>
      </section>

      {/* Service areas */}
      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center text-[#333333] uppercase tracking-widest text-sm mb-10">
            {t('services.areas_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col items-center text-center gap-4 hover:shadow-md hover:border-[#1B4E8C] transition-all"
              >
                <div>{icons[idx]}</div>
                <p className="text-sm font-semibold text-[#333333]">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

