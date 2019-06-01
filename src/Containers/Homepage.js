import React, { Component } from 'react';
import Post from "./Post";
import { connect } from "react-redux";
import { getBlogsFromAPI } from '../Actions'

class Homepage extends Component {
  componentDidMount() {
    this.props.getBlogsFromAPI();
  }

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

export default connect(mapStateToProps, { getBlogsFromAPI })(Homepage);


