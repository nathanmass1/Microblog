import React, { Component } from "react";
import { connect } from "react-redux";
import { addBlog } from "../Actions";

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      body: '',
      comments: {}
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBlog(this.state);
    this.setState({
      title: '',
      description: '',
      body: ''
    });
    this.props.history.push('/');
  }

  render() {
      return (
        <div className="blog-form">
          <form onSubmit={this.handleSubmit}>
            <div className="form-input">
              <label htmlFor="title"></label>
              <input
                name="title"
                id="form-element"
                value={this.state.title}
                placeholder="Title"
                onChange={this.handleChange}
                required />
            </div>
            <div>
              <label htmlFor="description"></label>
              <input
                name="description"
                id="form-element"
                value={this.state.description}
                placeholder="Description"
                onChange={this.handleChange}
                required />
            </div>
            <div>
              <label htmlFor="body"></label>
              <input
                name="body"
                id="form-element"
                value={this.state.body}
                placeholder="Body"
                onChange={this.handleChange}
                required
              />
            </div>
            <button className="submit">Add Post</button>
          </form>
            <button className="cancel" onClick={() => this.props.history.push('/') }>Cancel</button>
        </div>
      );
    }
}

function mapStateToProps(state) {
  return {
    blogs: [...state.blogs]
  };
}

const mapDispatchToProps = {
  addBlog
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
