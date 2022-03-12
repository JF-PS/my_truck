import { fetchApi } from "../utils/fetch-api";

export const adApi = {
  getById: async (id: any) => {
    return fetchApi(`movie/${id}?`, "get");
  },
  searchMovie: async (value: any) => {
    return fetchApi(`search/movie?query=${value}&`, "get");
  },
  popularMovie: async () => {
    return fetchApi("movie/popular?", "get");
  },
};
