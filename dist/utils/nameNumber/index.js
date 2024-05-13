"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nameNumber = void 0;
var single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
var teens = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
var tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var nameNumber = exports.nameNumber = function nameNumber(number) {
  if (typeof number != "number" || number < 0) return "undefined";
  var arr = String(number).split("").map(Number);
  var l = arr.length;
  if (l < 2) return single[number];else if (arr[1] === 0 && l < 3) return tens[number / 10 - 1];else if (arr[0] === 1 && l < 3) return teens[number - 11];else if (l < 3) return "".concat(tens[arr[0] - 1], " ").concat(single[arr[1]]);else if (l < 4) return "".concat(single[arr[0]], " hundred").concat(arr[1] != 0 || arr[2] != 0 ? " ".concat(nameNumber(arr[1] * 10 + arr[2])) : "");else if (l > 4) return nameNumber(999);
};