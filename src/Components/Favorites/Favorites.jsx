import React from "react";
import ServiceItem from "../common/ServiceItem/ServiceItem";
// import classes from "./Favorites.module.css";

const Favorites = ({ favorites, removeFromFavorites }) => {
  // debugger;
  return (
    <div>
      <div>Название Партнеры Проекты Оценка Удалить</div>
      <div>
        {favorites.length ? (
          favorites.map((el, i) => (
            <ServiceItem
              number={i}
              key={i}
              el={el}
              removeFromFavorites={removeFromFavorites}
            />
          ))
        ) : (
          <h2>Избранных инструментов нет</h2>
        )}
      </div>
    </div>
  );
};

export default Favorites;
