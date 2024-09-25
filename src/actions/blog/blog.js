import * as api from "../../api";
import { GET_BLOG,GET_BLOG_BY_SLUG } from "../../constants/actionTypes";

export const getBlog = () => async (dispatch) => {
  try {
    const { data } = await api.getBlog();
    dispatch({ type: GET_BLOG, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getBlogBySlug = (slug) => async (dispatch) => {
    try {
      const { data } = await api.getBlogBySlug(slug);
      dispatch({ type: GET_BLOG_BY_SLUG, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };