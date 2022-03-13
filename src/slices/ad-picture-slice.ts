import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";

import createHandler from "../utils/create-handler";
import createReducer from "../utils/create-reducer";

import camionPicture1 from "../assets/pictures/Camion1/1.jpg";
import camionPicture2 from "../assets/pictures/Camion1/2.jpg";
import camionPicture3 from "../assets/pictures/Camion1/3.jpg";
import camionPicture4 from "../assets/pictures/Camion1/4.jpg";
import camionPicture5 from "../assets/pictures/Camion1/5.jpg";

import caissePicture1 from "../assets/pictures/Camion2/1.jpg";
import caissePicture2 from "../assets/pictures/Camion2/2.jpg";
import caissePicture3 from "../assets/pictures/Camion2/3.jpg";
import caissePicture4 from "../assets/pictures/Camion2/4.jpg";
import caissePicture5 from "../assets/pictures/Camion2/5.jpg";

import campingCarPicture1 from "../assets/pictures/Camion3/1.jpg";
import campingCarPicture2 from "../assets/pictures/Camion3/2.jpg";
import campingCarPicture3 from "../assets/pictures/Camion3/3.jpg";
import campingCarPicture4 from "../assets/pictures/Camion3/4.jpg";

const name: string = "adPicture";

const initialState: any = {
  allIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  byId: {
    1: {
      id: 1,
      ad_id: 1,
      source: camionPicture1,
    },
    2: {
      id: 2,
      ad_id: 1,
      source: camionPicture2,
    },
    3: {
      id: 3,
      ad_id: 1,
      source: camionPicture3,
    },
    4: {
      id: 4,
      ad_id: 1,
      source: camionPicture4,
    },
    5: {
      id: 5,
      ad_id: 1,
      source: camionPicture5,
    },
    6: {
      id: 6,
      ad_id: 2,
      source: caissePicture1,
    },
    7: {
      id: 7,
      ad_id: 2,
      source: caissePicture2,
    },
    8: {
      id: 8,
      ad_id: 2,
      source: caissePicture3,
    },
    9: {
      id: 9,
      ad_id: 2,
      source: caissePicture4,
    },
    10: {
      id: 10,
      ad_id: 2,
      source: caissePicture5,
    },
    11: {
      id: 11,
      ad_id: 3,
      source: campingCarPicture1,
    },
    12: {
      id: 12,
      ad_id: 3,
      source: campingCarPicture2,
    },
    13: {
      id: 13,
      ad_id: 3,
      source: campingCarPicture3,
    },
    14: {
      id: 14,
      ad_id: 3,
      source: campingCarPicture4,
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
