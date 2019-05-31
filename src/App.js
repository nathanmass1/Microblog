import React, { Component } from 'react';
import Routes from './Routes'
import Navbar from './Components/NavBar'
import './App.css';
import uuid from 'uuid/v4'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: [{
        title: "GW",
        description: "Washington or Walker",
        body: "test",
        id: "1",
        comments: [{comment:"payload",id:"1"}]

      }]
    };
    this.addBlog = this.addBlog.bind(this);
    this.removeBlog = this.removeBlog.bind(this);
    this.editBlog = this.editBlog.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  addBlog(blog) {
    let newBlog = { ...blog, id: uuid() };
    this.setState(st => ({
      blogs: [newBlog, ...st.blogs]
    }));
  }

  removeBlog(blogID) {
    this.setState(st => ({
      blogs: st.blogs.filter(blog => blog.id !== blogID)
    }));
  }

  editBlog(editedBlog) {
    let copyBlogs = this.state.blogs.filter(blog => blog.id !== editedBlog.id);
    copyBlogs.push(editedBlog);

    this.setState(st => ({
      blogs: copyBlogs
    }));
  }

  deleteComment(editedBlog, editedComment) {
    let blog = this.state.blogs.find(blog => blog.id === editedBlog.id);
    blog.comments = blog.comments.filter(comment => comment.id !== editedComment.id);

    let copyBlogs = this.state.blogs.filter(blog => blog.id !== editedBlog.id);
    copyBlogs.push(blog);
    this.setState(st => ({
      blogs: copyBlogs
    }));
  }

  render() {
    console.log("App state:",this.state)
    return (
      <div className="App">
        <Navbar />
        <Routes blogs={this.state.blogs} addBlog={this.addBlog} removeBlog={this.removeBlog} editBlog={this.editBlog} deleteComment={this.deleteComment} />
      </div>
    );
  }
}

export default App;
