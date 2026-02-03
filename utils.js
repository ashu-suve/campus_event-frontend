export function getEventStatus(date) {
  const today = new Date().toISOString().split("T")[0];
  if (date > today) return "Upcoming";
  if (date === today) return "Ongoing";
  return "Completed";
}
