import { useEffect } from "react";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getAllAd } from "../slices/ad-slice";
import { loadPictures } from "../slices/ad-picture-slice";
import { loadAdTypes } from "../slices/ad-type-slice";
import { loadVehicles } from "../slices/vehicle-slice";
import { loadHorsepowers } from "../slices/horsepower-slice";

import Layout from "../components/layout";
import LocationPicture from "../assets/pictures/location.png";
import ventePicture from "../assets/pictures/vente.png";
import SaleCard from "../components/card/sale-card";
import RowBox from "../components/styled/row-box";
import AdsList from "../components/ad/ad-list/ads-list";
import ActionBar from "../components/app/action-bar";

const selector = createSelector([(state) => state.ad.ads.allIds], (adsIds) => ({
  adsIds,
}));

const Home = () => {
  const { adsIds } = useSelector(selector);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = dispatch(getAllAd({ limit: 3, offset: 0 }));
    items.then((response) => {
      const { AdPictures, type, vehicle, horsepower } = response;
      dispatch(loadPictures(AdPictures));
      dispatch(loadAdTypes(type));
      dispatch(loadVehicles(vehicle));
      dispatch(loadHorsepowers(horsepower));
    });
  }, [dispatch]);

  return (
    <Layout>
      <RowBox>
        <SaleCard picture={ventePicture} description="Vente" />
        <SaleCard picture={LocationPicture} description="Location" />
      </RowBox>
      <ActionBar />
      <AdsList adsIds={adsIds} />
    </Layout>
  );
};

export default Home;
