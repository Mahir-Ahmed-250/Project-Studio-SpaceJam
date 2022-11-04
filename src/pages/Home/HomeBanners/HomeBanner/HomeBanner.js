import React from 'react';


const HomeBanner = ({ banner }) => {
    const { img1, img2, img3, img4, img5, img6, img7, img8 } = banner
    return (
        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={img1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img4} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img5} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img6} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img7} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={img8} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeBanner;