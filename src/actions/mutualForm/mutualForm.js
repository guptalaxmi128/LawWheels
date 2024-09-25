import * as api from "../../api";
import {
ADD_HE_DETAILS,
ADD_SHE_DETAILS,
ADD_REQUIRED_DETAILS,
GET_DIVORCE_DETAILS
} from "../../constants/actionTypes";

export const addHeDetails = (userInfo) => async (dispatch) => {
  try {
    const { data } = await api.addHeDetails(userInfo);
    dispatch({ type: ADD_HE_DETAILS, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const addSheDetails = (userInfo) => async (dispatch) => {
    try {
      const { data } = await api.addSheDetails(userInfo);
      dispatch({ type: ADD_SHE_DETAILS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

export const getDivorceDetails = () => async (dispatch) => {
    try {
      const { data } = await api.getDivorceDetails();
      dispatch({ type: GET_DIVORCE_DETAILS, payload: data });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  export const addRequiredDetails = (userInfo) => async (dispatch) => {
    try {
      const response = await api.addRequiredDetails(userInfo);
      dispatch({ type: ADD_REQUIRED_DETAILS, payload: response.data });
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

