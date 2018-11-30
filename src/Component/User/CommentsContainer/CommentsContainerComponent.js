import React, { Component } from 'react';

import CommentComponent from '../Comment/CommentComponent';

class CommentsContainerComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: this.props.comments
        }
    }

    sort(arr){
        return arr.sort(function(a, b){return a.timeStamp  - b.timeStamp });
    }

    render(){
        return (
            <div>
                { this.props.is_comments_hide ? '' :
                    <ul>
                        {this.sort(this.props.comments).map((comment, index) => {
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