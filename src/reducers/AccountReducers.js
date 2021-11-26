import {
    ACCOUNT_SELECTION_REQUEST,
    ACCOUNT_SELECTION_SUCCESS,
    ACCOUNT_SELECTION_FAIL,
  } from "../constants/AccountConstants";
  
  
  
  export const Accountselection = (state = {}, action) => {
    switch (action.type) {
      case ACCOUNT_SELECTION_REQUEST:
        return { loading: true };
      case ACCOUNT_SELECTION_SUCCESS:
        return { loading: false, AccountData: action.payload };
      case ACCOUNT_SELECTION_FAIL:
        return { loading: false, AccountData: action.payload };
      default:
        return state;
    }
  };
  