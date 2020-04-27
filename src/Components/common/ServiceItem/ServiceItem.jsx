import React from "react";
// import classes from "../ServiceList.module.css";

const ServiceItem = ({
  number,
  el,
  removeFromFavorites,
  addToFavorites,
  favorites,
}) => {
  return (
    <div>
      {!removeFromFavorites && number + 1}
      &nbsp;
      <img src={el.image} width={el.image ? "35" : "0"} alt="" />
      {!el.image && el.firstLettersOfName}
      &nbsp;
      {el.title}
      &nbsp;
      {el.partnersCount}
      &nbsp;
      {el.worksCount}
      &nbsp;
      {el.rate}
      &nbsp;
      {addToFavorites && (
        <input
          type="checkbox"
          onChange={() => addToFavorites(el)}
          checked={favorites.includes(el)}
        />
      )}
      {removeFromFavorites && (
        <button onClick={() => removeFromFavorites(el)}>Удалить</button>
      )}
    </div>
  );
};

export default ServiceItem;
