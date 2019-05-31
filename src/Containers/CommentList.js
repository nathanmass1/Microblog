import React, { Component } from 'react'

export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    let { deleteComment, blog, comments } = this.props;
    let comment = comments.find(comment => comment.id === evt.target.name);
    deleteComment(blog, comment);
  }

  render() {
    let { comments } = this.props;
    console.log("In comments list, the props are: ", this.props);
    return (
      <div>
        {comments.map(comment => (
          <div>
            <p><button name={comment.id} onClick={this.handleClick}>X</button> {comment.comment}</p>
          </div>))}
      </div>
    )
  }
}
