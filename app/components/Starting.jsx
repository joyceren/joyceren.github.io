import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const StartingPage = (props) => {
  console.log(props.children)
  return
    <div>
      <Link to="/articles">
        <div>
        Your News
        </div>
      </Link>
    </div>

}

const mapState = ({articles}) => ({
  articles,
})

export default connect(mapState)(StartingPage)
