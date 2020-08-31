// Soal 1
console.log("... jawaban 1");
const pi = 3.14;
let r = 7;
var keliling = (r, pi) => {
  return pi * r * 2;
};

var luas = (r, pi) => {
  let v = 3.14;
  return pi * r * r;
};

console.log(`Keliling : ${keliling(pi, r)}`);
console.log(`Luas : ${luas(pi, r)}`);

// Soal 2
console.log("... jawaban 2");
const kata1 = "saya";
const kata2 = "adalah";
const kata3 = "seorang";
const kata4 = "frontend";
const kata5 = "developer";

let kalimat = `${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
console.log(kalimat);

// Soal 3
console.log("... jawaban 3");
const newFunction = (firstName, lastName) => {
  return {
    fullName: () => {
      console.log(`${firstName} ${lastName}`);
    },
  };
};
newFunction("William", "Imoh").fullName();

// Soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!",
};
console.log("... jawaban 4");
const { firstName, lastName, destination, occupation, spell } = newObject;
console.log(firstName, lastName, destination, occupation);

// Soal 5
console.log("... jawaban 5");
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combine = [...west, ...east];
console.log(combine);
