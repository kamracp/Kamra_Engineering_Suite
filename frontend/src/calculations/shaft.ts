interface ShaftInputs {
  gearboxTorque: number;
  shaftMaterial: string;
}

interface ShaftResults {
  allowableStress: number;
  shaftDiameter: number;
  selectedShaft: number;
  safetyFactor: number;
  shaftType: string;
  keySize: string;
  couplingType: string;
  remarks: string;
}

export function calculateShaft(
  inputs: ShaftInputs
): ShaftResults {

  const {
    gearboxTorque,
    shaftMaterial,
  } = inputs;

  /*
    ALLOWABLE STRESS
    N/mm²
  */

  let allowableStress = 40;

  if (
    shaftMaterial === "EN24"
  ) {

    allowableStress = 70;

  } else if (
    shaftMaterial === "EN19"
  ) {

    allowableStress = 55;

  } else if (
    shaftMaterial === "EN8"
  ) {

    allowableStress = 40;

  }

  /*
    ASME SHAFT EQUATION
    T = π/16 × τ × d³
  */

  const shaftDiameter =
    Math.cbrt(
      (
        16 *
        gearboxTorque *
        1000
      ) /
      (
        Math.PI *
        allowableStress
      )
    );

  /*
    STANDARD SHAFTS
  */

  const standardShafts = [
    40,
    50,
    60,
    75,
    90,
    100,
    120,
    140,
    160,
    180,
    200,
    220,
    250,
  ];

  const selectedShaft =
    standardShafts.find(
      (d) => d >= shaftDiameter
    ) || 250;

  /*
    SAFETY FACTOR
  */

  const safetyFactor =
    selectedShaft /
    shaftDiameter;

  /*
    SHAFT TYPE
  */

  let shaftType = "";

  if (selectedShaft <= 60) {

    shaftType =
      "Light Duty Shaft";

  } else if (
    selectedShaft <= 120
  ) {

    shaftType =
      "Medium Duty Shaft";

  } else {

    shaftType =
      "Heavy Duty Shaft";

  }

  /*
    KEY SIZE
    STANDARD KEY TABLE
  */

  let keySize = "";

  if (selectedShaft <= 50) {

    keySize = "14 × 9 mm";

  } else if (
    selectedShaft <= 75
  ) {

    keySize = "20 × 12 mm";

  } else if (
    selectedShaft <= 100
  ) {

    keySize = "28 × 16 mm";

  } else if (
    selectedShaft <= 140
  ) {

    keySize = "36 × 20 mm";

  } else {

    keySize = "45 × 25 mm";

  }

  /*
    COUPLING
  */

  let couplingType = "";

  if (selectedShaft <= 60) {

    couplingType =
      "Lovejoy Coupling";

  } else if (
    selectedShaft <= 120
  ) {

    couplingType =
      "Gear Coupling";

  } else {

    couplingType =
      "Fluid Coupling";

  }

  /*
    REMARKS
  */

  let remarks = "";

  if (safetyFactor < 1.2) {

    remarks =
      "Critical shaft sizing. Increase shaft diameter.";

  } else if (
    safetyFactor < 1.5
  ) {

    remarks =
      "Design acceptable with monitoring.";

  } else {

    remarks =
      "Safe shaft design.";

  }

  return {

    allowableStress,

    shaftDiameter:
      Number(
        shaftDiameter.toFixed(1)
      ),

    selectedShaft,

    safetyFactor:
      Number(
        safetyFactor.toFixed(2)
      ),

    shaftType,

    keySize,

    couplingType,

    remarks,

  };
}