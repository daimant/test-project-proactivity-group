import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceList from "./ServiceList";
import {
  addToFavorites,
  requestNextServicesList,
  requestServices,
  sort,
} from "../../Redux/service-list-reducer";
import {
  getCountSort,
  getCurrentPage,
  getFavorites,
  getLastUpdateDate,
  getService,
  getSortDirect,
  getSortType,
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
        requestNextServicesList={this.props.requestNextServicesList}
        currentPage={this.props.currentPage}
        sort={this.props.sort}
        countSort={this.props.countSort}
        sortType={this.props.sortType}
        sortDirect={this.props.sortDirect}
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
  sortType: getSortType(state),
  sortDirect: getSortDirect(state),
});

export default connect(mapStateToProps, {
  requestServices,
  requestNextServicesList,
  addToFavorites,
  sort,
})(ServiceListContainer);
