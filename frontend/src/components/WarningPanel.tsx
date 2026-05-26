interface WarningPanelProps {
  warnings: string[];
}

const WarningPanel = ({
  warnings,
}: WarningPanelProps) => {

  return (

    <div className="space-y-4">

      {warnings.length === 0 ? (

        <div className="bg-green-700 p-4 rounded-2xl">

          No engineering warnings detected.

        </div>

      ) : (

        warnings.map(
          (
            warning,
            index
          ) => (

            <div
              key={index}
              className="bg-red-700 p-4 rounded-2xl animate-pulse border border-red-400"
            >

              <div className="flex items-start gap-3">

                <div className="text-2xl">
                  ⚠
                </div>

                <div>

                  <h3 className="font-bold mb-1">
                    Engineering Warning
                  </h3>

                  <p className="text-sm">
                    {warning}
                  </p>

                </div>

              </div>

            </div>

          )
        )

      )}

    </div>

  );
};

export default WarningPanel;