import { ADD_TRACK, DELETE_TRACK, EDIT_TRACK, SET_VOLUME } from '../constants/ActionTypes'
import initialTracks from '../fixtures/initialTracks';
import uniqId from '../helpers/uniqId';

const initialState = initialTracks;

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ADD_TRACK:
      return [
        {
          id: uniqId(),
          videoId: action.videoId,
          emoji: action.emoji,
          volume: .5
        },
        ...state
      ];

    case DELETE_TRACK:
      return state.filter(track =>
        track.id !== action.id
      );

    case EDIT_TRACK:
      return state.map(track =>
        track.id === action.id ?
          Object.assign({}, track, { videoId: action.videoId, emoji: action.emoji }) :
          track
      );

    case SET_VOLUME:
      return state.map(track =>
        track.id === action.id ?
          Object.assign({}, track, { volume: action.volume }) :
          track
      );

    default:
      return state
  }
}
