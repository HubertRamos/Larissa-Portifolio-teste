import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle2, Phone, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface ContactProps {
  initialSubject?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: initialSubject || '',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [submittedData, setSubmittedData] = useState<{ code: string; name: string } | null>(null);

  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    setTimeout(() => {
      const randomCode = `LB-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedData({ code: randomCode, name: formData.name });
      setStatus('success');
    }, 800);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      budget: '',
      message: '',
    });
    setStatus('idle');
    setSubmittedData(null);
  };

  return (
    <section id="contato" className="bg-[var(--background-color)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 border-b border-[var(--border-color)]">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Left column: coordinates and atelier details from siteConfig */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">06</span>
            <span aria-hidden="true">/</span>
            <span>Ateliê & Diálogo</span>
          </div>

          <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink-color)] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
            Vamos criar algo memorável.
          </h2>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)] font-light">
            Conte sobre a sua marca, a coleção ou o editorial que você imagina. Retorno pessoalmente para entender as aspirações do projeto e propor os próximos passos conceituais.
          </p>

          <dl className="mt-10 space-y-6 border-t border-[var(--border-color)] pt-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--paper-warm-color)] text-[var(--ink-color)]">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">E-mail Direto</dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-medium text-[var(--ink-color)] hover:text-[var(--grey-dark)] transition-colors underline decoration-black/20 underline-offset-4"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--paper-warm-color)] text-[var(--ink-color)]">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">Ateliê Físico</dt>
                <dd className="mt-1 text-base font-medium text-[var(--ink-color)]">
                  {siteConfig.atelierAddress}
                  <span className="block text-xs text-[var(--text-muted)] font-light">Atendimento presencial mediante agendamento prévio</span>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--paper-warm-color)] text-[var(--ink-color)]">
                <Clock className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">Horário de Ateliê</dt>
                <dd className="mt-1 text-base font-medium text-[var(--ink-color)]">
                  {siteConfig.workingHours}
                  <span className="block text-xs text-[var(--text-muted)] font-light">Tempo médio de resposta: até 24 horas úteis</span>
                </dd>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--paper-warm-color)] text-[var(--ink-color)]">
                <Instagram className="h-4 w-4" />
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">Rede & Portfólio Social</dt>
                <dd className="mt-1 text-base font-medium text-[var(--ink-color)]">
                  <a
                    href={`https://instagram.com/${siteConfig.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {siteConfig.instagram}
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>

        {/* Right column: Editorial Form */}
        <div className="editorial-panel p-6 sm:p-8 lg:p-10">
          {status === 'success' && submittedData ? (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-editorial text-3xl font-semibold text-[var(--ink-color)]">
                Mensagem enviada ao ateliê
              </h3>
              <p className="max-w-md text-sm leading-6 text-[var(--text-muted)] font-light">
                Obrigado, <strong className="text-[var(--ink-color)]">{submittedData.name}</strong>. Sua solicitação foi registrada sob o protocolo confidencial <strong className="text-[var(--ink-color)]">{submittedData.code}</strong>. Entrarei em contato em até 24 horas úteis.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-color)] hover:bg-[var(--paper-warm-color)] transition-colors cursor-pointer"
              >
                <span>Enviar outra mensagem</span>
              </button>
            </div>
          ) : (
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contactName" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)]">
                  Nome completo *
                </label>
                <input
                  id="contactName"
                  name="nome"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Como prefere ser chamado(a)"
                  className="field"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contactEmail" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)]">
                    E-mail profissional *
                  </label>
                  <input
                    id="contactEmail"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu@dominio.com"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)]">
                    Tipo de projeto *
                  </label>
                  <input
                    id="contactSubject"
                    name="assunto"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Direção criativa, Styling, Campanha..."
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contactMessage" className="mb-2 block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-muted)]">
                  Mensagem & Detalhes do Projeto *
                </label>
                <textarea
                  id="contactMessage"
                  name="mensagem"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Compartilhe a visão da sua marca, prazo estimado, referências e objetivos..."
                  className="field"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink-color)] py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5] transition-all hover:bg-black/85 hover:shadow-lg disabled:opacity-50 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <span>Enviando dados ao ateliê...</span>
                ) : (
                  <>
                    <span>Enviar mensagem para {siteConfig.name}</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
              </button>

              <p className="text-center text-[0.72rem] text-[var(--text-muted)] font-light">
                Comunicação estritamente confidencial direcionada ao ateliê de Larissa Bonfante.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
