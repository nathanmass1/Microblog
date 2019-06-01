import { ADD_BLOG, REMOVE_BLOG, EDIT_BLOG, ADD_COMMENT, REMOVE_COMMENT, SHOW_ERR, SHOW_SPINNER, LOAD_BLOGS, LOAD_COMMENTS, LOAD_BLOG } from './ActionTypes';
import uuid from "uuid/v4";

const INITIAL_STATE = {
  blogs: [{
    title: "GW",
    description: "Washington or Walker Bush",
    body: "test",
    id: 1,
    comments: [{ first: "payload" }]
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
      addCommentBlog.comments = [...addCommentBlog.comments, action.payload.comment];
      copyBlogsForAddCom.push(addCommentBlog);
      return { ...state, blogs: copyBlogsForAddCom };

    case REMOVE_COMMENT:
      let copyBlogsForRemoveCom = state.blogs.filter(blog => blog.id !== action.payload.blog.id);
      let removeCommentBlog = action.payload.blog;
      removeCommentBlog.comments = removeCommentBlog.comments.filter(comment => comment.id !== +action.payload.commentID)
      copyBlogsForRemoveCom.push(removeCommentBlog);
      return { ...state, blogs: copyBlogsForRemoveCom };

    case SHOW_SPINNER:

      return state;

    case LOAD_BLOGS:
      let blogs = action.blogs;
      console.log(action.blogs);
      let newBlogs = blogs.filter(blog => blog.id !== state.blogs[0].id)
      newBlogs.push(...state.blogs)
      console.log("NEW BLOGS", newBlogs)
      return { ...state, blogs: newBlogs };

    case LOAD_BLOG:
      let copyBlogsForLoad = state.blogs.filter(blog => blog.id !== action.blog.id);
      copyBlogsForLoad.push(action.blog);
      return { ...state, blogs: copyBlogsForLoad };

    case SHOW_ERR:
      console.warn("YOU GOT AN ERROR")
      return state;

    case LOAD_COMMENTS:
      let copyBlogsForLoadCom = state.blogs.filter(blog => blog.id !== action.payload.blogID);
      let addCommentsToBlog = state.blogs.find(blog => blog.id === action.payload.blogID);
      addCommentsToBlog.comments = action.payload.comments;
      copyBlogsForLoadCom.push(addCommentsToBlog);
      return { ...state, blogs: copyBlogsForLoadCom };

    default:
      return state;
  }
}

export default rootReducer;