import React, { Component } from "react";
import { connect } from "react-redux";
import Favorites from "./Favorites";
import { removeFromFavorites } from "../../Redux/service-list-reducer";
import { getFavorites, getService } from "../../Redux/selectors";

class FavoritesContainer extends Component {
  componentDidMount() {
    // this.props.requestFavorites();
  }

  // onPageChanged = (pageNumber) => {
  //   this.props.requestServices(pageNumber);
  // };

  render() {
    return (
      <Favorites
        favorites={this.props.favorites}
        removeFromFavorites={this.props.removeFromFavorites}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
  serviceData: getService(state),
});

export default connect(mapStateToProps, { removeFromFavorites })(
  FavoritesContainer
);
