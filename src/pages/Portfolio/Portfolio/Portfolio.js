import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";

const Portfolio = ({ portfolios }) => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(portfolios.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === portfolios.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }
    return (
        <div className=''>

            {openModal &&
                <div className='sliderWrap'>
                    <MdCancel color='black' className='btnClose' onClick={handleCloseModal} />
                    <GrFormPrevious className='btnPrev' onClick={prevSlide} />
                    <GrFormNext className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>

                        <img src={portfolios[slideNumber].src} alt='' />


                    </div>

                </div>
            }

            <div className='gallery row' >
                {
                    portfolios && portfolios.map((slide, index) => {
                        return (
                            <div
                                className='col-lg-4 col-md-6'
                                key={index}
                                onClick={() => handleOpenModal(index)}
                            >
                                <figure class="gallery__link">
                                    <img src={slide.src} alt='' width="100%" className='mb-3 gallery__image' />
                                </figure>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Portfolio;