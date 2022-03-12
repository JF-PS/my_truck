import { styled } from "@mui/system";

import Box from "@mui/material/Box";
import background from "../../assets/pictures/background.png";

const AppBox = styled(Box)({
  width: "100%",
  backgroundImage: `url(${background})`,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export default AppBox;
