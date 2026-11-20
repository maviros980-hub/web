export const SITE_TITLE = 'Manuel Avilés';
export const SITE_DESCRIPTION = 'Profesor de Matemáticas. Materiales docentes, proyectos de programación y tecnología.';
export const DEPARTAMENTO = 'Dpto Matemáticas IES Gil de Zático';
export const EMAIL = 'tu-correo@ejemplo.com'; // cámbialo

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/docencia/', label: 'Docencia' },
  { href: '/descargas/', label: 'Descargas' },
  { href: '/proyectos/', label: 'Proyectos' },
  { href: '/blog/', label: 'Blog' },
  { href: '/contacto/', label: 'Contacto' },
];

// Antepone la ruta base (p. ej. "/web") a los enlaces internos.
export const url = (path: string) => (import.meta.env.BASE_URL.replace(/\/$/, '') + path);
