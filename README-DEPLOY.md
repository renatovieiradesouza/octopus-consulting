# Octopus (Next.js) — Deploy na Vercel

## Rodar local

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Deploy na Vercel

- **Importe o repositório** na Vercel (Framework: Next.js).
- **Build Command**: `npm run build` (padrão)
- **Output**: padrão do Next.js

### Variável (opcional) para SEO

Para `sitemap.xml` e `robots.txt` apontarem para o domínio correto, configure:

- **`NEXT_PUBLIC_SITE_URL`**: `https://seu-dominio.com`

## Conteúdo do site

Edite `src/content/site.ts` para ajustar textos, métricas e lista de serviços.

