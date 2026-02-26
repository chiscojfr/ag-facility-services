import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // Using Formspree as a simple email backend (replace with actual form ID)
      const response = await fetch('https://formspree.io/f/xdkobgqv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _replyto: form.email }),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ name: '', company: '', phone: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      {/* Page header */}
      <section className="bg-[#1B4E8C] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.page_title')}</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('contact.intro')}
          </p>
        </div>
      </section>

      <section className="bg-[#F4F6F8] py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#1B4E8C] mb-4">
                AG Facility Services
              </h2>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+17875901577"
                  className="flex items-center gap-3 text-[#333333] hover:text-[#1B4E8C] transition-colors"
                >
                  <Phone size={18} className="text-[#1B4E8C]" />
                  <span className="text-sm font-medium">{t('contact.phone')}</span>
                </a>
                <a
                  href="mailto:info@agfacilitypr.com"
                  className="flex items-center gap-3 text-[#333333] hover:text-[#1B4E8C] transition-colors"
                >
                  <Mail size={18} className="text-[#1B4E8C]" />
                  <span className="text-sm font-medium">{t('contact.email')}</span>
                </a>
              </div>
            </div>
            {/* Appointment note */}
            <p className="text-xs text-[#666666] italic">{t('contact.appointment_note')}</p>
            {/* Coverage */}
            <div className="border-t border-gray-200 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[#1B4E8C] mb-1">{t('contact.coverage_title')}</p>
              <p className="text-xs text-[#333333]">{t('contact.coverage_text')}</p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-gray-100 rounded-lg p-8">
            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle size={40} className="text-green-500" />
                <p className="text-sm text-[#333333]">{t('contact.form.success')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {(['name', 'company', 'phone', 'email'] as const).map((field) => (
                  <div key={field} className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#333333] uppercase tracking-wide">
                      {t(`contact.form.${field}`)}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={form[field]}
                      onChange={handleChange}
                      required={field !== 'company'}
                      className="border border-gray-200 rounded px-3 py-2 text-sm text-[#333333] focus:outline-none focus:border-[#1B4E8C] transition-colors"
                    />
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#333333] uppercase tracking-wide">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="border border-gray-200 rounded px-3 py-2 text-sm text-[#333333] focus:outline-none focus:border-[#1B4E8C] transition-colors resize-none"
                  />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-xs">
                    <AlertCircle size={14} />
                    {t('contact.form.error')}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="flex items-center justify-center gap-2 bg-[#1B4E8C] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#163e70] transition-colors disabled:opacity-60"
                >
                  <Send size={14} />
                  {status === 'sending' ? '...' : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

