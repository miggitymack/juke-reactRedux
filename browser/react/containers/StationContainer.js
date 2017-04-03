import React from 'react';
import {connect} from 'react-redux'
import Station from '../components/Station';
import store from '../store';
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'

const convertStation = function (songsArray){
  let stations = {};
  for (let i = 0; i < songsArray.length; i++) {
    if (stations[songsArray[i].genre]) {
      stations[songsArray[i].genre].push(songsArray[i])
    } else {
      stations[songsArray[i].genre] = [songsArray[i]];
    }
  }
  return stations;
}

const mapStateToProps = function (state, ownProps) {
  console.log(ownProps);
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs.filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  }
}

const mapDispatchToProps = function (dispatch, ownProps){
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list))
    }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
