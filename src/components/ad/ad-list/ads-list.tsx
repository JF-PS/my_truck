import Ad from "./ad";

const AdsList = (props: any) => {
  const { adsIds } = props;
  return adsIds.map((adId: any, index: any) => <Ad adId={adId} key={index} />);
};

export default AdsList;
