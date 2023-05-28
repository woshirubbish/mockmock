export const number = function (min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER, isInt = false): number {
  min = parseInt(min.toString(), 10);
  max = parseInt(max.toString(), 10);
  return Math.round(Math.random() * (max - min)) + min;
};
