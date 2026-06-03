import { calculatePulley } from "./pulley";
import { calculateShaft } from "./shaft";
import { calculateBearing } from "./bearing";
import { calculateBelt } from "./belt";
import { generateWarnings } from "./warnings";

export interface ConveyorInputs {
  material: string;
  density: number;
  capacity: number;
  length: number;
  height: number;
  speed: number;
  shaftMaterial: string;
  inclineAngle: number;
}

export interface ConveyorResults {
  area: number;
  beltWidth: number;
  effectiveTension: number;
  motorPower: number;

  pulley: any;
  shaft: any;
  bearing: any;
  belt: any;

  warnings: string[];
}

export function calculateConveyor(
  inputs: ConveyorInputs
): ConveyorResults {

  /*
    BASIC INPUTS
  */

  const {
    density,
    capacity,
    length,
    height,
    speed,
    shaftMaterial,
    inclineAngle,
  } = inputs;

  /*
    CAPACITY AREA
  */

  const area =
    capacity /
    (3600 * speed * density);

  /*
    BELT WIDTH
  */

  const beltWidthMeters =
    Math.sqrt(area / 0.075);

  let beltWidth =
    Math.round(
      beltWidthMeters * 1000
    );

  /*
    STANDARD WIDTHS
  */

  const standardWidths = [
    400,
    500,
    650,
    800,
    1000,
    1200,
    1400,
    1600,
    1800,
    2000,
  ];

  beltWidth =
    standardWidths.find(
      (w) => w >= beltWidth
    ) || 2000;

  /*
    RESISTANCES
  */

  const horizontalResistance =
    length * 35;

  const liftResistance =
    height *
    capacity *
    9.81;

  const materialResistance =
    density *
    capacity *
    12;

  const totalResistance =
    horizontalResistance +
    liftResistance +
    materialResistance;

  /*
    EFFECTIVE TENSION
  */

  const effectiveTension =
    totalResistance;

  /*
    MOTOR POWER
  */

  const motorPower =
    (effectiveTension * speed) /
    1000;

  /*
    PULLEY
  */

  const pulley =
   calculatePulley({
  beltWidth,
  speed,
  motorPower,
});

  /*
    SHAFT
  */

  const shaft =
    calculateShaft({
      gearboxTorque:
        pulley.gearboxTorque,
      shaftMaterial,
    });

  /*
    BEARING
  */

  const bearing =
  calculateBearing({
    shaftDiameter:
      shaft.selectedShaft,

    effectiveTension,

    speed,
  });

  /*
    BELT
  */

  const belt =
    calculateBelt({
      effectiveTension,
      beltWidth,
    });

  /*
    WARNINGS
  */

  const warnings =
    generateWarnings({
      speed,
      motorPower,
      beltWidth,
      selectedShaft:
        shaft.selectedShaft,
      inclineAngle,
      height,
    });

  return {

    area,

    beltWidth,

    effectiveTension,

    motorPower,

    pulley,

    shaft,

    bearing,

    belt,

    warnings,

  };
}