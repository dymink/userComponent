import React, { Component } from 'react';

import CommentsContainer from './CommentsContainer/CommentsContainer';
import Input from './Input/Input';
import Shere from './Shere/Shere';
import Stats from './Stats/Stats'
import PersonalDetails from './PersonalDetails/PersonalDetails'

import './User.css';


class User extends Component {
  constructor(props){
    super(props)

    this.state = {
      likes: props.likes, 
      followers: props.followers,
      following: props.following,
      isCommentsHide: props.isCommentsHide,
      comments: props.comments,

      isModalOpen: false,
      isFollow: false
    }
  }

  addComment(comment){
    let newComment = {
      name: this.props.name,
      surname: this.props.surname,
      avatar: this.props.avatar,
      timeStamp: Date.now().toString(),
      text: comment
    }
    this.setState({comments: [...this.state.comments, newComment]});
  }

  toggleFollow(){
    this.setState({isFollow: !this.state.isFollow})
  }

  toggleComments(){
    this.setState({isCommentsHide: !this.state.isCommentsHide});
  }

  toggleModal(){
    this.setState({isModalOpen: !this.state.isModalOpen});
  }

  increaseHandle(type){
    this.setState({[type]: this.state[type] + 1 })
  }

  render() {
    let buttonName = this.state.isCommentsHide ? 'Show comments': 'Hide comments';
    return (
      <div className="main">
        <div className="container">
          <div className="user_background">
          </div>
          <div className="user_main">
            <div onClick={this.toggleModal.bind(this)} className="user_main-external-link"> <i className="fas fa-external-link-alt"></i></div>
            <Shere show={this.state.isModalOpen} />
            <PersonalDetails
              name={this.props.name}
              surname={this.props.surname}
              avatar={this.props.avatar}
              town={this.props.town}
              country={this.props.country}/>
            <Stats increaseHandle={
              () => this.increaseHandle( 'likes')}
              isFollow={this.state.isFollow}
              toggleFollow={this.toggleFollow.bind(this)}
              followers={this.state.followers}
              following={this.state.following}
              likes={this.state.likes}/>
          </div>
          <div className="user_main">
            <div className="user_main_link" onClick={this.toggleComments.bind(this)}>
              {`${buttonName} (${this.state.comments.length})`}
            </div>
            <CommentsContainer
              comments={this.state.comments}
              isCommentsHide={this.state.isCommentsHide}/>
            <Input
              addComment={this.addComment.bind(this)}
              isCommentsHide={this.state.isCommentsHide}/>
          </div>
        </div>
      </div>

    );
  }
}

export default User;