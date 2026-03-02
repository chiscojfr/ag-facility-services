import { useTranslation } from 'react-i18next';

interface Step {
  number: string;
  title: string;
  desc: string;
}

const stepImages = [
  { url: `${import.meta.env.BASE_URL}hero-inspection.png`, pos: 'center 20%' },
  { url: `${import.meta.env.BASE_URL}presentacion.png`, pos: 'center 15%' },
  { url: `${import.meta.env.BASE_URL}activacion.png`, pos: 'center 15%' },
  { url: `${import.meta.env.BASE_URL}ejecucion.png`, pos: 'center 15%' },
];

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

      {/* Description */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <p className="text-[#333333] text-base leading-relaxed">{t('model.desc')}</p>
          <p className="text-[#333333] text-base leading-relaxed">{t('model.desc2')}</p>
        </div>
      </section>

      {/* 4-step process with photos */}
      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-sm font-bold text-center text-[#333333] uppercase tracking-widest mb-12">
            {t('model.process_title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-100 rounded-lg overflow-hidden hover:shadow-md hover:border-[#1B4E8C] transition-all flex flex-col"
              >
                {/* Photo */}
                <div
                  className="h-56 sm:h-44 bg-cover bg-no-repeat"
                  style={{
                    backgroundImage: `url('${stepImages[idx].url}')`,
                    backgroundPosition: stepImages[idx].pos,
                  }}
                />
                {/* Content */}
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-2xl font-bold text-[#1B4E8C] opacity-25 leading-none">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-semibold text-[#1B4E8C] leading-snug">{step.title}</h3>
                  <p className="text-xs text-[#333333] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

