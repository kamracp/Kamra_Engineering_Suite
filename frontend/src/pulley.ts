interface PulleyInputs {
  beltWidth: number;
  speed: number;
}

interface PulleyResults {
  pulleyDiameter: number;
  pulleyRPM: number;
  gearboxRatio: number;
  gearboxTorque: number;
  motorRPM: number;
  driveType: string;
  pulleyFaceWidth: number;
  laggingType: string;
  shaftCenterHeight: number;
}

export function calculatePulley(
  inputs: PulleyInputs
): PulleyResults {

  const {
    beltWidth,
    speed,
  } = inputs;

  /*
    MOTOR RPM
  */

  const motorRPM = 1500;

  /*
    PULLEY DIAMETER SELECTION
    BASED ON BELT WIDTH
  */

  let pulleyDiameter = 400;

  if (beltWidth >= 1800) {

    pulleyDiameter = 1000;

  } else if (beltWidth >= 1600) {

    pulleyDiameter = 800;

  } else if (beltWidth >= 1400) {

    pulleyDiameter = 800;

  } else if (beltWidth >= 1200) {

    pulleyDiameter = 630;

  } else if (beltWidth >= 1000) {

    pulleyDiameter = 500;

  } else if (beltWidth >= 800) {

    pulleyDiameter = 500;

  } else if (beltWidth >= 650) {

    pulleyDiameter = 400;

  }

  /*
    RPM
  */

  const pulleyRPM =
    (60 * speed) /
    (Math.PI *
      (pulleyDiameter / 1000));

  /*
    GEARBOX RATIO
  */

  const gearboxRatio =
    motorRPM / pulleyRPM;

  /*
    ASSUMED POWER
  */

  const assumedPower =
    beltWidth >= 1400
      ? 132
      : beltWidth >= 1000
      ? 75
      : beltWidth >= 800
      ? 45
      : 22;

  /*
    TORQUE
  */

  const gearboxTorque =
    (9550 * assumedPower) /
    pulleyRPM;

  /*
    FACE WIDTH
  */

  const pulleyFaceWidth =
    beltWidth + 100;

  /*
    DRIVE TYPE
  */

  let driveType = "";

  if (assumedPower <= 30) {

    driveType =
      "Direct Drive";

  } else if (
    assumedPower <= 90
  ) {

    driveType =
      "Geared Drive";

  } else {

    driveType =
      "Fluid Coupling Drive";

  }

  /*
    LAGGING
  */

  let laggingType = "";

  if (beltWidth >= 1400) {

    laggingType =
      "Ceramic Lagging";

  } else if (
    beltWidth >= 1000
  ) {

    laggingType =
      "Diamond Rubber Lagging";

  } else {

    laggingType =
      "Plain Rubber Lagging";

  }

  /*
    CENTER HEIGHT
  */

  const shaftCenterHeight =
    pulleyDiameter / 2 + 150;

  return {

    pulleyDiameter,

    pulleyRPM:
      Number(
        pulleyRPM.toFixed(0)
      ),

    gearboxRatio:
      Number(
        gearboxRatio.toFixed(1)
      ),

    gearboxTorque:
      Number(
        gearboxTorque.toFixed(0)
      ),

    motorRPM,

    driveType,

    pulleyFaceWidth,

    laggingType,

    shaftCenterHeight,

  };
}