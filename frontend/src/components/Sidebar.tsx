import {
  Factory,
  Cable,
  Wind,
  Cpu,
  FileText,
  Settings,
} from "lucide-react";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (

    <div className="w-72 bg-panel border-r border-gray-700 p-5 min-h-screen">

      <h1 className="text-3xl font-bold text-primary mb-10">
        KES
      </h1>

      <div className="space-y-4">

        {/* DASHBOARD */}

        <Link to="/">

          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

            <Factory />

            Dashboard

          </button>

        </Link>

        {/* BELT CONVEYOR */}

        <Link to="/belt-conveyor">

          <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

            <Factory />

            Belt Conveyor

          </button>

        </Link>

        {/* ELECTRICAL */}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

          <Cable />

          Electrical Engineering

        </button>

        {/* HVAC */}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

          <Wind />

          HVAC Engineering

        </button>

        {/* AI */}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

          <Cpu />

          AI Engineering

        </button>

        {/* REPORTS */}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

          <FileText />

          Reports

        </button>

        {/* SETTINGS */}

        <button className="w-full flex items-center gap-3 p-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition">

          <Settings />

          Settings

        </button>

      </div>

    </div>

  );
};

export default Sidebar;