import axios from "axios";
import {
  INBOUND_PUTAWAY_TALLY_REQUEST,
  INBOUND_PUTAWAY_TALLY_SUCCESS,
  INBOUND_PUTAWAY_TALLY_FAIL,
  INBOUND_PUTAWAY_LOCATION_REQUEST,
  INBOUND_PUTAWAY_LOCATION_SUCCESS,
  INBOUND_PUTAWAY_LOCATION_FAIL,
  INBOUND_PUTAWAY_SAVE_SUCCESS,
  INBOUND_PUTAWAY_SAVE_REQUEST,
  INBOUND_PUTAWAY_SAVE_FAIL,
} from "../constants/inboundPutAwayConstants";

export const Tally =
  (
    tallyNumber,
    item,
    lot1,
    lot2,
    lot3,
    LotUnitWeight,
    Quantity,
    InventoryType
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: INBOUND_PUTAWAY_TALLY_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/inboundPutAway/item",
        {
          tallyNumber,
          item,
          lot1,
          lot2,
          lot3,
          LotUnitWeight,
          Quantity,
          InventoryType,
        },
        config
      );

      dispatch({
        type: INBOUND_PUTAWAY_TALLY_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: INBOUND_PUTAWAY_TALLY_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
export const Location = (tallyNumber, locations) => async (dispatch) => {
  try {
    dispatch({
      type: INBOUND_PUTAWAY_LOCATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/inboundPutAway/location",
      { tallyNumber, locations },
      config
    );

    dispatch({
      type: INBOUND_PUTAWAY_LOCATION_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: INBOUND_PUTAWAY_LOCATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const Save =
  (
    tallyNumber,
    item,
    lot1,
    lot2,
    lot3,
    location,
    LotUnitWeight,
    Quantity,
    InventoryType
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: INBOUND_PUTAWAY_SAVE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/inboundPutAway/data",
        {
          tallyNumber,
          item,
          lot1,
          lot2,
          lot3,
          location,
          LotUnitWeight,
          Quantity,
          InventoryType,
        },
        config
      );

      dispatch({
        type: INBOUND_PUTAWAY_SAVE_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: INBOUND_PUTAWAY_SAVE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
