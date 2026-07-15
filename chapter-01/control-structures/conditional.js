// Estruturas condicionais

const num = 2;

if (num === 1) {
  console.log("num is equal to 1");
} else {
  console.log("num is not equal 1, the value of num is: " + num);
}

num === 1
  ? console.log("num is equal to 1")
  : console.log("num is not equal 1, the value of num is: " + num);

// if (monthNumber === 1) {
// } else if (monthNumber === 2) {
//   console.log("February");
// } else if (monthNumber === 3) {
//   console.log("March");
// } else if (monthNumber === 4) {
//   console.log("April");
// } else if (monthNumber === 5) {
//   console.log("May");
// } else if (monthNumber === 6) {
//   console.log("June");
// } else if (monthNumber === 7) {
//   console.log("July");
// } else if (monthNumber === 8) {
//   console.log("August");
// } else if (monthNumber === 9) {
//   console.log("September");
// } else if (monthNumber === 10) {
//   console.log("Octuber");
// } else if (monthNumber === 11) {
//   console.log("November");
// } else if (monthNumber === 12) {
//   console.log("December");
// } else {
//   console.log("please provide a value month!");
// }

const monthNumber = 9;

switch (monthNumber) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  default:
    console.log("please provide a value month!");
}
