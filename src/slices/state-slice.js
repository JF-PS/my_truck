import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "state";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  states: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("states", listState),
  },
});

export const { load, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
