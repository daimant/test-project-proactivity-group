import { servicesAPI } from "../api/api";

const SET_SERVICES = "SET_SERVICES";

let initialStore = {
  serviceData: [],
};

const serviceListReducer = (state = initialStore, action) => {
  switch (action.type) {
    case SET_SERVICES:
      return { ...state, serviceData: action.services };
    default:
      return state;
  }
};

export const setServices = (services) => ({ type: SET_SERVICES, services });
export const requestServices = (page) => async (dispatch) => {
  // dispatch(toggleIsFetching(true));
  // dispatch(setCurrentPage(page));

  const data = await servicesAPI.getServices(page);
  // dispatch(toggleIsFetching(false));
  dispatch(setServices(data.data));
  // dispatch(setTotalUsersCount(data.totalCount));
};

export default serviceListReducer;
