// Dates are set in German on purpose: long form on posts ("5. Juli 2026"),
// DIN-flavored numeric form in the index ("05.07.2026").
// timeZone UTC: frontmatter dates parse as UTC midnight, so local-time
// formatting would shift them a day backwards west of Greenwich.
const long = new Intl.DateTimeFormat('de-DE', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

const short = new Intl.DateTimeFormat('de-DE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  timeZone: 'UTC',
});

export const longDate = (d: Date) => long.format(d);
export const shortDate = (d: Date) => short.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
