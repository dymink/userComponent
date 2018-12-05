import React, { Component } from 'react';
import './Stats.css'

class Stats extends Component {
    constructor(props){
      super(props)
    }

    render(){
        let followers = this.props.isFollow ? this.props.followers + 1 : this.props.followers
        let text = this.props.isFollow ? 'UNFOLLOW' : 'FOLLOW'
        return (
            <React.Fragment>
                <div className="stats_main">
                    <div
                        className="stats_numbers"
                        onClick={this.props.increaseHandle}>
                        {this.props.likes}
                        <span>Likes</span>
                    </div>
                    <div className="stats_numbers">
                        {this.props.following}
                        <span>Following</span>
                    </div>
                    <div className="stats_numbers">
                        {followers}
                        <span>Followers</span>
                    </div>
                    <button
                        className="followButton"
                        onClick={ this.props.toggleFollow}>{text}</button>
                </div>
            </React.Fragment>
        )
    }
}

export default Stats;