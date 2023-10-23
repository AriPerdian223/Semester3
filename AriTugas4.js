// Nama  : Ari Perdian
// NIM   : 20220040072
// Kelas : TI22J

//IF ELSE
console.log ("===================IF ELSE=======================")
let salesman = 0;
let harga_jual = 270000;
let uang_jasa = 0;
if (harga_jual > 200000){
    uang_jasa = 10000;
    uang_komisi =(harga_jual * 0.10);
    console.log(`Harga Jual : ${harga_jual}` ); 
    console.log(`Uang Jasa yang diberikan : ${uang_jasa + uang_komisi}` ); 
} else if  (harga_jual > 300000) {
    uang_jasa = 20000;
    uang_komisi =(harga_jual * 0.15);
    console.log(`Harga Jual : ${harga_jual}` ); 
    console.log(`Uang Jasa yang diberikan : ${uang_jasa + uang_komisi}` ); 
} else if (harga_jual > 500000){
    uang_jasa = 30000;
    uang_komisi =(harga_jual * 0.20);
    console.log(`Harga Jual : ${harga_jual}` ); 
    console.log(`Uang Jasa yang diberikan : ${uang_jasa + uang_komisi}` );
} else {
    console.log(`Tidak Mendapatkan uang jasa`)
}
console.log ("=================SWITCH CASE=====================")

let penjual = 0;
let harga = 300000;
let jasa = 0;

switch (true) {
    case (harga > 500000):
        jasa = 30000;
        komisi = harga * 0.20;
        console.log(`Harga Jual : ${harga}` );
        console.log(`Uang Jasa yang diberikan : ${jasa + komisi}` ); 
        break;
    case (harga > 300000):
        jasa = 20000;
        komisi = harga * 0.15;
        console.log(`Harga Jual : ${harga}` );
        console.log(`Uang Jasa yang diberikan : ${jasa + komisi}` ); 
        break;
    case (harga > 200000):
        jasa = 10000;
        komisi = harga * 0.10;
        console.log(`Harga Jual : ${harga}` );
        console.log(`Uang Jasa yang diberikan : ${jasa + komisi}` ); 
        break;
    default:
        console.log("Tidak Mendapatkan uang jasa");
        break;
}

