import { combineReducers } from "redux";

import { reducer as adSlice } from "../slices/ad-slice";
import { reducer as adTypeSlice } from "../slices/ad-type-slice";
import { reducer as vehicleSlice } from "../slices/vehicle-slice";
import { reducer as VehicleTypeSlice } from "../slices/vehicle-type-slice";
import { reducer as categorySlice } from "../slices/category-slice";
import { reducer as brandSlice } from "../slices/brand-slice";
import { reducer as modelSlice } from "../slices/model-slice";
import { reducer as horsepowerSlice } from "../slices/horsepower-slice";
import { reducer as stateSlice } from "../slices/state-slice";

const rootReducer = combineReducers({
  ad: adSlice,
  adType: adTypeSlice,
  vehicle: vehicleSlice,
  vehicleType: VehicleTypeSlice,
  category: categorySlice,
  brand: brandSlice,
  model: modelSlice,
  horsepower: horsepowerSlice,
  state: stateSlice,
});

export default rootReducer;
