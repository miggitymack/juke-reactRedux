import React from 'react';
import {connect} from 'react-redux'
import Stations from '../components/Stations';
import store from '../store'

const mapStateToProps = function (state){
  return {};
}

const mapDispatchToProps = function (dispatch){
  return {};
}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
