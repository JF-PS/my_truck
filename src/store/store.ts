import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import {
  configureStore,
  createSelector as useReduxCreateSelector,
} from "@reduxjs/toolkit";
import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true",
});

export const createSelector = useReduxCreateSelector;
export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();
export default store;
