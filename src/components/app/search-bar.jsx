import { useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "lodash";
import { useNavigate } from "react-router-dom";
import { setValue } from "../../slices/app-slice";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

import Box from "@mui/material/Box";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debouceChangeTitle = useMemo(
    () =>
      debounce((value) => {
        dispatch(setValue("title", value));
      }, 500),
    [dispatch]
  );

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    debouceChangeTitle(value);
  };

  const handleClick = useCallback(() => {
    navigate(`/?title=${searchValue}`);
  }, [searchValue, navigate]);

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
          onChange={handleChange}
          value={searchValue}
        />

        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          aria-label="search"
          onClick={handleClick}
          style={{
            backgroundColor: "#EBA701",
            borderRadius: "8px",
            color: "white",
          }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
