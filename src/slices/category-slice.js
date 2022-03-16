import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "category";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  categories: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("categories", listState),
  },
});

export const { load: loadCategory, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
