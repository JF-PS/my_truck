import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { navBarRoute } from "../../utils/app-routes";

const NavBar = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const handleGoLocation = (path) => () => navigate(`/${path}`);

  return (
    <Paper sx={{ width: "100%", borderTop: "solid white 1px" }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{ backgroundColor: "#3F3979" }}
        // focused={true}
      >
        {navBarRoute.map((route, index) => {
          const { path, icon } = route;
          return (
            <BottomNavigationAction
              key={index}
              style={{ color: "#ffffff" }}
              onClick={handleGoLocation(path)}
              icon={icon}
            />
          );
        })}
      </BottomNavigation>
    </Paper>
  );
};
export default NavBar;
