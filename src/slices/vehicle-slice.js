import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "vehicle";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  vehicles: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("vehicles", listState),
  },
});

export const { load: loadVehicle, loadMultiple: loadVehicles } =
  createHandler(slice);

const { reducer } = slice;
export { reducer };
