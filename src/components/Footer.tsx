import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[var(--border-color)] bg-[#FAF8F5] text-[var(--ink-color)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr] lg:px-10">
        <div>
          <Link href="/" className="font-editorial text-3xl font-semibold tracking-[-0.02em] text-[var(--ink-color)] block">
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)] font-light">
            Portfólio editorial de moda — direção criativa, styling e narrativas visuais que tratam cada projeto como uma criação artística com rigor e sensibilidade.
          </p>
          <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--grey-dark)]">
            <span>São Paulo</span>
            <span aria-hidden="true">·</span>
            <span>Paris</span>
            <span aria-hidden="true">·</span>
            <span>Milão</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            Navegação
          </p>
          <div className="mt-4 flex flex-col space-y-2.5 text-sm font-light text-[var(--text-muted)]">
            <Link href="/projetos" className="transition-colors hover:text-[var(--ink-color)]">
              Galeria Completa de Projetos
            </Link>
            <Link href="/#sobre" className="transition-colors hover:text-[var(--ink-color)]">
              Sobre a Diretora
            </Link>
            <Link href="/#servicos" className="transition-colors hover:text-[var(--ink-color)]">
              Serviços & Especialidades
            </Link>
            <Link href="/#processo" className="transition-colors hover:text-[var(--ink-color)]">
              Processo de Criação
            </Link>
            <Link href="/#depoimentos" className="transition-colors hover:text-[var(--ink-color)]">
              Depoimentos de Clientes
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            Ateliê & Contato
          </p>
          <div className="mt-4 flex flex-col space-y-2.5 text-sm font-light text-[var(--text-muted)]">
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-[var(--ink-color)] font-medium underline decoration-black/20 underline-offset-4 hover:text-[var(--grey-dark)]"
            >
              {siteConfig.email}
            </a>
            <p>{siteConfig.atelierAddress}</p>
            <p>{siteConfig.workingHours}</p>
            <Link href="/#contato" className="pt-2 text-xs uppercase tracking-[0.16em] font-medium text-[var(--ink-color)] hover:underline flex items-center gap-1">
              <span>Enviar formulário de briefing</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-color)] px-5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs tracking-[0.18em] text-[var(--text-muted)]">
            © 2026 {siteConfig.name}. Todos os direitos reservados. · Sistema Estático Desacoplado
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--ink-color)] transition-colors cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
