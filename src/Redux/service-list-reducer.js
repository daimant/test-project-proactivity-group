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
          ...state.favorites,
        };
      } else if (state.data.length) {
        return {
          ...state,
          data: [...state.data, ...action.services.data],
          current_page: action.services.current_page,
        };
      } else return { ...state, ...action.services };

    case ADD_TO_FAVORITES:
      if (state.favorites.some((el) => el.id === action.id)) {
        return {
          ...state,
          favorites: [...state.favorites].filter((el) => el.id !== action.id),
        };
      } else
        return {
          ...state,
          favorites: [
            ...state.favorites,
            state.data[state.data.findIndex((el) => el.id === action.id)],
          ],
        };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites].filter((el) => el.id !== action.id),
      };

    default:
      return state;
  }
};

export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  id,
});
export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, id });
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
