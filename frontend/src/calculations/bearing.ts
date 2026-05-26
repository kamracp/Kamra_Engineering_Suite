interface BearingInputs {
  shaftDiameter: number;
  effectiveTension: number;
  speed: number;
}

interface BearingResults {
  bearingSeries: string;
  bearingType: string;
  bearingLifeHours: number;
  lubricationType: string;
  housingType: string;
}

export function calculateBearing({
  shaftDiameter,
  effectiveTension,
  speed,
}: BearingInputs): BearingResults {

  /*
    BEARING SERIES
  */

  let bearingSeries =
    "22210";

  if (shaftDiameter >= 50) {
    bearingSeries = "22212";
  }

  if (shaftDiameter >= 75) {
    bearingSeries = "22215";
  }

  if (shaftDiameter >= 100) {
    bearingSeries = "22220";
  }

  /*
    BEARING TYPE
  */

  let bearingType =
    "Spherical Roller Bearing";

  if (speed > 4) {

    bearingType =
      "Self Aligning Bearing";

  }

  /*
    BEARING LIFE
  */

  const loadFactor =
    effectiveTension / 1000;

  const bearingLifeHours =
    Math.max(
      20000,
      60000 - loadFactor * 500
    );

  /*
    LUBRICATION
  */

  let lubricationType =
    "Grease Lubrication";

  if (speed > 5) {

    lubricationType =
      "Oil Circulation";

  }

  /*
    HOUSING
  */

  let housingType =
    "Plummer Block SN";

  if (shaftDiameter >= 100) {

    housingType =
      "Heavy Duty SD Housing";

  }

  return {

    bearingSeries,

    bearingType,

    bearingLifeHours:
      Math.round(
        bearingLifeHours
      ),

    lubricationType,

    housingType,

  };

}