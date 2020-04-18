import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ServiceList from "./Components/ServiceList/ServiceList";
import Favorites from "./Components/Favorites/Favorites";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <NavBar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={"/service-list"} />}
            />
            <Route path="/service-list" render={() => <ServiceList />} />
            <Route path="/favorites" render={() => <Favorites />} />
            <Route path="*" render={() => <h1>Страница не найдена</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
