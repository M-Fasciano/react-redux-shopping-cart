import { createStore, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import rootReducer from "./rootReducer"; // the value from combineReducers

const persistConfig = {
  key: "root",
  storage: storage,
};

const enhancers = compose(composeWithDevTools(applyMiddleware(thunk)));

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, enhancers);
export const persistor = persistStore(store);
