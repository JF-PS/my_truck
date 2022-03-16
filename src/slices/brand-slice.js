import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "brand";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  brands: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("brands", listState),
  },
});

export const { load: loadBrand, loadMultiple } = createHandler(slice);
const { reducer } = slice;
export { reducer };
