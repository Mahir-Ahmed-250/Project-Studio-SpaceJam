import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <center className="videoPlayerContainer">

            <iframe className='videoPlayer' src="https://www.youtube.com/embed/gfgZfc8KSE4?si=cKwNUptSQu3dh9mW?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br />
            <br />
            <br />
            <br />
            <iframe className='videoPlayer' src="https://www.youtube.com/embed/R0xeocH4lnY?rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </center>

    );
};

export default Video;