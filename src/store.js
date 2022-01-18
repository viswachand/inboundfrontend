import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import { Accountselection, AccountUpdation } from "./reducers/AccountReducers";
import { InboundTally, Location, Save } from "./reducers/inboundReducers";
import {
  Inbound1StepReceivingTally,
  Inbound1StepReceivingLocation,
  Inbound1StepReceivingSave,
} from "./reducers/inbound1StepReceivingReducers";
import {
  InboundPutAwayTally,
  InboundPutAwayLocation,
  InboundPutAwaySave,
} from "./reducers/inboundPutAwayReducers.js";

import {
  Equipmentselection,
  EquipmentUpdation,
  EquipmentDeletion,
} from "./reducers/equipmentReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  accountInfo: Accountselection,
  accountUpdate: AccountUpdation,
  Equipmentselection: Equipmentselection,
  EquipmentUpdation: EquipmentUpdation,
  EquipmentDeletion: EquipmentDeletion,
  inboundStaging: InboundTally,
  inboundStagingLocation: Location,
  inboundStagingSave: Save,
  Inbound1StepReceivingTally: Inbound1StepReceivingTally,
  Inbound1StepReceivingLocation: Inbound1StepReceivingLocation,
  Inbound1StepReceivingSave: Inbound1StepReceivingSave,
  InboundPutAwayTally: InboundPutAwayTally,
  InboundPutAwayLocation: InboundPutAwayLocation,
  InboundPutAwaySave: InboundPutAwaySave,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
