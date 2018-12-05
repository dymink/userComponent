import React, { Component } from 'react';

import './PersonalDetails.css';

class PersonalDetails extends Component {
  constructor(props){
    super(props)
  }

  render(){
      return (
        <div className="personal_details">
            <img src={this.props.avatar} className="circle" alt="avatar"/>
            <div className="personal_details-text">
                <div >{this.props.name} {this.props.surname}<i className="far fa-heart"></i></div>
                <span>{this.props.town} {this.props.country}</span>
            </div>
        </div>
      )
  }
} 

export default PersonalDetails;