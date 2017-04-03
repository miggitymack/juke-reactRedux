import React, {Component} from 'react';
import store from '../store';
import Albums from '../components/Albums';
import {connect} from 'react-redux';

const mapStateToProps = function (state, ownProps) {
  return {
    albums: state.albums.list
  }
}

const mapDispatchToProps = function (dispatch, ownProps){
  return {

  };
}

const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);

export default AlbumsContainer;
