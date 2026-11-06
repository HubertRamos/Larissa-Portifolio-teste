import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="bg-[var(--background-color)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">05</span>
            <span aria-hidden="true">/</span>
            <span>Reconhecimento</span>
          </div>
          <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink-color)] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
            Quem já criou comigo.
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--text-muted)] font-light">
            Parcerias estabelecidas com marcas de vanguarda, ateliês e fotógrafos de moda.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="flex h-full flex-col justify-between border-t border-[var(--border-strong)] pt-6"
            >
              <div>
                <Quote className="h-6 w-6 text-[var(--grey-editorial)]/70 rotate-180" />
                <blockquote className="mt-5 font-editorial text-2xl leading-9 text-[var(--ink-color)] font-light">
                  {item.quote}
                </blockquote>
              </div>

              <figcaption className="mt-8 border-t border-[var(--border-color)] pt-4 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                <span className="font-semibold text-[var(--ink-color)] block">{item.author}</span>
                <span className="mt-1 block normal-case tracking-normal text-[var(--grey-dark)] text-xs">
                  {item.role}, {item.organization}
                </span>
                <span className="mt-1 block text-[0.7rem] text-gray-400 tabular-nums">
                  Projeto · {item.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
