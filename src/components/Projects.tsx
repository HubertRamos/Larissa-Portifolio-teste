import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { getAllProjects, getFeaturedProjects } from '../lib/projectLoader';
import { Link } from '../lib/router';

export const Projects: React.FC = () => {
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();

  // O trabalho mais recente recebe o destaque de abertura cinematográfica
  const latestProject = allProjects[0];
  // Demais trabalhos recentes (ex: posições 1 a 4)
  const secondaryProjects = allProjects.slice(1, 5);

  return (
    <section id="projetos" className="bg-[var(--paper-warm-color)] px-5 py-20 sm:px-8 lg:px-10 lg:py-28 border-b border-[var(--border-color)]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
              <span className="font-editorial text-sm font-bold text-[var(--ink-color)]">02</span>
              <span aria-hidden="true">/</span>
              <span>Trabalhos Recentes & Autoria</span>
            </div>
            <h2 className="mt-6 font-editorial text-4xl font-medium leading-[1.02] tracking-[-0.02em] text-[var(--ink-color)] sm:text-5xl lg:text-6xl" style={{ textWrap: 'balance' }}>
              Cada trabalho com o seu próprio conceito.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-lg leading-8 text-[var(--text-muted)] font-light">
              Projetos descobertos automaticamente a partir do ateliê. Cada criação é estruturada em pasta independente com conceito, croquis e editorial próprio em preto e branco.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="/projetos"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-color)] hover:underline decoration-1 underline-offset-4"
              >
                <span>Explorar galeria completa ({allProjects.length} projetos)</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 1. Destaque Principal do Trabalho Mais Recente */}
        {latestProject && (
          <div className="mt-16">
            <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-3 text-xs uppercase tracking-[0.22em] text-[var(--grey-dark)]">
              <span>Lançamento Mais Recente</span>
              <span className="tabular-nums">{latestProject.formattedDate}</span>
            </div>

            <Link
              href={`/projeto/${latestProject.id}`}
              className="group mt-6 grid gap-8 rounded-[2rem] border border-[var(--border-color)] bg-[var(--paper-color)] p-6 transition-all duration-500 hover:shadow-[var(--shadow-soft)] sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[#EAE6DE]">
                <img
                  src={latestProject.coverUrl}
                  alt={latestProject.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between p-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-white font-medium">Ver Página do Projeto</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                    <span>{latestProject.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{latestProject.year}</span>
                  </div>

                  <h3 className="mt-3 font-editorial text-4xl sm:text-5xl font-medium tracking-tight text-[var(--ink-color)] group-hover:text-[var(--grey-dark)] transition-colors">
                    {latestProject.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base leading-7 text-[var(--text-muted)] font-light line-clamp-3">
                    {latestProject.description}
                  </p>

                  {latestProject.materials && latestProject.materials.length > 0 && (
                    <div className="mt-6 border-t border-[var(--border-color)] pt-4 text-xs text-[var(--text-muted)]">
                      <span className="font-semibold uppercase tracking-[0.18em] text-[var(--grey-dark)] block mb-1">
                        Matérias-Primas:
                      </span>
                      <span>{latestProject.materials.join(' · ')}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-color)]">
                  <span>Abrir projeto completo</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 2. Grade Assimétrica dos Demais Trabalhos */}
        {secondaryProjects.length > 0 && (
          <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {secondaryProjects.map((project, idx) => {
              const isStaggered = idx % 2 === 1;
              return (
                <article
                  key={project.id}
                  className={`group ${isStaggered ? 'md:mt-12' : ''}`}
                >
                  <Link href={`/projeto/${project.id}`} className="block">
                    {/* Imagem com proporção 4/5 editorial */}
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--paper-color)] shadow-sm transition-all duration-500 group-hover:shadow-[var(--shadow-soft)]">
                      <img
                        src={project.coverUrl}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="text-xs uppercase tracking-[0.2em] font-medium text-white">
                          Acessar Projeto
                        </span>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    {/* Metadados textuais limpos sem botões falsos */}
                    <div className="mt-6 flex items-start justify-between gap-6">
                      <div>
                        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                          <span>{project.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{project.year}</span>
                        </div>

                        <h4 className="mt-2 font-editorial text-3xl font-medium tracking-tight text-[var(--ink-color)] group-hover:text-[var(--grey-dark)] transition-colors">
                          {project.title}
                        </h4>

                        <p className="mt-2.5 max-w-md text-sm leading-6 text-[var(--text-muted)] font-light line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-xs uppercase tracking-[0.2em] text-[var(--grey-dark)] tabular-nums">
                        {project.publishedAt.split('-')[0]}
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        )}

        {/* Botão de Rodapé da Seção para a Galeria Completa */}
        <div className="mt-20 border-t border-[var(--border-color)] pt-10 text-center">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-3 rounded-full border border-[var(--border-strong)] bg-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-color)] transition-all hover:bg-[var(--ink-color)] hover:text-[#FAF8F5] hover:shadow-md"
          >
            <span>Ver acervo completo na galeria ({allProjects.length} editoriais)</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
