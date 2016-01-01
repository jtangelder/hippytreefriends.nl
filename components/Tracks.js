import React, { Component, PropTypes } from 'react';
import TrackItem from './TrackItem';

class Tracks extends Component {
  render() {
    return (
      <ul className="track-list">
        {this.props.tracks.map(track =>
          <TrackItem key={track.id} track={track} {...this.props.actions} />
        )}
      </ul>
    );
  }
}

Tracks.propTypes = {
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default Tracks;
