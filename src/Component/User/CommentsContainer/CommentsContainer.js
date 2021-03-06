import React, { Component } from 'react';

import Comment from '../Comment/Comment';

class CommentsContainer extends Component {
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
            <React.Fragment>
                { this.props.isCommentsHide ? '' :
                    <ul style={{padding: "0"}}>
                        {this.sort(this.props.comments).map((comment, index) => {
                            return <Comment key={index} comment={comment} />
                        })}
                    </ul>
                }
                <div>{this.props.children}</div>
            </React.Fragment>
        )
    }

}
export default CommentsContainer;