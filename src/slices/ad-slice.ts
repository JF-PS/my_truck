import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

const name: string = "ad";

const initialState: any = {
  allIds: [1, 2, 3],
  byId: {
    1: {
      id: 1,
      title: "Camion à négocier",
      vehicle_id: 1,
      user_id: 1,
      add_type_id: 1,
      adress: "",
      price: 15623.54,
      picture: "",
    },
    2: {
      id: 2,
      title: "Camion tout neuf",
      vehicle_id: 2,
      user_id: 1,
      add_type_id: 1,
      adress: "",
      price: 15623.54,
      picture: "",
    },
    3: {
      id: 3,
      title: "Vannes aménager",
      vehicle_id: 3,
      user_id: 1,
      add_type_id: 1,
      adress: "",
      price: 15623.54,
      picture: "",
    },
  },
};

const slice: any = createSlice({
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

export const toggleDefaultEntity =
  (input: any, output: any, type: string = "get") =>
  async (dispatch: any) => {
    const entity = await adApi.searchMovie(input);
    dispatch(slice.actions[type](entity));
  };

const { reducer } = slice;
export { reducer };
