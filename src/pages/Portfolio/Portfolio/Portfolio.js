import React from 'react';
import './Portfolio.css';
import { useState } from 'react';
import { MdCancel } from "@react-icons/all-files/md/MdCancel";
import { GrFormPrevious } from "@react-icons/all-files/gr/GrFormPrevious";
import { GrFormNext } from "@react-icons/all-files/gr/GrFormNext";
import { ThemeContext } from '../../../context';
import { useContext } from 'react';


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

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    return (
        <div>

            {openModal &&
                <div className='sliderWrap'>
                    <MdCancel color='black' className='btnClose' onClick={handleCloseModal} />
                    <GrFormPrevious className='btnPrev' onClick={prevSlide} />
                    <GrFormNext className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={portfolios[slideNumber].src} alt='' />
                        <div className='portfolio-desc' style={{ color: darkMode ? '#fff' : '#ffbb00' }}>
                            <h3>Name: College Park</h3>
                            <h3>Location: Dhaka Uddan, Mohammadpur, Dhaka, Bangladesh</h3>
                            <h3>Size: 1050sqft</h3>
                            <h3>Unit: 4</h3>
                            <h3>Floor: 10</h3>
                        </div>

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
                                    <img src={slide.src} alt='' width="100%" className=' gallery__image' />
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