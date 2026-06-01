import type { MaterialProperties } from "../types/ScrewConveyorTypes";

export const materialDatabase: Record<string, MaterialProperties> = {
  Coal: {
    density: 850,
    fillFactor: 0.30,
    maxRPM: 120,
    recommendedPitchRatio: 1.0,
  },

  Limestone: {
    density: 1600,
    fillFactor: 0.35,
    maxRPM: 100,
    recommendedPitchRatio: 1.0,
  },

  Sand: {
    density: 1700,
    fillFactor: 0.40,
    maxRPM: 90,
    recommendedPitchRatio: 1.0,
  },

  Gravel: {
    density: 1800,
    fillFactor: 0.35,
    maxRPM: 80,
    recommendedPitchRatio: 1.0,
  },

  Cement: {
    density: 1440,
    fillFactor: 0.45,
    maxRPM: 90,
    recommendedPitchRatio: 1.0,
  },

  FlyAsh: {
    density: 850,
    fillFactor: 0.40,
    maxRPM: 100,
    recommendedPitchRatio: 1.0,
  },

  Biomass: {
    density: 450,
    fillFactor: 0.25,
    maxRPM: 140,
    recommendedPitchRatio: 1.0,
  },

  Fertilizer: {
    density: 950,
    fillFactor: 0.35,
    maxRPM: 100,
    recommendedPitchRatio: 1.0,
  },

  IronOre: {
    density: 2200,
    fillFactor: 0.30,
    maxRPM: 70,
    recommendedPitchRatio: 1.0,
  },

  GeneralBulkMaterial: {
    density: 1000,
    fillFactor: 0.30,
    maxRPM: 100,
    recommendedPitchRatio: 1.0,
  },
};