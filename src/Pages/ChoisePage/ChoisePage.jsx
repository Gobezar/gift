import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavigateButton from '../../UI/NavigateButton/NavigateButton';
import Burger from '../../UI/Burger/Burger';
import MyMenu from '../../Components/Menu/Menu';
import ImageSlider from '../../Components/ImageSlider/ImageSlider';

import './ChoisePage.css'
import HeaderImg from '../../UI/Images/Header.png'
import FooterImg from '../../UI/Images/Footer.png'
import sliderBackground from '../../UI/Images/sliderBackground.png'


const ChoisePage = () => {

    const isMenuOpen = useSelector((state) => state.menuSlice.isMenuOpen)

    return (

        <motion.div
            className='wrapper'
            initial={{ x: "100%" }}
            animate={{ x: "0%", position: 'absolute' }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <header><img className='header__img' src={HeaderImg} alt='header' /></header>
            <nav>
                {isMenuOpen ? <></> : <Burger />}
            </nav>
            <MyMenu />
            <div className='choisePage__content'>
                <div>
                    <h2>PageMaker including <br /> versions of Lorem Ipsum.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing </p>
                    <div className='goButton'><Link to='/'> <NavigateButton children={'BACK'} /></Link></div>
                </div>
            <div className='gift__content'>
                <img className='slider__Background' src={sliderBackground} alt='sliderBackground'/>
                <ImageSlider />

            </div>


            </div>
            <div>



            </div>
            <footer><img className='footer__img' src={FooterImg} alt='footer' /></footer>
        </motion.div>
    )
}

export default ChoisePage