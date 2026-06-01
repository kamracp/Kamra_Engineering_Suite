export interface GearboxData {
  model: string;
  ratio: number;
  maxTorqueNm: number;
}

export const gearboxDatabase: GearboxData[] = [
  {
    model: "NMRV063",
    ratio: 20,
    maxTorqueNm: 150
  },
  {
    model: "NMRV075",
    ratio: 30,
    maxTorqueNm: 300
  },
  {
    model: "NMRV090",
    ratio: 40,
    maxTorqueNm: 600
  },
  {
    model: "NMRV110",
    ratio: 50,
    maxTorqueNm: 1000
  },
  {
    model: "NMRV130",
    ratio: 60,
    maxTorqueNm: 1800
  }
];