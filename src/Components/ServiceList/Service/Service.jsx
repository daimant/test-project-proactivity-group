import React from "react";
// import classes from "../ServiceList.module.css";

const Service = ({ title, url, addToFavorites, el }) => {
  return (
    <div>
      Name: {title}
      Url: {url}
      <input type="checkbox" onClick={() => addToFavorites(el)} />
    </div>
  );
};

export default Service;
