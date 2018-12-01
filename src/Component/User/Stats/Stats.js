import React, { Component } from 'react';

class Stats extends Component {
    constructor(props){
      super(props)
    }

    render(){
        let followers = this.props.isFollow ? this.props.followers + 1 : this.props.followers
        let text = this.props.isFollow ? 'UNFOLLOW' : 'FOLLOW'
        return (
            <div>
                <div>FOLLOWERS: {followers}</div>
                <div>FOLLOWING: {this.props.following}</div>
                <div onClick={this.props.increaseHandle}>LIKES: {this.props.likes}</div>
                <button onClick={ this.props.toggleFollow}>{text}</button>
            </div>
        )
    }
}

export default Stats;