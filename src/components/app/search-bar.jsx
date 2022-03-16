import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";

const SearchBar = (props) => {
  const [isKeyWordUpdate, setIsKeyWordUpdate] = useState(false);
  return (
    <Box
      sx={{
        "& > .MuiPaper-root": {
          m: 1,
        },
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3F3979",
      }}
    >
      <Paper
        sx={{
          // margin: "auto",
          p: 1,
          display: "flex",
          alignItems: "center",
          height: "50px",
          borderRadius: "8px",
          boxShadow: "none",
          width: "100%",
        }}
      >
        <InputBase
          className="test"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Rechercher"
        />

        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          style={{
            backgroundColor: "#EBA701",
            borderRadius: "8px",
            color: "white",
          }}
        >
          {isKeyWordUpdate ? <CloseIcon /> : <SearchIcon />}
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
