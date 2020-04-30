import React from "react";
import ServiceItem from "../common/ServiceItem/ServiceItem";
import classes from "./Favorites.module.css";

const Favorites = ({ favorites, removeFromFavorites }) => {
  if (!favorites.length)
    return <h2 className={classes.nothing}>Избранных инструментов нет</h2>;

  return (
    <div className={classes.favorites}>
      <div className={classes.favoritesHeader}>
        <span className={classes.logotype}> </span>
        <span className={classes.name}>Название</span>
        <span className={classes.partners}>Партнеры</span>
        <span className={classes.projects}>Проекты</span>
        <span className={classes.rate}>Оценка</span>
        <span className={classes.changer}>Удалить</span>
      </div>
      <div>
        {favorites.map((el, i) => (
          <ServiceItem
            number={i}
            key={i}
            el={el}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
