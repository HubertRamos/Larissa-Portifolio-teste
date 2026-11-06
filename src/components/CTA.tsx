import React from 'react';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <section className="bg-[var(--ink-color)] px-5 py-24 text-center text-[#FAF8F5] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-editorial)]">
          Pronta para começar
        </p>
        <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.04] tracking-[-0.02em] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
          Sua marca merece uma narrativa visual à altura.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#FAF8F5]/70 font-light sm:text-lg">
          Editoriais, campanhas e coleções conduzidos com o rigor estético de uma publicação de luxo e a fluidez de uma experiência contemporânea.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-[#FAF8F5] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-color)] transition-all hover:bg-white hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Iniciar um projeto</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-transparent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-white/10 hover:border-white"
          >
            <span>Rever o portfólio</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
