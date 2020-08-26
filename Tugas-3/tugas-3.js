// Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

// Jawaban 1
var gabung =
  kataPertama +
  " " +
  kataKedua[0].toUpperCase() +
  kataKedua.substring(1, 6) +
  " " +
  kataKetiga +
  " " +
  kataKeempat.toUpperCase();
console.log("...jawaban soal 1");
console.log(gabung);

// Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

// Jawaban 2
var convert =
  parseInt(kataPertama) +
  parseInt(kataKedua) +
  parseInt(kataKetiga) +
  parseInt(kataKeempat);
console.log("...jawaban soal 2");
console.log(convert);

//Soal 3
var kalimat = "wah javascript itu keren sekali";
// Jawaban 3
var kataPertama = kalimat.substring(0, 3);
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);
console.log("...jawaban soal 3");
console.log("Kata Pertama: " + kataPertama);
console.log("Kata Kedua: " + kataKedua);
console.log("Kata Ketiga: " + kataKetiga);
console.log("Kata Keempat: " + kataKeempat);
console.log("Kata Kelima: " + kataKelima);

// Soal 4
var nilai = 64;
// Jawaban 5
console.log("...jawaban soal 4");
if (nilai >= 80) console.log("indeksnya A");
else if (nilai >= 70 && nilai < 80) console.log(" indeksnya B");
else if (nilai >= 60 && nilai < 70) console.log("indeksnya C");
else if (nilai >= 50 && nilai < 60) console.log(" indeksnya D");
else if (nilai < 50) console.log("indeksnya E");

//Soal 5
var tanggal = 11;
var bulan = 11;
var tahun = 1996;

//Jawaban 5
switch (bulan) {
  case 1: {
    bulan = "Januari";
    break;
  }
  case 2: {
    bulan = "Februari";
    break;
  }
  case 3: {
    bulan = "Maret";
    break;
  }
  case 4: {
    bulan = "April";
    break;
  }
  case 5: {
    bulan = "Mei";
    break;
  }
  case 6: {
    bulan = "Juni";
    break;
  }
  case 7: {
    bulan = "Juli";
    break;
  }
  case 8: {
    bulan = "Agustus";
    break;
  }
  case 9: {
    bulan = "September";
    break;
  }
  case 10: {
    bulan = "Oktober";
    break;
  }
  case 11: {
    bulan = "November";
    break;
  }
  case 12: {
    bulan = "Desember";
    break;
  }
}
console.log("...jawaban soal 5");
console.log(tanggal + " " + bulan + " " + tahun);
