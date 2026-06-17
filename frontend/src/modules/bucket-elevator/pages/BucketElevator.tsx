

import { useState } from "react";

import BucketElevatorForm from "../components/BucketElevatorForm";
import BucketElevatorResults from "../components/BucketElevatorResults";

import {
  calculateBucketElevator,
} from "../calculations/BucketElevatorCalculationEngine";

import type {
  BucketElevatorInput,
  BucketElevatorResult,
} from "../types/BucketElevatorTypes";

function BucketElevator() {
  const [result, setResult] =
    useState<BucketElevatorResult | null>(
      null
    );

  const handleCalculate = (
    input: BucketElevatorInput
  ) => {
    const calculatedResult =
      calculateBucketElevator(input);

    setResult(calculatedResult);
  };

  return (
    <div>
      <h1>
        Bucket Elevator V1.0
      </h1>

      <BucketElevatorForm
        onCalculate={handleCalculate}
      />

      <BucketElevatorResults
        result={result}
      />
    </div>
  );
}

export default BucketElevator;

