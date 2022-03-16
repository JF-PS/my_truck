import { Routes, Route } from "react-router-dom";
import { routes } from "../../utils/app-routes";

const Router = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { path, element } = route;
        return (
          <Route key={index} path={path} element={element} test={"test"} />
        );
      })}
    </Routes>
  );
};

export default Router;
