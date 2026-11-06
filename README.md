# Larissa Bonfante — Portfólio Profissional de Moda

Portfólio editorial de alta-costura e direção criativa com arquitetura estática, publicação automatizada via GitHub e Vercel, e sistema de projetos orientado a arquivos.

---

## 1. Resumo da Arquitetura

- **Sem Banco de Dados e Sem CMS**: O site é 100% estático, ultra-rápido e seguro.
- **Descoberta Automática de Projetos**: Os projetos são descobertos em tempo de build a partir da pasta `/projects/` utilizando os recursos nativos do Vite (`import.meta.glob`).
- **Sistema de Pastas Independentes**: Cada projeto tem sua própria pasta, seu próprio arquivo `project.json` e suas próprias imagens.
- **Roteamento SPA sem Dependências Externas**: Suporte a URLs diretas (`/`, `/projetos`, `/projeto/:id`) compatíveis com a Vercel através do arquivo `vercel.json`.
- **Identidade Visual Preservada**: Estética monocromática de luxo, proporções tipográficas equilibradas (*Cormorant Garamond* e *Plus Jakarta Sans*), composição assimétrica e ausência de elementos artificiais de interface.

---

## 2. Estrutura de Pastas

```text
├── projects/                      # Sistema de projetos por pastas
│   ├── _template/                 # Modelo para duplicar e criar novos projetos
│   │   ├── project.json           # Arquivo base com todos os campos
│   │   ├── cover.webp             # Imagem de capa modelo
│   │   └── images/                # Galeria modelo
│   │
│   ├── silencio-urbano/           # Projeto publicado
│   │   ├── project.json
│   │   ├── cover.webp
│   │   └── images/
│   │       ├── foto-01.webp
│   │       └── detalhe-01.webp
│   │
│   ├── tecido-e-sombra/
│   ├── contraluz/
│   ├── assimetria/
│   ├── pele-neutra/
│   └── rumor/
│
├── src/
│   ├── config/
│   │   └── siteConfig.ts          # Informações institucionais editáveis (bio, contatos, etc.)
│   ├── lib/
│   │   ├── projectLoader.ts       # Descoberta automática de projetos e resolução de imagens
│   │   └── router.tsx             # Roteador nativo leve com histórico HTML5
│   ├── types/
│   │   └── project.ts             # Tipagens e validações TypeScript
│   ├── pages/
│   │   ├── GalleryPage.tsx        # Galeria completa (/projetos)
│   │   ├── ProjectDetailPage.tsx  # Página individual de cada projeto (/projeto/:id)
│   │   └── NotFoundPage.tsx       # Página 404 estilizada
│   └── components/                # Componentes da página inicial (Hero, Sobre, Serviços, etc.)
│
├── vercel.json                    # Regras de reescrita para deploy na Vercel
└── package.json
```

---

## 3. Como Cadastrar um Novo Projeto

Para cadastrar um novo trabalho no portfólio, siga este passo a passo simples:

### Passo 1: Copiar a pasta modelo
Duplique a pasta `projects/_template` e renomeie para o identificador do seu novo trabalho (em letras minúsculas, usando hifens).  
*Exemplo:* `projects/colecao-inverno-2027/`

### Passo 2: Adicionar as imagens
Coloque os arquivos de imagem dentro da nova pasta:
- A foto principal deve se chamar `cover.webp` (ou `cover.jpg`, `cover.png`).
- As fotos secundárias, croquis e detalhes devem ficar dentro da pasta `images/` (ex: `images/foto-01.webp`, `images/croqui-01.png`, `images/detalhe-01.webp`).

### Passo 3: Preencher o `project.json`
Abra o arquivo `project.json` da nova pasta e edite as informações:

