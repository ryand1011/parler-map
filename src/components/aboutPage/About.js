import React, { Component } from 'react';
import NavBar from '../navBar/NavBar'
import './About.css'

class About extends Component {

    render() {

        return(
            <div className="About">
                <NavBar />
                <br />
                <h1>About Page</h1>
                <br />
                <a href="https://github.com/ryand1011" target="_blank" rel="noreferrer">Created by @ryand1011</a>
                <br />
                <a href="https://github.com/ryand1011/parler-map" target="_blank" rel="noreferrer">Contribute on Github</a>
                <br />
            </div>
        );
    };
};

export default About;