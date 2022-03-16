import { createSlice } from "@reduxjs/toolkit";
import { adApi } from "../api/ad-api";
import { arrayToObj } from "../utils/format-obj-array";
import { cloneDeep } from "lodash";

import createReducer from "../utils/create-reducer";

const name = "ad";

const listState = {
  allIds: [],
  byId: {},
};

const initialState = {
  ads: cloneDeep(listState),
};

const slice = createSlice({
  name,
  initialState,
  reducers: {
    ...createReducer("ads", listState),
    getAd(state, action) {
      const entry = action.payload;
      const {
        id,
        title,
        description,
        vehicle_id,
        picture_id,
        user_id,
        type_id,
        adress,
        price,
      } = entry;

      const ad = {
        id,
        title,
        description,
        vehicle_id,
        picture_id,
        user_id,
        type_id,
        adress,
        price,
      };

      const byId = { [ad.id]: ad };
      const allIds = [ad.id];
      state["ads"] = { byId, allIds };
    },

    getMultipleAd(state, action) {
      const entries = action.payload;
      const ads = [...entries].map((entry) => {
        const {
          id,
          title,
          description,
          vehicle_id,
          picture_id,
          user_id,
          type_id,
          adress,
          price,
        } = entry;
        return {
          id,
          title,
          description,
          vehicle_id,
          picture_id,
          user_id,
          type_id,
          adress,
          price,
        };
      });

      const byId = arrayToObj(ads);
      const allIds = Object.keys(byId);

      state["ads"] = { byId, allIds };
    },
  },
});

export const getAdById = (input) => async (dispatch) => {
  const entry = await adApi.get(input);
  const { data } = entry;
  if (data) {
    dispatch(slice.actions["getAd"](data));
    const adsInfo = {
      AdPictures: [],
      type: {},
      vehicle: {},
      brand: {},
      category: {},
      horsepower: {},
      serialNumber: {},
      subCategory: {},
    };

    const { AdPictures, type, vehicle } = data;
    const { brand, category, horsepower, serialNumber, subCategory } = vehicle;
    adsInfo.AdPictures = [...adsInfo.AdPictures, ...AdPictures];
    adsInfo.type[type.id] = type;
    adsInfo.vehicle[vehicle.id] = vehicle;
    adsInfo.brand[brand.id] = brand;
    adsInfo.category[category.id] = category;
    adsInfo.horsepower[horsepower.id] = horsepower;
    adsInfo.serialNumber[serialNumber.id] = serialNumber;
    adsInfo.subCategory[subCategory.id] = subCategory;

    return adsInfo;
  }
};
export const getAllAd =
  (input, type = "getMultipleAd") =>
  async (dispatch) => {
    const entries = await adApi.getMultiple(input);
    const { rows } = entries.data;
    if (rows) {
      dispatch(slice.actions[type](rows));

      const adsInfo = {
        AdPictures: [],
        type: {},
        vehicle: {},
        horsepower: {},
      };

      rows.forEach((row) => {
        const { AdPictures, type, vehicle } = row;
        const { horsepower } = vehicle;
        adsInfo.AdPictures = [...adsInfo.AdPictures, ...AdPictures];
        adsInfo.type[type.id] = type;
        adsInfo.vehicle[vehicle.id] = vehicle;
        adsInfo.horsepower[horsepower.id] = horsepower;
      });

      return adsInfo;
    }
  };

const { reducer } = slice;
export { reducer };
