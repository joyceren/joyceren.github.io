import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {

    return (
        <nav className='sticky-nav'>
            {Object.keys(props.profiles).map(profileId => (
                <NavLink to={'/'+profileId} className='nav-btn' activeClassName="nav-selected" key={profileId}>
                    {props.profiles[profileId]}
                </NavLink>) ) }
        </nav>
    )
}

// add an 'Add Profile Button'