var i = 0;

//SOAL 1
//JAWABAN 1
console.log(".... jawaban soal 1");
console.log("LOOPING PERTAMA");
while (i < 20) {
  i = i + 2;
  console.log(i + " - I love coding ");
}

console.log("LOOPING KEDUA");
while (i > 0) {
  console.log(i + " - I will become a frontend developer ");
  i = i - 2;
}

//SOAL 2
//JAWABAN 2
console.log(".... jawaban soal 2");
for (i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 2) {
    console.log(i + " - I Love Coding");
  } else if (i % 2) {
    console.log(i + " - Santai");
  } else {
    console.log(i + " - Berkualitas");
  }
}

//SOAL 3
//JAWABAN 3
console.log(".... jawaban soal 3");
i = 0;
while (i < 7) {
  var data = "";
  i++;
  var j = 0;
  while (j < i) {
    j++;
    data += "#";
  }
  console.log(data);
}

// SOAL 4
var kalimat = "saya sangat senang belajar javascript";
//JAWABAN 4
console.log(".... jawaban soal 4");
console.log(kalimat.split(" "));

// SOAL 5
var daftarBuah = [
  "2. Apel",
  "5. Jeruk",
  "3. Anggur",
  "4. Semangka",
  "1. Mangga",
];
//JAWABAN 5
console.log(".... jawaban soal 5");
i = 0;
daftarBuah.sort();
while (i < daftarBuah.length) {
  console.log(daftarBuah[i]);
  i++;
}
