import Ad from "./ad";

/**
 *
 * ## Usage
 * ```jsx
 *
 *  <AdsList adsIds={[1, 2, 3, 4]}  />
 *
 * ```
 */
const AdsList = (props) => {
  const { adsIds } = props;
  return adsIds.map((adId, index) => <Ad adId={adId} key={index} />);
};

export default AdsList;
