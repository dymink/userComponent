import React, { Component } from 'react';


class CommentComponent extends Component {
    constructor(props){
        super(props)
    }

    formatDate(num) {
        var monthNames = [
          "January", "February", "March",
          "April", "May", "June", "July",
          "August", "September", "October",
          "November", "December"
        ];
        if(typeof num === 'string'){
            num = parseInt(num)
        }
        var date = new Date(num);
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
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
export default CommentComponent;