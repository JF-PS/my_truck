import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "vehicle";

const initialState: any = {
  allIds: [1, 2, 3],
  byId: {
    1: {
      id: 1,
      category_id: 1,
      vehicle_type_id: 1,
      state_id: 1,
      brand_id: 1,
      model_id: 1,
      gas_id: 1,
      horsepower_id: 1,
      year: new Date(),
      date_circulation: new Date(),
      kilometers: 15243.56,
    },
    2: {
      id: 2,
      category_id: 1,
      vehicle_type_id: 1,
      state_id: 1,
      brand_id: 1,
      model_id: 1,
      gas_id: 1,
      horsepower_id: 1,
      year: new Date(),
      date_circulation: new Date(),
      kilometers: 15243.56,
    },
    3: {
      id: 3,
      category_id: 1,
      vehicle_type_id: 1,
      state_id: 1,
      brand_id: 1,
      model_id: 1,
      gas_id: 1,
      horsepower_id: 1,
      year: new Date(),
      date_circulation: new Date(),
      kilometers: 15243.56,
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
