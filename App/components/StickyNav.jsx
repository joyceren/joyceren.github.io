import React from 'react'
import {NavLink} from 'react-router-dom'

export default (props) => {
    
    let sampleProfiles = []

    for(let i = 1; i<props.profiles; i++) {
        sampleProfiles.push("ExampleLink"+i)
    }

    return (
        <nav className='sticky-nav'>
            {sampleProfiles.map(profileName => (
                <NavLink to={'/'+profileName} className='nav-btn' activeClassName="nav-selected" key={profileName}>
                    {profileName}
                </NavLink>) ) }
        </nav>
    )
}