import React, { Component } from 'react';

class PersonalDetails extends Component {
  constructor(props){
    super(props)
  }

  render(){
      return (
        <React.Fragment>
            <div className="container">
                <div>{this.props.name}</div>
                <div>{this.props.surname}</div>
            </div>
            <div>
                <span>{this.props.town}</span>
                <span>{this.props.country}</span>
            </div>
        </React.Fragment>
      )
  }
} 

export default PersonalDetails;