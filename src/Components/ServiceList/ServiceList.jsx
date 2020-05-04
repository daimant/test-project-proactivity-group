import React from "react";
import ServiceItem from "../common/ServiceItem/ServiceItem";
import classes from "./ServiceList.module.css";

const ServiceList = ({
  serviceData,
  addToFavorites,
  totalServices,
  lastUpdateDate,
  favorites,
  requestNextServicesList,
  currentPage,
  sort,
  countSort,
  sortType,
  sortDirect,
}) => {
  return (
    <div className={classes.serviceList}>
      <div className={classes.serviceListHeader}>
        <span className={`${classes.about} ${classes.itemsHeader}`}>
          Всего Инструментов: <b>{totalServices}</b> Обновлено:{" "}
          <b>{lastUpdateDate}</b>
        </span>
        <span className={classes.partners}>
          <span
            className={`${classes.itemsHeader} ${
              sortType === "partners_count" ? classes.activeButton : ""
            }`}
            onClick={() => sort("partners_count", countSort)}
          >
            Партнеры
            {sortType === "partners_count" && (countSort % 2 ? " ∨" : " ∧")}
          </span>
        </span>
        <span className={classes.projects}>
          <span
            className={`${classes.itemsHeader} ${
              sortType === "works_count" ? classes.activeButton : ""
            }`}
            onClick={() => sort("works_count", countSort)}
          >
            Проекты{sortType === "works_count" && (countSort % 2 ? " ∨" : " ∧")}
          </span>
        </span>
        <span className={classes.rate}>
          <span
            className={`${classes.itemsHeader} ${
              sortType === "rate" ? classes.activeButton : classes.rate
            }`}
            onClick={() => sort("rate", countSort)}
          >
            Оценка{sortType === "rate" && (countSort % 2 ? " ∨" : " ∧")}
          </span>
        </span>
        <span className={`${classes.changer} ${classes.itemsHeader}`}>
          В избранное
        </span>
      </div>
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
        onClick={() =>
          requestNextServicesList(currentPage + 1, sortType, sortDirect)
        }
      >
        Загрузить еще
      </button>
    </div>
  );
};

export default ServiceList;
