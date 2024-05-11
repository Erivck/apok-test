const single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

const teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

const tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


export const nameNumber = (number) => {
  console.log(number);

  if (typeof number != "number" || number < 0 ) return "undefined";

  const arr = String(number).split("").map(Number);
  const l = arr.length;

  if (l < 2)
    return single[number];
  else if (arr[1] === 0 && l < 3)
    return tens[number / 10 - 1];
  else if (arr[0] === 1 && l < 3)
    return teens[number - 11];
  else if (l < 3)
    return `${tens[arr[0] - 1]} ${single[arr[1]]}`;
  else if (l < 4)
    return `${single[arr[0]]} hundred${ arr[1] != 0 || arr[2] != 0 ? ` ${nameNumber(arr[1] * 10 + arr[2])}` : ""}`;
  else if (l > 4) return nameNumber(999);
}

