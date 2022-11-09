import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback } from 'react';
import Gallery from "react-photo-gallery";



const Portfolio = ({ portfolios }) => {

    // const { original } = portfolio
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    // const [portfolios, setPortfolios] = useState([]);


    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    return (
        <div className='mt-3'>
            <Gallery photos={portfolios.sort((a, b) => a.serial - b.serial)} onClick={openLightbox} />

            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={portfolios.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                                caption: x.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
};

export default Portfolio;