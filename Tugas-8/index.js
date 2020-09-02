var readBooks = require("./callback.js");

var books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "komik", timeSpent: 10000 },
];

// Tulis code untuk memanggil function readBooks di sinin
var i = 0;
var time = 10000;

readBooks(time, books[i], (time) => {
  time = time;
  i++;
  readBooks(time, books[i], (time) => {
    time = time;
    i++;
    readBooks(time, books[i], (time) => {
      time = time;
      i++;
      readBooks(time, books[i], (time) => {
        time = time;
        i++;
      });
    });
  });
});
