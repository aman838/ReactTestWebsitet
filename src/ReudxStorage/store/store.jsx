
import rootReducers from '../Reducers/rootReducer';

import {legacy_createStore as createStore} from "@reduxjs/toolkit"

import { combineReducers ,applyMiddleware} from "redux"

import { composeWithDevTools } from "redux-devtools-extension";

import { persistStore, persistReducer } from 'redux-persist'

import thunk from 'redux-thunk';

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }

const ThunkMiddleWare = applyMiddleware(thunk)
  
// const rootReducer = combineReducers(rootReducers)

const persistedReducer = persistReducer(persistConfig, rootReducers)  

export const store = createStore(persistedReducer, composeWithDevTools(ThunkMiddleWare))
 
 export const persistor = persistStore(store)