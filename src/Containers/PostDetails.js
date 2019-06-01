import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import { connect } from "react-redux";
import { editBlog, removeBlog, getBlogFromAPI } from "../Actions";


class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      title: '',
      description: this.props.description,
      body: this.props.body,
      id: this.props.match.params.id,
      comments: []
    }
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBlogFromAPI(id);
    let blog = this.props.blogs.find(blog => blog.id === id);
    this.setState({ ...blog, displayForm: false });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editBlog(this.state);
    this.setState({
      displayForm: false
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      displayForm: false
    })
  }

  handleEdit(e) {
    e.preventDefault();
    this.setState({
      displayForm: true
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.removeBlog(this.state.id);
    this.props.history.push("/");
  }

  render() {
    const id = this.props.match.params.id;
    let blog = this.props.blogs.find(blog => blog.id === +id);
    console.log("BLOG", blog);

    let postView;
    if (!this.state.displayForm) {
      postView = (
        <div>
          <h1>{blog.title} </h1>
          <h3> {blog.description} </h3>
          <p> {blog.body} </p>
          <button onClick={this.handleEdit}> Edit </button>
          <button onClick={this.handleDelete}> Delete </button>
        </div>
      )
    } else {
      postView = <div className="blog-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="title"></label>
            <input
              name="title"
              id="form-element"
              value={this.state.title}
              placeholder={blog.title}
              onChange={this.handleChange}
              required />
          </div>
          <div>
            <label htmlFor="description"></label>
            <input
              name="description"
              id="form-element"
              value={this.state.description}
              placeholder={blog.description}
              onChange={this.handleChange}
              required />
          </div>
          <div>
            <label htmlFor="body"></label>
            <input
              name="body"
              id="form-element"
              value={this.state.body}
              placeholder={blog.body}
              onChange={this.handleChange}
              required
            />
          </div>
          <button className="submit">Edit Post</button>
        </form>
        <button className="cancel" onClick={this.handleCancel}>Cancel</button>
      </div>
    }
    return (
      <div>
        {postView}
        <hr />
        <h1>Comments</h1>
        < CommentList comments={blog.comments} blog={blog} />
        < CommentForm blog={blog} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { blogs: state.blogs }
}

const mapDispatchToProps = {
  editBlog, removeBlog,  getBlogFromAPI 
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);