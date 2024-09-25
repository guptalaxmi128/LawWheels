import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  contact: {},
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contact: action.payload,
      };

    default:
      return state;
  }
};

export default contactReducer;
