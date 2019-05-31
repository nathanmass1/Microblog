import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, ADD_COMMENT, REMOVE_COMMENT } from './ActionTypes';
import uuid from "uuid/v4";

const INITIAL_STATE = {
  blogs: [{
    title: "GW",
    description: "Washington or Walker Bush",
    body: "test",
    id: "1",
    comments: {first:"payload"}
  }]
}

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_BLOG:
      return { ...state, blogs: [...state.blogs, { ...action.payload, id: uuid() }] };

    case REMOVE_BLOG:
      let copyBlogsForRemove = state.blogs.filter(blog => blog.id !== action.payload);
      return { ...state, blogs: copyBlogsForRemove };

    case EDIT_BLOG:
      let copyBlogsForEdit = state.blogs.filter(blog => blog.id !== action.payload.id);
      copyBlogsForEdit.push(action.payload);
      return { ...state, blogs: copyBlogsForEdit };

    case ADD_COMMENT:
      let copyBlogsForAddCom = state.blogs.filter(blog => blog.id !== action.payload.blog.id);
      let addCommentBlog = action.payload.blog;
      addCommentBlog.comments[action.payload.comment.id] = action.payload.comment.comment;
      copyBlogsForAddCom.push(addCommentBlog);
      return { ...state, blogs: copyBlogsForAddCom };

    case REMOVE_COMMENT:
      let copyBlogsForRemoveCom = state.blogs.filter(blog => blog.id !== action.payload.blog.id);
      let removeCommentBlog = action.payload.blog;
      delete removeCommentBlog.comments[action.payload.commentID]
      copyBlogsForRemoveCom.push(removeCommentBlog);
      return { ...state, blogs: copyBlogsForRemoveCom };

    default:
      return state;
  }
}

export default rootReducer;