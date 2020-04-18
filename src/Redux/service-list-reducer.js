let initialStore = [];

const serviceListReducer = (state = initialStore, action) => {
  if (action) console.log(action);
  return state;
};

export default serviceListReducer;
