import config from "../config.json";

export async function getAnnouncements() {
  const filters = [{ field: "type", value: 100 }];
  const response = await fetch(
    `${config.url}/api/pubstore/posts?filters=${JSON.stringify(filters)}`,
    {
      headers: {
        "x-api-key": config.key,
      },
    }
  );

  if (response.status === 200) {
    const data = await response.json();
    return data.data;
  } else {
    console.error(response);
    return [];
  }
}
