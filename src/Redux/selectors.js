// import {createSelector} from "reselect";

export const getService = (state) => state.serviceListData.data;
export const getCurrentPage = (state) => state.serviceListData.current_page;
export const getFavorites = (state) => state.serviceListData.favorites;
export const getLastUpdateDate = (state) =>
  state.serviceListData.lastUpdateDate;
export const getTotalServices = (state) => state.serviceListData.total;
export const getCountSort = (state) => state.serviceListData.countSort;
// export const getFavorites = createSelector(getFavoritesSelector, el =>
//   el.filter(() => true)
// );
