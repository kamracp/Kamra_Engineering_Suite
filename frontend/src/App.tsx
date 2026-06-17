import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BeltConveyor from "./pages/BeltConveyor";
import BucketElevator from "./modules/bucket-elevator/pages/BucketElevator";
import ScrewConveyor from "./modules/screw-conveyor/pages/ScrewConveyor";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-900 text-white">

        <Sidebar />

        <main className="flex-1 overflow-auto">

          <Routes>

            <Route
              path="/"
              element={<Dashboard />}
            />

            <Route
              path="/belt-conveyor"
              element={<BeltConveyor />}
            />

            <Route
              path="/screw-conveyor"
              element={<ScrewConveyor />}
            />
            <Route
              path="/bucket-elevator"
              element={<BucketElevator />}
/>

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;