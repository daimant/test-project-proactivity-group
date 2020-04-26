import React from "react";
import Favorite from "./Favorite/Favorite";
// import classes from "./Favorites.module.css";

const Favorites = ({ favorites, removeFromFavorites }) => {
  // debugger;
  return (
    <div>
      <div>
        {favorites.map((el, i) => (
          <Favorite
            key={i}
            id={el.id}
            title={el.title}
            url={el.url}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
