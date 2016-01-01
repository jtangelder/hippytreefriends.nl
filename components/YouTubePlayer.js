import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import YouTubePlayerAPI from 'youtube-player';

class YouTubePlayer extends Component {
  componentDidMount() {
    const player = YouTubePlayerAPI(findDOMNode(this));
    player.loadVideoById(this.props.videoId);
    player.setVolume(this.props.volume);

    if (this.props.volume > 0) {
      player.playVideo();
    }

    this.player = player;
  }

  componentDidUpdate(prevProps) {
    if (this.props.volume !== prevProps.volume) {
      this.player.setVolume(this.props.volume);
    }

    if (this.props.videoId !== prevProps.videoId) {
      this.player.loadVideoById(this.props.videoId);
    }

    (this.props.volume === 0) ?
        this.player.stopVideo() :
        this.player.playVideo();
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
  volume: 100
};

export default YouTubePlayer;
