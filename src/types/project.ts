/**
 * Tipos e Interfaces do Sistema de Projetos por Pastas
 */

export interface ProjectImageItem {
  src: string;
  alt?: string;
  caption?: string;
  type?: 'fotografia' | 'croqui' | 'estudo' | 'detalhe' | string;
  aspect?: 'vertical' | 'horizontal' | 'quadrado' | string;
}

export interface ProjectCredit {
  role: string;
  name: string;
}

export interface RawProjectConfig {
  id: string;
  title: string;
  category: string;
  year?: string;
  publishedAt: string; // YYYY-MM-DD
  description: string;
  cover: string;
  images?: Array<string | ProjectImageItem>;
  materials?: string[];
  techniques?: string[];
  credits?: ProjectCredit[];
  observations?: string;
  references?: string;
  featured?: boolean;
  published: boolean;
}

export interface ResolvedProjectImage {
  src: string;
  alt: string;
  caption?: string;
  type: 'fotografia' | 'croqui' | 'estudo' | 'detalhe';
  aspect: 'vertical' | 'horizontal' | 'quadrado';
}

export interface Project extends Omit<RawProjectConfig, 'cover' | 'images'> {
  folderSlug: string;
  coverUrl: string;
  images: ResolvedProjectImage[];
  formattedDate: string;
}
