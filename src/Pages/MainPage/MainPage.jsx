import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MyMenu from '../../Components/Menu/Menu';
import Burger from '../../UI/Burger/Burger';
import NavigateButton from '../../UI/NavigateButton/NavigateButton'

import './MainPage.css'
import Level1 from '../../UI/Images/Level1.png'
import Level2 from '../../UI/Images/Level2.png'
import Level3 from '../../UI/Images/Level3.png'
import FooterImg from '../../UI/Images/Footer.png'
import HeaderImg from '../../UI/Images/Header.png'
import Arrow from '../../UI/Images/Vector.png'
import MiniEllipse from '../../UI/Images/MiniEllipse.png'
import MiniEllipse2 from '../../UI/Images/MiniEllipse2.png'
import MiniEllipse3 from '../../UI/Images/MiniEllipse3.png'


const MainPage = () => {

  const isMenuOpen = useSelector((state) => state.menuSlice.isMenuOpen)
  const [speedLevel, setSpeedLevel] = useState(1)
  const [arrowLevel, setArrowLevel] = useState(1)

  function handleLevel (level) {
    setSpeedLevel(level)
    setArrowLevel(level)
  }

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
      <div className='mainPage__content'>

        <div>
          <h2>Bibendum neque<br /> egestas congue</h2>
          <p>lacus sed viverra tellus in hac habitasse platea dictumst vestibulum <br />rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt<br /> lobortis feugiat</p>
          <div className='goButton'><Link to='/choisePage'> <NavigateButton children={'GO'} /></Link></div>
        </div>

        <div className='speedometer'>
          {speedLevel === 1 && <img className='speedometer_img speedometer_1' src={Level1} />}
          {speedLevel === 2 && <img className='speedometer_img speedometer_2' src={Level2} />}
          {speedLevel === 3 && <img className='speedometer_img speedometer_3' src={Level3} />}
          <div>
          <img className={`arrow ${speedLevel === 1 && 'arrowLevel_1'} ${speedLevel === 2 && 'arrowLevel_2'} ${speedLevel === 3 && 'arrowLevel_3'}`} src={Arrow}/>
          </div>
          <img className='miniEllipse' src={speedLevel === 1 && MiniEllipse || speedLevel === 2  && MiniEllipse2 || speedLevel === 3  && MiniEllipse3} />
        </div>

        <div className='level__buttons'>
          <button className={speedLevel === 1 ? 'levelButton1 active' : 'levelButton1'} onClick={() => handleLevel(1)}>Level 1</button>
          <button className={speedLevel === 2 ? 'levelButton2 active' : 'levelButton2'} onClick={() => handleLevel(2)}>Level 2</button>
          <button className={speedLevel === 3 ? 'levelButton3 active' : 'levelButton3'} onClick={() => handleLevel(3)}>Level 3</button>
        </div>

      </div>
      <footer><img className='footer__img' src={FooterImg} alt='footer' /></footer>

    </motion.div>

  )
}

export default MainPage
