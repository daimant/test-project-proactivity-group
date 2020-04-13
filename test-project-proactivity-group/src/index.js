import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import AppShopServices from "./AppShopServices";

ReactDOM.render(<AppShopServices />, document.getElementById("root"));

serviceWorker.unregister();
