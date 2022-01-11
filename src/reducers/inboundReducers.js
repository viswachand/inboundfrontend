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



export const InboundTally = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_TALLY_REQUEST:
      return { loading: true };
    case INBOUND_TALLY_SUCCESS:
      return { loading: false, TallyNumber: action.payload };
    case INBOUND_TALLY_FAIL:
      return { loading: false, TallyNumber: action.payload };
    default:
      return state;
  }
};

export const Location = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_LOCATION_REQUEST:
      return { loading: true };
    case INBOUND_LOCATION_SUCCESS:
      return { loading: false, location: action.payload };
    case INBOUND_LOCATION_FAIL:
      return { loading: false, location: action.payload };
    default:
      return state;
  }
};

export const Save = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_SAVE_REQUEST:
      return { loading: true };
    case INBOUND_SAVE_SUCCESS:
      return { loading: false, inboundDataSave: action.payload };
    case INBOUND_SAVE_FAIL:
      return { loading: false, inboundDataSave: action.payload };
    default:
      return state;
  }
};
