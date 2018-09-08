import React from 'react'
import {NavLink} from 'react-router-dom'

export default ({profiles}) => {

    return (
        <nav className='sticky-nav'>
            {profiles.map(p => (
                <NavLink to={'/profile/'+p.id} className='nav-btn' activeClassName="nav-selected" key={p.id}>
                    {p.name}
                </NavLink>) ) }
        </nav>
    )
}

// add an 'Add Profile Button'
