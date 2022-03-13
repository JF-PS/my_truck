import { useMemo } from "react";
import { useSelector, createSelector } from "../../../../store/store";
import { Box } from "@mui/material";

import Carousel from "react-elastic-carousel";
import AdPicturesStyled from "./ad-pictures-styled";

const selector = createSelector(
  [(state) => state.adPicture.byId],
  (pictures) => ({
    pictures,
  })
);

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1, itemsToShow: 2 },
  { width: 1, itemsToShow: 3 },
];

const imgStyle = {
  width: "100%",
  margin: "4px",
  borderRadius: "4px",
};

const AdPictures = (props) => {
  const { selectPicture, handleClickPicture, id } = props;
  const { pictures = {} } = useSelector(selector);

  const adPictures = useMemo(
    () =>
      Object.values(pictures).filter(
        (picture) => parseInt(picture.ad_id) === parseInt(id)
      ),
    [pictures, id]
  );

  return (
    <AdPicturesStyled id="testCss">
      <Box>
        <img src={pictures[selectPicture].source} alt="camion" />
      </Box>

      <Box>
        <Carousel breakPoints={breakPoints}>
          {adPictures.map((picture, index) => (
            <Box
              key={index}
              sx={{ width: "100px" }}
              onClick={handleClickPicture(picture.id)}
            >
              <img
                src={pictures[picture.id].source}
                alt="camion"
                style={{
                  ...imgStyle,
                  border:
                    picture.id === selectPicture ? "solid white 2px" : "none",
                  opacity: picture.id === selectPicture ? 1 : 0.7,
                }}
              />
            </Box>
          ))}
        </Carousel>
      </Box>
    </AdPicturesStyled>
  );
};

export default AdPictures;
