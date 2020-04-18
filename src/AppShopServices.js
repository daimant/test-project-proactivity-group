import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import AppContainer from "./AppContainer";

const AppShopServices = () => {
  return (
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <AppContainer />
        </Provider>
      </Router>
    </React.StrictMode>
  );
};
export default AppShopServices;
