import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "model";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  models: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("models", listState),
  },
});

export const { load: loadModel, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
