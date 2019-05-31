import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import EditPost from './Containers/EditPost'
import HomePage from './Containers/Homepage'
import NewPost from './Containers/NewPost'
import PostDetails from './Containers/PostDetails'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" render={rtProps => <HomePage {...rtProps} blogs={this.props.blogs} />} />
        <Route exact path="/new" render={rtProps => <NewPost {...rtProps} addBlog={this.props.addBlog} />} />
        <Route exact path="/posts/:id" render={rtProps => <PostDetails {...rtProps} deleteComment={this.props.deleteComment} addBlog={this.props.addBlog} removeBlog={this.props.removeBlog} editBlog={this.props.editBlog} blogs={this.props.blogs} />} />
        {/* <Route exact path="/post/:id/edit" render={rtProps => <EditPost {...rtProps} />} /> */}
        </Switch>
      </div>
    )
  }
}
