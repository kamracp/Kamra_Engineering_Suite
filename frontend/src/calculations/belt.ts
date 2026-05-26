interface BeltInputs {
  effectiveTension: number;
  beltWidth: number;
}

interface BeltResults {
  beltType: string;
  beltRating: string;
  beltClass: string;
  beltThickness: number;
  topCover: number;
  bottomCover: number;
  plyCount: number;
  safetyFactor: number;
  coverGrade: string;
  spliceType: string;
  recommendedApplication: string;
  remarks: string;
}

export function calculateBelt(
  inputs: BeltInputs
): BeltResults {

  const {
    effectiveTension,
    beltWidth,
  } = inputs;

  /*
    BELT TYPE
  */

  let beltType = "";
  let beltRating = "";
  let beltClass = "";

  if (
    effectiveTension < 10000
  ) {

    beltType = "EP Belt";
    beltRating = "EP 315/3";
    beltClass = "Medium Duty";

  } else if (
    effectiveTension < 25000
  ) {

    beltType = "EP Belt";
    beltRating = "EP 500/4";
    beltClass = "Heavy Duty";

  } else if (
    effectiveTension < 50000
  ) {

    beltType =
      "Steel Cord Belt";

    beltRating = "ST 1000";

    beltClass =
      "Very Heavy Duty";

  } else {

    beltType =
      "Steel Cord Belt";

    beltRating = "ST 2000";

    beltClass =
      "Ultra Heavy Duty";

  }

  /*
    BELT THICKNESS
  */

  let beltThickness = 0;

  if (
    beltType === "EP Belt"
  ) {

    beltThickness =
      beltWidth >= 1200
        ? 18
        : beltWidth >= 800
        ? 14
        : 12;

  } else {

    beltThickness =
      beltWidth >= 1400
        ? 28
        : 24;

  }

  /*
    COVER THICKNESS
  */

  let topCover = 5;
  let bottomCover = 3;

  if (beltWidth >= 1400) {

    topCover = 8;
    bottomCover = 4;

  } else if (
    beltWidth >= 1000
  ) {

    topCover = 6;
    bottomCover = 3;

  }

  /*
    PLY COUNT
  */

  let plyCount = 3;

  if (
    beltRating.includes("/4")
  ) {

    plyCount = 4;

  } else if (
    beltType.includes(
      "Steel Cord"
    )
  ) {

    plyCount = 1;

  }

  /*
    SAFETY FACTOR
  */

  const safetyFactor =
    beltType ===
    "Steel Cord Belt"
      ? 6.5
      : 8.0;

  /*
    COVER GRADE
  */

  let coverGrade = "";

  if (
    beltWidth >= 1400
  ) {

    coverGrade =
      "DIN-X Abrasion Resistant";

  } else if (
    beltWidth >= 1000
  ) {

    coverGrade =
      "DIN-Y General Industrial";

  } else {

    coverGrade =
      "M24 Grade";

  }

  /*
    SPLICE TYPE
  */

  let spliceType = "";

  if (
    beltType ===
    "Steel Cord Belt"
  ) {

    spliceType =
      "Hot Vulcanized Splice";

  } else {

    spliceType =
      "Mechanical Fastener / Vulcanized";

  }

  /*
    APPLICATION
  */

  let recommendedApplication =
    "";

  if (
    beltClass ===
    "Medium Duty"
  ) {

    recommendedApplication =
      "Coal, Biomass, Sand";

  } else if (
    beltClass ===
    "Heavy Duty"
  ) {

    recommendedApplication =
      "Limestone, Clinker, Ore";

  } else {

    recommendedApplication =
      "Mining, Cement Plant, Heavy Industry";

  }

  /*
    REMARKS
  */

  let remarks = "";

  if (
    beltType ===
    "Steel Cord Belt"
  ) {

    remarks =
      "Recommended for long-distance and high-tension conveyors.";

  } else {

    remarks =
      "Suitable for standard industrial conveyor systems.";

  }

  return {

    beltType,

    beltRating,

    beltClass,

    beltThickness,

    topCover,

    bottomCover,

    plyCount,

    safetyFactor,

    coverGrade,

    spliceType,

    recommendedApplication,

    remarks,

  };
}