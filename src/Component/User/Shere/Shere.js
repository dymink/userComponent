import React, { Component } from 'react';

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
            <div>
                <input value={url}/>
            </div>
        )
    }

}
export default Shere;