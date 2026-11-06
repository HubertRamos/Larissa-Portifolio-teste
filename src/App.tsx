import React from 'react';
import { RouterProvider, useRouter } from './lib/router';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { GalleryPage } from './pages/GalleryPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
  const { route, navigate } = useRouter();

  const handleInquireService = (serviceTitle: string) => {
    navigate('/#contato');
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)] selection:bg-[#0E0E0E] selection:text-white">
      {/* Top Header sticky em todas as páginas */}
      <Header />

      <main>
        {route.page === 'home' && (
          <>
            {/* Abertura Cinematográfica */}
            <Hero />

            {/* Fita de Especialidades */}
            <Ticker />

            {/* 01: Sobre a Diretora */}
            <About />

            {/* 02: Trabalhos Recentes & Destaques (Descoberta Automática de Pastas) */}
            <Projects />

            {/* 03: Serviços do Ateliê */}
            <Services onInquireService={handleInquireService} />

            {/* 04: Metodologia e Processo */}
            <Process />

            {/* 05: Depoimentos e Reconhecimento */}
            <Testimonials />

            {/* 06: Contato e Briefing */}
            <Contact />

            {/* Chamada Final */}
            <CTA />
          </>
        )}

        {route.page === 'gallery' && <GalleryPage />}

        {route.page === 'project' && <ProjectDetailPage id={route.id} />}

        {route.page === '404' && <NotFoundPage />}
      </main>

      {/* Rodapé Global */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
