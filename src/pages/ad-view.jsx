import { useEffect, useMemo, useState } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { getAdById } from "../slices/ad-slice";

import { loadVehicleType } from "../slices/vehicle-type-slice";
import { loadVehicle } from "../slices/vehicle-slice";
import { loadModel } from "../slices/model-slice";
import { loadHorsepower } from "../slices/horsepower-slice";
import { loadCategory } from "../slices/category-slice";
import { loadBrand } from "../slices/brand-slice";
import { loadAdType } from "../slices/ad-type-slice";
import { loadPictures } from "../slices/ad-picture-slice";

import ColBox from "../components/styled/column-box";
import Layout from "../components/layout";
import AdPictures from "../components/ad/ad-view/ad-picture/ad-pictures";
import AdCharacteristic from "../components/ad/ad-view/ad-characteristic/ad-characteristic";
import AdDescription from "../components/ad/ad-view/ad-description/ad-description";
import AdAttribute from "../components/ad/ad-view/ad-attribute/ad-attribute";
import AdType from "../components/ad/ad-view/ad-type/ad-type";

const selector = createSelector(
  [(state) => state.ad.ads.byId, (state) => state.adPicture.adPictures.byId],
  (ads, pictures) => ({
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
  const dispatch = useDispatch();

  useEffect(() => {
    const items = dispatch(getAdById({ id }));
    items.then((response) => {
      const {
        AdPictures,
        type,
        vehicle,
        brand,
        category,
        horsepower,
        serialNumber,
        subCategory,
      } = response;
      dispatch(loadVehicleType(subCategory));
      dispatch(loadVehicle(vehicle));
      dispatch(loadModel(serialNumber));
      dispatch(loadHorsepower(horsepower));
      dispatch(loadCategory(category));
      dispatch(loadBrand(brand));
      dispatch(loadAdType(type));
      dispatch(loadPictures(AdPictures));
    });
  }, [dispatch, id]);

  const { title = "", picture_id } = useMemo(() => {
    if (!isEmpty(ads[id])) return ads[id];
    return {};
  }, [ads, id]);

  const [selectPicture, setSelectPicture] = useState();

  useEffect(() => {
    setSelectPicture(picture_id);
  }, [picture_id]);

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
