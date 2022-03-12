import { Box, Typography } from "@mui/material";

const ActionCard = (props: any) => {
  const { icon, label } = props;
  return (
    <Box
      sx={{
        border: "1px solid white",
        width: "49%",
        textAlign: "center",
        backgroundColor: "#EBA701",
        borderRadius: 2,
        p: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {icon}
      <Typography
        component="p"
        sx={{
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ActionCard;