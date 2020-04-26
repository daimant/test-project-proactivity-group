import { servicesAPI } from "../api/api";

const SET_SERVICES = "SET_SERVICES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

let initialStore = {
  current_page: 1,
  data: [],
  favorites: [],
};

const serviceListReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return { ...action.services, favorites: [] };

    case ADD_TO_FAVORITES:
      return { ...state, favorites: [...state.favorites, action.el] };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites].filter((el) => el !== action.el),
      };

    default:
      return state;
  }
};

export const removeFromFavorites = (el) => ({
  type: REMOVE_FROM_FAVORITES,
  el,
});
export const addToFavorites = (el) => ({ type: ADD_TO_FAVORITES, el });
export const setServices = (services) => ({ type: SET_SERVICES, services });
export const requestServices = (page) => async (dispatch) => {
  // dispatch(toggleIsFetching(true));
  // dispatch(setCurrentPage(page));

  const data = await servicesAPI.getServices(page);
  // dispatch(toggleIsFetching(false));
  dispatch(setServices(data));
  // dispatch(setTotalUsersCount(data.totalCount));
};

export default serviceListReducer;
