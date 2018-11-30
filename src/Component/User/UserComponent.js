import React, { Component } from 'react';

import CommentsContainerComponent from './CommentsContainer/CommentsContainerComponent';
import InputComponent from './Input/InputComponent';

class UserComponent extends Component {
  constructor(props){
    super(props)

    this.state = {
      likes: props.likes, 
      followers: props.followers,
      following: props.following,
      is_comments_hide: props.is_comments_hide,
      comments: props.comments 
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
     if(this.state.is_comments_hide){
        this.setState({is_comments_hide: false});
     } else{
        this.setState({is_comments_hide: true});
     }
  }

  increaseHandle(type){
    this.setState({[type]: this.state[type] + 1 })
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.subname}</div>
        <div>{this.props.country}</div>
        <div>{this.props.town}</div>
        <div>
          <div onClick={this.increaseHandle.bind(this, 'followers')}>FOLLOWERS: {this.state.followers}</div>
          <div>FOLLOWING: {this.state.following}</div>
          <div onClick={this.increaseHandle.bind(this, 'likes')}>LIKES: {this.state.likes}</div>
        </div>
        <button onClick={this.showHide.bind(this)}>Hide</button>
        <CommentsContainerComponent comments={this.state.comments} is_comments_hide={this.state.is_comments_hide}/>         
        <InputComponent addComment={this.addComment.bind(this)} is_comments_hide={this.state.is_comments_hide}/>      
      </div>
    );
  }
}

export default UserComponent;