/**
 * Descoberta Automática e Resolução de Projetos via Sistema de Arquivos
 * 
 * Utiliza o Vite `import.meta.glob` para escanear a pasta /projects/ em tempo de build.
 * Qualquer pasta contendo um project.json com `published: true` é automaticamente
 * descoberta, validada e exposta para a aplicação sem necessidade de listas manuais.
 */

import { RawProjectConfig, Project, ResolvedProjectImage, ProjectImageItem } from '../types/project';

// Importa todos os project.json da árvore de pastas /projects/
const jsonModules = import.meta.glob<Record<string, any>>('/projects/**/project.json', {
  eager: true,
  import: 'default',
});

// Importa todas as imagens e ativos de mídia dos projetos para que o Vite resolva e otimize os URLs
const imageAssets = import.meta.glob<string>(
  '/projects/**/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP,AVIF,SVG}',
  { eager: true, query: '?url', import: 'default' }
);

/**
 * Resolve o caminho de um arquivo de mídia relativo à pasta do projeto
 */
function resolveAssetUrl(folderPath: string, relativePath: string | undefined): string {
  if (!relativePath) return '';

  // Se já for um URL completo ou caminho absoluto em /src/assets
  if (relativePath.startsWith('http://') || relativePath.startsWith('https://') || relativePath.startsWith('data:')) {
    return relativePath;
  }

  // Normaliza o caminho relativo
  const cleaned = relativePath.replace(/^\.\//, '').replace(/^\//, '');
  
  // Caminho completo esperado no sistema de arquivos do Vite
  const fullPath = `${folderPath}/${cleaned}`;

  // Busca no registro de ativos importados pelo Vite
  if (imageAssets[fullPath]) {
    return imageAssets[fullPath];
  }

  // Tenta variações de extensão ou case sensitivity se não encontrou de primeira
  const foundKey = Object.keys(imageAssets).find(
    (key) => key.toLowerCase() === fullPath.toLowerCase()
  );
  if (foundKey && imageAssets[foundKey]) {
    return imageAssets[foundKey];
  }

  // Aviso útil ao desenvolvedor em caso de imagem ausente
  console.warn(
    `[Portfolio Asset Warning] Imagem não encontrada: "${relativePath}" para a pasta "${folderPath}". Verifique se o arquivo existe em /${folderPath}/${cleaned}.`
  );

  return '';
}

/**
 * Formata a data YYYY-MM-DD para formato editorial por extenso (ex: "Novembro de 2025")
 */
function formatPublicationDate(dateStr: string): string {
  try {
    const [year, month, day] = dateStr.split('-').map(Number);
    if (!year || !month) return dateStr;
    const date = new Date(year, month - 1, day || 1);
    return date.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' });
  } catch {
    return dateStr;
  }
}

/**
 * Carrega e processa todos os projetos cadastrados
 */
export function getAllProjects(): Project[] {
  const projects: Project[] = [];

  for (const [filePath, rawData] of Object.entries(jsonModules)) {
    // Ignora pastas de modelo como _template ou templates
    if (filePath.includes('/_template/') || filePath.includes('/_template.json')) {
      continue;
    }

    const config = rawData as RawProjectConfig;

    // Regra: Apenas projetos publicados (published: true) entram nas coleções públicas
    if (!config || config.published !== true) {
      continue;
    }

    // Extrai o diretório da pasta a partir do filePath (ex: /projects/silencio-urbano/project.json -> /projects/silencio-urbano)
    const folderPath = filePath.substring(0, filePath.lastIndexOf('/'));
    const folderSlug = folderPath.substring(folderPath.lastIndexOf('/') + 1);

    // Resolve o URL da capa
    const coverUrl = resolveAssetUrl(folderPath, config.cover);

    // Resolve as imagens da galeria
    const resolvedImages: ResolvedProjectImage[] = [];

    if (Array.isArray(config.images)) {
      config.images.forEach((imgItem, idx) => {
        let srcPath = '';
        let altText = `${config.title} — Imagem ${idx + 1}`;
        let caption: string | undefined;
        let type: ResolvedProjectImage['type'] = 'fotografia';
        let aspect: ResolvedProjectImage['aspect'] = 'vertical';

        if (typeof imgItem === 'string') {
          srcPath = imgItem;
        } else if (imgItem && typeof imgItem === 'object') {
          const item = imgItem as ProjectImageItem;
          srcPath = item.src || '';
          if (item.alt) altText = item.alt;
          if (item.caption) caption = item.caption;
          if (item.type) type = item.type as ResolvedProjectImage['type'];
          if (item.aspect) aspect = item.aspect as ResolvedProjectImage['aspect'];
        }

        const resolvedSrc = resolveAssetUrl(folderPath, srcPath);
        if (resolvedSrc) {
          resolvedImages.push({
            src: resolvedSrc,
            alt: altText,
            caption,
            type,
            aspect,
          });
        }
      });
    }

    projects.push({
      ...config,
      folderSlug,
      coverUrl,
      images: resolvedImages,
      formattedDate: formatPublicationDate(config.publishedAt),
    });
  }

  // Ordena por publishedAt descrescente (do mais recente para o mais antigo)
  return projects.sort((a, b) => {
    const timeA = new Date(a.publishedAt || '1970-01-01').getTime();
    const timeB = new Date(b.publishedAt || '1970-01-01').getTime();
    return timeB - timeA;
  });
}

/**
 * Retorna os projetos destacados (featured === true)
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured === true);
}

/**
 * Retorna um projeto específico pelo seu ID (ou slug de pasta)
 */
export function getProjectById(idOrSlug: string): Project | undefined {
  const all = getAllProjects();
  return all.find((p) => p.id === idOrSlug || p.folderSlug === idOrSlug);
}

/**
 * Retorna os projetos anterior e próximo para navegação sequencial
 */
export function getAdjacentProjects(currentId: string): { prev?: Project; next?: Project } {
  const all = getAllProjects();
  const currentIndex = all.findIndex((p) => p.id === currentId || p.folderSlug === currentId);
  if (currentIndex === -1) return {};

  const prev = currentIndex > 0 ? all[currentIndex - 1] : all[all.length - 1];
  const next = currentIndex < all.length - 1 ? all[currentIndex + 1] : all[0];

  return { prev, next };
}
