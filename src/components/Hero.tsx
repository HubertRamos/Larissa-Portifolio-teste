import React from 'react';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[var(--paper-warm-color)] px-5 pt-14 pb-20 sm:px-8 lg:px-10 lg:pt-20 lg:pb-28 border-b border-[var(--border-color)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          {/* Eyebrow metadata - clean text without pill badge */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--grey-dark)]">
            <span>{siteConfig.eyebrow}</span>
          </div>

          <h1 className="mt-6 font-editorial text-6xl font-medium leading-[0.94] tracking-[-0.03em] text-[var(--ink-color)] sm:text-7xl lg:text-8xl" style={{ textWrap: 'balance' }}>
            {siteConfig.name.split(' ')[0]}<br />{siteConfig.name.split(' ').slice(1).join(' ')}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--text-muted)] font-light">
            {siteConfig.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-color)] px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] transition-all hover:bg-black/85 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Ver projetos</span>
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-transparent px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-color)] transition-all hover:bg-white hover:border-[var(--ink-color)]"
            >
              <span>Fale comigo</span>
            </a>
          </div>

          {/* Key metrics with tabular numerals */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-[var(--border-color)] pt-7">
            {siteConfig.stats.map((stat, i) => (
              <div key={i}>
                <dt className="font-editorial text-3xl font-semibold tabular-nums text-[var(--ink-color)] sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero Visual Container */}
        <div>
          <div className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[#EAE6DE] shadow-[var(--shadow-soft)] transition-transform duration-500 hover:shadow-xl">
            <img
              src={siteConfig.heroImage}
              alt={`Retrato editorial de moda em preto e branco — ${siteConfig.name}`}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60" />
          </div>

          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
            <span>Editorial · Alta-Costura</span>
            <span className="font-editorial text-sm normal-case italic text-[var(--grey-dark)]">{siteConfig.atelierLocation}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
