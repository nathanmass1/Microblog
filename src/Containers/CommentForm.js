import React, { Component } from 'react';
import uuid from 'uuid/v4'

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { blog, editBlog } = this.props;
    editBlog({ ...blog, comments: [...blog.comments, {...this.state, id: uuid()}] })
    this.setState({ comment: "" });
  }

  render() {
    console.log("In the comments form, the props are", this.props);
    return (
      <div className="blog-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="comment"></label>
            <input
              name="comment"
              id="form-element"
              value={this.state.comment}
              placeholder="Comment"
              onChange={this.handleChange}
              required />
          </div>
          <button className="submit">Add</button>
        </form>
      </div>
    )
  }
}
