// Link.react.test.js
import React from 'react';
import User from './User.js';
import renderer from 'react-test-renderer';

import * as data from '../../Mocks/user.json'

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

test('Shere modal input value should have window.location.href value', () => {
  const component = renderer.create(
    <User {...props} />
  ).root;
  let button = component.find(
    (el) => el.type == 'button'
    && el.children
    && el.children == ' Modal '
  )
  button.props.onClick();
  let input = component.find(
    (el) => el.type == 'input'
  )
  
  expect(input.props.value).toEqual(window.location.href);
 
});


test('Follow button click should increase followers by one', () => {
    const component = renderer.create(
        <User {...props} />
      ).root;
    let button = component.find(
        (el) => el.type == 'button'
        && el.children
        && el.children == 'FOLLOW'
    )
    let followers = component.find(
        (el) => el.type == "div"
        && el.children
        && el.children == "FOLLOWERS: " + props.followers
    )
    let followersAfterClickText = props.followers +1;
    button.props.onClick();

    expect(button.children).toEqual('UNFOLLOW');

    expect(followers.children).toEqual("FOLLOWERS: " + followersAfterClickText);

});