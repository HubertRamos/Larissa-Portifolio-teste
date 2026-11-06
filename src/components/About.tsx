import React from 'react';
import { Feather, Eye, Layers, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const PILLAR_ICONS = [Feather, Eye, Layers, Sparkles];

export const About: React.FC = () => {
  return (
    <section id="sobre" className="bg-[var(--background-color)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* Left Column: Visual with Atelier badge */}
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[#EAE6DE] shadow-[var(--shadow-soft)]">
            <img
              src={siteConfig.aboutImage}
              alt={`${siteConfig.name} no ateliê em São Paulo`}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute -bottom-6 left-6 rounded-2xl border border-[var(--border-color)] bg-[var(--paper-warm-color)] px-7 py-5 shadow-[var(--shadow-card)]">
            <p className="font-editorial text-3xl font-semibold text-[var(--ink-color)]">8 anos</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">de ateliê autoral</p>
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">01</span>
            <span aria-hidden="true">/</span>
            <span>Sobre a Diretora</span>
          </div>

          <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.04] tracking-[-0.02em] text-[var(--ink-color)] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
            Moda como forma de expressão artística.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-8 text-[var(--text-muted)] font-light">
            {siteConfig.fullBio.map((paragraph, idx) => (
              <p key={idx} className={idx === 0 ? 'text-lg text-[var(--text-muted)]' : ''}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 grid gap-5 border-t border-[var(--border-color)] pt-8 sm:grid-cols-2">
            {siteConfig.pillars.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--paper-warm-color)] text-[var(--ink-color)]">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--ink-color)]">{pillar.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
