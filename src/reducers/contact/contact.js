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
      case actionTypes.VERIFY_OTP:
        case actionTypes.RESEND_OTP:
        return {
          ...state,
          success: action.payload,
          error: null,
        };

    default:
      return state;
  }
};

export default contactReducer;
