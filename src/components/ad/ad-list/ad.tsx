import { useSelector, createSelector } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import AddPicture from "./ad-picture";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AdStyled from "./ad-styled";

const selector = createSelector(
  [
    (state) => state.ad.byId,
    (state) => state.horsepower.byId,
    (state) => state.adType.byId,
    (state) => state.vehicle.byId,
    (state) => state.adPicture.byId,
  ],
  (ads, horsepowers, adsType, vehicles, pictures) => ({
    ads,
    horsepowers,
    adsType,
    vehicles,
    pictures,
  })
);

const Ad = (props: any) => {
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
    add_type_id,
    price = 0,
    picture_id,
  } = ads[adId];

  const { source = "" } = pictures[picture_id];

  const {
    horsepower_id,
    year = new Date(),
    kilometers = 0,
  } = vehicles[vehicle_id];

  const { nb: nbHorse = 0 } = horsepowers[horsepower_id];
  const { name: type = "" } = adsType[add_type_id];

  return (
    <AdStyled>
      <Box onClick={handleGoClick}>
        <Box>
          <AddPicture picture={source} />
        </Box>
        <Box>
          <Typography component="p">{title}</Typography>
          <Typography component="p">
            {year.getYear()} + {kilometers} km + {nbHorse} cv
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
