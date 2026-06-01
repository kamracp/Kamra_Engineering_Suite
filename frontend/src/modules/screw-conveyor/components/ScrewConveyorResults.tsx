import React from "react";
import type { ScrewConveyorResult } from "../types/ScrewConveyorTypes";

interface Props {
  result: ScrewConveyorResult | null;
}

const ScrewConveyorResults: React.FC<Props> = ({ result }) => {
  if (!result) {
    return (
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl rounded-xl p-6 border border-cyan-700">
  <h2 className="text-xl font-bold text-cyan-300 mb-4">
    Design Results
  </h2>

        <p className="text-gray-600">
          Click Calculate Screw Conveyor to generate results.
        </p>
      </div>
    );
  }

  const getStatusClasses = () => {
    switch (result.designStatus) {
      case "SAFE":
        return "bg-green-100 text-green-800 border-green-400";

      case "WARNING":
        return "bg-yellow-100 text-yellow-800 border-yellow-400";

      case "CRITICAL":
        return "bg-red-100 text-red-800 border-red-400";

      default:
        return "bg-gray-100 text-gray-800 border-gray-400";
    }
  };

  return (
    <div className="space-y-6 w-full overflow-x-auto">

      {/* ====================================== */}
      {/* PROFESSIONAL KPI DASHBOARD */}
      {/* ====================================== */}

      <div className="bg-white shadow rounded-xl p-6">
        <h2 className="text-2xl font-bold text-black mb-6">
          Screw Conveyor Performance Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          <div className="bg-blue-50 border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600">
              Screw Diameter
            </div>

            <div className="text-2xl font-bold text-blue-700">
              {result.screwDiameter}
            </div>

            <div className="text-sm text-gray-500">
              mm
            </div>
          </div>

          <div className="bg-green-50 border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600">
              RPM
            </div>

            <div className="text-2xl font-bold text-green-700">
              {result.rpm}
            </div>

            <div className="text-sm text-gray-500">
              RPM
            </div>
          </div>

          <div className="bg-purple-50 border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600">
              Motor
            </div>

            <div className="text-2xl font-bold text-purple-700">
              {result.selectedMotorKW}
            </div>

            <div className="text-sm text-gray-500">
              kW
            </div>
          </div>

          <div className="bg-orange-50 border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600">
              Torque
            </div>

            <div className="text-xl font-bold text-orange-700 break-all">
              {result.gearboxTorqueNm}
            </div>

            <div className="text-sm text-gray-500">
              Nm
            </div>
          </div>

          <div className="bg-cyan-50 border rounded-lg p-4 text-center">
            <div className="text-sm text-gray-600">
              Design Score
            </div>

            <div className="text-xl font-bold text-cyan-700 break-all">
              {result.designScore}
            </div>

            <div className="text-sm text-gray-500">
              /100
            </div>
          </div>

        </div>
      </div>

      {/* ====================================== */}
      {/* STATUS BADGE + WARNING COUNTER */}
      {/* ====================================== */}

      <div className="bg-white shadow rounded-xl p-6">

        <div className="flex flex-wrap items-center justify-between gap-4">

          <div>
            <h3 className="text-lg font-bold text-black">
              Design Status
            </h3>

            <div
              className={`inline-block mt-3 px-6 py-2 rounded-full border-2 font-bold text-lg ${getStatusClasses()}`}
            >
              {result.designStatus}
            </div>
          </div>

          <div>
            <div className="bg-red-600 text-white px-5 py-3 rounded-lg font-bold text-lg shadow">
              ⚠ Warnings : {result.warningCount}
            </div>
          </div>

        </div>

      </div>
    {/* ====================================== */}
{/* DESIGN RESULTS */}
{/* ====================================== */}

<div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl rounded-xl p-6 border border-cyan-600">
  <h2 className="text-xl font-bold text-cyan-300 mb-4">
    Design Results
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Screw Diameter</div>
      <div className="text-xl font-bold">{result.screwDiameter} mm</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">RPM</div>
      <div className="text-xl font-bold">{result.rpm}</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Capacity Check</div>
      <div className="text-xl font-bold">{result.capacityCheckTPH} TPH</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Motor Power</div>
      <div className="text-xl font-bold">{result.motorPowerKW} kW</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Gearbox Torque</div>
      <div className="text-xl font-bold">{result.gearboxTorqueNm} Nm</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Shaft Diameter</div>
      <div className="text-xl font-bold">{result.shaftDiameterMM} mm</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Efficiency</div>
      <div className="text-xl font-bold">{result.efficiency} %</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-cyan-300 text-sm">Design Score</div>
      <div className="text-xl font-bold">{result.designScore} / 100</div>
    </div>

  </div>
</div>
      
      {/* ====================================== */}
{/* EQUIPMENT SELECTION */}
{/* ====================================== */}

<div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl rounded-xl p-6 border border-yellow-600">
  <h2 className="text-xl font-bold text-yellow-300 mb-4">
    Equipment Selection
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-yellow-300 text-sm">Selected Motor</div>
      <div className="text-xl font-bold">{result.selectedMotorKW} kW</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-yellow-300 text-sm">Selected Gearbox</div>
      <div className="text-xl font-bold">{result.selectedGearbox}</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-yellow-300 text-sm">Selected Bearing</div>
      <div className="text-xl font-bold">{result.selectedBearing}</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-yellow-300 text-sm">Flight Thickness</div>
      <div className="text-xl font-bold">{result.flightThicknessMM} mm</div>
    </div>

    <div className="bg-slate-700 rounded-lg p-3">
      <div className="text-yellow-300 text-sm">Trough Thickness</div>
      <div className="text-xl font-bold">{result.troughThicknessMM} mm</div>
    </div>

  </div>
</div>
      {/* ====================================== */}
      {/* AI DESIGN REVIEW */}
      {/* ====================================== */}

      <div className="bg-green-50 text-black border border-green-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          AI Design Review
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {result.designReview.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* ====================================== */}
      {/* WARNINGS */}
      {/* ====================================== */}

      <div className="bg-red-50 text-black border border-red-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          Warnings
        </h2>

        {result.warnings.length === 0 ? (
          <p>No warnings.</p>
        ) : (
          <ul className="list-disc ml-6 space-y-2">
            {result.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        )}
      </div>

      {/* ====================================== */}
      {/* RECOMMENDATIONS */}
      {/* ====================================== */}

      <div className="bg-blue-50 text-black border border-blue-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Recommendations
        </h2>

        <ul className="list-disc ml-6 space-y-2">
          {result.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ScrewConveyorResults;