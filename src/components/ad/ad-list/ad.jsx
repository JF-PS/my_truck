import { useEffect, useMemo } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { isEmpty } from "lodash";

import AddPicture from "./ad-picture";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AdStyled from "./ad-styled";

const selector = createSelector(
  [
    (state) => state.ad.ads.byId,
    (state) => state.horsepower.horsepowers.byId,
    (state) => state.adType.adTypes.byId,
    (state) => state.vehicle.vehicles.byId,
    (state) => state.adPicture.adPictures.byId,
  ],
  (ads, horsepowers, adsType, vehicles, pictures) => ({
    ads,
    horsepowers,
    adsType,
    vehicles,
    pictures,
  })
);

const Ad = (props) => {
  const {
    ads = {},
    horsepowers = {},
    adsType = {},
    vehicles = {},
    pictures = {},
  } = useSelector(selector);

  const { adId } = props;

  const navigate = useNavigate();

  const handleGoClick = () => {
    navigate(`ad/${adId}`);
  };

  const {
    title = "",
    vehicle_id,
    type_id,
    price = 0,
    picture_id,
  } = useMemo(() => ads[adId], [ads, adId]);

  const { source = "" } = useMemo(() => {
    if (!isEmpty(pictures[picture_id])) return pictures[picture_id];
    return {};
  }, [pictures, picture_id]);

  const {
    horsepower_id,
    kilometers = 0,
    year = "",
  } = useMemo(() => {
    if (!isEmpty(vehicles[vehicle_id])) return vehicles[vehicle_id];
    return {};
  }, [vehicles, vehicle_id]);

  const { name: nbHorse = 0 } = useMemo(() => {
    if (!isEmpty(horsepowers[horsepower_id])) return horsepowers[horsepower_id];
    return {};
  }, [horsepowers, horsepower_id]);

  const { name: type = 0 } = useMemo(() => {
    if (!isEmpty(adsType[type_id])) return adsType[type_id];
    return {};
  }, [adsType, type_id]);

  return (
    <AdStyled>
      <Box onClick={handleGoClick}>
        <Box>
          <AddPicture picture={source} />
        </Box>
        <Box>
          <Typography component="p">{title}</Typography>
          <Typography component="p">
            {year} + {kilometers} km + {nbHorse} cv
          </Typography>
          <Typography component="p">pays + ville</Typography>
          <Typography component="p">type: {type}</Typography>
          <Box>
            <Typography component="p">{price} €</Typography>
            <FavoriteBorderIcon sx={{ mr: 2, mt: 1, fontSize: "30px" }} />
          </Box>
        </Box>
      </Box>
    </AdStyled>
  );
};

export default Ad;
