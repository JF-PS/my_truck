import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "horsepower";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  horsepowers: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("horsepowers", listState),
  },
});

export const { load: loadHorsepower, loadMultiple: loadHorsepowers } =
  createHandler(slice);

const { reducer } = slice;
export { reducer };
