import React from 'react';
import {connect} from 'react-redux'
import Station from '../components/Station';
import store from '../store'



// const convertSongsToStations = function (songsArray){
//   let stations = {};
//   for (let i = 0; i < songsArray.length; i++) {
//     if (stations[songsArray[i].genre]) {
//       stations[songsArray[i].genre].push(songsArray[i])
//     } else {
//       stations[songsArray[i].genre] = [songsArray[i]];
//     }
//   }
//   return stations;
// }

const mapStateToProps = function (state){
  return {}
}

const mapDispatchToProps = function (dispatch){
  return {};
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
