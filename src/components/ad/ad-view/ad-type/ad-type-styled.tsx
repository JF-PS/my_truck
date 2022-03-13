import { styled } from "@mui/system";
import { Box } from "@mui/material";

const AdTypeStyled = styled(Box)({
  borderRadius: 2,
  margin: "auto",
  width: "250px",

  /**
   * Ad Type Box :
   **/
  "& > div:nth-child(1)": {
    backgroundColor: "#3F3979",
    border: "1px solid #EBA701",
    padding: "8px",
    m: "2px",
    borderRadius: "5px",
    textAlign: "center",
  },
});

export default AdTypeStyled;
