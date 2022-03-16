import Axios from "axios";

const API = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const fetchApi = (query) => {
  return new Promise((resolve, reject) => {
    API.get(`/${query}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        console.debug(err);
        reject(err);
      });
  });
};
