import React from 'react'
import { useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../../redux/slices/menuSlice';
import './Burger.css'



const Burger = () => {

    const dispatch = useDispatch()

  return (
    <div className='burger-btn'>
    <i onClick={() => dispatch(setIsMenuOpen())} className="medium material-icons">menu</i>
    </div>
  )
}

export default Burger;