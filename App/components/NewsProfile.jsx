import React from 'react'
import ProfileOptions from './ProfileOptions'
import axios from 'axios'
import {db} from '~/fire'

export default class NewsProfile extends React.Component {

  constructor() {
    super()
    this.updateProfile=this.updateProfile.bind(this)
  }

  state = {
    profileName: undefined,
    sources: [],
    editMode:false,
  }

  componentDidMount() {
    this.getProfileInfo(this.props.match.params.profileId)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props !== nextProps) this.getProfileInfo(nextProps.match.params.profileId)
  }

  getProfileInfo(profileId){
    this.setState({profileId})
    db.collection('userProfiles').doc('Joyce Ren').collection('profiles').doc(profileId).get()
    .then(doc => {
      if(doc.exists) {
        this.setState(doc.data())
        console.log(doc.data())
      }
      else this.setState({profileName: "This profile doesn't exist!"})
    })
    .catch(console.error)
  }

  updateProfile (newOptions) {
    this.setState(newOptions)
    db.collection('userProfiles').doc('Joyce Ren').collection('profiles').doc(this.state.profileId).set(newOptions, {merge:true})
    .catch(console.error)
  }



  render() {
    return (
      <div className="news-profile">
        <div className="profile-title-box">
          
      {this.state.editMode ? <input type="text" value={this.state.profileName} className="profile-name" onChange={(e) => {this.updateProfile({profileName: e.target.value})}}/> : <h1 className="profile-name">{this.state.profileName}</h1>}

          <h4 onClick={() => this.setState({editMode:!this.state.editMode})} className="close-btn">
            {this.state.editMode ? "close" : "edit"}
          </h4>
        </div>
        { this.state.editMode ? <ProfileOptions sources={this.state.sources} updateProfile={this.updateProfile}/> : null }
        <div className="article-list">
          articles here!
        </div>
      </div>
    )
  }
}
