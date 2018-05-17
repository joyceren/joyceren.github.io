import React from 'react'
import {Link} from 'react-router-dom'

export default ({close}) => (
    <div className="hero" onClick={close}>
        <Link to='/account/log-in'>
            <h3 className="hero-text">Take control of your news. Create an account today!</h3>
        </Link>
        <div className='close-btn' onClick={close}>close</div>
    </div>
)