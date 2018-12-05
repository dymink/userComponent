import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
    constructor(props){
        super(props)
    }

    diffDate(commentTime) {
        let currentTime = new Date();
        return Math.floor(( currentTime.getTime() - commentTime ) / 86400000); 
    }

    render(){      
        return (
            <div className="comment_container"> 
                <img src={this.props.comment.avatar} alt="commentImg" className="comment_img"/>
                <div className="comment_text">
                    <h4> { this.props.comment.name }{" "}{ this.props.comment.surname }</h4>
                    <p> { this.props.comment.text } </p>
                </div>
                <span> { this.diffDate(this.props.comment.timeStamp) }d</span>
            </div>
        )
    }

}
export default Comment;