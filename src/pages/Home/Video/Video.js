import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <center className="videoPlayerContainer">
            <iframe className='videoPlayer' src="https://www.youtube.com/embed/R0xeocH4lnY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
    );
};

export default Video;