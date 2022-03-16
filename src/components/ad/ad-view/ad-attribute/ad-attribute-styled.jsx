import { styled } from "@mui/system";
import { Box } from "@mui/material";

const AdAttributeStyled = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",

  /**
   * Container Box :
   **/
  "& > div:nth-of-type(1)": {
    width: "260px",
    display: "flex",
    flexDirection: "row",

    /**
     * Tag Attributes Box :
     **/
    "& div:nth-of-type(1n)": {
      backgroundColor: "#EBA701",
      padding: "5px",
      margin: "11px",
      borderRadius: "4px",
    },
  },
});

export default AdAttributeStyled;
