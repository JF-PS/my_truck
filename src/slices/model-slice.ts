import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "model";

const initialState: any = {
  allIds: [1, 2, 3],
  byId: {
    1: {
      id: 1,
      name: "35C12HPI",
    },
    2: {
      id: 2,
      name: "48D15FGT",
    },
    3: {
      id: 3,
      name: "54I44SQA",
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
