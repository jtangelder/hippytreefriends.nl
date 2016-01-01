import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import YouTubePlayer from './YouTubePlayer'
import Emoji from 'react-emoji';

class TrackItem extends Component {
  handleVolumeChange(ev) {
    this.props.setVolume(
        this.props.track.id,
        parseInt(ev.target.value)
    );
  }

  render() {
    const { track } = this.props;
    return (
      <li>
        <YouTubePlayer
            videoId={track.videoId}
            volume={track.volume}
        />
        <input
            type="range" min="0" max="100" step="1" orient="vertical"
            defaultValue={track.volume}
            onChange={this.handleVolumeChange.bind(this)}
        />
        <span className="emoji">{Emoji.emojify(`:${track.emoji}:`)}</span>
      </li>
    );
  }
}

TrackItem.propTypes = {
  track: PropTypes.object.isRequired,
  editTrack: PropTypes.func.isRequired,
  deleteTrack: PropTypes.func.isRequired,
  setVolume: PropTypes.func.isRequired
};

export default TrackItem;
