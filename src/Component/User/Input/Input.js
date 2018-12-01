import React, { Component } from 'react';

class Input extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: 'add comment'
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        return (
            <div>
                { this.props.isCommentsHide ? '' :
                    <div>
                        <textarea value={this.state.value} onChange={(e) =>this.handleChange(e)} />
                        <button onClick={ () => this.props.addComment(this.state.value)}/>
                    </div>
                }
            </div>
        )
    }

}
export default Input;