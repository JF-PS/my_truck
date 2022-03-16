import { fetchApi } from "../utils/fetch-api";

export const adApi = {
  get: async (input) => {
    const { id } = input;
    return fetchApi(`ads/${id}`);
  },
  getMultiple: async (input) => {
    const { limit = 5, offset = 0, title = "" } = input;
    return fetchApi(`ads/${limit}/${offset}?title=${title}`);
  },
};
