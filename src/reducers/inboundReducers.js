import {
  INBOUND_TALLY_REQUEST,
  INBOUND_TALLY_SUCCESS,
  INBOUND_TALLY_FAIL,
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
