import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Tracks from '../components/Tracks';
import YouTubePlayer from '../components/YouTubePlayer';
import * as TrackActions from '../actions/tracks';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hippy Tree Friends Collective</h1>
        <p><a href="https://www.facebook.com/hippytreefriendscollective">
          Visit our Facebook page for updates about our band.</a></p>

        <YouTubePlayer videoId="DOAl7Sr7qmM" />
        <Tracks tracks={this.props.tracks} actions={this.props.actions} />

        <p className="social">
          <a href="https://www.youtube.com/results?search_query=%22hippy+tree+friends%22">YouTube</a>
          <a href="https://www.facebook.com/hippytreefriendscollective">Facebook</a>
          <a href="http://brighterrecords.bandcamp.com/album/wigdtpbr">Bandcamp</a>
          <a href="https://play.spotify.com/artist/1lOYSaQsUT1Iyck5XjjlEh">Spotify</a>
        </p>
      </div>
    );
  }
}

App.propTypes = {
  tracks: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tracks: state.tracks
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TrackActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
