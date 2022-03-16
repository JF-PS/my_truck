import { createSlice } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name = "adPicture";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  adPictures: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("adPictures", listState),
  },
});

export const { load: loadPicture, loadMultiple: loadPictures } =
  createHandler(slice);

const { reducer } = slice;
export { reducer };
