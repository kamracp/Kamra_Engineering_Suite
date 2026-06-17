export interface BucketElevatorInput {
material: string;

capacityTPH: number;

liftHeightM: number;

bucketFillFactor: number;

beltSpeedMS: number;

bulkDensity: number;

bucketCapacityL?: number;
}

export interface BucketElevatorResult {
bucketCapacityL: number;

bucketSpacingMM: number;

bucketsPerHour: number;

beltWidthMM: number;

motorPowerKW: number;

gearboxTorqueNM: number;

headPulleyDiameterMM: number;

tailPulleyDiameterMM: number;

efficiency: number;

selectedMotorKW: number;

selectedGearbox: string;

selectedBelt: string;

designReview: string[];

warnings: string[];

recommendations: string[];

designScore: number;

designStatus:
| "SAFE"
| "WARNING"
| "CRITICAL";

warningCount: number;

gearboxRatio: number;

motorUtilization: number;

gearboxUtilization: number;

reliabilityIndex:
| "A+"
| "A"
| "B"
| "C";
}

export interface MaterialProperties {
density: number;

bucketFillFactor: number;

recommendedSpeedMS: number;
}
