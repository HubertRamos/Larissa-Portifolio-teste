import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useRouter } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { path } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isHome = path === '/';

  return (
    <header
      id="siteHeader"
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-[var(--border-color)] bg-[#FAF8F5]/95 shadow-sm backdrop-blur-md py-4'
          : 'border-transparent bg-[#FAF8F5]/85 backdrop-blur-md py-5'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
        {/* Zone 1: Single text element wordmark */}
        <Link
          href="/"
          className="font-editorial text-2xl font-semibold tracking-[-0.02em] text-[var(--ink-color)] whitespace-nowrap shrink-0 transition-opacity hover:opacity-80 sm:text-[1.85rem]"
        >
          {siteConfig.name}
        </Link>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[var(--text-muted)]" aria-label="Navegação principal">
          <Link
            href="/projetos"
            className={`transition-colors whitespace-nowrap shrink-0 ${
              path === '/projetos' ? 'text-[var(--ink-color)] font-semibold' : 'hover:text-[var(--ink-color)]'
            }`}
          >
            Projetos
          </Link>
          <Link
            href={isHome ? '#sobre' : '/#sobre'}
            className="transition-colors hover:text-[var(--ink-color)] whitespace-nowrap shrink-0"
          >
            Sobre
          </Link>
          <Link
            href={isHome ? '#servicos' : '/#servicos'}
            className="transition-colors hover:text-[var(--ink-color)] whitespace-nowrap shrink-0"
          >
            Serviços
          </Link>
          <Link
            href={isHome ? '#processo' : '/#processo'}
            className="transition-colors hover:text-[var(--ink-color)] whitespace-nowrap shrink-0"
          >
            Processo
          </Link>
          <Link
            href={isHome ? '#depoimentos' : '/#depoimentos'}
            className="transition-colors hover:text-[var(--ink-color)] whitespace-nowrap shrink-0"
          >
            Depoimentos
          </Link>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href={isHome ? '#contato' : '/#contato'}
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--ink-color)] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#FAF8F5] transition-all hover:bg-black/80 hover:shadow-md whitespace-nowrap shrink-0"
          >
            <span>Contato</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            id="mobileMenuToggle"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] text-[var(--ink-color)] transition-colors hover:bg-[var(--paper-warm-color)] md:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobileMenu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div id="mobileMenu" className="border-t border-[var(--border-color)] bg-[#FAF8F5] px-5 py-6 sm:px-8 md:hidden shadow-lg animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4" aria-label="Menu móvel">
            <Link
              href="/projetos"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--ink-color)] py-1.5 border-b border-black/5"
            >
              Projetos & Galeria
            </Link>
            <Link
              href={isHome ? '#sobre' : '/#sobre'}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--ink-color)] py-1.5 border-b border-black/5"
            >
              Sobre a Diretora
            </Link>
            <Link
              href={isHome ? '#servicos' : '/#servicos'}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--ink-color)] py-1.5 border-b border-black/5"
            >
              Serviços
            </Link>
            <Link
              href={isHome ? '#processo' : '/#processo'}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--ink-color)] py-1.5 border-b border-black/5"
            >
              Processo
            </Link>
            <Link
              href={isHome ? '#depoimentos' : '/#depoimentos'}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[var(--ink-color)] py-1.5 border-b border-black/5"
            >
              Depoimentos
            </Link>
            <Link
              href={isHome ? '#contato' : '/#contato'}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--ink-color)] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5]"
            >
              <span>Falar com o Ateliê</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
