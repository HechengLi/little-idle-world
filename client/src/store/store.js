import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import skillsReducer from './skills/reducers'
import inventoryReducer from './inventory/reducers'

const rootReducer = combineReducers({
  skills: skillsReducer,
  inventory: inventoryReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  )
}