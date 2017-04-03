import React, {Component} from 'react';
import store from '../store';
import Artist from '../components/Artist';
import {connect} from 'react-redux'

import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
    player: state.player,
    selectedArtist: state.artists.selected,
    children: ownProps.children
  }
}

const mapDispatchToProps = function (dispatch){
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  };
}

const ArtistContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Artist);


export default ArtistContainer;
