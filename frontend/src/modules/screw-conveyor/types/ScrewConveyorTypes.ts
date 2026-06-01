export interface ScrewConveyorInput {
  material: string;
  capacityTPH: number;
  length: number;
  inclination: number;
  fillFactor: number;
  pitch: number;
  bulkDensity: number;
  screwDiameter?: number;
  rpm?: number;
}

export interface ScrewConveyorResult {
  screwDiameter: number;

  rpm: number;

  capacityCheckTPH: number;

  motorPowerKW: number;

  gearboxTorqueNm: number;

  shaftDiameterMM: number;

  efficiency: number;

  selectedMotorKW: number;

  selectedGearbox: string;

  selectedBearing: string;

  flightThicknessMM: number;

  troughThicknessMM: number;

  designReview: string[];

  warnings: string[];

  recommendations: string[];

  /* ==========================
     V2.1 Professional Dashboard
     ========================== */

  designScore: number;

  designStatus: "SAFE" | "WARNING" | "CRITICAL";

  warningCount: number;
}

export interface MaterialProperties {
  density: number;
  fillFactor: number;
  maxRPM: number;
  recommendedPitchRatio: number;
}