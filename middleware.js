const MARKDOWN_ROUTES = new Map([
  ['/', '/index.md'],
  ['/index', '/index.md'],
  ['/index.html', '/index.md'],
  ['/servicios', '/servicios.md'],
  ['/servicios.html', '/servicios.md'],
  ['/agentes', '/agentes.md'],
  ['/agentes.html', '/agentes.md'],
]);

const HTML_ROUTES = new Map([
  ['/servicios', '/servicios.html'],
  ['/agentes', '/agentes.html']
]);

function acceptsMarkdown(request) {
  const accept = request.headers.get('accept') || '';
  return accept.toLowerCase().includes('text/markdown');
}

export const config = {
  matcher: [
    '/',
    '/index',
    '/index.html',
    '/servicios',
    '/servicios.html',
    '/agentes',
    '/agentes.html'
  ]
};

export default function middleware(request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') return;

  const pathname = new URL(request.url).pathname;
  if (acceptsMarkdown(request)) {
    const markdownTarget = MARKDOWN_ROUTES.get(pathname);
    if (!markdownTarget) return;

    const targetUrl = new URL(markdownTarget, request.url);
    const rewrittenRequest = new Request(targetUrl, request);

    return fetch(rewrittenRequest);
  }

  const htmlTarget = HTML_ROUTES.get(pathname);
  if (!htmlTarget) return;

  const targetUrl = new URL(htmlTarget, request.url);
  const rewrittenRequest = new Request(targetUrl, request);
  return fetch(rewrittenRequest);
}
