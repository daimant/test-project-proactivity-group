import React from "react";
import classes from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.paginator}>
      {pages
        .filter((p) => p > currentPage - 5 && p < currentPage + 5)
        .map((p, i) => (
          <span
            key={i}
            className={currentPage === p ? classes.selectedPage : undefined}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            <div className={classes.page}>{p}</div>
          </span>
        ))}
    </div>
  );
};
export default Paginator;
