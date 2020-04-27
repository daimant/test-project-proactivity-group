import { servicesAPI } from "../api/api";

const SET_SERVICES = "SET_SERVICES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

let initialStore = {
  current_page: 1,
  data: [],
  favorites: [],
  countSort: 0,
};

const serviceListReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_SERVICES:
      if (action.sort) {
        return {
          ...state,
          data: [...action.services.data],
          current_page: action.services.current_page,
          countSort: state.countSort + 1,
        };
      } else if (state.data.length) {
        return {
          ...state,
          data: [...state.data, ...action.services.data],
          current_page: action.services.current_page,
        };
      } else return { ...state, ...action.services };

    case ADD_TO_FAVORITES:
      if (state.favorites.includes(action.el)) {
        return {
          ...state,
          favorites: [...state.favorites].filter((el) => el !== action.el),
        };
      } else return { ...state, favorites: [...state.favorites, action.el] };

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
export const setServices = (services, sort = false) => ({
  type: SET_SERVICES,
  services,
  sort,
});
export const requestServices = (page) => async (dispatch) => {
  const response = await servicesAPI.getServices(page);
  dispatch(setServices(response));
};
export const sort = (type, countSort) => async (dispatch) => {
  const response = await servicesAPI.getSortServices(type, countSort);
  dispatch(setServices(response, true));
};

export default serviceListReducer;
