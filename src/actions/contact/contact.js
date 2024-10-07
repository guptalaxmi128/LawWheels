import * as api from "../../api";
import { ADD_CONTACT,RESEND_OTP,VERIFY_OTP } from "../../constants/actionTypes";

export const addContact = (contactInfo) => async (dispatch) => {
  try {
    const { data } = await api.addContact(contactInfo);
    dispatch({ type: ADD_CONTACT, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const verifyOtp = (otpInfo) => async (dispatch) => {
  try {
    const { data } = await api.verifyOtp(otpInfo);
    dispatch({ type: VERIFY_OTP, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const resendOtp = (otpInfo) => async (dispatch) => {
  try {
    const { data } = await api.resendOtp(otpInfo);
    dispatch({ type: RESEND_OTP, payload: data });
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
