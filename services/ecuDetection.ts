export type Method = 'OBD' | 'BENCH' | 'BOOT';
export function detectMethod(ecuRef?: string): Method {
  if (!ecuRef) return 'OBD';
  const ref = ecuRef.trim().toUpperCase();
  if (/^B[-_]/.test(ref)) return 'BENCH';
  if (/^T[-_]/.test(ref)) return 'BOOT';
  return 'OBD';
}

export const programs: Record<Method, string[]> = {
  OBD: ['KESSv2', 'Autotuner', 'CMD Flash', 'Dimsport New Genius'],
  BENCH: ['KTAG', 'Autotuner Bench', 'CMD Boot', 'New Trasdata'],
  BOOT: ['KTAG Boot', 'Flex', 'CMD Boot', 'MMS BFlash'],
};
