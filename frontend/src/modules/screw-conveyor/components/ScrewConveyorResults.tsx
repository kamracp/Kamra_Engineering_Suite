import React from "react";
import type { ScrewConveyorResult } from "../types/ScrewConveyorTypes";

interface Props {
  result: ScrewConveyorResult | null;
}

const ScrewConveyorResults: React.FC<Props> = ({ result }) => {
  if (!result) {
    return (
      <div className="bg-white text-black shadow rounded-xl p-6">
        <h2 className="text-xl font-bold text-black mb-4">
          Screw Conveyor Results
        </h2>

        <p className="text-gray-600">
          Click Calculate Screw Conveyor to generate results.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Design Results */}

      <div className="bg-white text-black shadow rounded-xl p-6">
        <h2 className="text-xl font-bold text-black mb-4">
          Design Results
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <strong>Screw Diameter</strong>
            <br />
            {result.screwDiameter} mm
          </div>

          <div>
            <strong>RPM</strong>
            <br />
            {result.rpm}
          </div>

          <div>
            <strong>Capacity Check</strong>
            <br />
            {result.capacityCheckTPH} TPH
          </div>

          <div>
            <strong>Motor Power</strong>
            <br />
            {result.motorPowerKW} kW
          </div>

          <div>
            <strong>Gearbox Torque</strong>
            <br />
            {result.gearboxTorqueNm} Nm
          </div>

          <div>
            <strong>Shaft Diameter</strong>
            <br />
            {result.shaftDiameterMM} mm
          </div>

          <div>
            <strong>Efficiency</strong>
            <br />
            {result.efficiency} %
          </div>

        </div>
      </div>

      {/* Equipment Selection */}

      <div className="bg-white text-black shadow rounded-xl p-6">
        <h2 className="text-xl font-bold text-black mb-4">
          Equipment Selection
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <strong>Selected Motor</strong>
            <br />
            {result.selectedMotorKW} kW
          </div>

          <div>
            <strong>Selected Gearbox</strong>
            <br />
            {result.selectedGearbox}
          </div>

          <div>
            <strong>Selected Bearing</strong>
            <br />
            {result.selectedBearing}
          </div>

          <div>
            <strong>Flight Thickness</strong>
            <br />
            {result.flightThicknessMM} mm
          </div>

          <div>
            <strong>Trough Thickness</strong>
            <br />
            {result.troughThicknessMM} mm
          </div>

        </div>
      </div>

      {/* AI Design Review */}

      <div className="bg-green-50 text-black border border-green-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          AI Design Review
        </h2>

        <ul className="list-disc ml-6">
          {result.designReview.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Warnings */}

      <div className="bg-red-50 text-black border border-red-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          Warnings
        </h2>

        {result.warnings.length === 0 ? (
          <p>No warnings.</p>
        ) : (
          <ul className="list-disc ml-6">
            {result.warnings.map((warning, index) => (
              <li key={index}>{warning}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Recommendations */}

      <div className="bg-blue-50 text-black border border-blue-300 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Recommendations
        </h2>

        <ul className="list-disc ml-6">
          {result.recommendations.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default ScrewConveyorResults;