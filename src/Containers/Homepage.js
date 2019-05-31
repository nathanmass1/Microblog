import React, { Component } from 'react';
import Post from "./Post";
import { connect } from "react-redux";

class Homepage extends Component {
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

function mapStateToProps(state) {
  return { blogs: [...state.blogs] };
}

export default connect(mapStateToProps)(Homepage);


