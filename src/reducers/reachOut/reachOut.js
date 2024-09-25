import * as actionTypes from "../../constants/actionTypes";

const initialState = {
  reactOut: {},
};

const reachOutReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REACH_OUT:
      return {
        ...state,
        reachOut: action.payload,
      };

    default:
      return state;
  }
};

export default reachOutReducer;
