import axios from "axios";

export const searchStarship = (searchText) => {
  const responseData = axios
    .get(`https://swapi.dev/api/starships/?search=${searchText}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return responseData;
};
