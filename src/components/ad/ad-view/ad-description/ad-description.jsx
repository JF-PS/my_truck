import { useMemo } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

import RowBox from "../../../styled/row-box";
import AdDescriptionStyled from "./ad-description-styled";

const selector = createSelector([(state) => state.ad.ads.byId], (ads) => ({
  ads,
}));

const AdDescription = (props) => {
  const { id } = props;
  const { ads = {} } = useSelector(selector);

  const { description = "" } = useMemo(() => {
    if (!isEmpty(ads[id])) return ads[id];
    return {};
  }, [ads, id]);

  return (
    <AdDescriptionStyled>
      <RowBox sx={{ p: 1, borderBottom: "1px solid" }}>
        <Typography>Description de l'annonce :</Typography>
      </RowBox>
      <RowBox>
        <Typography paragraph>{description}</Typography>
      </RowBox>
    </AdDescriptionStyled>
  );
};

export default AdDescription;
