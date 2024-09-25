import * as api from "../../api";
import { ADD_REACH_OUT } from "../../constants/actionTypes";

export const addReachOut = (reachOutInfo) => async (dispatch) => {
  try {
    const { data } = await api.addReachOut(reachOutInfo);
    dispatch({ type: ADD_REACH_OUT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
