export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat("de-de", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
