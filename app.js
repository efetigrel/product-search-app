//TODO --------- ÜRÜN ARAMA UYGULAMASI ---------

let urun1 = {
    isim: "Acer Swift",
    kategori: "teknoloji",
    fiyat: 6219
}
let urun2 = {
    isim: "Acer Nitro 5",
    kategori: "teknoloji",
    fiyat: 15475
}
let urun3 = {
    isim: "LENOVO V15",
    kategori: "teknoloji",
    fiyat: 10999
}
let urun4 = {
    isim: "LENOVO V14",
    kategori: "teknoloji",
    fiyat: 4399
}
let urun5 = {
    isim: "LENOVO ıDEAPAD",
    kategori: "teknoloji",
    fiyat: 4510
}

let urunler = [urun1, urun2, urun3, urun4, urun5];
let filtreliUrunler = [];

let kullaniciUrunIsmi = prompt("Bir ürün ismi girniz");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler) {
    urunler.forEach(function (urun) {
        if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
            filtreliUrunler.push(urun);
        }
    });
}

function filtreliUrunleriYazdir(urunler) {
    urunler.forEach(function (urun) {
        console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
        console.log("----------------------------------");
    })
}