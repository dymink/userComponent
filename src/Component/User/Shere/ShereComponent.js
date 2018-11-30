import React, { Component } from 'react';

class ShereComponent extends Component {
    constructor(props){
        super(props)
    }

    getURL() {
        return window.location.href;
    }

    render(){

        if(!this.props.show) {
            return null;
        }

        return (
            <div>
                { this.props.isShow ? "jest" : "nie ma" }
            </div>
        )
    }

}
export default ShereComponent;