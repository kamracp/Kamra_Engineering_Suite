
import { useState } from "react";

import type {
  BucketElevatorInput,
} from "../types/BucketElevatorTypes";

interface Props {
  onCalculate: (
    input: BucketElevatorInput
  ) => void;
}

function BucketElevatorForm({
  onCalculate,
}: Props) {
  const [formData, setFormData] =
    useState<BucketElevatorInput>({
      material: "Cement",
      capacityTPH: 50,
      liftHeightM: 20,
      bucketFillFactor: 75,
      beltSpeedMS: 1.5,
      bulkDensity: 1200,
    });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Bucket Elevator Inputs
      </h2>

      <div>
        <label>
          Capacity TPH
        </label>

        <input
          type="number"
          value={formData.capacityTPH}
          onChange={(e) =>
            setFormData({
              ...formData,
              capacityTPH: Number(
                e.target.value
              ),
            })
          }
        />
      </div>

      <div>
        <label>
          Lift Height (m)
        </label>

        <input
          type="number"
          value={formData.liftHeightM}
          onChange={(e) =>
            setFormData({
              ...formData,
              liftHeightM: Number(
                e.target.value
              ),
            })
          }
        />
      </div>

      <div>
        <label>
          Belt Speed (m/s)
        </label>

        <input
          type="number"
          step="0.1"
          value={formData.beltSpeedMS}
          onChange={(e) =>
            setFormData({
              ...formData,
              beltSpeedMS: Number(
                e.target.value
              ),
            })
          }
        />
      </div>

      <button type="submit">
        Calculate
      </button>
    </form>
  );
}

export default BucketElevatorForm;

