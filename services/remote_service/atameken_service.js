export const AtamekenService = {
  async getAnimeByName(name) {
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${name}&limit=10`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.data && data.data.length > 0) {
        const result = data.data.map((element) => element.title);
        return result;
      } else {
        console.log("No matching anime found.");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data: " + error);
      return [];
    }
  },
};
