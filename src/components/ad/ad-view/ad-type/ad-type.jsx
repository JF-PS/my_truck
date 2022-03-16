import { useMemo } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import AdTypeStyled from "./ad-type-styled";

const selector = createSelector(
  [(state) => state.ad.ads.byId, (state) => state.adType.adTypes.byId],
  (ads, adsType) => ({
    ads,
    adsType,
  })
);

/**
 *
 * ## Usage
 * ```jsx
 *
 *
 *  <AdType id={1} id={id}  />
 *
 * ```
 */
const AdType = (props) => {
  const { id } = props;
  const { ads = {}, adsType = {} } = useSelector(selector);

  const { type_id, price = 0 } = useMemo(() => {
    if (!isEmpty(ads[id])) return ads[id];
    return {};
  }, [ads, id]);

  const { name: adType = "" } = useMemo(() => {
    if (!isEmpty(adsType[type_id])) return adsType[type_id];
    return {};
  }, [adsType, type_id]);

  return (
    <AdTypeStyled>
      <Box>
        {adType} : {price} € {adType === "Location" && "/ mois"}
      </Box>
    </AdTypeStyled>
  );
};

export default AdType;
