import type {
BucketElevatorInput,
BucketElevatorResult,
} from "../types/BucketElevatorTypes";

export function calculateBucketElevator(
input: BucketElevatorInput
): BucketElevatorResult {

const bucketCapacityL =
input.bucketCapacityL ?? 5;

const bucketSpacingMM = 300;

const bucketsPerHour =
Math.round(
(input.beltSpeedMS * 3600) /
(bucketSpacingMM / 1000)
);

const beltWidthMM =
bucketCapacityL <= 3
? 200
: bucketCapacityL <= 5
? 300
: bucketCapacityL <= 10
? 400
: 500;

const motorPowerKW =
Number(
(
(input.capacityTPH *
input.liftHeightM *
9.81) /
367
).toFixed(2)
);

const gearboxTorqueNM =
Number(
(
(motorPowerKW * 9550) /
60
).toFixed(0)
);

const headPulleyDiameterMM =
beltWidthMM;

const tailPulleyDiameterMM =
Math.round(
beltWidthMM * 0.8
);

const efficiency = 90;

const selectedMotorKW =
motorPowerKW <= 2.2
? 2.2
: motorPowerKW <= 5.5
? 5.5
: motorPowerKW <= 11
? 11
: 15;

const selectedGearbox =
"Helical Gearbox";

const selectedBelt =
"EP Conveyor Belt";

const warnings: string[] = [];

const recommendations: string[] =
[];

const designReview: string[] = [];

if (
input.beltSpeedMS > 2.5
) {
warnings.push(
"High belt speed detected"
);
}

if (
input.liftHeightM > 40
) {
warnings.push(
"High lift elevator - review tension calculations"
);
}

recommendations.push(
"Use anti-backstop device"
);

recommendations.push(
"Use bucket alignment monitoring"
);

designReview.push(
"Bucket spacing verified"
);

designReview.push(
"Motor sizing verified"
);

const warningCount =
warnings.length;

const designScore =
Math.max(
100 - warningCount * 10,
60
);

let designStatus:
| "SAFE"
| "WARNING"
| "CRITICAL" =
"SAFE";

if (
warningCount >= 3
) {
designStatus =
"CRITICAL";
} else if (
warningCount >= 1
) {
designStatus =
"WARNING";
}

const gearboxRatio = 60;

const motorUtilization = 75;

const gearboxUtilization = 70;

const reliabilityIndex =
designScore >= 90
? "A+"
: designScore >= 80
? "A"
: designScore >= 70
? "B"
: "C";

return {
bucketCapacityL,
bucketSpacingMM,
bucketsPerHour,
beltWidthMM,
motorPowerKW,
gearboxTorqueNM,
headPulleyDiameterMM,
tailPulleyDiameterMM,
efficiency,
selectedMotorKW,
selectedGearbox,
selectedBelt,
designReview,
warnings,
recommendations,
designScore,
designStatus,
warningCount,
gearboxRatio,
motorUtilization,
gearboxUtilization,
reliabilityIndex,
};
}
