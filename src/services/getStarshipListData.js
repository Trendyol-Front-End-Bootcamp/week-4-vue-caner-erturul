import axios from "axios";

export const getStarshipListData = async () => {
  const responseData = axios
    .get("https://swapi.dev/api/starships/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return responseData;
};
