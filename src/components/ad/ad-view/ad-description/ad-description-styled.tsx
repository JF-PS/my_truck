import { styled } from "@mui/system";
import AdCharacteristicStyled from "../ad-characteristic/ad-characteristic-styled";

const AdDescriptionStyled = styled(AdCharacteristicStyled)({
  /**
   * Paragraphe Box :
   **/
  "& > div:nth-child(2)": {
    padding: "4px",
  },
});

export default AdDescriptionStyled;
