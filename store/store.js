import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import modal from "./reducers/modalSlice";

const reducers = combineReducers({ modal });

export function makeStore() {
  const store = configureStore({ reducer: reducers });
  return store;
}

export const wrapper = createWrapper(makeStore);
