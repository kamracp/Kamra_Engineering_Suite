import {
  ScrewConveyorInput,
  ScrewConveyorResult,
} from "../types/ScrewConveyorTypes";

export function calculateScrewConveyor(
  input: ScrewConveyorInput
): ScrewConveyorResult {
  const warnings: string[] = [];
  const recommendations: string[] = [];

  const capacity = input.capacityTPH;
  const length = input.length;
  const inclination = input.inclination;
  const density = input.bulkDensity;

  let screwDiameter = 200;

  if (capacity > 5) screwDiameter = 250;
  if (capacity > 15) screwDiameter = 300;
  if (capacity > 30) screwDiameter = 400;
  if (capacity > 60) screwDiameter = 500;
  if (capacity > 120) screwDiameter = 600;
  if (capacity > 250) screwDiameter = 800;

  let rpm = 80;

  if (screwDiameter >= 300) rpm = 60;
  if (screwDiameter >= 400) rpm = 50;
  if (screwDiameter >= 500) rpm = 40;
  if (screwDiameter >= 600) rpm = 30;
  if (screwDiameter >= 800) rpm = 20;

  const inclinationFactor =
    inclination <= 10
      ? 1.0
      : inclination <= 20
      ? 0.9
      : inclination <= 30
      ? 0.8
      : 0.7;

  const capacityCheckTPH =
    capacity * inclinationFactor;

  const materialMass =
    capacity * length * 0.05;

  const motorPowerKW =
    (materialMass * 9.81 * length) /
    (367 * 0.85);

  const gearboxTorqueNm =
    (9550 * motorPowerKW) /
    rpm;

  const shaftDiameterMM =
    Math.max(
      40,
      Math.sqrt(gearboxTorqueNm) * 1.8
    );

  if (inclination > 20) {
    warnings.push(
      "High inclination reduces screw capacity."
    );

    recommendations.push(
      "Consider larger diameter screw."
    );
  }

  if (capacity > 150) {
    warnings.push(
      "Very high capacity conveyor."
    );

    recommendations.push(
      "Use heavy-duty trough and hanger bearings."
    );
  }

  if (density > 1800) {
    warnings.push(
      "High bulk density material detected."
    );

    recommendations.push(
      "Check shaft strength and flight thickness."
    );
  }

  recommendations.push(
    `Recommended screw diameter: ${screwDiameter} mm`
  );

  recommendations.push(
    `Recommended operating RPM: ${rpm}`
  );

  return {
    screwDiameter,
    rpm,
    capacityCheckTPH,
    motorPowerKW:
      Number(motorPowerKW.toFixed(2)),
    gearboxTorqueNm:
      Number(gearboxTorqueNm.toFixed(2)),
    shaftDiameterMM:
      Number(shaftDiameterMM.toFixed(2)),
    efficiency: 85,
    warnings,
    recommendations,
  };
}