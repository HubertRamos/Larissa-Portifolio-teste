import React from 'react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="bg-[var(--paper-warm-color)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">04</span>
            <span aria-hidden="true">/</span>
            <span>Metodologia</span>
          </div>
          <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink-color)] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
            Um método criativo em quatro tempos.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-muted)] font-light">
            Da pesquisa silenciosa à entrega impecável, cada etapa respeita um ritmo rigoroso de criação.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => (
            <article key={step.number} className="flex flex-col border-t border-[var(--border-strong)] pt-6">
              <p className="font-editorial text-5xl font-light text-[var(--grey-editorial)] tabular-nums">
                {step.number}
              </p>
              <h3 className="mt-4 font-editorial text-2xl font-semibold text-[var(--ink-color)]">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--text-muted)] font-light text-sm">
                {step.description}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-[var(--border-color)] pt-4 text-xs text-[var(--grey-dark)]">
                {step.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[var(--grey-dark)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
