import React, { useEffect } from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import { Link } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

export const NotFoundPage: React.FC = () => {
  useEffect(() => {
    document.title = `Página Não Encontrada — ${siteConfig.name}`;
  }, []);

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[var(--background-color)] px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-xl text-center">
        <span className="font-editorial text-8xl font-light text-[var(--grey-editorial)]/40 block">
          404
        </span>
        <h1 className="mt-4 font-editorial text-4xl sm:text-5xl font-medium text-[var(--ink-color)]">
          Página não encontrada
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--text-muted)] font-light">
          O endereço solicitado não pertence a nenhum projeto ou seção do ateliê de {siteConfig.name}.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-color)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] transition-all hover:bg-black/85"
          >
            <Home className="h-4 w-4" />
            <span>Retornar ao Início</span>
          </Link>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-color)] hover:bg-[var(--paper-warm-color)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Explorar Galeria de Projetos</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
