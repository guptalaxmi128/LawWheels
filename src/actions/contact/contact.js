import * as api from "../../api";
import { ADD_CONTACT } from "../../constants/actionTypes";

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
