import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Maximize2, Minimize2 } from 'lucide-react';
import { getProjectById, getAdjacentProjects } from '../lib/projectLoader';
import { Link, useRouter } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

interface ProjectDetailPageProps {
  id: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ id }) => {
  const { navigate } = useRouter();
  const project = getProjectById(id);
  const [activeZoomSrc, setActiveZoomSrc] = useState<string | null>(null);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${siteConfig.name}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--background-color)] px-5 py-28 text-center sm:px-8">
        <div className="mx-auto max-w-xl rounded-[2rem] border border-[var(--border-color)] bg-[var(--paper-warm-color)] p-12">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--grey-dark)]">Erro de Localização</p>
          <h1 className="mt-4 font-editorial text-4xl text-[var(--ink-color)]">Projeto não encontrado</h1>
          <p className="mt-4 text-sm text-[var(--text-muted)] font-light">
            O projeto solicitado não existe ou ainda não foi publicado pelo ateliê.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--ink-color)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5]"
            >
              <span>Ver todos os projetos</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(project.id);

  const handleInquireThisProject = () => {
    navigate(`/#contato`);
  };

  return (
    <article className="min-h-screen bg-[var(--background-color)] pt-8 pb-28">
      {/* Lightbox / Zoom Modal for individual images */}
      {activeZoomSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md cursor-zoom-out"
          onClick={() => setActiveZoomSrc(null)}
        >
          <img
            src={activeZoomSrc}
            alt="Ampliação da imagem editorial"
            className="max-h-[92vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--grey-dark)]">
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 hover:text-[var(--ink-color)] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar ao Acervo de Projetos</span>
          </Link>

          <div className="hidden sm:flex items-center gap-3 text-[var(--text-muted)]">
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.formattedDate}</span>
          </div>
        </div>

        {/* 1. Project Title & Concept Header */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
              <span>{project.category}</span>
              {project.year && (
                <>
                  <span aria-hidden="true">·</span>
                  <span className="tabular-nums">{project.year}</span>
                </>
              )}
            </div>

            <h1 className="mt-4 font-editorial text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-[var(--ink-color)]" style={{ textWrap: 'balance' }}>
              {project.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl leading-9 text-[var(--text-muted)] font-light">
              {project.description}
            </p>
          </div>

          {/* Quick Info Summary Box */}
          <div className="rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--paper-warm-color)] p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-dark)] block">
                Direção Criativa & Ateliê
              </span>
              <p className="mt-1 text-sm font-medium text-[var(--ink-color)]">{siteConfig.name}</p>
            </div>

            {project.materials && project.materials.length > 0 && (
              <div className="border-t border-[var(--border-color)] pt-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-dark)] block">
                  Matérias-Primas Selecionadas
                </span>
                <p className="mt-1 text-xs leading-6 text-[var(--text-muted)]">
                  {project.materials.join(' · ')}
                </p>
              </div>
            )}

            {project.techniques && project.techniques.length > 0 && (
              <div className="border-t border-[var(--border-color)] pt-4">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-dark)] block">
                  Técnicas Empregadas
                </span>
                <p className="mt-1 text-xs leading-6 text-[var(--text-muted)]">
                  {project.techniques.join(' · ')}
                </p>
              </div>
            )}

            <button
              onClick={handleInquireThisProject}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink-color)] py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] transition-all hover:bg-black/85 cursor-pointer"
            >
              <span>Dialogar sobre este projeto</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 2. Main Hero Cover Photography */}
        <div className="mt-16">
          <div className="group relative overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[#EAE6DE] shadow-[var(--shadow-soft)]">
            <img
              src={project.coverUrl}
              alt={project.title}
              className="aspect-[16/10] sm:aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => setActiveZoomSrc(project.coverUrl)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/90 cursor-pointer"
              title="Ampliar fotografia"
              aria-label="Ampliar fotografia principal"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)] text-right">
            Fotografia Principal · {project.category} {project.year}
          </p>
        </div>

        {/* 3. Detailed Gallery & Process Artifacts */}
        {project.images && project.images.length > 0 && (
          <div className="mt-24 border-t border-[var(--border-color)] pt-16">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
                Registro Visual
              </span>
              <h2 className="mt-2 font-editorial text-3xl sm:text-4xl font-medium text-[var(--ink-color)]">
                Galeria de Ensaio & Detalhes
              </h2>
              <p className="mt-2 text-sm text-[var(--text-muted)] font-light">
                Composição fotográfica detalhada e ângulos de pesquisa do ateliê.
              </p>
            </div>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              {project.images.map((img, idx) => (
                <figure
                  key={idx}
                  className="group relative flex flex-col overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[var(--paper-color)] p-4 shadow-sm"
                >
                  <div className="relative overflow-hidden rounded-xl bg-[#EAE6DE]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={() => setActiveZoomSrc(img.src)}
                      className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/90 cursor-pointer"
                      title="Ampliar"
                      aria-label="Ampliar imagem"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  {(img.caption || img.type) && (
                    <figcaption className="mt-3 flex items-baseline justify-between text-xs text-[var(--text-muted)]">
                      <span className="font-light italic">{img.caption || img.alt}</span>
                      {img.type && (
                        <span className="uppercase tracking-[0.18em] text-[0.65rem] text-[var(--grey-dark)] shrink-0 ml-4 font-semibold">
                          {img.type}
                        </span>
                      )}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* 4. Specifications, Credits & Observations */}
        <div className="mt-24 grid gap-12 border-t border-[var(--border-color)] pt-16 sm:grid-cols-2 lg:grid-cols-3">
          {/* Credits */}
          {project.credits && project.credits.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
                Ficha Técnica & Colaboradores
              </h3>
              <ul className="mt-4 space-y-3 border-t border-[var(--border-color)] pt-4 text-sm">
                {project.credits.map((c, i) => (
                  <li key={i} className="flex flex-col">
                    <span className="text-xs text-[var(--text-muted)] font-light">{c.role}</span>
                    <span className="font-medium text-[var(--ink-color)]">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Observations & Context */}
          {project.observations && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
                Veiculação & Observações
              </h3>
              <div className="mt-4 border-t border-[var(--border-color)] pt-4">
                <p className="text-sm leading-7 text-[var(--text-muted)] font-light">
                  {project.observations}
                </p>
              </div>
            </div>
          )}

          {/* References */}
          {project.references && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
                Referências & Inspirações
              </h3>
              <div className="mt-4 border-t border-[var(--border-color)] pt-4">
                <p className="text-sm leading-7 text-[var(--text-muted)] font-light">
                  {project.references}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 5. Sequential Navigation to Adjacent Projects */}
        <div className="mt-24 border-t border-[var(--border-color)] pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {prev ? (
              <Link
                href={`/projeto/${prev.id}`}
                className="group flex items-center gap-4 text-left hover:opacity-85 transition-opacity"
              >
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[#EAE6DE]">
                  <img src={prev.coverUrl} alt={prev.title} className="h-full w-full object-cover" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center gap-1">
                    <ArrowLeft className="h-3 w-3" /> Projeto Anterior
                  </span>
                  <p className="font-editorial text-xl font-medium text-[var(--ink-color)] group-hover:underline">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/projetos"
              className="rounded-full border border-[var(--border-strong)] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-color)] hover:bg-[var(--paper-warm-color)] transition-colors"
            >
              Ver Todos os Projetos
            </Link>

            {next ? (
              <Link
                href={`/projeto/${next.id}`}
                className="group flex items-center gap-4 text-right hover:opacity-85 transition-opacity"
              >
                <div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] flex items-center justify-end gap-1">
                    Próximo Projeto <ArrowRight className="h-3 w-3" />
                  </span>
                  <p className="font-editorial text-xl font-medium text-[var(--ink-color)] group-hover:underline">
                    {next.title}
                  </p>
                </div>
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[var(--border-color)] bg-[#EAE6DE]">
                  <img src={next.coverUrl} alt={next.title} className="h-full w-full object-cover" />
                </div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>
    </article>
  );
};
