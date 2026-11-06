import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Maximize2, Minimize2, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  projects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
  onInquire,
}) => {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    onSelectProject(projects[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    onSelectProject(projects[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-3 sm:p-6 lg:p-10 backdrop-blur-md transition-all duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Projeto: ${project.title}`}
    >
      <div
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-[#FAF8F5] text-[var(--text-color)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar inside modal */}
        <div className="flex items-center justify-between border-b border-[var(--border-color)] px-6 py-4 bg-white/60 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--ink-color)]">{project.number}</span>
            <span aria-hidden="true">·</span>
            <span>{project.category}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoomed(!zoomed)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--paper-warm-color)] hover:text-[var(--ink-color)] transition-colors"
              title={zoomed ? 'Reduzir' : 'Ampliar foto'}
              aria-label="Alternar zoom"
            >
              {zoomed ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </button>
            <button
              onClick={handlePrev}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--paper-warm-color)] hover:text-[var(--ink-color)] transition-colors"
              title="Projeto anterior"
              aria-label="Projeto anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-muted)] hover:bg-[var(--paper-warm-color)] hover:text-[var(--ink-color)] transition-colors"
              title="Próximo projeto"
              aria-label="Próximo projeto"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="ml-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink-color)] text-white hover:bg-black/80 transition-colors"
              title="Fechar (Esc)"
              aria-label="Fechar modal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 lg:p-10 space-y-10">
          {/* Main Visual */}
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--border-color)] bg-[#EAE6DE] shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className={`w-full object-cover transition-all duration-500 ${
                zoomed ? 'max-h-[85vh] scale-105' : 'aspect-[16/10] sm:aspect-[16/9]'
              }`}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Concept */}
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] border-b border-[var(--border-color)] pb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--grey-dark)]">
                {project.number} — {project.category}
              </p>
              <h2 className="mt-2 font-editorial text-4xl font-medium tracking-tight text-[var(--ink-color)] sm:text-5xl">
                {project.title}
              </h2>
              <p className="mt-2 text-base font-light italic text-[var(--grey-dark)] font-editorial text-xl">
                {project.subtitle}
              </p>

              <div className="mt-6 space-y-4 text-base leading-8 text-[var(--text-muted)] font-light">
                <p>{project.fullConcept}</p>
                {project.quote && (
                  <blockquote className="mt-4 border-l-2 border-[var(--ink-color)] pl-4 font-editorial text-lg italic text-[var(--ink-color)]">
                    {project.quote}
                  </blockquote>
                )}
              </div>
            </div>

            {/* Inquire callout card */}
            <div className="flex flex-col justify-between rounded-2xl border border-[var(--border-color)] bg-[var(--paper-warm-color)] p-6">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--grey-dark)]">
                  Consultoria de Projeto
                </span>
                <h3 className="mt-2 font-editorial text-2xl font-semibold text-[var(--ink-color)]">
                  Interessado nesta linguagem?
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                  Desenvolvemos propostas completas de direção criativa, styling e fotografia alinhadas ao posicionamento da sua marca.
                </p>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--ink-color)] py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FAF8F5] transition-all hover:bg-black/85"
              >
                <span>Falar sobre este projeto</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Specifications & Credits */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Credits */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--grey-dark)]">
                Ficha Técnica & Créditos
              </h4>
              <ul className="space-y-2 border-t border-[var(--border-color)] pt-3 text-sm">
                {project.credits.map((c, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-xs text-[var(--text-muted)]">{c.role}</span>
                    <span className="font-medium text-[var(--ink-color)]">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Details */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--grey-dark)]">
                Especificações Visuais
              </h4>
              <ul className="space-y-2 border-t border-[var(--border-color)] pt-3 text-sm">
                {project.specifications.map((s, idx) => (
                  <li key={idx} className="flex flex-col">
                    <span className="text-xs text-[var(--text-muted)]">{s.label}</span>
                    <span className="font-medium text-[var(--ink-color)]">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--grey-dark)]">
                Entregas Realizadas
              </h4>
              <ul className="space-y-2 border-t border-[var(--border-color)] pt-3 text-sm">
                {project.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[var(--ink-color)]">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--grey-dark)]" />
                    <span className="text-xs leading-5 text-[var(--text-muted)]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
