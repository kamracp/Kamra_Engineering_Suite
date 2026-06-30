import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import BeltConveyor from "./pages/BeltConveyor";

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

          </Routes>

        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;