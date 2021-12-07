import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  userLoginReducer,
} from './reducers/userReducers'
import {
  Accountselection,
} from './reducers/AccountReducers'



const reducer = combineReducers({
 
  userLogin: userLoginReducer,
  accountInfo : Accountselection,

})





const middleware = [thunk]

const store = createStore(
  reducer,

  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
