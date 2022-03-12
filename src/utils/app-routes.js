import { Suspense, lazy } from "react";

import LoadingScreen from "../components/app/loading-screen";

// icons :
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import("../pages/home")));

const navBarRoute = [
  {
    path: "",
    icon: <PersonIcon />,
    name: "account",
    element: <Home />,
  },
  {
    path: "",
    icon: <LocalShippingIcon />,
    name: "my-ads",
    element: <Home />,
  },
  {
    path: "",
    icon: <FavoriteIcon />,
    name: "favoris",
    element: <Home />,
  },
  {
    path: "",
    icon: <AddBoxIcon />,
    name: "new-ad",
    element: <Home />,
  },
];

const locationRoutes = [];

const routes = [...navBarRoute, ...locationRoutes];

export { navBarRoute, routes };
