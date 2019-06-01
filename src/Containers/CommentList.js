import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeCommentFromAPI } from "../Actions";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    let { removeCommentFromAPI, blog } = this.props;
    removeCommentFromAPI(blog, evt.target.name);
  }

  render() {
    let { comments } = this.props;
    // let revisedComments = Object.entries(comments);
    return (
      <div>
        {comments.map(comment => (
          <div key={comment.id}>
            <p><button name={comment.id} onClick={this.handleClick}>X</button> {comment.text}</p>
          </div>))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  removeCommentFromAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
