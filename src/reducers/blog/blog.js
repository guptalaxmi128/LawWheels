import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  blog: [],
  blogBySlug: [],
  state: "idle",
  error: null,
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_BLOG:
      return {
        ...state,
        blog: action.payload,
      };
    case actionTypes.GET_BLOG_BY_SLUG:
      return {
        ...state,
        blogBySlug: action.payload,
      };

    default:
      return state;
  }
};

export default blogReducer;
