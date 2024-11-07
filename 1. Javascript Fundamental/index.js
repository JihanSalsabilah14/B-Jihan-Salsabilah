document.addEventListener("DOMContentLoaded", function () {
  // String
  let nama = "Jihan";
  let pesan = "Halo, " + nama + "! Selamat datang di website ini.";

  // Menampilkan pesan di dalam elemen dengan id "intro"
  document.getElementById("intro").innerHTML = pesan;

  // Number
  let umur = 20;

  // Boolean
  let sudahDewasa = umur >= 18;

  // Array
  let hobi = ["Editing", "Fotografi", "Design"];

  // Object
  let pengguna = {
    nama: nama,
    umur: umur,
    hobi: hobi,
    statusDewasa: sudahDewasa,
  };

  // Fungsi untuk menampilkan pesan alert
  window.tampilkanAlert = function () {
    alert(
      "Selamat datang, " + pengguna.nama + "! Senang melihat Anda di sini."
    );
  };

  // Fungsi untuk memeriksa status dewasa
  window.cekKondisi = function () {
    let pesanStatus;
    if (pengguna.umur === 20 && pengguna.statusDewasa) {
      pesanStatus =
        "Anda berumur " + pengguna.umur + " tahun dan sudah dewasa.";
    } else if (pengguna.umur < 20 || !pengguna.statusDewasa) {
      pesanStatus = "Anda belum mencapai usia dewasa.";
    } else {
      pesanStatus = "Informasi tidak lengkap.";
    }
    document.getElementById("output").innerHTML = pesanStatus;
  };

  // Menampilkan informasi pengguna di console
  console.log("Nama:", pengguna.nama);
  console.log("Umur:", pengguna.umur);
  console.log("Hobi:", pengguna.hobi);
  console.log("Apakah sudah dewasa?", pengguna.statusDewasa);
});
