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
      description: `Lorem ipsum dolor sit amet. Eos maiores perferendis eos delectus 
      quidem non quaerat modi aut fugit consequatur. Qui voluptas autem sed illo doloremque 
      non autem optio sed dolores odio nam fugiat temporibus vel debitis fugiat. Ex impedit 
      iure et corporis ipsum quo omnis sequi sit repellendus Quis rem sunt incidunt sed 
      minima unde. Aut praesentium repellat quo dignissimos iure quo minima dolores et adipisci 
      tempora qui laboriosam officia.`,
      vehicle_id: 1,
      user_id: 1,
      add_type_id: 1,
      adress: "",
      price: 15623.54,
      picture_id: 1,
    },
    2: {
      id: 2,
      title: "Caisse tout neuf",
      description: `Lorem ipsum dolor sit amet. Eos maiores perferendis eos delectus 
      quidem non quaerat modi aut fugit consequatur. Qui voluptas autem sed illo doloremque 
      non autem optio sed dolores odio nam fugiat temporibus vel debitis fugiat. Ex impedit 
      iure et corporis ipsum quo omnis sequi sit repellendus Quis rem sunt incidunt sed 
      minima unde. Aut praesentium repellat quo dignissimos iure quo minima dolores et adipisci 
      tempora qui laboriosam officia.`,
      vehicle_id: 2,
      user_id: 1,
      add_type_id: 2,
      adress: "",
      price: 15623.54,
      picture_id: 6,
    },
    3: {
      id: 3,
      title: "Vieu Camping Car",
      description: `Lorem ipsum dolor sit amet. Eos maiores perferendis eos delectus 
      quidem non quaerat modi aut fugit consequatur. Qui voluptas autem sed illo doloremque 
      non autem optio sed dolores odio nam fugiat temporibus vel debitis fugiat. Ex impedit 
      iure et corporis ipsum quo omnis sequi sit repellendus Quis rem sunt incidunt sed 
      minima unde. Aut praesentium repellat quo dignissimos iure quo minima dolores et adipisci 
      tempora qui laboriosam officia.`,
      vehicle_id: 3,
      user_id: 1,
      add_type_id: 1,
      adress: "",
      price: 15623.54,
      picture_id: 11,
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
