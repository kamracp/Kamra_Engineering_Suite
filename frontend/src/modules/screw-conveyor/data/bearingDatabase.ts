export interface BearingData {
  bearing: string;
  shaftDiameter: number;
  dynamicLoadKN: number;
  staticLoadKN: number;
}

export const bearingDatabase: BearingData[] = [
  {
    bearing: "UC205",
    shaftDiameter: 25,
    dynamicLoadKN: 14,
    staticLoadKN: 7.8
  },
  {
    bearing: "UC206",
    shaftDiameter: 30,
    dynamicLoadKN: 19,
    staticLoadKN: 11
  },
  {
    bearing: "UC207",
    shaftDiameter: 35,
    dynamicLoadKN: 25,
    staticLoadKN: 15
  },
  {
    bearing: "UC208",
    shaftDiameter: 40,
    dynamicLoadKN: 31,
    staticLoadKN: 19
  },
  {
    bearing: "UC209",
    shaftDiameter: 45,
    dynamicLoadKN: 35,
    staticLoadKN: 22
  },
  {
    bearing: "UC210",
    shaftDiameter: 50,
    dynamicLoadKN: 41,
    staticLoadKN: 27
  },
  {
    bearing: "UC211",
    shaftDiameter: 55,
    dynamicLoadKN: 44,
    staticLoadKN: 29
  },
  {
    bearing: "UC212",
    shaftDiameter: 60,
    dynamicLoadKN: 52,
    staticLoadKN: 36
  }
];