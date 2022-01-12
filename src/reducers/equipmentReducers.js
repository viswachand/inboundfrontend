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

export const Equipmentselection = (state = {}, action) => {
  switch (action.type) {
    case EQUIPMENT_SELECTION_REQUEST:
      return { loading: true };
    case EQUIPMENT_SELECTION_SUCCESS:
      return { loading: false, EquipmentData: action.payload };
    case EQUIPMENT_SELECTION_FAIL:
      return { loading: false, EquipmentData: action.payload };
    default:
      return state;
  }
};

export const EquipmentUpdation = (state = {}, action) => {
  switch (action.type) {
    case EQUIPMENT_UPDATION_REQUEST:
      return { loading: true };
    case EQUIPMENT_UPDATION_SUCCESS:
      return { loading: false, EquipmentUpdationData: action.payload };
    case EQUIPMENT_UPDATION_FAIL:
      return { loading: false, EquipmentUpdationData: action.payload };
    default:
      return state;
  }
};

export const EquipmentDeletion = (state = {}, action) => {
  switch (action.type) {
    case EQUIPMENT_DELETION_REQUEST:
      return { loading: true };
    case EQUIPMENT_DELETION_SUCCESS:
      return { loading: false, EquipmentDeletionData: action.payload };
    case EQUIPMENT_DELETION_FAIL:
      return { loading: false, EquipmentDeletionData: action.payload };
    default:
      return state;
  }
};
