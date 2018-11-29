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
    console.log(comment)
    //let newComments = this.state.comments.push(comment);
    //this.setState({comments: newComments});
  }

  showHide(){
     if(this.state.is_comments_hide){
        this.setState({is_comments_hide: false});
     } else{
        this.setState({is_comments_hide: true});
     }
  }
  
  render() {    
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.subname}</div>
        <div>{this.props.country}</div>
        <div>{this.props.town}</div>
        <button onClick={ () => this.showHide}>{this.state.is_comments_hide}</button>
        <CommentsContainerComponent comments={this.state.comments} is_comments_hide={this.state.is_comments_hide}>         
          <InputComponent addComment={this.addComment}/>
        </CommentsContainerComponent>
        
      </div>
    );
  }
}

export default UserComponent;