import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "user";

const initialState: any = {
  allIds: [1],
  byId: {
    1: {
      id: 1,
      pseudo: "Mathieu",
      phone: "06 98 74 26 98",
      mail: "mathieu@test.com",
    },
    2: {
      id: 2,
      pseudo: "Noémie",
      phone: "07 54 26 33 45",
      mail: "noemie@test.com",
    },
    3: {
      id: 3,
      pseudo: "Valentin",
      phone: "02 28 13 13 37",
      mail: "valentin@test.com",
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
