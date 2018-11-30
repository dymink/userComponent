import React, { Component } from 'react';

import CommentsContainerComponent from './CommentsContainer/CommentsContainerComponent';
import InputComponent from './Input/InputComponent';
import ShereComponent from './Shere/ShereComponent';

import './UserComponent.css';

class UserComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      likes: props.likes, 
      followers: props.followers,
      following: props.following,
      is_comments_hide: props.is_comments_hide,
      comments: props.comments,

      modalOpen: false
    }
  }

  addComment(comment){
    let newComment = {
      name: this.props.name,
      surname: this.props.surname,
      timeStamp: Date.now().toString(),
      text: comment
    }
    this.setState({comments: [...this.state.comments, newComment]});
  }

  showHide(){
    this.setState({is_comments_hide: !this.state.is_comments_hide});
  }

  increaseHandle(type){
    this.setState({[type]: this.state[type] + 1 })
  }

  modalShowHide(){
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render() {
    let buttonName = this.state.is_comments_hide ? 'Show comments': 'Hide comments';
    return (
      <div>
        <button onClick={this.modalShowHide.bind(this)}> Modal </button>
        <ShereComponent show={this.state.modalOpen} />
        <div>
          <img />
        </div>
        <div className="container">
          <div>{this.props.name}</div>
          <div> " " </div>
          <div>{this.props.surname}</div>
        </div>
        <div>
          <span>{this.props.town}</span>
          <span>{this.props.country}</span>
        </div>
        <div>
          <div onClick={this.increaseHandle.bind(this, 'followers')}>FOLLOWERS: {this.state.followers}</div>
          <div>FOLLOWING: {this.state.following}</div>
          <div onClick={this.increaseHandle.bind(this, 'likes')}>LIKES: {this.state.likes}</div>
        </div>
        <button onClick={this.showHide.bind(this)}>
          <span>{buttonName}</span>
          <span>{ " " + this.state.comments.length}</span>
        </button>
        <CommentsContainerComponent comments={this.state.comments} is_comments_hide={this.state.is_comments_hide}/>         
        <InputComponent addComment={this.addComment.bind(this)} is_comments_hide={this.state.is_comments_hide}/>      
      </div>
    );
  }
}

export default UserComponent;