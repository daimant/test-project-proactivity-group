import React, { Component } from "react";
import { connect } from "react-redux";
import ServiceList from "./ServiceList";
import { requestServices } from "../../Redux/service-list-reducer";
import { getService } from "../../Redux/service-list-selectors";

class ServiceListContainer extends Component {
  componentDidMount() {
    const { currentPage } = this.props;
    this.props.requestServices(currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.requestServices(pageNumber);
  };
  render() {
    return <ServiceList serviceData={this.props.serviceData} />;
  }
}

const mapStateToProps = (state) => ({ serviceData: getService(state) });

export default connect(mapStateToProps, { requestServices })(
  ServiceListContainer
);
