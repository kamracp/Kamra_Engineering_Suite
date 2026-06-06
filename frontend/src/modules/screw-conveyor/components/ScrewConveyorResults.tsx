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
  const getReliabilityClasses = () => {
  switch (result.reliabilityIndex) {
    case "A+":
      return "bg-green-600 text-white";

    case "A":
      return "bg-blue-600 text-white";

    case "B":
      return "bg-yellow-500 text-black";

    default:
      return "bg-red-600 text-white";
  }
};
const getReliabilityText = () => {
  switch (result.reliabilityIndex) {
    case "A+":
      return "Excellent";

    case "A":
      return "Good";

    case "B":
      return "Acceptable";

    default:
      return "Needs Review";
  }
};

  
  
  
 
const engineeringHealthScore = Math.round(
  (result.designScore +
    (result.reliabilityIndex === "A+"
      ? 100
      : result.reliabilityIndex === "A"
      ? 90
      : result.reliabilityIndex === "B"
      ? 75
      : 50)) / 2
);



  return (
          <div className="space-y-6 w-full overflow-x-auto">

      {/* ====================================== */}
      {/* PROFESSIONAL KPI DASHBOARD */}
      {/* ====================================== */}

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl rounded-2xl p-6 border border-cyan-700">
        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          Screw Conveyor Executive Performance Dashboard
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center hover:shadow-xl transition-all">
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

          <div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
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

          <div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
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

          <div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
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

          <div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
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

        
      
<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Gearbox Ratio
  </div>

  <div className="text-2xl font-bold text-indigo-700">
    {result.gearboxRatio}
  </div>

  <div className="text-sm text-gray-500">
    :1
  </div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Bearing Life
  </div>

  <div className="text-2xl font-bold text-teal-700">
    {result.bearingLifeHours > 250000
      ? ">250k"
      : result.bearingLifeHours}
  </div>

  <div className="text-sm text-gray-500">
    Hours
  </div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Motor Utilization
  </div>

  <div className="text-2xl font-bold text-yellow-700">
    {result.motorUtilization}%
  </div>

  <div className="text-sm text-gray-500">
    Load
  </div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Gearbox Utilization
  </div>

  <div className="text-2xl font-bold text-red-700">
    {result.gearboxUtilization}%
  </div>

  <div className="text-sm text-gray-500">
    Load
  </div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Reliability
  </div>

  <div
  className={`text-xl font-bold px-4 py-2 rounded-lg inline-block ${getReliabilityClasses()}`}
>
  {result.reliabilityIndex}
</div>

<div className="text-sm mt-2 font-semibold text-gray-300">
  {getReliabilityText()}
</div>


  <div className="text-sm text-gray-500">
    Grade
  </div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Warnings
  </div>

  <div className="text-2xl font-bold text-red-700">
    {result.warningCount}
  </div>

  <div className="text-sm font-semibold text-red-300 mt-2">
  {result.warningCount === 0
    ? "No Issues"
    : `${result.warningCount} Issues Found`}
</div>
</div>

<div className="bg-slate-700 border border-slate-600 rounded-xl p-4 text-center shadow-lg min-h-[120px] flex flex-col justify-center">
  <div className="text-sm text-gray-600">
    Design Status
  </div>

 <div
  className={`text-lg font-bold px-4 py-2 rounded-lg inline-block ${
    result.designStatus === "SAFE"
      ? "bg-green-600 text-white"
      : result.designStatus === "WARNING"
      ? "bg-yellow-500 text-black"
      : "bg-red-600 text-white"
  }`}
>
  {result.designStatus}
</div>

  <div className="text-sm text-gray-500">
    Status
    </div>
  </div>
</div>
<div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl p-6 shadow-xl mb-6">

  <div className="text-sm uppercase tracking-wider">
    Engineering Health Score
  </div>

  <div className="text-5xl font-bold mt-2">
    {engineeringHealthScore}%
  </div>

  <div className="w-full bg-cyan-900 rounded-full h-5 mt-4 overflow-hidden">
    <div
      className="bg-white h-5 rounded-full transition-all duration-700"
      style={{ width: `${engineeringHealthScore}%` }}
    />
  </div>

  <div className="mt-4 text-cyan-100 font-semibold">
    {engineeringHealthScore >= 95
      ? "Excellent Engineering Design"
      : engineeringHealthScore >= 85
      ? "Good Engineering Design"
      : engineeringHealthScore >= 70
      ? "Acceptable Design"
      : "Requires Engineering Review"}
  </div>

  <div className="mt-2 text-cyan-100">
    Executive Performance Index
  </div>

</div>
      {/* ====================================== */}
      {/* STATUS BADGE + WARNING COUNTER */}
      {/* ====================================== */}

      <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-2xl rounded-2xl p-6 border border-cyan-700">

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

  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

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
   
</div>   
      {/* ====================================== */}
{/* EQUIPMENT SELECTION */}
{/* ====================================== */}

<div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white shadow-xl rounded-xl p-6 border border-yellow-600">
  <h2 className="text-xl font-bold text-yellow-300 mb-4">
    Equipment Selection
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300 text-sm uppercase tracking-wide">
  ⚙ Motor Package
</div>
      <div className="text-xl font-bold">{result.selectedMotorKW} kW</div>
    </div>

    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300 text-sm uppercase tracking-wide">
  ⚙ Gearbox Package
</div>
      <div className="text-xl font-bold">{result.selectedGearbox}</div>
    </div>

    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300 text-sm uppercase tracking-wide">
  ⚙ Bearing Package
</div>
      <div className="text-xl font-bold">{result.selectedBearing}</div>
    </div>

    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300 text-sm uppercase tracking-wide">
  ⚙ Flight Design
</div>
      <div className="text-xl font-bold">{result.flightThicknessMM} mm</div>
    </div>

    <div className="bg-slate-800 border border-slate-600 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all">
      <div className="text-yellow-300 text-sm uppercase tracking-wide">
  ⚙ Trough Design
</div>
      <div className="text-xl font-bold">{result.troughThicknessMM} mm</div>
    </div>

  </div>
</div>
      {/* ====================================== */}
      {/* AI DESIGN REVIEW */}
      {/* ====================================== */}

      <div className="bg-green-50 text-black border border-green-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700 mb-2">
  🤖 AI Engineering Review
</h2>

<p className="text-sm text-gray-600 mb-4">
  Automated Engineering Assessment Based on Current Design Inputs
</p>

        <ul className="list-disc ml-6 space-y-2">
          {result.designReview.map((item, index) => (
           <li
  key={index}
  className="bg-white rounded-lg p-3 shadow-sm border border-green-200"
>
  ✓ {item}
</li> 
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
