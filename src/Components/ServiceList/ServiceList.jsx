import React from "react";
import ServiceItem from "../common/ServiceItem/ServiceItem";
import classes from "./ServiceList.module.css";

const ServiceList = ({
  serviceData,
  addToFavorites,
  totalServices,
  lastUpdateDate,
  favorites,
  requestServices,
  currentPage,
  sort,
  countSort,
}) => {
  return (
    <div className={classes.serviceList}>
      <div className={classes.serviceListHeader}>
        <span className={classes.about}>
          Всего Инструментов: <b>{totalServices}</b> Обновлено:{" "}
          <b>{lastUpdateDate}</b>
        </span>
        <span className={classes.partners}>
          <button onClick={() => sort("partners_count", countSort)}>
            Партнеры
          </button>
        </span>
        <span className={classes.projects}>
          <button onClick={() => sort("works_count", countSort)}>
            Проекты
          </button>
        </span>
        <span className={classes.rate}>
          <button onClick={() => sort("rate", countSort)}>Оценка</button>
        </span>
        <span className={classes.changer}>В избранное</span>
      </div>
      <hr />
      <div>
        {serviceData.map((el, i) => (
          <ServiceItem
            favorites={favorites}
            number={i}
            key={i}
            el={el}
            addToFavorites={addToFavorites}
          />
        ))}
      </div>
      <button
        className={classes.downloadButton}
        onClick={() => requestServices(currentPage + 1)}
      >
        Загрузить еще
      </button>
    </div>
  );
};

export default ServiceList;
