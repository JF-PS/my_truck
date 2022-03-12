import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "horsepower";

const initialState: any = {
  allIds: [1, 2, 3, 4],
  byId: {
    1: {
      id: 1,
      nb: 90,
    },
    2: {
      id: 2,
      nb: 100,
    },
    3: {
      id: 3,
      nb: 110,
    },
    4: {
      id: 4,
      nb: 150,
    },
  },
};

const slice = createSlice({
  name,
  initialState,
  reducers: createReducer(name, initialState, {}),
});

export const {
  load,
  get: getEntity,
  getMultiple: getEntities,
  setIsLoading,
} = createHandler(slice, adApi);

const { reducer } = slice;
export { reducer };
