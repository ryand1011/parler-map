import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import * as postData from "../../data/videoPoints.json";
import VideoPlayer from '../videoPlayer/videoPlayer';
import './ParlerMap.css'

class ParlerMap extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
          activePoint: null
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick = () => {
        console.log("HI");
    }

    render() {
        const position = [38.889, -77.009];

        return(
            <MapContainer center={position} zoom={16} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {postData.features.map(post => ( 
                <Marker 
                    key={post.properties.CONTENT_ID}
                    position={[
                        post.geometry.coordinates[1],
                        post.geometry.coordinates[0]
                    ]}
                    onClick={this.handleClick}>
                    <Popup 
                        position={[
                            post.geometry.coordinates[1],
                            post.geometry.coordinates[0]
                        ]}>
                        <b>Name:</b> {post.properties.NAME} <br />
                        <b>Time:</b> {post.properties.TIME} <br />
                        <b>Location:</b> {post.geometry.coordinates[1]}, {post.geometry.coordinates[0]} <br />
                        <b>Content:</b>  {post.properties.DESCRIPTION} <br />
                        <b>Media:</b>  <VideoPlayer mediaURL={post.properties.MEDIA_URL}/>
                        <b>Link:</b>  <a href={post.properties.MEDIA_URL} target="_blank" rel="noreferrer">{post.properties.MEDIA_URL}</a> <br />
                    </Popup>
                </Marker>))}

            </MapContainer>
        );
    };
};

export default ParlerMap;