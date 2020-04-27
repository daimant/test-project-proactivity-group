import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceList from "./ServiceList";
import {
  addToFavorites,
  requestServices,
  sort,
} from "../../Redux/service-list-reducer";
import {
  getCountSort,
  getCurrentPage,
  getFavorites,
  getLastUpdateDate,
  getService,
  getTotalServices,
} from "../../Redux/selectors";

class ServiceListContainer extends Component {
  componentDidMount() {
    if (!this.props.serviceData.length) {
      const { currentPage } = this.props;
      this.props.requestServices(currentPage);
    }
  }
  // onPageChanged = (pageNumber) => {
  //   this.props.requestServices(pageNumber);
  // };
  render() {
    return (
      <ServiceList
        serviceData={this.props.serviceData}
        addToFavorites={this.props.addToFavorites}
        lastUpdateDate={this.props.lastUpdateDate}
        totalServices={this.props.totalServices}
        favorites={this.props.favorites}
        requestServices={this.props.requestServices}
        currentPage={this.props.currentPage}
        sort={this.props.sort}
        countSort={this.props.countSort}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  serviceData: getService(state),
  currentPage: getCurrentPage(state),
  lastUpdateDate: getLastUpdateDate(state),
  totalServices: getTotalServices(state),
  favorites: getFavorites(state),
  countSort: getCountSort(state),
});

export default connect(mapStateToProps, {
  requestServices,
  addToFavorites,
  sort,
})(ServiceListContainer);
