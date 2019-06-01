import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCommentToAPI } from "../Actions";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let { blog, addCommentToAPI } = this.props;
    addCommentToAPI(blog, this.state.text)
    this.setState({ text: "" });
  }

  render() {
    return (
      <div className="blog-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="text"></label>
            <input
              name="text"
              id="form-element"
              value={this.state.text}
              placeholder="Text"
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

const mapDispatchToProps = { addCommentToAPI };

export default connect(mapStateToProps,mapDispatchToProps)(CommentForm)