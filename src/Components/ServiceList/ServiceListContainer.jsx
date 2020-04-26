import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceList from "./ServiceList";
import {
  addToFavorites,
  requestServices,
} from "../../Redux/service-list-reducer";
import { getCurrentPage, getService } from "../../Redux/selectors";

class ServiceListContainer extends Component {
  componentDidMount() {
    const { currentPage } = this.props;
    this.props.requestServices(currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.requestServices(pageNumber);
  };
  render() {
    return (
      <ServiceList
        serviceData={this.props.serviceData}
        addToFavorites={this.props.addToFavorites}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  serviceData: getService(state),
  currentPage: getCurrentPage(state),
});

export default connect(mapStateToProps, { requestServices, addToFavorites })(
  ServiceListContainer
);
