import * as axios from "axios";

const instance = axios.create({
  baseURL: "https://api.cmsmagazine.ru/v1/",
});
export const servicesAPI = {
  getServices: (currentPage) => {
    return instance
      .get(`instrumentsList?instrument_type_code=cms&page=${currentPage}`)
      .then((response) => response.data);
  },
};
