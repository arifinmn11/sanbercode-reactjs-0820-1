// Soal 1
// Jawaban 1
console.log("... jawaban 1");
function halo() {
  return "Halo Sanbers!";
}
console.log(halo());

// Soal 2
var num1 = 12;
var num2 = 4;
// Jawaban 2
console.log("... jawaban 2");
function kalikan(num1, num2) {
  return num1 * num2;
}
console.log(kalikan(num1, num2));

// Soal 3
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
//Jawaban
console.log("... jawaban 3");
function introduce(name, age, addreess, hobby) {
  return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${addreess}, dan saya punya hobby yaitu ${hobby}!`;
}
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);

// Soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];
// Jawaban 4
console.log("... jawaban 4");
var obj = {};
arrayDaftarPeserta.forEach((element, i) => {
  if (i === 0) {
    obj.nama = element;
  } else if (i === 1) {
    obj.jenis_kelamin = element;
  } else if (i === 2) {
    obj.hobi = element;
  } else if (i === 3) {
    obj.tahun_lahir = element;
  }
});
console.log(obj);

// Soal 5
// Jawaban 5
console.log("... jawabn 5");
var obj = [
  {
    nama: "strawberry",
    warna: "merah",
    ada_bijinya: "tidak",
    harga: 9000,
  },
  {
    nama: "jeruk",
    warna: "oranye",
    ada_bijinya: "ada",
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau & Merah",
    ada_bijinya: "ada",
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    ada_bijinya: "tidak",
    harga: 5000,
  },
];
console.log(obj[0]);

//Soal 6
var dataFilm = [];
// Jawaban 6
console.log("... jawabn 6");
function tambahFilm(nama, durasi, genre, tahun) {
  var obj = { nama: nama, durasi: durasi, genre: genre, tahun: tahun };
  dataFilm.push(obj);
}
tambahFilm("Nama Film", "2 tahun", "Horror", "2030");
console.log(dataFilm);
