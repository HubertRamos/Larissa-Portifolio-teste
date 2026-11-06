import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onInquireService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onInquireService }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicos" className="bg-[var(--ink-color)] px-5 py-20 text-[#FAF8F5] sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-editorial)]">
              <span className="font-editorial text-sm font-bold text-white">03</span>
              <span aria-hidden="true">/</span>
              <span>Especialidades & Ateliê</span>
            </div>
            <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
              O que eu construo para a sua marca.
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#FAF8F5]/70 font-light">
            Do conceito à imagem final, cada etapa é conduzida com rigor estético e sensibilidade artística — para que a sua marca tenha uma linguagem visual coerente e memorável.
          </p>
        </div>

        {/* Services List with Expandable Deep Dive */}
        <div className="mt-14 border-t border-white/15">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <article
                key={service.id}
                className="border-b border-white/15 py-7 transition-colors hover:bg-white/[0.02]"
              >
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="grid cursor-pointer gap-4 sm:grid-cols-[auto_1fr_1.4fr_auto] sm:items-baseline sm:gap-8"
                >
                  <span className="font-editorial text-2xl font-light text-[var(--grey-editorial)] tabular-nums">
                    {service.number}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium tracking-tight text-white hover:text-[#E2DFD7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="leading-7 text-[#FAF8F5]/70 font-light text-sm sm:text-base">
                    {service.shortDescription}
                  </p>
                  <div className="flex justify-end pt-1 sm:pt-0">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-all hover:bg-white/10">
                      {isExpanded ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-6 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:grid-cols-2">
                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-editorial)]">
                        Escopo & Abordagem
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-[#FAF8F5]/80 font-light">
                        {service.details}
                      </p>
                      <div className="mt-4">
                        <span className="text-xs uppercase tracking-[0.18em] text-[var(--grey-editorial)]">Indicado para:</span>
                        <p className="text-xs text-[#FAF8F5]/90 mt-1 italic font-light">{service.idealFor}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-editorial)]">
                        Entregáveis Incluídos
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {service.deliverables.map((del, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-[#FAF8F5]/85">
                            <Check className="h-3.5 w-3.5 text-[var(--grey-editorial)] shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onInquireService(service.title);
                        }}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white hover:text-black"
                      >
                        <span>Contratar {service.title}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
