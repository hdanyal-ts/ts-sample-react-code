import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import accountReducer from './slices/accountSlice'
import timesheetReducer from './slices/timesheetSlice'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  account: accountReducer,
  timesheet: timesheetReducer
})

const persistConfig = { key: 'root', storage }

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store
