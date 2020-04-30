import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = ({ favorites }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes.logotype}>
        <div className={classes.firstRow}>CMS</div>
        <div className={classes.secondRow}>
          <span>magazine</span>
          <span>ВСЕ О DIGITAL</span>
        </div>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/instruments" activeClassName={classes.activeLink}>
          <span>Инструменты</span>
        </NavLink>
      </div>
      <div className={`${classes.item} ${classes.active}`}>
        <NavLink to="/favorites" activeClassName={classes.activeLink}>
          <span>Избранное</span>
          &nbsp;
          {favorites.length ? (
            <span className={classes.countPages}>
              &nbsp;{favorites.length}&nbsp;
            </span>
          ) : (
            ""
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
