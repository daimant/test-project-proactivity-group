import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = () => ({});
const AppContainer = compose(withRouter, connect(mapStateToProps, {}))(App);

export default AppContainer;
