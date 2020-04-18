import { createSelector } from "reselect";

const getServiceSelector = (state) => console.log(state);
export const getService = createSelector(
  getServiceSelector,
  (services) => services //.filter(() => true)
);
