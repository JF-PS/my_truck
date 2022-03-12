import React from "react";
import { Box, Typography } from "@mui/material";

const yellowButton = {
  backgroundColor: "#EBA701",
  m: 1,
  mt: 2,
  mb: 2,
  borderRadius: "16px",
  height: "200px",
  width: "100%",
  color: "white",
  fontSize: "18px",
  textTransform: "none",
  fontWeight: "400",
  boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SaleCard = (props: any) => {
  const { picture, description } = props;
  return (
    <Box sx={yellowButton}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "110px", height: "110px", marginBottom: "15px" }}
          src={picture}
          alt={description}
        />
        <Typography
          component="h3"
          sx={{
            color: "#FFFF",
            fontSize: "25px",
            fontWeight: "700",
            margin: "0",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SaleCard;
