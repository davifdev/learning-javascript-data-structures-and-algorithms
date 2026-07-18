for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

let i = 11;
do {
  console.log(i);
  i++;
} while (i < 10);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((num) => console.log(num));

for (let num of numbers) {
  console.log(num);
}

const person = {
  firstName: "Davi",
  lastName: "Fernandes",
  age: 26,
  role: "Full Stack Developer",
};

for (let item in person) {
  console.log(person[item]);
}
