import { useTranslation } from 'react-i18next';
import { LayoutGrid, Eye, ClipboardCheck, CheckCircle, Star, Scale } from 'lucide-react';

const valueIcons = [
  <LayoutGrid size={22} className="text-[#1B4E8C]" />,
  <Eye size={22} className="text-[#1B4E8C]" />,
  <ClipboardCheck size={22} className="text-[#1B4E8C]" />,
  <CheckCircle size={22} className="text-[#1B4E8C]" />,
  <Star size={22} className="text-[#1B4E8C]" />,
  <Scale size={22} className="text-[#1B4E8C]" />,
];

interface Value {
  title: string;
  desc: string;
}

export default function About() {
  const { t } = useTranslation();
  const values: Value[] = t('about.values', { returnObjects: true }) as Value[];

  return (
    <main>
      {/* Page header */}
      <section className="bg-[#1B4E8C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('about.page_title')}</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('about.intro')}
          </p>
        </div>
      </section>

      {/* Institutional photo */}
      <div
        className="w-full h-64 md:h-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Intro 2 */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#333333] text-base leading-relaxed">{t('about.intro2')}</p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[#F4F6F8] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#1B4E8C] mb-6">
            {t('about.approach_title')}
          </h2>
          <div className="space-y-4">
            <p className="text-[#333333] text-base leading-relaxed">{t('about.approach1')}</p>
            <p className="text-[#333333] text-base leading-relaxed">{t('about.approach2')}</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-l-4 border-[#1B4E8C] pl-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B4E8C] mb-3">
              {t('about.mission_title')}
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">{t('about.mission')}</p>
          </div>
          <div className="border-l-4 border-[#1B4E8C] pl-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-[#1B4E8C] mb-3">
              {t('about.vision_title')}
            </h3>
            <p className="text-[#333333] text-sm leading-relaxed">{t('about.vision')}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#333333] mb-10 text-center">
            {t('about.values_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg p-6 flex flex-col gap-3 hover:shadow-md hover:border-[#1B4E8C] transition-all"
              >
                <div>{valueIcons[idx]}</div>
                <h4 className="text-sm font-semibold text-[#1B4E8C]">{value.title}</h4>
                <p className="text-sm text-[#333333] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

