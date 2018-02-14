import React from 'react';
import Auth from './Auth'

export default props => {
  if (!props.user) return <Auth login={props.login}/>
  else return (
    props.user
  )
}

//  props = {
//   user: {id, name, email, sources},
//   login: true || false
// }
