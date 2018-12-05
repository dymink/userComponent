import React, { Component } from 'react';

import './Input.css'

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '',
            isInputShowed: false
        }
    }

    handleChangeInputText(event) {
        this.setState({value: event.target.value});
    }

    onClickHandle(){
        if(this.state.isInputShowed){
            this.props.addComment(this.state.value);
            this.setState({
                isInputShowed: false,
                value: ''
            })
        }else{
            this.setState({isInputShowed: true})
        }
    }

    render(){
        let textarea = this.state.isInputShowed ? <textarea
            placeholder="Wright a comment..."
            value={this.state.value}
            onChange={(e) =>this.handleChangeInputText(e)}
            /> : "";
        return (
            <div>
                { this.props.isCommentsHide ? '' :
                    <div className="add_comment">
                        { textarea }
                        <div onClick={ () => this.onClickHandle()}> Add comment </div>
                    </div>
                }
            </div>
        )
    }

}
export default Input;