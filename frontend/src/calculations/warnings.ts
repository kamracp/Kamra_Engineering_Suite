interface WarningInputs {
  speed: number;
  motorPower: number;
  beltWidth: number;
  selectedShaft: number;
  inclineAngle: number;
  height: number;
}

export function generateWarnings(
  inputs: WarningInputs
): string[] {

  const {
    speed,
    motorPower,
    beltWidth,
    selectedShaft,
    inclineAngle,
    height,
  } = inputs;

  const warnings: string[] = [];

  /*
    BELT SPEED
  */

  if (speed > 5) {

    warnings.push(
      "High belt speed detected. Check belt stability and pulley balancing."
    );

  }

  if (speed < 0.8) {

    warnings.push(
      "Very low belt speed detected. Material build-up may occur."
    );

  }

  /*
    SHAFT CHECK
  */

  if (
    selectedShaft < 60 &&
    motorPower > 20
  ) {

    warnings.push(
      "Shaft may be undersized for transmitted torque."
    );

  }

  if (
    selectedShaft < 90 &&
    motorPower > 75
  ) {

    warnings.push(
      "Heavy-duty conveyor requires larger shaft diameter."
    );

  }

  /*
    BELT WIDTH
  */

  if (beltWidth >= 1600) {

    warnings.push(
      "Large belt width detected. Consider steel cord belt construction."
    );

  }

  if (beltWidth >= 1800) {

    warnings.push(
      "Check conveyor structure stiffness for wide belt operation."
    );

  }

  /*
    MOTOR POWER
  */

  if (motorPower > 75) {

    warnings.push(
      "Consider VFD or fluid coupling for smooth starting."
    );

  }

  if (motorPower > 150) {

    warnings.push(
      "High-power conveyor detected. Soft starter or VFD strongly recommended."
    );

  }

  /*
    INCLINE CHECK
  */

  if (inclineAngle > 18) {

    warnings.push(
      "Steep incline detected. Material rollback risk possible."
    );

  }

  if (inclineAngle > 25) {

    warnings.push(
      "Consider chevron belt or sidewall belt for steep incline."
    );

  }

  /*
    HEIGHT CHECK
  */

  if (height > 25) {

    warnings.push(
      "Check take-up arrangement and braking system."
    );

  }

  if (height > 40) {

    warnings.push(
      "High lift conveyor detected. Dynamic analysis recommended."
    );

  }

  /*
    COMBINED CONDITIONS
  */

  if (
    motorPower > 90 &&
    inclineAngle > 15
  ) {

    warnings.push(
      "High power and incline combination may require dual drive arrangement."
    );

  }

  if (
    speed > 4 &&
    beltWidth > 1400
  ) {

    warnings.push(
      "Wide high-speed belt may require advanced tracking system."
    );

  }

  /*
    SAFETY
  */

  if (
    inclineAngle > 20 &&
    height > 20
  ) {

    warnings.push(
      "Install backstop or holdback device for safety."
    );

  }

  /*
    AI SMART DIAGNOSTICS
  */

  if (
    motorPower > 100 &&
    selectedShaft < 100
  ) {

    warnings.push(
      "AI Diagnostic: Shaft optimization recommended for long-term reliability."
    );

  }

  if (
    speed > 5 &&
    motorPower > 120
  ) {

    warnings.push(
      "AI Diagnostic: Dynamic belt behavior analysis recommended."
    );

  }

  if (
    beltWidth >= 1600 &&
    inclineAngle > 20
  ) {

    warnings.push(
      "AI Diagnostic: Consider finite element analysis for conveyor structure."
    );

  }

  /*
    NO WARNINGS
  */

  if (
    warnings.length === 0
  ) {

    warnings.push(
      "No major engineering warnings detected."
    );

  }

  return warnings;
}
