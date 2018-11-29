import React, { Component } from 'react';


class CommentComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){      
        return (
            <div> 
                <div> { this.props.comment.name } </div>
                <div> { this.props.comment.surname } </div>
                <div> { this.props.comment.text } </div>
                <div> { this.props.comment.timeStamp } </div>
            </div>
        )
    }

}
export default CommentComponent;