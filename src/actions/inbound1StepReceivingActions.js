import axios from "axios";
import {
  INBOUND_1STEP_RECEIVING_TALLY_REQUEST,
  INBOUND_1STEP_RECEIVING_TALLY_SUCCESS,
  INBOUND_1STEP_RECEIVING_TALLY_FAIL,
  INBOUND_1STEP_RECEIVING_LOCATION_REQUEST,
  INBOUND_1STEP_RECEIVING_LOCATION_SUCCESS,
  INBOUND_1STEP_RECEIVING_LOCATION_FAIL,
  INBOUND_1STEP_RECEIVING_SAVE_SUCCESS,
  INBOUND_1STEP_RECEIVING_SAVE_REQUEST,
  INBOUND_1STEP_RECEIVING_SAVE_FAIL,
} from "../constants/inbound1StepReceivingConstants";

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
        type: INBOUND_1STEP_RECEIVING_TALLY_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/inbound1Step/item",
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

      return data;

      dispatch({
        type: INBOUND_1STEP_RECEIVING_TALLY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: INBOUND_1STEP_RECEIVING_TALLY_FAIL,
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
      type: INBOUND_1STEP_RECEIVING_LOCATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/inbound1Step/location",
      { tallyNumber, locations },
      config
    );
    return data;
    dispatch({
      type: INBOUND_1STEP_RECEIVING_LOCATION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INBOUND_1STEP_RECEIVING_LOCATION_FAIL,
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
    LotUnitWeight,
    Quantity,
    Loc,
    InventoryType
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: INBOUND_1STEP_RECEIVING_SAVE_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/inbound1Step/data",
        {
          tallyNumber,
          item,
          lot1,
          lot2,
          lot3,
          LotUnitWeight,
          Quantity,
          Loc,
          InventoryType,
        },
        config
      );
      return data;

      dispatch({
        type: INBOUND_1STEP_RECEIVING_SAVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: INBOUND_1STEP_RECEIVING_SAVE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
