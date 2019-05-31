import React, { Component } from 'react';
import Post from "./Post"

export default class Homepage extends Component {
  render() {
    let { blogs } = this.props;
    return (
      <div>
        <p>Welcome to Nate and Chris' Microblog!</p>
        {blogs.map(blog => (<Post key={blog.id} {...blog}/>))}
      </div>
    )
  }
}
