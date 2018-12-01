import React, { Component } from 'react';

import User from './Component/User/User';
import * as data from './Mocks/user.json';

class App extends Component {
  render() {
    let props = {
      id: data.id,
      name: data.name,
      surname: data.surname, 
      country: data.country, 
      town: data.town, 
      avatar: data.avatar, 
      likes: data.likes, 
      followers: data.followers, 
      following: data.following, 
      isCommentsHide: data.is_comments_hide,
      comments: data.comments
    }
    
    return (
      <div className="App">
        <User {...props} />
      </div>
    );
  }
}

export default App;
