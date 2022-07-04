const tokenAPI = "a30ac911-0902-4238-bbc6-77bfdb20e0a7";

export const readDogs = async (url) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": tokenAPI,
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Fetch failed");
    }
  } catch (error) {
    return error.message;
  }
};
