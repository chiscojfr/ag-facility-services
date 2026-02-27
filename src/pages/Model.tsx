import { useTranslation } from 'react-i18next';

interface Step {
  number: string;
  title: string;
  desc: string;
}

export default function Model() {
  const { t } = useTranslation();
  const steps: Step[] = t('model.steps', { returnObjects: true }) as Step[];

  return (
    <main>
      {/* Page header */}
      <section className="bg-[#1B4E8C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('model.page_title')}</h1>
          <p className="text-blue-100 text-base md:text-lg italic">{t('model.intro')}</p>
        </div>
      </section>

      {/* Institutional interior photo */}
      <div
        className="w-full h-64 md:h-80"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Description */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-[#333333] text-base leading-relaxed">{t('model.desc')}</p>
          <p className="text-[#333333] text-base leading-relaxed">{t('model.desc2')}</p>
        </div>
      </section>

      {/* 4-step process */}
      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-center text-[#333333] uppercase tracking-widest mb-12">
            {t('model.process_title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg p-8 hover:shadow-md hover:border-[#1B4E8C] transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-bold text-[#1B4E8C] opacity-30 leading-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-[#1B4E8C] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#333333] leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

