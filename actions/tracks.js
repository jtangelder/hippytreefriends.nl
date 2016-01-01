import * as types from '../constants/ActionTypes'

export function addTrack(videoId) {
  return { type: types.ADD_TRACK, videoId }
}

export function deleteTrack(id) {
  return { type: types.DELETE_TRACK, id }
}

export function editTrack(id, videoId) {
  return { type: types.EDIT_TRACK, id, videoId }
}

export function setVolume(id, volume) {
  return { type: types.SET_VOLUME, id, volume }
}