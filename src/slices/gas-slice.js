import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "gas";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  gass: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("gass", listState),
  },
});

export const { load: loadGas, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
