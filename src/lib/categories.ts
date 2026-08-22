export interface CategoryDef {
  code: string;
  label: string;
  /** one plain line under the category page title */
  intro?: string;
  /** accent slot from global.css (--accent-2 … --accent-6; 1 is the brand's) */
  accent?: number;
}

export const CATEGORIES: Record<string, CategoryDef> = {
  german: { code: 'german', label: 'German', accent: 2 },
  // placeholders to feel out the shelf — rename or delete freely
  theory: { code: 'theory', label: 'Theory', accent: 3 },
  computing: { code: 'computing', label: 'Computing', accent: 4 },
  math: { code: 'math', label: 'Math', accent: 5 },
  books: { code: 'books', label: 'Books', accent: 6 },
};

// Unregistered categories still work — they render as their raw code.
export function categoryDef(code: string): CategoryDef {
  return CATEGORIES[code] ?? { code, label: code };
}

/** Registered categories (in registry order) plus any unregistered
    post folders (sorted after). Registered ones exist even with no posts. */
export function allCategories(postIds: string[]): CategoryDef[] {
  const present = new Set(postIds.map(categoryOf));
  const extras = [...present].filter((c) => !CATEGORIES[c]).sort();
  return [...Object.keys(CATEGORIES), ...extras].map(categoryDef);
}

// Route names a category folder must not shadow.
const RESERVED = new Set(['about', 'tags', 'impressum', 'rss.xml']);

/** "german/der-richter" -> "german" */
export function categoryOf(id: string): string {
  const i = id.indexOf('/');
  if (i < 1) throw new Error(`Post "${id}" must live in a category folder`);
  const code = id.slice(0, i);
  if (RESERVED.has(code)) throw new Error(`Category folder "${code}" shadows a reserved route`);
  return code;
}

/** "german/der-richter" -> "der-richter" */
export function slugOf(id: string): string {
  return id.slice(id.indexOf('/') + 1);
}
