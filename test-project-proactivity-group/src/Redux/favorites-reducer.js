let initialStore = [];

const favoritesReducer = (state = initialStore, action) => {
  if (action) console.log(action);
  return state;
};

export default favoritesReducer;
