import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  heDetails: {},
  sheDetails: {},
  requiredDetails: {},
};

const mutualFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_HE_DETAILS:
      return {
        ...state,
        heDetails: action.payload,
      };
    case actionTypes.ADD_SHE_DETAILS:
      return {
        ...state,
        sheDetails: action.payload,
      };
    case actionTypes.ADD_REQUIRED_DETAILS:
      return {
        ...state,
        requiredDetails: action.payload,
      };
    default:
      return state;
  }
};

export default mutualFormReducer;
