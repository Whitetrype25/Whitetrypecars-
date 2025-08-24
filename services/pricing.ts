export const baseStage1 = 50;
export const baseStage2 = 120;
export const baseStage3 = 180;
export const extraOptionPrice = 10;
export function calcStage2(extrasCount: number) {
  return baseStage2 + Math.max(0, extrasCount - 1) * extraOptionPrice;
}
export type Stage = 1 | 2 | 3;
