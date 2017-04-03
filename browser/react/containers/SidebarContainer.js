import React from 'react';
import store from '../store';
import Sidebar from '../components/Sidebar';
import {connect} from 'react-redux';

const mapStateToProps = function (state, ownProps) {
  console.log('state in SidebarContainer', state);
  return {
    playlists: state.playlists.list
  }
}

const mapDispatchToProps = function (dispatch, ownProps){
  return {

  };
}

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);

export default SidebarContainer;
