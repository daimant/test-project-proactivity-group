import React, { Component } from "react";
import { connect } from "react-redux";
import { getFavorites } from "../../Redux/selectors";
import NavBar from "./NavBar";

class NavBarContainer extends Component {
  render() {
    return <NavBar favorites={this.props.favorites} />;
  }
}

const mapStateToProps = (state) => ({ favorites: getFavorites(state) });

export default connect(mapStateToProps, {})(NavBarContainer);
