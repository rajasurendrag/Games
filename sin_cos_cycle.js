
// (x ** 2) + (y ** 2) = (r ** 2);
// x midpoint = width / 2;
// y midpoint = height / 2;

// opp/hyp = sin -->  opp = sin * hyp [hyp = radius];
// adj/hyp = cos -->  adj = cos * hyp [hyp = radius];

// xCoor = xMidpoint + adj
// yCoor = yMidpoint + opp

// sine wave formula { y = amp * sin(x * wavelength) + 10 or 20 }
//A + sin(x)*A


function sine(x, wavelength) {
  return Math.sin(x) + wavelength;
}

function delay(endLimit) {
  for (let i = 0; i < endLimit; i++) { }
}

function repeat(string, times) {
  if (times < 1) {
    return '';
  }

  return string + repeat(string, times - 1);
}

for (let index = 0; index < 100; index += 0.25) {
  const amplitude = 20;
  const wavelength = 50;

  const sineValue = amplitude * sine(index, wavelength);
  const cosValue = amplitude * sine(-index, wavelength);
  const colorToPrintFirst = cosValue < sineValue ? "🔵" : "🟢";
  const colorToPrintSecond = colorToPrintFirst === "🔵" ? "🟢" : "🔵";

  console.log(repeat(" ", Math.min(cosValue, sineValue)) + colorToPrintFirst + repeat("━", Math.abs(cosValue - sineValue)) + colorToPrintSecond);

  delay(89999999);
}



