interface LiveDataPanelProps {
  speed: number;
  motorPower: number;
  beltWidth: number;
  warningCount: number;
}

const LiveDataPanel = ({
  speed,
  motorPower,
  beltWidth,
  warningCount,
}: LiveDataPanelProps) => {

  /*
    STATUS
  */

  const status =
    warningCount > 2
      ? "ALERT"
      : "NORMAL";

  return (

    <div className="bg-black p-6 rounded-3xl border border-green-500">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-green-400">
          Live Conveyor Telemetry
        </h2>

        <div
          className={`px-4 py-2 rounded-full font-bold

          ${
            status === "NORMAL"
              ? "bg-green-600"
              : "bg-red-700 animate-pulse"
          }
          `}
        >

          {status}

        </div>

      </div>

      {/* LIVE GRID */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* SPEED */}

        <div className="bg-gray-900 p-5 rounded-2xl">

          <h3 className="text-sm text-gray-400 mb-2">
            Belt Speed
          </h3>

          <div className="text-3xl font-bold text-green-400">

            {speed.toFixed(1)}

            <span className="text-sm ml-2">
              m/s
            </span>

          </div>

        </div>

        {/* POWER */}

        <div className="bg-gray-900 p-5 rounded-2xl">

          <h3 className="text-sm text-gray-400 mb-2">
            Motor Load
          </h3>

          <div className="text-3xl font-bold text-blue-400">

            {motorPower.toFixed(1)}

            <span className="text-sm ml-2">
              kW
            </span>

          </div>

        </div>

        {/* BELT */}

        <div className="bg-gray-900 p-5 rounded-2xl">

          <h3 className="text-sm text-gray-400 mb-2">
            Belt Width
          </h3>

          <div className="text-3xl font-bold text-yellow-400">

            {beltWidth}

            <span className="text-sm ml-2">
              mm
            </span>

          </div>

        </div>

        {/* WARNINGS */}

        <div className="bg-gray-900 p-5 rounded-2xl">

          <h3 className="text-sm text-gray-400 mb-2">
            Warnings
          </h3>

          <div
            className={`text-3xl font-bold

            ${
              warningCount === 0
                ? "text-green-400"
                : "text-red-500"
            }
            `}
          >

            {warningCount}

          </div>

        </div>

      </div>

      {/* SCROLLING STATUS */}

      <div className="mt-6 overflow-hidden">

        <div className="whitespace-nowrap animate-pulse text-green-400 text-sm">

          SYSTEM ACTIVE • LIVE MONITORING ENABLED •
          AI ENGINE RUNNING • INDUSTRIAL MODE ACTIVE •
          CONVEYOR STATUS HEALTHY •

        </div>

      </div>

    </div>

  );
};

export default LiveDataPanel;