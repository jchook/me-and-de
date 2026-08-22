// timeZone UTC: frontmatter dates parse as UTC midnight, so local-time
// formatting would shift them a day backwards west of Greenwich.
const long = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const short = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const longDate = (d: Date) => long.format(d);
export const shortDate = (d: Date) => short.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
