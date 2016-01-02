import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import YouTubePlayerAPI from 'youtube-player';

const STATE_ENDED = 0;

class YouTubePlayer extends Component {
  componentDidMount() {
    const player = YouTubePlayerAPI(findDOMNode(this));
    player.loadVideoById(this.props.videoId);
    player.setVolume(this.props.volume);

    if (this.props.volume > 0) {
      player.playVideo();
    }

    // loop the video
    player.on('stateChange', function (event) {
      if (event.data === STATE_ENDED) {
        player.seekTo(0);
      }
    });

    this.player = player;
  }

  componentDidUpdate(prevProps) {
    if (this.props.volume !== prevProps.volume) {
      this.player.setVolume(this.props.volume);
    }

    if (this.props.videoId !== prevProps.videoId) {
      this.player.loadVideoById(this.props.videoId);
    }

    if (prevProps.volume !== this.props.volume) {
      (this.props.volume === 0) ?
          this.player.pauseVideo() :
          this.player.playVideo();
    }
  }

  render() {
    return (
      <div className="youtube-player"></div>
    );
  }
}

YouTubePlayer.propTypes = {
  videoId: PropTypes.string.isRequired,
  volume: PropTypes.number
};

YouTubePlayer.defaultProps = {
  volume: 75
};

export default YouTubePlayer;
