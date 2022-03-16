import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "app";

const listState = {
  title: "",
};

const initialState = {
  apps: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("apps", listState),
  },
});

export const { setValue } = createHandler(slice);

const { reducer } = slice;
export { reducer };
