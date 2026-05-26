export interface MaterialData {
  density: number;
  surcharge: number;
  abrasiveness: string;
  moisture: number;
  recommendedSpeed: number;
  idlerAngle: number;
  beltClass: string;
  lumpSize: number;
  flowability: string;
  application: string;
}

export const materialDatabase: Record<
  string,
  MaterialData
> = {

  Coal: {
    density: 0.85,
    surcharge: 20,
    abrasiveness: "Low",
    moisture: 8,
    recommendedSpeed: 2.5,
    idlerAngle: 35,
    beltClass: "EP Belt",
    lumpSize: 50,
    flowability: "Good",
    application:
      "Thermal Power Plant",
  },

  Limestone: {
    density: 1.2,
    surcharge: 25,
    abrasiveness: "Medium",
    moisture: 5,
    recommendedSpeed: 2.0,
    idlerAngle: 35,
    beltClass: "EP Belt",
    lumpSize: 75,
    flowability: "Good",
    application:
      "Cement Plant",
  },

  Clinker: {
    density: 1.45,
    surcharge: 30,
    abrasiveness: "High",
    moisture: 2,
    recommendedSpeed: 1.8,
    idlerAngle: 35,
    beltClass:
      "Heat Resistant Belt",
    lumpSize: 40,
    flowability: "Medium",
    application:
      "Cement Industry",
  },

  IronOre: {
    density: 2.2,
    surcharge: 35,
    abrasiveness: "Very High",
    moisture: 3,
    recommendedSpeed: 1.5,
    idlerAngle: 45,
    beltClass:
      "Steel Cord Belt",
    lumpSize: 120,
    flowability: "Medium",
    application:
      "Mining Industry",
  },

  FlyAsh: {
    density: 0.75,
    surcharge: 18,
    abrasiveness: "Low",
    moisture: 1,
    recommendedSpeed: 3.0,
    idlerAngle: 20,
    beltClass:
      "Oil Resistant Belt",
    lumpSize: 5,
    flowability: "Excellent",
    application:
      "Power Plant",
  },

  Sand: {
    density: 1.6,
    surcharge: 30,
    abrasiveness: "Medium",
    moisture: 4,
    recommendedSpeed: 1.8,
    idlerAngle: 35,
    beltClass: "EP Belt",
    lumpSize: 10,
    flowability: "Excellent",
    application:
      "Construction Industry",
  },

  Biomass: {
    density: 0.45,
    surcharge: 18,
    abrasiveness: "Low",
    moisture: 20,
    recommendedSpeed: 3.0,
    idlerAngle: 20,
    beltClass:
      "Chevron Belt",
    lumpSize: 60,
    flowability: "Poor",
    application:
      "Biomass Power Plant",
  },

  Cement: {
    density: 1.4,
    surcharge: 25,
    abrasiveness: "Medium",
    moisture: 1,
    recommendedSpeed: 2.2,
    idlerAngle: 35,
    beltClass:
      "Anti-static Belt",
    lumpSize: 2,
    flowability: "Excellent",
    application:
      "Cement Industry",
  },

  Gypsum: {
    density: 1.0,
    surcharge: 22,
    abrasiveness: "Low",
    moisture: 6,
    recommendedSpeed: 2.0,
    idlerAngle: 35,
    beltClass: "EP Belt",
    lumpSize: 30,
    flowability: "Good",
    application:
      "Cement & Fertilizer",
  },

  Bauxite: {
    density: 1.35,
    surcharge: 28,
    abrasiveness: "High",
    moisture: 7,
    recommendedSpeed: 1.8,
    idlerAngle: 35,
    beltClass:
      "Steel Cord Belt",
    lumpSize: 80,
    flowability: "Medium",
    application:
      "Aluminium Industry",
  },

  Fertilizer: {
    density: 1.1,
    surcharge: 20,
    abrasiveness: "Low",
    moisture: 10,
    recommendedSpeed: 2.2,
    idlerAngle: 20,
    beltClass:
      "Chemical Resistant Belt",
    lumpSize: 15,
    flowability: "Good",
    application:
      "Fertilizer Plant",
  },

  Gravel: {
    density: 1.8,
    surcharge: 32,
    abrasiveness: "High",
    moisture: 3,
    recommendedSpeed: 1.7,
    idlerAngle: 35,
    beltClass:
      "Heavy Duty EP Belt",
    lumpSize: 100,
    flowability: "Medium",
    application:
      "Stone Crusher Plant",
  },

  Ore: {
    density: 2.0,
    surcharge: 35,
    abrasiveness: "Very High",
    moisture: 4,
    recommendedSpeed: 1.5,
    idlerAngle: 45,
    beltClass:
      "Steel Cord Belt",
    lumpSize: 120,
    flowability: "Medium",
    application:
      "Mining Industry",
  },

  Sugar: {
    density: 0.8,
    surcharge: 18,
    abrasiveness: "Low",
    moisture: 2,
    recommendedSpeed: 2.8,
    idlerAngle: 20,
    beltClass:
      "Food Grade Belt",
    lumpSize: 5,
    flowability: "Excellent",
    application:
      "Sugar Industry",
  },

  Grain: {
    density: 0.75,
    surcharge: 18,
    abrasiveness: "Low",
    moisture: 12,
    recommendedSpeed: 2.5,
    idlerAngle: 20,
    beltClass:
      "Food Grade Belt",
    lumpSize: 8,
    flowability: "Excellent",
    application:
      "Food Industry",
  },

  WoodChips: {
    density: 0.35,
    surcharge: 16,
    abrasiveness: "Low",
    moisture: 18,
    recommendedSpeed: 3.2,
    idlerAngle: 20,
    beltClass:
      "Chevron Belt",
    lumpSize: 100,
    flowability: "Poor",
    application:
      "Pulp & Paper Industry",
  },

};