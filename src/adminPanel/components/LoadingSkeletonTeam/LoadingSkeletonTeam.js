/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import './LoadingSkeletonTeam.css';

const LoadingSkeletonTeam = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-xl-3">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">
                        <button className="loadingCardsBtn"></button>
                        <button className="loadingCardsBtn2"></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">
                        <button className="loadingCardsBtn"></button>
                        <button className="loadingCardsBtn2"></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">
                        <button className="loadingCardsBtn"></button>
                        <button className="loadingCardsBtn2"></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-3">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">
                        <button className="loadingCardsBtn"></button>
                        <button className="loadingCardsBtn2"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingSkeletonTeam;