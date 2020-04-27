import React from "react";
import ServiceItem from "../common/ServiceItem/ServiceItem";
// import classes from "./ServiceList.module.css";

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
    <div>
      <div>
        Всего Инструментов: {totalServices}
        Обновлено: {lastUpdateDate}
        <button onClick={() => sort("partners_count", countSort)}>
          Партнеры
        </button>
        <button onClick={() => sort("works_count", countSort)}>Проекты</button>
        <button onClick={() => sort("rate", countSort)}>Оценка</button>В
        избранное
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
      <button onClick={() => requestServices(currentPage + 1)}>
        Загрузить еще
      </button>
    </div>
  );
};

export default ServiceList;
