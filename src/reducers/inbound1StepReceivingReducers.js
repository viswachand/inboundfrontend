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

export const Inbound1StepReceivingTally = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_1STEP_RECEIVING_TALLY_REQUEST:
      return { loading: true };
    case INBOUND_1STEP_RECEIVING_TALLY_SUCCESS:
      return { loading: false, TallyNumber: action.payload };
    case INBOUND_1STEP_RECEIVING_TALLY_FAIL:
      return { loading: false, TallyNumber: action.payload };
    default:
      return state;
  }
};

export const Inbound1StepReceivingLocation = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_1STEP_RECEIVING_LOCATION_REQUEST:
      return { loading: true };
    case INBOUND_1STEP_RECEIVING_LOCATION_SUCCESS:
      return { loading: false, location: action.payload };
    case INBOUND_1STEP_RECEIVING_LOCATION_FAIL:
      return { loading: false, location: action.payload };
    default:
      return state;
  }
};

export const Inbound1StepReceivingSave = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_1STEP_RECEIVING_SAVE_REQUEST:
      return { loading: true };
    case INBOUND_1STEP_RECEIVING_SAVE_SUCCESS:
      return { loading: false, inboundDataSave: action.payload };
    case INBOUND_1STEP_RECEIVING_SAVE_FAIL:
      return { loading: false, inboundDataSave: action.payload };
    default:
      return state;
  }
};
