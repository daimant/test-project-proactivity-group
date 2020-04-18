import * as axios from "axios";

const instance = axios.create({
  baseURL:
    "https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&",
});
export const servicesAPI = {
  getServices: (currentPage = 1) => {
    return instance
      .get(`page=${currentPage}`)
      .then((response) => response.data);
  },
};
