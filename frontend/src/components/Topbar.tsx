const Topbar = () => {
  return (
    <div className="h-16 bg-panel border-b border-gray-700 flex items-center justify-between px-6">

      <div>

        <h2 className="text-xl font-semibold">
          Kamra Engineering Suite
        </h2>

        <p className="text-sm text-gray-400">
          AI-Native Industrial Engineering Operating System
        </p>

      </div>

      <div className="flex gap-4">

        <div className="bg-green-600 px-4 py-2 rounded-full text-sm">
          AI Engine Active
        </div>

        <div className="bg-primary text-black px-4 py-2 rounded-full text-sm font-bold">
          Enterprise Mode
        </div>

      </div>

    </div>
  );
};

export default Topbar;