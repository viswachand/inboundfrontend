import axios from "axios";
import {
  EQUIPMENT_SELECTION_REQUEST,
  EQUIPMENT_SELECTION_SUCCESS,
  EQUIPMENT_SELECTION_FAIL,
  EQUIPMENT_UPDATION_REQUEST,
  EQUIPMENT_UPDATION_SUCCESS,
  EQUIPMENT_UPDATION_FAIL,
  EQUIPMENT_DELETION_REQUEST,
  EQUIPMENT_DELETION_SUCCESS,
  EQUIPMENT_DELETION_FAIL,
} from "../constants/equipmentConstants";

export const EquipmentSelection = () => async (dispatch) => {
  try {
    dispatch({
      type: EQUIPMENT_SELECTION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/equipment/select",

      config
    );

    dispatch({
      type: EQUIPMENT_SELECTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EQUIPMENT_SELECTION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const EquipmentUpdation = () => async (dispatch) => {
  try {
    dispatch({
      type: EQUIPMENT_UPDATION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/equipment/update",

      config
    );

    dispatch({
      type: EQUIPMENT_UPDATION_SUCCESS,
      payload: data,
    });

    // localStorage.setItem('accountInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: EQUIPMENT_UPDATION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const EquipmentDeletion = () => async (dispatch) => {
  try {
    dispatch({
      type: EQUIPMENT_DELETION_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      "/api/equipment/delete",

      config
    );

    dispatch({
      type: EQUIPMENT_DELETION_SUCCESS,
      payload: data,
    });

    // localStorage.setItem('accountInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: EQUIPMENT_DELETION_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
