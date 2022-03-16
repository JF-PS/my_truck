import Ad from "./ad";

const AdsList = (props) => {
  const { adsIds } = props;
  return adsIds.map((adId, index) => <Ad adId={adId} key={index} />);
};

export default AdsList;
