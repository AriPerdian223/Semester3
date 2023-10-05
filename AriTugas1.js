function identitas(nama, nim, kelas) {
    const angka1 = 10;
    const angka2 = 5;
  
    const tambah = angka1 * angka2;
  
    let result = `Nama Saya : ${nama} dengan NIM : ${nim} dari kelas : ${kelas}.`;
    result += ` Hasil perkalian angka ${angka1} dan ${angka2} adalah : ${tambah}.`;
  
    return result;
  }
  
  let nama = "Ari Perdian";
  let nim = 20220040072;
  let kelas = "TI22J";
  let hasilIdentitas = identitas(nama, nim, kelas);
  
  console.log(hasilIdentitas);
  