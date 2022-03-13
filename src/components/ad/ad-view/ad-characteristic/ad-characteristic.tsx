import { useMemo } from "react";
import { useSelector, createSelector } from "../../../../store/store";
import { Box, Typography } from "@mui/material";

import RowBox from "../../../styled/row-box";
import AdCharacteristicStyled from "./ad-characteristic-styled";

const selector = createSelector(
  [
    (state: any) => state.ad.byId,
    (state: any) => state.horsepower.byId,
    (state: any) => state.vehicle.byId,
    (state: any) => state.adPicture.byId,
    (state: any) => state.brand.byId,
    (state: any) => state.model.byId,
    (state: any) => state.state.byId,
    (state: any) => state.category.byId,
    (state: any) => state.vehicleType.byId,
    (state: any) => state.gas.byId,
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

const AdCharacteristic = (props: any) => {
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

  const characteristics: Array<any> = useMemo(() => {
    const { vehicle_id } = ads[id];
    const {
      horsepower_id,
      year = new Date(),
      kilometers = 0,
      category_id,
      vehicle_type_id,
      state_id,
      brand_id,
      model_id,
      gas_id,
    } = vehicles[vehicle_id];

    const { name: model } = models[model_id];
    const { name: category } = categories[category_id];
    const { nb: nbHorse = 0 } = horsepowers[horsepower_id];
    const { name: vehiculeType = "" } = vehiculeTypes[vehicle_type_id];
    const { name: brand = "" } = brands[brand_id];
    const { name: state = "" } = states[state_id];
    const { name: gaz = "" } = gas[gas_id];

    return [
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
        value: `${year.getYear()}`,
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
  }, [
    ads,
    id,
    vehicles,
    models,
    categories,
    horsepowers,
    vehiculeTypes,
    brands,
    states,
    gas,
  ]);

  return (
    <AdCharacteristicStyled>
      <RowBox>
        <Typography component="p">Caractéristique du véhicule : </Typography>
      </RowBox>

      {characteristics.map((row: any, index: number) => (
        <RowBox
          sx={{ p: 1, backgroundColor: index % 2 === 0 ? "none" : "#DCDCDC" }}
        >
          <Box>{row.label}</Box>
          <Box>{row.value}</Box>
        </RowBox>
      ))}
    </AdCharacteristicStyled>
  );
};

export default AdCharacteristic;
