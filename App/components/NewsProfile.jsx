import React from 'react'
import ProfileOptions from './ProfileOptions'
import ArticleCard from './ArticleCard'

import axios from 'axios'
import {newsKey} from '~/keys'
import {db, addArticles} from '~/fire'

export default class NewsProfile extends React.Component {

  state = {
    editMode:false,
    articles: []
  }

  componentDidMount() {
    this.getProfile(this.props.match.params.profileId)
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.match.params.profileId !== nextProps.match.params.profileId) {
      this.setState({editMode: false})
      this.props = nextProps
      this.getProfile(this.props.mnatch.params.profileId)
    }
  }

  getProfile = id => {
    console.log('getting profile => ', id)
    db.collection('profiles').doc(id).get()
    .then(doc => {
      if(doc.exists) {
        const profileOptions = doc.data()
        this.setState(profileOptions)
        this.getArticles(profileOptions.sources)
      }
      else this.setState({name: "No profile found :("})
    })
  }

  getArticles = sources => {
    sources.forEach(source => {
      console.log('getting articles for ', source)
      axios.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${newsKey}`)
      .then(({data: {articles}}) => {
        this.setState({
          articles: [...this.state.articles, ...articles]
        })
        addArticles(articles)
      })
    })
  }

  updateProfile = newOptions => {
    this.setState(newOptions)
    db.collection('profiles').doc(this.props.match.params.profileId).set(newOptions, {merge:true})
    .catch(console.error)
  }

  updateTitle = () => {
    const newProfileName = this.state.name
    const profileId = this.props.match.params.profileId
    this.updateProfile({name: newProfileName})
    this.props.updateUserProfiles(profileId, newProfileName)
  }

  render() {
    // TODO:
    // Add 'authored profiles to userProfiles'
    // Only allow authored profiles to be editable

    if(!this.state) return null
    return (
      <div className="profile-box">
        <div className="profile-title-box">
          {this.state.editMode ?
            <input type="text" value={this.state.name} className="profile-name" onChange={e => this.setState({name:e.target.value}) } onBlur={this.updateTitle}/>
            : <h1 className="profile-name">{this.state.name}</h1>
          }
          {
            this.props.signedIn && this.props.profiles.some(e => e.id==this.props.match.params.profileId) ? (
              <h4 onClick={() => this.setState({editMode:!this.state.editMode})} className="close-btn">
                {this.state.editMode ? "close" : "edit"}
              </h4>
            )
            : <div className="nav-btn color-btn" onClick={() => this.props.addProfile(this.props.match.params.profileId, this.state.name)}>
                Add to your profiles
              </div>
          }
        </div>
        { this.state.editMode && <ProfileOptions sources={this.state.sources} updateProfile={this.updateProfile}/>}
        <div className="article-list">
          {this.state.articles.length ? this.state.articles.map(a => <ArticleCard article={a} id={a.source.id+a.publishedAt}/>) : 'articles here!'}
        </div>
      </div>
    )
  }
}
