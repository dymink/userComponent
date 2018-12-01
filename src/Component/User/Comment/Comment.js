import React, { Component } from 'react';

class Comment extends Component {
    constructor(props){
        super(props)
    }

    formatDate(num) {
        let monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        if(typeof num === 'string'){
            num = parseInt(num)
        }
        let date = new Date(num);
        let day = date.getDate();
        let monthIndex = date.getMonth();
        let year = date.getFullYear();
        return day + ' ' + monthNames[monthIndex] + ' ' + year;
    }

    render(){      
        return (
            <div> 
                <div> { this.props.comment.name } </div>
                <div> { this.props.comment.surname } </div>
                <div> { this.props.comment.text } </div>
                <div> { this.formatDate(this.props.comment.timeStamp) } </div>
            </div>
        )
    }

}
export default Comment;