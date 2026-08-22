// Tag registry. A post opts in via `tags: [wotd]` in its frontmatter.
// A tag with a `note` gets that note rendered automatically on every
// post carrying it, before (`header`) or after (`footer`) the prose.

export interface TagNote {
  placement: 'header' | 'footer';
  html: string;
}

export interface TagDef {
  code: string;
  label: string;
  /** compact form for index-list chips; defaults to the code */
  short?: string;
  note?: TagNote;
}

export const TAGS: Record<string, TagDef> = {
  wotd: {
    code: 'wotd',
    label: 'Word of the Day',
    short: 'wotd',
  },
  fwotd: {
    code: 'fwotd',
    label: 'Funny Word of the Day',
    short: 'fwotd',
    note: {
      placement: 'footer',
      html: 'When you read my "funny word of the day", it is best to do so in an exaggerated german accent 🇩🇪.',
    },
  },
};

// Unregistered tags still work — they just render as their raw code.
export function tagDef(code: string): TagDef {
  return TAGS[code] ?? { code, label: code, short: code };
}
