import axios from "axios";
import {
  INBOUND_TALLY_REQUEST,
  INBOUND_TALLY_SUCCESS,
  INBOUND_TALLY_FAIL,
  INBOUND_LOCATION_REQUEST,
  INBOUND_LOCATION_SUCCESS,
  INBOUND_LOCATION_FAIL,
  INBOUND_SAVE_SUCCESS,
  INBOUND_SAVE_REQUEST,
  INBOUND_SAVE_FAIL,
} from "../constants/inboundConstants";

export const Tally = (tallyNumber, item, lot1, lot2, lot3, LotUnitWeight, Quantity, InventoryType) => async (dispatch) => {
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
      { tallyNumber, item, lot1, lot2, lot3, LotUnitWeight, Quantity, InventoryType },
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
export const Location = (tallyNumber, lot1, lot2, lot3) => async (dispatch) => {
  try {
    dispatch({
      type: INBOUND_LOCATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/receiving/location",
      { tallyNumber, lot1, lot2, lot3},
      config
    );

    dispatch({
      type: INBOUND_LOCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INBOUND_LOCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};


export const Save = (tallyNumber, item, lot1, lot2, lot3, LotUnitWeight, Quantity,Loc, InventoryType) => async (dispatch) => {
  try {
    dispatch({
      type: INBOUND_SAVE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/receiving/data",
      { tallyNumber, item, lot1, lot2, lot3, LotUnitWeight, Quantity,Loc, InventoryType },
      config
    );

    dispatch({
      type: INBOUND_SAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INBOUND_SAVE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
