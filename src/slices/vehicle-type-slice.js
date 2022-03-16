import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "vehicleType";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  vehicleTypes: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("vehicleTypes", listState),
  },
});

export const { load: loadVehicleType, loadMultiple } = createHandler(slice);

const { reducer } = slice;
export { reducer };
