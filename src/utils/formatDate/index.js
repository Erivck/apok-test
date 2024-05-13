export const formatDate = (date) => {
  if (!(date instanceof Date)) throw new Error("invalid date");

  return `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()} ${date.getUTCHours()}:${date.getUTCMinutes()}:${date.getUTCSeconds()}`;
}