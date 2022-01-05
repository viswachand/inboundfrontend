import {
  ACCOUNT_SELECTION_REQUEST,
  ACCOUNT_SELECTION_SUCCESS,
  ACCOUNT_SELECTION_FAIL,
  ACCOUNT_UPDATION_REQUEST,
  ACCOUNT_UPDATION_SUCCESS,
  ACCOUNT_UPDATION_FAIL,
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
export const AccountUpdation = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNT_UPDATION_REQUEST:
      return { loading: true };
    case  ACCOUNT_UPDATION_SUCCESS:
      return { loading: false, AccountUpdationData: action.payload };
    case ACCOUNT_UPDATION_FAIL:
      return { loading: false, AccountUpdationData: action.payload };
    default:
      return state;
  }
};
