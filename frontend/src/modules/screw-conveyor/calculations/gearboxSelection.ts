export function selectGearbox(
  torqueNm: number
): string {

  if (torqueNm <= 500)
    return "Bonfiglioli VF49";

  if (torqueNm <= 1000)
    return "Bonfiglioli VF72";

  if (torqueNm <= 2000)
    return "Bonfiglioli VF86";

  if (torqueNm <= 4000)
    return "Bonfiglioli VF110";

  if (torqueNm <= 8000)
    return "Bonfiglioli VF130";

  return "Heavy Duty Industrial Gearbox";
}