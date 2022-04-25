export async function getAnnouncements() {
  const response = await fetch("/data/announcements.json");
  return await response.json();
}
