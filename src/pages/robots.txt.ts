import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const isPreview = ['deploy-preview', 'branch-deploy'].includes(import.meta.env.CONTEXT ?? '');
  const rules = isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', site).href}\n`;
  return new Response(rules, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
