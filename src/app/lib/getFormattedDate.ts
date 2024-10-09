export default function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    console.error("Invalid date value:", dateString);
    return "Ungültiges Datum";
  }
  return new Intl.DateTimeFormat("de-de", { dateStyle: "long" }).format(
    new Date(dateString)
  );
}
