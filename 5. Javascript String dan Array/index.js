// Inisialisasi antrian awal
let antrian = ["Ray", "Fiki", "Fadhilla", "Farah"];

// Tambah pembeli baru: Nabila
antrian.push("Nabila");
// Tambah dua pembeli baru: Maza dan Elsi
antrian.push("Maza", "Elsi");
// Pembeli terakhir (Elsi) pulang
antrian.pop();
// Pembeli pertama (Ray) sudah mendapatkan belanjaan
antrian.shift();
// Pembeli kedua (Fiki) sudah mendapatkan belanjaan
antrian.shift();
// Pembeli baru yang nyerobot antrian: Tomi
antrian.unshift("Tomi");
// Cetak hasil akhir antrian
console.log(antrian);
