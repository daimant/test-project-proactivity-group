import React from "react";
import Service from "./Service/Service";
// import classes from "./ServiceList.module.css";

const ServiceList = ({ serviceData, addToFavorites }) => {
  // debugger;
  return (
    <div>
      <div>
        {serviceData.map((el, i) => (
          <Service
            el={el}
            key={i}
            id={el.id}
            title={el.title}
            url={el.url}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
