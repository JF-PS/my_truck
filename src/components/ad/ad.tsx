import { useEffect, useMemo } from "react";
import { useSelector, createSelector } from "../../store/store";

import RowBox from "../../components/styled/row-box";
import AddPicture from "../../components/ad/ad-picture";
import camion from "../../assets/pictures/camion.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Box, Typography } from "@mui/material";

const selector = createSelector(
  [
    (state) => state.ad.byId,
    (state) => state.horsepower.byId,
    (state) => state.adType.byId,
    (state) => state.vehicle.byId,
  ],
  (ads, horsepowers, adsType, vehicles) => ({
    ads,
    horsepowers,
    adsType,
    vehicles,
  })
);

const Ad = (props: any) => {
  const {
    ads = {},
    horsepowers = {},
    adsType = {},
    vehicles = {},
  } = useSelector(selector);
  const { adId } = props;

  const {
    title = "",
    vehicle_id,
    add_type_id,
    adress = "",
    price = 0,
    picture = "",
  } = useMemo(() => ads[adId], [ads, adId]);

  const {
    horsepower_id,
    year = new Date(),
    kilometers = 0,
  } = useMemo(() => vehicles[vehicle_id], [vehicles, vehicle_id]);

  const { nb: nbHorse = 0 } = useMemo(
    () => horsepowers[horsepower_id],
    [horsepowers, horsepower_id]
  );

  const { name: type = "" } = useMemo(
    () => adsType[add_type_id],
    [adsType, add_type_id]
  );

  // useEffect(() => console.log(name), [name]);

  return (
    <RowBox>
      <Box
        sx={{
          borderRadius: "16px",
          width: "100%",
          display: "flex",
          height: "200px",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#3F3979",
          m: 1,
          mt: 2,
          mb: 2,
        }}
      >
        <Box
          sx={{
            width: "300px",
            height: "100%",
            borderRadius: "16px",
            backgroundColor: "#3F3979",
            overflow: "hidden",
          }}
        >
          <AddPicture picture={camion} />
        </Box>
        <Box sx={{ width: "100%", height: "100%" }}>
          <Typography
            component="p"
            sx={{
              p: 1,
              fontSize: "16px",
              fontWeight: "700",
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              p: 1,
              fontSize: "12px",
            }}
          >
            {year.getYear()} + {kilometers} km + {nbHorse} cv
          </Typography>
          <Typography
            component="p"
            sx={{
              p: 1,
              fontSize: "12px",
            }}
          >
            pays + ville
          </Typography>
          <Typography
            component="p"
            sx={{
              p: 1,
              fontSize: "12px",
            }}
          >
            type: {type}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component="p"
              sx={{
                p: 1,
                fontSize: "12px",
              }}
            >
              {price} €
            </Typography>
            <FavoriteBorderIcon sx={{ mr: 2, mt: 1, fontSize: "30px" }} />
          </Box>
        </Box>
      </Box>
    </RowBox>
  );
};

export default Ad;
