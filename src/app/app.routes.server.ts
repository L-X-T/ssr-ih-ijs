import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  { path: '', renderMode: RenderMode.Server, status: 301 },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
