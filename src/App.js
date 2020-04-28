import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ServiceListContainer from "./Components/ServiceList/ServiceListContainer";
import FavoritesContainer from "./Components/Favorites/FavoritesContainer";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <Router basename="/test-project-proactivity-group">
      <div className="app-wrapper">
        <NavBar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Redirect to={"/instruments"} />}
            />
            <Route
              path="/instruments"
              render={() => <ServiceListContainer />}
            />
            <Route path="/favorites" render={() => <FavoritesContainer />} />
            <Route path="*" render={() => <h1>Страница не найдена</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
