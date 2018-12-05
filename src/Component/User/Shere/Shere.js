import React, { Component } from 'react';

import './Shere.css'

class Shere extends Component {
    constructor(props){
        super(props)
    }

    getURL() {
        return window.location.href;
    }

    render(){
        let url = this.getURL();
        if(!this.props.show) {
            return null;
        }

        
        return (
            <div className="modal">
                <input value={url}/>
            </div>
        )
    }

}
export default Shere;