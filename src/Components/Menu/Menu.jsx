import './Menu.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsMenuOpen } from '../../redux/slices/menuSlice';



const MyMenu = () => {

    const items = [{ value: 'Menu 1' }, { value: 'Menu 2' }, { value: 'Menu 3' }, { value: 'Menu 4' }]
    const isMenuOpen = useSelector((state) => state.menuSlice.isMenuOpen)
    const dispatch = useDispatch()

    return (
        <>
            <div className={isMenuOpen ? "menu active" : "menu"} onClick={() => dispatch(setIsMenuOpen())}>
                <div className='blur'>
                    <div className='menu__content' onClick={e => e.stopPropagation()} >
                        <i className="material-icons" onClick={() => dispatch(setIsMenuOpen())}>close</i>
                        <div className='menu__items'>
                            <ul>
                                {items.map((item) => (
                                    <li>
                                       <p className='menu__item'> {item.value} <br/> <span className='menu_item_child'>go</span> </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <p className='menu__number'>8-800-800-8000</p>
                    </div>

                </div>

            </div>
        </>
    )
}


export default MyMenu;
