import React from 'react';

const LoadingSkeletonBanner = () => {
    return (
        <div className="row">
            <div className="col-md-6 col-xl-4">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">
                        <button className="loadingCardsBtn"></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">

                        <button className="loadingCardsBtn"></button>
                    </div>
                </div>
            </div>
            <div className="col-md-6 col-xl-4">
                <div className="loadingCards">
                    <div className="loadingCardsImage"></div>
                    <div className="loadingCardsContent">

                        <button className="loadingCardsBtn"></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LoadingSkeletonBanner;