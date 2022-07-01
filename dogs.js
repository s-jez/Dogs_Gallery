import TOKEN from "./config";

export const readDogs = async (url) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": TOKEN,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error("Fetch failed");
    }
  } catch (error) {
    console.error(error.message);
  }
};
