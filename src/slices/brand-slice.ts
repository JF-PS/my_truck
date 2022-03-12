import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "brand";

const initialState: any = {
  allIds: [1, 2, 3, 4, 5],
  byId: {
    1: {
      id: 1,
      name: "Iveco",
    },
    2: {
      id: 2,
      name: "Peugot",
    },
    3: {
      id: 3,
      name: "Renault",
    },
    4: {
      id: 4,
      name: "Citroën",
    },
    5: {
      id: 5,
      name: "autre",
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
