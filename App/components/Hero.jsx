import React from 'react'
import {Link} from 'react-router-dom'

export default class Hero extends React.Component {
  state = {
    open: false
  }

  componentDidMount() {
    this.setState({open: !this.props.signedIn})
  }

  close = () => this.setState({open: false})

  render() {
    const {open} = this.state
    if (this.state.open) {
      return (
        <div className="hero" onClick={this.close}>
            <Link to='/account/log-in'>
                <h3 className="hero-text">Take control of your news. Create an account today!</h3>
            </Link>
            <div className='close-btn' onClick={this.close}>close</div>
        </div>
      )
    }
    else return null
  }

}
