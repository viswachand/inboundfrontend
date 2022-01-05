import axios from "axios";
import {
  ACCOUNT_SELECTION_REQUEST,
  ACCOUNT_SELECTION_SUCCESS,
  ACCOUNT_SELECTION_FAIL,
  ACCOUNT_UPDATION_REQUEST,
  ACCOUNT_UPDATION_SUCCESS,
  ACCOUNT_UPDATION_FAIL,
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
      "/api/account/checkUser",

      config
    );

    dispatch({
      type: ACCOUNT_SELECTION_SUCCESS,
      payload: data,
    });

    // localStorage.setItem('accountInfo', JSON.stringify(data))
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

export const AccountUpdation = () => async (dispatch) => {
  try {
    dispatch({
      type: ACCOUNT_UPDATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/account/userSetting",

      config
    );

    dispatch({
      type: ACCOUNT_UPDATION_SUCCESS,
      payload: data,
    });

    // localStorage.setItem('accountInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: ACCOUNT_UPDATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
