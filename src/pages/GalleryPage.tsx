import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Filter } from 'lucide-react';
import { getAllProjects } from '../lib/projectLoader';
import { Link } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const allProjects = getAllProjects();

  useEffect(() => {
    document.title = `Acervo & Galeria — ${siteConfig.name}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Extrai categorias únicas dinamicamente a partir dos projetos publicados
  const categories = ['Todos', ...Array.from(new Set(allProjects.map((p) => p.category)))];

  const filtered = selectedCategory === 'Todos'
    ? allProjects
    : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[var(--background-color)] pt-8 pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top Breadcrumb & Return to Home */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--grey-dark)] hover:text-[var(--ink-color)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retornar ao Início</span>
          </Link>

          <span className="text-xs uppercase tracking-[0.24em] text-[var(--text-muted)] tabular-nums">
            {filtered.length} {filtered.length === 1 ? 'projeto publicado' : 'projetos publicados'}
          </span>
        </div>

        {/* Gallery Header */}
        <div className="mt-12 max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
            <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">Acervo Completo</span>
            <span aria-hidden="true">/</span>
            <span>Alta-Costura & Editoriais</span>
          </div>

          <h1 className="mt-4 font-editorial text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--ink-color)]" style={{ textWrap: 'balance' }}>
            Galeria de Projetos
          </h1>

          <p className="mt-6 text-lg leading-8 text-[var(--text-muted)] font-light">
            Catálogo completo das narrativas visuais dirigidas por {siteConfig.name}. Cada projeto reflete um estudo de proporções, tecidos e dramaturgia em preto e branco.
          </p>
        </div>

        {/* Filter Controls (Segmented Tabs) */}
        <div className="mt-12 flex flex-wrap items-center gap-2 border-b border-[var(--border-color)] pb-6">
          {categories.map((cat) => {
            const count = cat === 'Todos' ? allProjects.length : allProjects.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[var(--ink-color)] text-[#FAF8F5] shadow-sm'
                    : 'bg-white/70 text-[var(--text-muted)] hover:bg-white hover:text-[var(--ink-color)] border border-[var(--border-color)]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[0.65rem] tabular-nums ${isActive ? 'text-white/70' : 'text-gray-400'}`}>
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Project Grid */}
        {filtered.length === 0 ? (
          <div className="mt-20 rounded-[2rem] border border-[var(--border-color)] bg-[var(--paper-warm-color)] p-12 text-center">
            <p className="font-editorial text-2xl text-[var(--ink-color)]">Nenhum projeto encontrado nesta categoria.</p>
            <button
              onClick={() => setSelectedCategory('Todos')}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] underline"
            >
              Exibir todos os projetos
            </button>
          </div>
        ) : (
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-16">
            {filtered.map((project, idx) => (
              <article key={project.id} className="group">
                <Link href={`/projeto/${project.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--paper-color)] shadow-sm transition-all duration-500 group-hover:shadow-[var(--shadow-soft)]">
                    <img
                      src={project.coverUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <span className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                        Explorar Obra
                      </span>
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-lg">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">
                        <span>{project.category}</span>
                        {project.year && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="tabular-nums">{project.year}</span>
                          </>
                        )}
                      </div>

                      <h2 className="mt-2 font-editorial text-2xl font-medium tracking-tight text-[var(--ink-color)] group-hover:text-[var(--grey-dark)] transition-colors">
                        {project.title}
                      </h2>

                      <p className="mt-2 text-xs leading-5 text-[var(--text-muted)] font-light line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <span className="shrink-0 text-xs text-[var(--grey-dark)] tabular-nums">
                      {project.publishedAt.split('-')[0]}
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
