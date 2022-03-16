import { useMemo } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import AdAttributeStyled from "./ad-attribute-styled";

const selector = createSelector(
  [
    (state) => state.ad.ads.byId,
    (state) => state.horsepower.horsepowers.byId,
    (state) => state.vehicle.vehicles.byId,
  ],
  (ads, horsepowers, vehicles) => ({
    ads,
    horsepowers,
    vehicles,
  })
);

const AdAttribute = (props) => {
  const { id } = props;
  const { ads = {}, horsepowers = {}, vehicles = {} } = useSelector(selector);

  const { vehicle_id } = useMemo(() => {
    if (!isEmpty(ads[id])) return ads[id];
    return {};
  }, [ads, id]);

  const {
    horsepower_id,
    year = "",
    kilometers = 0,
  } = useMemo(() => {
    if (!isEmpty(vehicles[vehicle_id])) return vehicles[vehicle_id];
    return {};
  }, [vehicles, vehicle_id]);

  const { name: nbHorse = 0 } = useMemo(() => {
    if (!isEmpty(horsepowers[horsepower_id])) return horsepowers[horsepower_id];
    return {};
  }, [horsepowers, horsepower_id]);

  return (
    <AdAttributeStyled>
      <Box>
        <Box>{kilometers} km</Box>
        <Box>{year}</Box>
        <Box>{nbHorse} cv</Box>
      </Box>
    </AdAttributeStyled>
  );
};

export default AdAttribute;
