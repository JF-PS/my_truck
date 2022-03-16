import { useMemo } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

import RowBox from "../../../styled/row-box";
import AdCharacteristicStyled from "./ad-characteristic-styled";

const selector = createSelector(
  [
    (state) => state.ad.ads.byId,
    (state) => state.horsepower.horsepowers.byId,
    (state) => state.vehicle.vehicles.byId,
    (state) => state.adPicture.adPictures.byId,
    (state) => state.brand.brands.byId,
    (state) => state.model.models.byId,
    (state) => state.state.states.byId,
    (state) => state.category.categories.byId,
    (state) => state.vehicleType.vehicleTypes.byId,
    (state) => state.gas.gass.byId,
  ],
  (
    ads,
    horsepowers,
    vehicles,
    pictures,
    brands,
    models,
    states,
    categories,
    vehiculeTypes,
    gas
  ) => ({
    ads,
    horsepowers,
    vehicles,
    pictures,
    brands,
    models,
    states,
    categories,
    vehiculeTypes,
    gas,
  })
);

const AdCharacteristic = (props) => {
  const { id } = props;

  const {
    ads = {},
    horsepowers = {},
    vehicles = {},
    brands = {},
    models = {},
    states = {},
    categories = {},
    vehiculeTypes = {},
    gas = {},
  } = useSelector(selector);

  const { vehicle_id } = useMemo(() => {
    if (!isEmpty(ads[id])) return ads[id];
    return {};
  }, [ads, id]);

  const {
    horsepower_id,
    year = "",
    kilometers = 0,
    category_id,
    sub_category_id,
    state_id,
    brand_id,
    serial_number_id,
    gas_id,
  } = useMemo(() => {
    if (!isEmpty(vehicles[vehicle_id])) return vehicles[vehicle_id];
    return {};
  }, [vehicles, vehicle_id]);

  const { name: model = "" } = useMemo(() => {
    if (!isEmpty(models[serial_number_id])) return models[serial_number_id];
    return {};
  }, [models, serial_number_id]);

  const { name: category = "" } = useMemo(() => {
    if (!isEmpty(categories[category_id])) return categories[category_id];
    return {};
  }, [categories, category_id]);

  const { name: nbHorse = 0 } = useMemo(() => {
    if (!isEmpty(horsepowers[horsepower_id])) return horsepowers[horsepower_id];
    return {};
  }, [horsepowers, horsepower_id]);

  const { name: vehiculeType = "" } = useMemo(() => {
    if (!isEmpty(vehiculeTypes[sub_category_id]))
      return vehiculeTypes[sub_category_id];
    return {};
  }, [vehiculeTypes, sub_category_id]);

  const { name: brand = "" } = useMemo(() => {
    if (!isEmpty(brands[brand_id])) return brands[brand_id];
    return {};
  }, [brands, brand_id]);

  const { name: state = "vide" } = useMemo(() => {
    if (!isEmpty(states[state_id])) return states[state_id];
    return {};
  }, [states, state_id]);

  const { name: gaz = "essence" } = useMemo(() => {
    if (!isEmpty(gas[gas_id])) return gas[gas_id];
    return {};
  }, [gas, gas_id]);

  const characteristics = [
    {
      label: "Kilometre :",
      value: `${kilometers} km`,
    },
    {
      label: "Chevaux :",
      value: `${nbHorse} cv`,
    },
    {
      label: "Année :",
      value: `${year}`,
    },
    {
      label: "Model :",
      value: `${model}`,
    },
    {
      label: "Category :",
      value: `${category}`,
    },
    {
      label: "Type :",
      value: `${vehiculeType}`,
    },
    {
      label: "Marque :",
      value: `${brand}`,
    },
    {
      label: "Etat :",
      value: `${state}`,
    },
    {
      label: "gaz :",
      value: `${gaz}`,
    },
  ];

  return (
    <AdCharacteristicStyled>
      <RowBox>
        <Typography component="p">Caractéristique du véhicule : </Typography>
      </RowBox>

      {characteristics.map((row, index) => (
        <RowBox
          key={`rowBox-${index}`}
          sx={{ p: 1, backgroundColor: index % 2 === 0 ? "none" : "#DCDCDC" }}
        >
          <Box key={`Box1-${index}`}>{row.label}</Box>
          <Box key={`Box2-${index}`}>{row.value}</Box>
        </RowBox>
      ))}
    </AdCharacteristicStyled>
  );
};

export default AdCharacteristic;
