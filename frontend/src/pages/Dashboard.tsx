const Dashboard = () => {
  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Industrial Engineering Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-panel p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            Mechanical Engineering
          </h2>

          <p className="text-gray-400">
            Conveyor, Pump, Shaft, Agitator
          </p>
        </div>

        <div className="bg-panel p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            Electrical Engineering
          </h2>

          <p className="text-gray-400">
            Cable Sizing, Transformers, Breakers
          </p>
        </div>

        <div className="bg-panel p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            HVAC Engineering
          </h2>

          <p className="text-gray-400">
            Cooling Load, Chillers, Duct Design
          </p>
        </div>

        <div className="bg-panel p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-3">
            AI Engineering
          </h2>

          <p className="text-gray-400">
            Optimization, Validation & Recommendations
          </p>
        </div>

      </div>

    </div>
  );
};

export default Dashboard;