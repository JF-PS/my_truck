import { useSelector, createSelector } from "../../../../store/store";
import { Box } from "@mui/material";

import AdAttributeStyled from "./ad-attribute-styled";

const selector = createSelector(
  [
    (state: any) => state.ad.byId,
    (state: any) => state.horsepower.byId,
    (state: any) => state.vehicle.byId,
  ],
  (ads: any, horsepowers: any, vehicles: any) => ({
    ads,
    horsepowers,
    vehicles,
  })
);

const AdAttribute = (props: any) => {
  const { id } = props;
  const { ads = {}, horsepowers = {}, vehicles = {} } = useSelector(selector);
  const { vehicle_id } = ads[id];
  const {
    horsepower_id,
    year = new Date(),
    kilometers = 0,
  } = vehicles[vehicle_id];
  const { nb: nbHorse = 0 } = horsepowers[horsepower_id];

  return (
    <AdAttributeStyled>
      <Box>
        <Box>{kilometers} km</Box>
        <Box>{year.getYear()}</Box>
        <Box>{nbHorse} cv</Box>
      </Box>
    </AdAttributeStyled>
  );
};

export default AdAttribute;
