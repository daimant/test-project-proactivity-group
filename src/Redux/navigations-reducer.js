let initialStore = [
  { link: "/service-list", text: "Список сервисов" },
  { link: "/favorites", text: "Избранное" },
];

const navigationsReducer = (state = initialStore, action) => {
  // if (action) console.log(action);
  return state;
};

export default navigationsReducer;
