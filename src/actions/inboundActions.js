import axios from "axios";
import {
  INBOUND_TALLY_REQUEST,
  INBOUND_TALLY_SUCCESS,
  INBOUND_TALLY_FAIL,
} from "../constants/inboundConstants";

export const Tally = (tally, item, Qty, Typ, lot, loc) => async (dispatch) => {
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
      "/api/receiving/item",
      { tally, item, Qty, Typ, lot, loc },
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
