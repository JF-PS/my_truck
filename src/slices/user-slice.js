import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "user";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  users: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("users", listState),
  },
});

export const { load, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
