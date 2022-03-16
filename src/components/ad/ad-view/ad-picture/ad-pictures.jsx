import { useMemo, useEffect } from "react";
import { isEmpty } from "lodash";
import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Carousel from "react-elastic-carousel";
import AdPicturesStyled from "./ad-pictures-styled";

const selector = createSelector(
  [(state) => state.adPicture.adPictures.byId],
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

  const adPictures = useMemo(() => {
    if (!isEmpty(pictures))
      return Object.values(pictures).filter(
        (picture) => parseInt(picture.ad_id) === parseInt(id)
      );
    return [];
  }, [pictures, id]);

  return (
    <AdPicturesStyled id="testCss">
      <Box>
        {!isEmpty(pictures) && !isEmpty(pictures[selectPicture]) && (
          <img src={pictures[selectPicture].source} alt="camion" />
        )}
      </Box>

      <Box>
        <Carousel breakPoints={breakPoints}>
          {!isEmpty(adPictures) &&
            adPictures.map((picture, index) => (
              <Box
                key={`BoxImg-${index}`}
                sx={{ width: "100px" }}
                onClick={handleClickPicture(picture.id)}
              >
                {!isEmpty(pictures) && !isEmpty(pictures[picture.id]) && (
                  <img
                    src={pictures[picture.id].source}
                    alt="camion"
                    key={`img-${index}`}
                    style={{
                      ...imgStyle,
                      border:
                        picture.id === selectPicture
                          ? "solid white 2px"
                          : "none",
                      opacity: picture.id === selectPicture ? 1 : 0.7,
                    }}
                  />
                )}
              </Box>
            ))}
        </Carousel>
      </Box>
    </AdPicturesStyled>
  );
};

export default AdPictures;
