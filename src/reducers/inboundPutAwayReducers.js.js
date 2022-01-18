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

export const InboundPutAwayTally = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_PUTAWAY_TALLY_REQUEST:
      return { loading: true };
    case INBOUND_PUTAWAY_TALLY_SUCCESS:
      return { loading: false, TallyNumber: action.payload };
    case INBOUND_PUTAWAY_TALLY_FAIL:
      return { loading: false, TallyNumber: action.payload };
    default:
      return state;
  }
};

export const InboundPutAwayLocation = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_PUTAWAY_LOCATION_REQUEST:
      return { loading: true };
    case INBOUND_PUTAWAY_LOCATION_SUCCESS:
      return { loading: false, location: action.payload };
    case INBOUND_PUTAWAY_LOCATION_FAIL:
      return { loading: false, location: action.payload };
    default:
      return state;
  }
};

export const InboundPutAwaySave = (state = {}, action) => {
  switch (action.type) {
    case INBOUND_PUTAWAY_SAVE_REQUEST:
      return { loading: true };
    case INBOUND_PUTAWAY_SAVE_SUCCESS:
      return { loading: false, inboundDataSave: action.payload };
    case INBOUND_PUTAWAY_SAVE_FAIL:
      return { loading: false, inboundDataSave: action.payload };
    default:
      return state;
  }
};
