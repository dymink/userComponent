import React, { Component } from 'react';

import CommentComponent from '../Comment/CommentComponent';

class CommentsContainerComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.comments)
        return (
            <div>
                { this.props.is_comments_hide ? '' :
                    <ul>
                        {this.props.comments.map((comment, index) => {
                            return <CommentComponent key={index} comment={comment} />
                        })}
                    </ul>
                }
                <div>{this.props.children}</div>
            </div>
        )
    }

}
export default CommentsContainerComponent;