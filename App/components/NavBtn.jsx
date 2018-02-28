import React from 'react'

export default ({label, selected, onClick}) => (
  <div className={'nav-btn ' + (selected ? 'nav-selected':'')} onClick={onClick && onClick}>
    {label}
  </div>
)
