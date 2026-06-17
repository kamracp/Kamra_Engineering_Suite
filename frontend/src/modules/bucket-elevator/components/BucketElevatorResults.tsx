
import type {
  BucketElevatorResult,
} from "../types/BucketElevatorTypes";

interface Props {
  result: BucketElevatorResult | null;
}

function BucketElevatorResults({
  result,
}: Props) {
  if (!result) {
    return null;
  }

  return (
    <div>
      <h2>
        Bucket Elevator Results
      </h2>

      <p>
        Bucket Capacity:
        {" "}
        {result.bucketCapacityL} L
      </p>

      <p>
        Bucket Spacing:
        {" "}
        {result.bucketSpacingMM} mm
      </p>

      <p>
        Buckets Per Hour:
        {" "}
        {result.bucketsPerHour}
      </p>

      <p>
        Belt Width:
        {" "}
        {result.beltWidthMM} mm
      </p>

      <p>
        Motor Power:
        {" "}
        {result.motorPowerKW} kW
      </p>

      <p>
        Gearbox Torque:
        {" "}
        {result.gearboxTorqueNM} Nm
      </p>

      <p>
        Reliability:
        {" "}
        {result.reliabilityIndex}
      </p>

      <p>
        Design Status:
        {" "}
        {result.designStatus}
      </p>
    </div>
  );
}

export default BucketElevatorResults;

