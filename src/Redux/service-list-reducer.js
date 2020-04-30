import { servicesAPI } from "../api/api";

const SET_SERVICES = "SET_SERVICES";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
const SET_NEXT_PAGE = "SET_NEXT_PAGE";

let initialStore = {
  current_page: 1,
  data: [],
  favorites: [],
  countSort: 1,
  sortType: "partners_count",
  sortDirect: "desc",
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
          sortType: action.sortType,
          sortDirect: action.countSort % 2 ? "asc" : "desc",
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

    case SET_NEXT_PAGE:
      return {
        ...state,
        data: [...state.data, ...action.data.data],
        current_page: action.data.current_page,
      };

    default:
      return state;
  }
};

export const setNextPage = (data) => ({ type: SET_NEXT_PAGE, data });
export const removeFromFavorites = (id) => ({
  type: REMOVE_FROM_FAVORITES,
  id,
});
export const addToFavorites = (id) => ({ type: ADD_TO_FAVORITES, id });
export const setServices = (
  services,
  sort = false,
  sortType = "partners_count",
  countSort = "desc"
) => ({
  type: SET_SERVICES,
  services,
  sort,
  sortType,
  countSort,
});
export const requestServices = (page) => async (dispatch) => {
  const response = await servicesAPI.getServices(page);
  dispatch(setServices(response));
};
export const requestNextServicesList = (
  currentPage,
  sortDirection,
  sortType
) => async (dispatch) => {
  const response = await servicesAPI.getNextPage(
    currentPage,
    sortType,
    sortDirection
  );
  dispatch(setNextPage(response));
};
export const sort = (sortType, countSort) => async (dispatch) => {
  const response = await servicesAPI.getSortServices(sortType, countSort);
  dispatch(setServices(response, true, sortType, countSort));
};

export default serviceListReducer;
