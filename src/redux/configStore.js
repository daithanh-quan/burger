import { combineReducers, createStore } from 'redux'
import BurgerReducer from './Reducer'

const rootReducers = combineReducers({
  //store
  BurgerReducer
})
export const store = createStore(rootReducers)