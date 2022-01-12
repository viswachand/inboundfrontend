import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/userReducers";
import { Accountselection, AccountUpdation } from "./reducers/AccountReducers";
import { InboundTally, Location, Save } from "./reducers/inboundReducers";
import {
  Equipmentselection,
  EquipmentUpdation,
  EquipmentDeletion,
} from "./reducers/equipmentReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  accountInfo: Accountselection,
  accountUpdate: AccountUpdation,
  inboundStaging: InboundTally,
  Equipmentselection: Equipmentselection,
  EquipmentUpdation: EquipmentUpdation,
  EquipmentDeletion: EquipmentDeletion,
  Location : Location,
  Save: Save,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {

  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
