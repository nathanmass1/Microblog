import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from "react-redux";
import { addComment } from "../Actions";

class CommentForm extends Component {
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
    let { blog, addComment } = this.props;
    addComment(blog, { ...this.state, id: uuid() })
    this.setState({ comment: "" });
  }

  render() {
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

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm)