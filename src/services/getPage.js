import axios from "axios";

export const getPage = (url) => {
  const responseData = axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => error);

  return responseData;
};
