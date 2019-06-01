import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, ADD_COMMENT, REMOVE_COMMENT, LOAD_BLOGS, SHOW_ERR, SHOW_SPINNER, LOAD_COMMENTS, LOAD_BLOG } from './ActionTypes';
import axios from 'axios';

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

export function addCommentToAPI(blog, text) {
  return async function (dispatch) {
    try {
      let res = await axios.post(`http://localhost:5000/api/posts/${blog.id}/comments/`, {text} )
      dispatch(addComment(blog, res.data))
    } catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}


 function addComment(blog, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      blog, comment
    }
  }
}

export function removeCommentFromAPI(blog, commentID) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${blog.id}/comments/${commentID}`)
      dispatch(removeComment(blog, commentID))

    } catch(err) {
      dispatch(showErr(err.response.data));
    }
  
  }
}

function removeComment(blog, commentID) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      blog, commentID
    }
  }
}

export function getBlogsFromAPI() {
  return async function (dispatch) {
    dispatch(startLoad());
    try {
      let res = await axios.get('http://localhost:5000/api/posts');
      dispatch(getBlogs(res.data));
      res.data.forEach(async function(blog){ 
        let comm = await axios.get(`http://localhost:5000/api/posts/${blog.id}/comments`);
      dispatch(getComments(comm.data, blog.id));
      });
    }

    catch (err) {
      dispatch(showErr(err));
    }
  }
}

function getBlogs(blogs) {
  return {type: LOAD_BLOGS, blogs};
}

function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

function startLoad() {
  return { type: SHOW_SPINNER}
}


function getComments(comments, blogID) {
  return {type: LOAD_COMMENTS, payload: {comments, blogID}
}
}

export function getBlogFromAPI(blogID) {
  return async function (dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`http://localhost:5000/api/posts/${blogID}`);
      dispatch(getBlog(res.data));
      }
    catch (err) {
      dispatch(showErr(err.response.data));
    }
  }
}

function getBlog(blog) {
  return {type: LOAD_BLOG, blog};
}