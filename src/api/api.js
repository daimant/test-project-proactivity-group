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
  getSortServices: (type, countSort = 0) => {
    return instance
      .get(
        `instrumentsList?instrument_type_code=cms&page=1&sort_direction=${
          countSort % 2 ? "desc" : "asc"
        }&sort=${type}`
      )
      .then((response) => response.data);
  },
};

// &sort_direction=desc &sort=rate
