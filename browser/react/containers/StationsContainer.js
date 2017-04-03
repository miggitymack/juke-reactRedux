import React from 'react';
import {connect} from 'react-redux'
import Stations from '../components/Stations';
import store from '../store'

const convertSongsToStations = function (songsArray){
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

const mapStateToProps = function (state){
  return {
    stations: convertSongsToStations(state.songs)
  }
}

const mapDispatchToProps = function (dispatch){
  return {};
}

const StationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stations);

export default StationsContainer;
