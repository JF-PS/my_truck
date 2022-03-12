import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "vehicleType";

const initialState: any = {
  allIds: [1, 2, 3],
  byId: {
    1: {
      id: 1,
      name: "fourgon",
    },
    2: {
      id: 2,
      name: "caisse",
    },
    3: {
      id: 3,
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
