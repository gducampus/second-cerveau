const format = new Intl.DateTimeFormat("fr-FR", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

export function formaterDate(iso: string): string {
  return format.format(new Date(iso));
}
