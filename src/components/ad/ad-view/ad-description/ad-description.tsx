import { createSelector, useSelector } from "../../../../store/store";
import { Typography } from "@mui/material";

import RowBox from "../../../styled/row-box";
import AdDescriptionStyled from "./ad-description-styled";

const selector = createSelector(
  [(state: any) => state.ad.byId],
  (ads: any) => ({
    ads,
  })
);

const AdDescription = (props: any) => {
  const { id } = props;
  const { ads = {} } = useSelector(selector);
  const { description = "" } = ads[id];

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
