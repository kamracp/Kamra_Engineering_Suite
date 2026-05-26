import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import BeltConveyor from "../pages/BeltConveyor";

const AppRouter = () => {
  return (

    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/belt-conveyor"
            element={<BeltConveyor />}
          />

        </Routes>

      </MainLayout>

    </BrowserRouter>

  );
};

export default AppRouter;