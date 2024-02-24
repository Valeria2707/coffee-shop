export function formatNumberToCurrency(number: number) {
  const isInteger = Number.isInteger(number);
  if (isInteger) {
    return number.toFixed(2);
  } else {
    return number.toFixed(2);
  }
}
