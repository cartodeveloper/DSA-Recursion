// Counting Sheeps

const countSheeps = (numSheep) => {
  if (numSheep === 0) {
    return "All sheep jumped over the fence";
  }
  return (
    `${numSheep}: Another sheep jumps over the fence \n` +
    countSheeps(numSheep - 1)
  );
};

console.log(countSheeps(3));

// Power Calculator

const powerCalculator = function (base, exponent) {
  if (exponent == 0) {
    return 1;
  } else if (exponent > 0) {
    return base * powerCalculator(base, exponent - 1);
  } else if (exponent < 0) {
    const absExp = Math.abs(exponent);
    return 1 / (base * powerCalculator(base, absExp - 1));
  }
};
console.log(powerCalculator(10, 2));

// String Reverse

const stringReverse = (string) => {
  if (string === "") {
    return "";
  }

  return stringReverse(string.substr(1)) + string.charAt(0);
};

console.log(stringReverse("Reverse Me"));

// nth Triangular Numb
const triNum = function (nth) {
  // T6 = 1+2+3+4+5+6 = 21
  if (nth === 0) {
    return 0;
  }
  return nth + triNum(nth - 1);
};
console.log(triNum(5));
