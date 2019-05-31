import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, ADD_COMMENT, REMOVE_COMMENT } from './ActionTypes';

export function addBlog(blog) {
  return {
    type: ADD_BLOG,
    payload: blog
  }
}

export function removeBlog(blogID) {
  return {
    type: REMOVE_BLOG,
    payload: blogID
  }
}

export function editBlog(blog) {
  return {
    type: EDIT_BLOG,
    payload: blog
  }
}

export function addComment(blog, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      blog, comment
    }
  }
}

export function removeComment(blog, commentID) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      blog, commentID
    }
  }
}