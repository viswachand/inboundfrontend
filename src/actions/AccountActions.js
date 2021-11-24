import axios from "axios";
import {
  ACCOUNT_SELECTION_REQUEST,
  ACCOUNT_SELECTION_SUCCESS,
  ACCOUNT_SELECTION_FAIL,
} from "../constants/AccountConstants";

export const AccountSelection = () => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_SELECTION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/account/user",
    
      config
    );

    dispatch({
      type: ACCOUNT_SELECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ACCOUNT_SELECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
