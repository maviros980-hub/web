// Lista de PDFs de la página "Descargas".
//
// Para añadir uno:
//   1. Copia el PDF a public/descargas/<carpeta>/ (relaciones-ejercicios, examenes o trabajos).
//   2. Añade una línea a la lista de abajo.
//   3. Sube el cambio a "main": la web se publica sola.
//
// "archivo" es la ruta dentro de /public (empieza por /). El tamaño se calcula solo.

export const CATEGORIAS = [
  { id: 'relaciones', nombre: 'Relaciones de ejercicios', descripcion: 'Colecciones de ejercicios por tema, con soluciones cuando las hay.', tono: 'olivo' },
  { id: 'examenes', nombre: 'Exámenes', descripcion: 'Exámenes de cursos anteriores y modelos para practicar.', tono: 'azul' },
  { id: 'trabajos', nombre: 'Trabajos', descripcion: 'Proyectos, fichas y portfolios para el alumnado.', tono: 'ocre' },
] as const;

export const CURSOS = [
  '4º ESO Matemáticas B',
  '4º ESO Diversificación (ACT)',
  '2º Bach. Matemáticas CCSS II · PAU',
  'Otros',
] as const;

export type Categoria = (typeof CATEGORIAS)[number]['id'];
export type Curso = (typeof CURSOS)[number];

export interface Descarga {
  titulo: string;
  categoria: Categoria;
  curso: Curso;
  archivo: string;        // p. ej. '/descargas/examenes/pau-2025-junio.pdf'
  descripcion?: string;
  fecha: string;          // AAAA-MM-DD
}

export const DESCARGAS: Descarga[] = [
  {
    titulo: 'Proyecto 1 · ¿Cuánto mide nuestra pista? (portfolio)',
    categoria: 'trabajos',
    curso: '4º ESO Diversificación (ACT)',
    archivo: '/materiales/portfolio-cuanto-mide-nuestra-pista.pdf',
    descripcion: 'Medida directa e indirecta, error y método científico, en 5 sesiones.',
    fecha: '2026-10-02',
  },
  {
    titulo: 'Proyecto 2 · Ficha 1: ¿Cuántos nacemos, cuántos morimos y cuánto vivimos?',
    categoria: 'trabajos',
    curso: '4º ESO Diversificación (ACT)',
    archivo: '/materiales/ficha-natalidad-mortalidad-esperanza-vida.pdf',
    descripcion: 'Tasas de natalidad y mortalidad, saldo vegetativo y esperanza de vida en España.',
    fecha: '2026-11-02',
  },
  {
    titulo: 'Proyecto 2 · Ficha 2: Torreperogil en cifras',
    categoria: 'trabajos',
    curso: '4º ESO Diversificación (ACT)',
    archivo: '/materiales/ficha-torreperogil-en-cifras.pdf',
    descripcion: 'Trabajo de campo sobre natalidad, mortalidad y envejecimiento en nuestro pueblo.',
    fecha: '2026-11-17',
  },
];
