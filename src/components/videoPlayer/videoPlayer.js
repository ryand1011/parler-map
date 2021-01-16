// uses lots of examples from: https://video-react.js.org/components/player/
import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import './videoPlayer.css'
import placeholder from '../../assets/placeholder.png';

class VideoPlayer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            source: this.props.mediaURL
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.load = this.load.bind(this);
        this.changeCurrentTime = this.changeCurrentTime.bind(this);
        this.seek = this.seek.bind(this);
        this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
        this.changeVolume = this.changeVolume.bind(this);
        this.setMuted = this.setMuted.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        this.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    setMuted(muted) {
        return () => {
            this.player.muted = muted;
        };
    }

    handleStateChange(state) {
        // copy player state to this component's state
        this.setState({
            player: state
        });
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    load() {
        this.player.load();
    }

    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.player.getState();
            this.player.seek(player.currentTime + seconds);
        };
    }

    seek(seconds) {
        return () => {
            this.player.seek(seconds);
        };
    }

    changePlaybackRateRate(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.playbackRate = player.playbackRate + steps;
        };
    }

    changeVolume(steps) {
        return () => {
            const { player } = this.player.getState();
            this.player.volume = player.volume + steps;
        };
    }

    render() {
        return(
            <div className="videoPlayer">
                <Player
                    ref={player => {
                        this.player = player;
                    }}
                    playsInline
                    muted={true}
                    poster={placeholder}
                    src={this.state.source}
                >
                    <ControlBar autoHide={false} />
                </Player>
            </div>
        );
    };
};

export default VideoPlayer;