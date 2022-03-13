import { useSelector, createSelector } from "../../../../store/store";
import { Box } from "@mui/material";

import AdTypeStyled from "./ad-type-styled";

const selector = createSelector(
  [(state: any) => state.ad.byId, (state: any) => state.adType.byId],
  (ads: any, adsType: any) => ({
    ads,
    adsType,
  })
);

const AdType = (props: any) => {
  const { id } = props;
  const { ads = {}, adsType = {} } = useSelector(selector);
  const { add_type_id, price = 0 } = ads[id];
  const { name: adType = "" } = adsType[add_type_id];

  return (
    <AdTypeStyled>
      <Box>
        {adType} : {price} € {adType === "Location" && "/ mois"}
      </Box>
    </AdTypeStyled>
  );
};

export default AdType;
