import React from 'react'
import './NavigateButton.css'

const NavigateButton = ({ children, ...props }) => {
    return (
        <div>
            <button {...props} className='navigateButton'>
                {children}
            </button>
        </div>
    )
}

export default NavigateButton