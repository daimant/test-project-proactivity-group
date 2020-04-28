import React from "react";
import classes from "./ServiceItem.module.css";

const ServiceItem = ({
  number,
  el,
  removeFromFavorites,
  addToFavorites,
  favorites,
}) => {
  return (
    <div
      className={
        el.isSponsor
          ? `${classes.serviceItem} ${classes.isSponsor}`
          : classes.serviceItem
      }
    >
      <span className={classes.number}>
        {!removeFromFavorites && number + 1}
      </span>
      <span className={classes.logotype}>
        {el.image && <img src={el.image} alt="" />}
        {!el.image && el.firstLettersOfName}
      </span>
      <span className={classes.name}>{el.title}</span>
      <span className={classes.partners}>{el.partnersCount}</span>
      <span className={classes.projects}>{el.worksCount}</span>
      <span className={classes.rate}>{!!el.rate && el.rate}</span>
      <span className={classes.changer}>
        {addToFavorites && (
          <input
            className={classes.checkbox}
            type="checkbox"
            onChange={() => addToFavorites(el.id)}
            checked={favorites.some((element) => element.id === el.id)}
          />
        )}
        {removeFromFavorites && (
          <button onClick={() => removeFromFavorites(el.id)}>Удалить</button>
        )}
      </span>
    </div>
  );
};

export default ServiceItem;
