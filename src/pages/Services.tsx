import { useTranslation } from 'react-i18next';
import { Zap, Droplets, Wind, Layers, Leaf } from 'lucide-react';

interface ServiceArea {
  title: string;
  desc: string;
  examples: string;
}

const icons = [
  <Layers size={32} className="text-[#1B4E8C]" />,
  <Zap size={32} className="text-[#1B4E8C]" />,
  <Droplets size={32} className="text-[#1B4E8C]" />,
  <Wind size={32} className="text-[#1B4E8C]" />,
  <Leaf size={32} className="text-[#1B4E8C]" />,
];

export default function Services() {
  const { t } = useTranslation();
  const areas: ServiceArea[] = t('services.areas', { returnObjects: true }) as ServiceArea[];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col gap-4 hover:shadow-md hover:border-[#1B4E8C] transition-all"
              >
                <div>{icons[idx]}</div>
                <h3 className="text-sm font-bold text-[#1B4E8C] leading-snug">{area.title}</h3>
                <p className="text-sm text-[#333333] leading-relaxed">{area.desc}</p>
                <p className="text-xs text-[#666666] leading-relaxed border-t border-gray-100 pt-3">{area.examples}</p>
              </div>
            ))}
          </div>
          {/* Footer note */}
          <p className="text-center text-xs text-[#666666] mt-10 italic">
            {t('services.footer_note')}
          </p>
        </div>
      </section>
    </main>
  );
}