```json
{
  "id": "colecao-inverno-2027",
  "title": "Coleção Inverno 2027",
  "category": "Alta-costura",
  "year": "2027",
  "publishedAt": "2027-02-15",
  "description": "Texto explicando o conceito artístico, inspirações, silhuetas e cortes.",
  "cover": "cover.webp",
  "images": [
    {
      "src": "images/foto-01.webp",
      "alt": "Descrição da foto para acessibilidade",
      "caption": "Legenda editorial da foto",
      "type": "fotografia",
      "aspect": "vertical"
    },
    {
      "src": "images/croqui-01.png",
      "alt": "Croqui de alfaiataria",
      "caption": "Estudo de moulage preliminar",
      "type": "croqui",
      "aspect": "quadrado"
    }
  ],
  "materials": [
    "Lã virgem 140s",
    "Seda pura italiana",
    "Tafetá estruturado"
  ],
  "techniques": [
    "Alfaiataria desconstruída",
    "Moulage tridimensional"
  ],
  "credits": [
    { "role": "Direção Criativa", "name": "Larissa Bonfante" },
    { "role": "Fotografia", "name": "Nome do Fotógrafo" },
    { "role": "Modelo", "name": "Nome da Modelo" }
  ],
  "observations": "Publicado na revista Vogue Brasil e desfilado na São Paulo Fashion Week.",
  "references": "Brutalismo modernista brasileiro e cinema clássico em preto e branco.",
  "featured": true,
  "published": true
}
```

---

## 4. Campos do `project.json`

| Campo | Tipo | Descrição |
|---|---|---|
| `id` | Texto | Identificador único utilizado na URL (ex: `silencio-urbano`). |
| `title` | Texto | Nome de exibição do projeto. |
| `category` | Texto | Categoria (ex: `Editorial`, `Alta-costura`, `Campanha`, `Beleza`). |
| `year` | Texto *(opcional)* | Ano de realização. |
| `publishedAt` | Texto *(YYYY-MM-DD)* | Data de publicação. Define a ordenação dos mais recentes. |
| `description` | Texto | Conceito e narrativa do projeto. |
| `cover` | Texto | Caminho da imagem principal relativo à pasta (ex: `cover.webp`). |
| `images` | Lista *(opcional)* | Fotos adicionais, croquis e detalhes com legenda e tipo. |
| `materials` | Lista *(opcional)* | Tecidos e matérias-primas utilizadas. |
| `techniques` | Lista *(opcional)* | Técnicas de confecção, iluminação ou corte empregadas. |
| `credits` | Lista *(opcional)* | Ficha técnica com `role` e `name`. |
| `observations`| Texto *(opcional)* | Premiações, mostras ou contexto especial. |
| `references` | Texto *(opcional)* | Inspirações artísticas e arquitetônicas. |
| `featured` | Booleano | `true` destaca o projeto na página inicial. |
| `published` | Booleano | `true` torna o projeto público. Se `false`, o projeto é ignorado. |

---

## 5. Publicar ou Ocultar um Projeto

- **Para publicar**: Altere `"published": true` no `project.json`.
- **Para transformar em rascunho (ocultar do site público)**: Altere `"published": false`. O projeto não será visível na página inicial, nem na galeria, nem terá sua página pública gerada.

---

## 6. Informações Institucionais do Ateliê

Para atualizar nome, biografia, e-mail, telefone, Instagram ou endereço do ateliê, edite apenas o arquivo:
👉 `src/config/siteConfig.ts`

Nenhuma informação institucional fica perdida pelo código.

---

## 7. Como Atualizar o Site via GitHub e Vercel

1. Faça as alterações nos arquivos desejados ou adicione uma nova pasta em `projects/`.
2. No seu terminal ou cliente Git:
   ```bash
   git add .
   git commit -m "Adiciona novo editorial: Coleção Inverno 2027"
   git push origin main
   ```
3. A **Vercel** detecta o envio automaticamente, executa o comando `npm run build` e publica a nova versão do portfólio em poucos segundos.

---

© 2026 Larissa Bonfante. Portfólio de Moda & Direção Criativa.
