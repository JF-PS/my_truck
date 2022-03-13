import { styled } from "@mui/system";
import RowBox from "../../styled/row-box";

const AdStyled = styled(RowBox)({
  padding: "4px",

  /**
   * Main Container :
   **/
  "& > div:nth-child(1)": {
    borderRadius: "16px",
    width: "100%",
    display: "flex",
    height: "200px",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#3F3979",

    /**
     * Picture Container :
     **/
    "& > div:nth-child(1)": {
      height: "100%",
      borderRadius: "16px",
      backgroundColor: "#3F3979",
      overflow: "hidden",
      flex: "0 0 300",
    },

    /**
     * Description Container :
     **/
    "& > div:nth-child(2)": {
      width: "100%",
      height: "100%",

      /**
       * Title :
       **/
      "& > p:first-child": {
        padding: "8px",
        fontSize: "16px",
        fontWeight: "700",
      },

      /**
       * Fields:
       **/
      "&  > p": {
        padding: "8px",
        fontSize: "12px",
      },

      /**
       * Container Price and Favorits :
       **/
      "&  > div": {
        display: "flex",
        justifyContent: "space-between",

        /**
         * Price field :
         **/
        "& > p": {
          padding: "8px",
          fontSize: "12px",
        },
      },
    },
  },
});

export default AdStyled;
