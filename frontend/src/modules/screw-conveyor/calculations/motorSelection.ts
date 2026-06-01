export function selectMotor(powerKW: number): string {

  if (powerKW <= 0.75) return "0.75 kW";
  if (powerKW <= 1.5) return "1.5 kW";
  if (powerKW <= 2.2) return "2.2 kW";
  if (powerKW <= 3) return "3 kW";
  if (powerKW <= 5.5) return "5.5 kW";
  if (powerKW <= 7.5) return "7.5 kW";
  if (powerKW <= 11) return "11 kW";
  if (powerKW <= 15) return "15 kW";
  if (powerKW <= 18.5) return "18.5 kW";
  if (powerKW <= 22) return "22 kW";
  if (powerKW <= 30) return "30 kW";

  return "Consult Engineering";
}