import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "adType";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  adTypes: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("adTypes", listState),
  },
});

export const { load: loadAdType, loadMultiple: loadAdTypes } =
  createHandler(slice);

const { reducer } = slice;
export { reducer };
