import React from "react";
// import classes from "../Favorite.module.css";

const Favorite = ({ title, url, removeFromFavorites, el }) => {
  return (
    <div>
      Name: {title}
      Url: {url}
      <input
        type="checkbox"
        onClick={() => removeFromFavorites(el)}
        defaultChecked
      />
    </div>
  );
};

export default Favorite;
