import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeComment } from "../Actions";

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    evt.preventDefault();
    let { removeComment, blog } = this.props;
    removeComment(blog, evt.target.name);
  }

  render() {
    let { comments } = this.props;
    let revisedComments = Object.entries(comments);
    return (
      <div>
        {revisedComments.map(comment => (
          <div key={comment[0]}>
            <p><button name={comment[0]} onClick={this.handleClick}>X</button> {comment[1]}</p>
          </div>))}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

const mapDispatchToProps = {
  removeComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
