import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import HomePage from './Containers/Homepage'
import NewPost from './Containers/NewPost'
import PostDetails from './Containers/PostDetails'


export default class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path="/" render={rtProps => <HomePage {...rtProps} />} />
        <Route exact path="/new" render={rtProps => <NewPost {...rtProps} />} />
        <Route exact path="/posts/:id" render={rtProps => <PostDetails {...rtProps} />} />
        </Switch>
      </div>
    )
  }
}
