import { styled } from "@mui/system";
import ColBox from "../../../styled/column-box";

const AdCharacteristicStyled = styled(ColBox)({
  width: "100%",
  backgroundColor: "white",
  border: "3px solid #3F3979",
  padding: "8px",
  marginTop: "8px",
  borderRadius: "8px",
  color: "black",

  /**
   * Title Box :
   **/
  "& > div:nth-of-type(1)": {
    padding: "10px",
    borderBottom: "1px solid",
    "& > p": {
      fontSize: "16px",
      fontWeight: "600",
    },
  },
});

export default AdCharacteristicStyled;
