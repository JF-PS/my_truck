import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "adType";

const initialState: any = {
  allIds: [1, 2, 3],
  byId: {
    1: {
      id: 1,
      name: "Vente",
    },
    2: {
      id: 2,
      name: "Location",
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
