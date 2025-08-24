export function detectMethod(ecuRef) {
  if (!ecuRef) return 'OBD';
  if (ecuRef.startsWith('B')) return 'BENCH';
  if (ecuRef.startsWith('T')) return 'BOOT';
  return 'OBD';
}

export const programs = {
  OBD: ['KESSv2', 'Autotuner', 'CMD Flash', 'Dimsport New Genius'],
  BENCH: ['KTAG', 'Autotuner Bench', 'CMD Boot', 'New Trasdata'],
  BOOT: ['KTAG Boot', 'Flex', 'CMD Boot', 'MMS BFlash'],
};
