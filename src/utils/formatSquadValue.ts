export function formatSquadValue(valueInMillions: number) {
  if (valueInMillions > 999) {
    const billions = Number((valueInMillions / 1000).toFixed(2));
    return `€ ${billions}BI`;
  }

  return `€ ${valueInMillions}M`;
}
