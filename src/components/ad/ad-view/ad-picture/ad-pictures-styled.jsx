import { styled } from "@mui/system";
import ColBox from "../../../styled/column-box";

const AdPicturesStyled = styled(ColBox)({
  /**
   * Ad Image Box :
   **/
  "& > div:nth-of-type(1)": {
    backgroundColor: "#3F3979",
    padding: "8px",
    borderRadius: "8px",
    margin: "auto",
    "& > img": {
      width: "250px",
      borderRadius: "8px",
    },
  },

  /**
   * Caroussel Box :
   **/
  "& > div:nth-of-type(2)": {
    width: "100%",
    marginTop: "8px",
  },
});

export default AdPicturesStyled;
