import axios from "axios";

export const getStarshipDetail = (id) => {
  const responseData = axios
    .get(`https://swapi.dev/api/starships/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return responseData;
};
