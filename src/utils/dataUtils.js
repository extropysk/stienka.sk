export async function getAnnouncements() {
  const response = await fetch(`data/announcements.json`);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  } else {
    console.error(response);
    return [];
  }
}
