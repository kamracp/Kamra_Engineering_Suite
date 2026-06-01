
import React, { useState } from "react";

import ScrewConveyorForm from "../components/ScrewConveyorForm";
import ScrewConveyorResults from "../components/ScrewConveyorResults";
import ScrewConveyorDrawing from "../components/ScrewConveyorDrawing";

import type {
  ScrewConveyorInput,
  ScrewConveyorResult,
} from "../types/ScrewConveyorTypes";

import { calculateScrewConveyor } from "../calculations/ScrewConveyorCalculationEngine";

const ScrewConveyor: React.FC = () => {
  const [input, setInput] = useState<ScrewConveyorInput>({
    material: "Coal",
    capacityTPH: 10,
    length: 20,
    inclination: 0,
    fillFactor: 0.3,
    pitch: 200,
    bulkDensity: 850,
  });

  const [result, setResult] =
    useState<ScrewConveyorResult | null>(null);

  const handleCalculate = () => {
    try {
      console.log("INPUT DATA:", input);

      const calculatedResult =
        calculateScrewConveyor(input);

      console.log(
        "CALCULATED RESULT:",
        calculatedResult
      );

      setResult(calculatedResult);
    } catch (error) {
      console.error(
        "SCREW CONVEYOR CALCULATION ERROR:",
        error
      );
    }
  };

  return (
    <div className="p-4 max-w-screen-2xl mx-auto">

      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Screw Conveyor Engineering Suite
        </h1>

        <p className="text-gray-600">
          Industrial Screw Conveyor Design,
          Selection and Engineering Analysis Tool
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-1">

          <ScrewConveyorForm
            input={input}
            setInput={setInput}
          />

          <div className="mt-4">
            <button
              onClick={handleCalculate}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-lg"
            >
              Calculate Screw Conveyor
            </button>
          </div>

        </div>

        <div className="xl:col-span-2">
          <ScrewConveyorResults
            result={result}
          />
        </div>

      </div>

      {result && (
        <div className="mt-6">
          <ScrewConveyorDrawing
            diameter={result.screwDiameter}
            pitch={input.pitch}
            length={input.length}
            rpm={result.rpm}
          />
        </div>
      )}
    </div>
  );
};

export default ScrewConveyor;
