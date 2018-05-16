import React from 'react'
import {Link} from 'react-router-dom'

export default ({close}) => (
    <div className="hero">
        <h3>Take control of your news. Create an account today!</h3>
        <div className='close-btn' onClick={close}>close</div>
    </div>
)