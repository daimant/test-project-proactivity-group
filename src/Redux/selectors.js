// import {createSelector} from "reselect";

export const getService = (state) => state.serviceListData.data;
export const getCurrentPage = (state) => state.serviceListData.current_page;
export const getFavorites = (state) => state.serviceListData.favorites;
// export const getFavorites = createSelector(getFavoritesSelector, el =>
//   el.filter(() => true)
// );
