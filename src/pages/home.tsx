import { useSelector, createSelector } from "../store/store";

import Layout from "../components/layout";
import LocationPicture from "../assets/pictures/location.png";
import ventePicture from "../assets/pictures/vente.png";
import SaleCard from "../components/card/sale-card";
import RowBox from "../components/styled/row-box";
import AdsList from "../components/ad/ad-list/ads-list";
import ActionBar from "../components/app/action-bar";

const selector = createSelector([(state) => state.ad.allIds], (adsIds) => ({
  adsIds,
}));

const Home = () => {
  const { adsIds } = useSelector(selector);

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
