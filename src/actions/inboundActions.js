import axios from "axios";
import {
  INBOUND_TALLY_REQUEST,
  INBOUND_TALLY_SUCCESS,
  INBOUND_TALLY_FAIL,
} from "../constants/inboundConstants";

export const Tally = (tallyNumber) => async (dispatch) => {

    
  try {
    dispatch({
      type: INBOUND_TALLY_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/inbound/tallyNumber",
      {tallyNumber},
      config
    );

    dispatch({
      type: INBOUND_TALLY_SUCCESS,
      payload: data,
    });


  } catch (error) {
    dispatch({
      type: INBOUND_TALLY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

