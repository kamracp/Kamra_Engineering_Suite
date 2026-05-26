interface AlarmHistoryPanelProps {
  warnings: string[];
}

const AlarmHistoryPanel = ({
  warnings,
}: AlarmHistoryPanelProps) => {

  /*
    CURRENT TIME
  */

  const currentTime =
    new Date().toLocaleTimeString();

  return (

    <div className="bg-black p-6 rounded-3xl border border-red-600">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold text-red-500">
          Alarm History
        </h2>

        <div className="bg-red-700 px-4 py-2 rounded-full font-bold animate-pulse">

          LIVE

        </div>

      </div>

      {/* TABLE */}

      <div className="overflow-auto">

        <table className="w-full text-left">

          <thead>

            <tr className="border-b border-gray-700">

              <th className="py-3">
                Time
              </th>

              <th className="py-3">
                Severity
              </th>

              <th className="py-3">
                Message
              </th>

              <th className="py-3">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {warnings.length === 0 ? (

              <tr>

                <td
                  colSpan={4}
                  className="py-6 text-green-400"
                >

                  No active alarms.

                </td>

              </tr>

            ) : (

              warnings.map(
                (
                  warning,
                  index
                ) => (

                  <tr
                    key={index}
                    className="border-b border-gray-800"
                  >

                    <td className="py-4">
                      {currentTime}
                    </td>

                    <td className="py-4">

                      <span className="bg-red-700 px-3 py-1 rounded-full text-sm">

                        HIGH

                      </span>

                    </td>

                    <td className="py-4 text-red-300">
                      {warning}
                    </td>

                    <td className="py-4">

                      <span className="text-yellow-400 animate-pulse">

                        ACTIVE

                      </span>

                    </td>

                  </tr>

                )
              )

            )}

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default AlarmHistoryPanel;