interface PulleyInputs {
  beltWidth: number;
  speed: number;
  motorPower: number;
}

interface PulleyResults {
  pulleyDiameter: number;
  pulleyFaceWidth: number;
  pulleyRPM: number;
  gearboxRatio: number;
  gearboxTorque: number;
  laggingType: string;
  driveType: string;
  shaftCenterHeight: number;
}

export function calculatePulley({
  beltWidth,
  speed,
  motorPower,
}: PulleyInputs): PulleyResults {

  /*
    PULLEY DIAMETER
  */

  let pulleyDiameter = 400;

  if (beltWidth >= 800) {
    pulleyDiameter = 500;
  }

  if (beltWidth >= 1200) {
    pulleyDiameter = 630;
  }

  if (beltWidth >= 1600) {
    pulleyDiameter = 800;
  }

  /*
    FACE WIDTH
  */

  const pulleyFaceWidth =
    beltWidth + 200;

  /*
    RPM
  */

  const pulleyRPM =
    (
      speed * 60
    ) /
    (
      Math.PI *
      (
        pulleyDiameter / 1000
      )
    );

  /*
    GEARBOX
  */

  const gearboxRatio =
    1500 / pulleyRPM;

  /*
    TORQUE
  */

  const gearboxTorque =
    (
      9550 *
      motorPower
    ) /
    pulleyRPM;

  /*
    LAGGING
  */

  let laggingType =
    "Rubber Lagging";

  if (motorPower > 75) {

    laggingType =
      "Ceramic Lagging";

  }

  /*
    DRIVE TYPE
  */

  let driveType =
    "Direct Drive";

  if (motorPower > 55) {

    driveType =
      "Geared Drive";

  }

  /*
    CENTER HEIGHT
  */

  const shaftCenterHeight =
    pulleyDiameter + 150;

  return {

    pulleyDiameter,

    pulleyFaceWidth:
      Math.round(
        pulleyFaceWidth
      ),

    pulleyRPM:
      Number(
        pulleyRPM.toFixed(1)
      ),

    gearboxRatio:
      Number(
        gearboxRatio.toFixed(1)
      ),

    gearboxTorque:
      Number(
        gearboxTorque.toFixed(1)
      ),

    laggingType,

    driveType,

    shaftCenterHeight,

  };

}
