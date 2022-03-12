import Axios from "axios";

const API: any = Axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
});

export const fetchApi = (query: any, methode: string) => {
  return new Promise((resolve, reject) => {
    API[methode](`${query}api_key=${process.env.REACT_APP_API_KEY}`)
      .then((response: any) => {
        resolve(response);
      })
      .catch((err: any) => {
        console.debug(err);
        reject(err);
      });
  });
};
