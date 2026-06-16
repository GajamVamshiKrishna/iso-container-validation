// https://en.wikipedia.org/wiki/ISO_6346
const ISO6346_ALPHABET = '0123456789A-BCDEFGHIJK-LMNOPQRSTU-VWXYZ';
const ISO6346_WEIGHTS = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const CONTAINER_NUMBER_FORMAT = /^([A-Z]{3})(U|J|Z)(\d{6})(\d)$/;

export function isValidContainerNumber(containerNumber: string): boolean {
  const normalized = containerNumber.toUpperCase();
  if (!CONTAINER_NUMBER_FORMAT.test(normalized)) {
    return false;
  }

  const containerNumberWithoutCheckDigit = normalized.substring(0, 10);
  const checkDigit = normalized[10];

  let sum = 0;
  for (let i = 0; i < containerNumberWithoutCheckDigit.length; i++) {
    sum += ISO6346_WEIGHTS[i] * ISO6346_ALPHABET.indexOf(containerNumberWithoutCheckDigit[i]);
  }

  const checkDigitIndex = ISO6346_ALPHABET.indexOf(checkDigit);

  return checkDigitIndex === (sum % 11) % 10;
}
