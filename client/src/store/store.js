import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import dataReducer from './data/reducer'
import userReducer from './user/reducer'
import skillsReducer from './skills/reducer'
import inventoryReducer from './inventory/reducer'

const rootReducer = combineReducers({
  data: dataReducer,
  user: userReducer,
  skills: skillsReducer,
  inventory: inventoryReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
}
