import { useMemo, useState } from "react";
import { useSelector, createSelector } from "../store/store";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import ColBox from "../components/styled/column-box";
import Layout from "../components/layout";
import AdPictures from "../components/ad/ad-view/ad-picture/ad-pictures";
import AdCharacteristic from "../components/ad/ad-view/ad-characteristic/ad-characteristic";
import AdDescription from "../components/ad/ad-view/ad-description/ad-description";
import AdAttribute from "../components/ad/ad-view/ad-attribute/ad-attribute";
import AdType from "../components/ad/ad-view/ad-type/ad-type";

const selector = createSelector(
  [(state) => state.ad.byId, (state) => state.adPicture.byId],
  (ads, adsType, pictures) => ({
    ads,
    pictures,
  })
);

const TypographySx = {
  fontSize: "30px",
  fontWeight: "600",
  width: "100%",
  textAlign: "center",
  p: 2,
};

const AdView = () => {
  const { id } = useParams();
  const { ads = {} } = useSelector(selector);

  const { title = "", picture_id } = useMemo(() => ads[id], [ads, id]);

  const [selectPicture, setSelectPicture] = useState(picture_id);

  const handleClickPicture = (idPicture) => () => {
    setSelectPicture(idPicture);
  };

  return (
    <Layout sx={{ p: 1 }}>
      <ColBox>
        <Typography component="h1" sx={TypographySx}>
          {title}
        </Typography>
        <AdType id={id} />
        <AdAttribute id={id} />
        <AdPictures
          id={id}
          handleClickPicture={handleClickPicture}
          selectPicture={selectPicture}
        />
        <AdDescription id={id} />
        <AdCharacteristic id={id} />
      </ColBox>
    </Layout>
  );
};

export default AdView;
