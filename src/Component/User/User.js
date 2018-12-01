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
      <React.Fragment>
        <div>
          <div>
          </div>
          <div>
          </div>
        </div>
        <div>
          <button onClick={this.toggleModal.bind(this)}> Modal </button>
          <Shere show={this.state.isModalOpen} />
          <PersonalDetails 
            name={this.props.name} 
            surname={this.props.surname} 
            town={this.props.town} 
            country={this.props.country}/>
          <Stats increaseHandle={
            () => this.increaseHandle( 'likes')} 
            isFollow={this.state.isFollow}  
            toggleFollow={this.toggleFollow.bind(this)} 
            followers={this.state.followers} 
            following={this.state.following} 
            likes={this.state.likes}/>
          <button onClick={this.toggleComments.bind(this)}>
            {buttonName + " " + this.state.comments.length}
          </button>
          <CommentsContainer 
            comments={this.state.comments} 
            isCommentsHide={this.state.isCommentsHide}/>         
          <Input 
            addComment={this.addComment.bind(this)} 
            isCommentsHide={this.state.isCommentsHide}/>      
        </div>
      </React.Fragment>
    );
  }
}

export default User;