
// Script Luas Segitiga
const buttonLuas = document.querySelector('#hitung-luas') 

buttonLuas.addEventListener('click', function () {
    const alas = parseInt(document.querySelector('#panjang-alas').value);
    const tinggi = parseInt(document.querySelector('#tinggi').value);
    let luas = 1/2 * alas * tinggi;

    document.querySelector('#result-luas').innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${alas} x ${tinggi} <br> L = ${luas}`;
})


// Script Keliling Segitiga
const buttonKeliling = document.querySelector('#hitung-keliling') 

buttonKeliling.addEventListener('click', function () {
    const sisi1 = parseInt(document.querySelector('#sisi-1').value);
    const sisi2 = parseInt(document.querySelector('#sisi-2').value);
    const sisi3 = parseInt(document.querySelector('#sisi-3').value);
    let keliling = sisi1 + sisi2 + sisi3;

    document.querySelector('#result-keliling').innerHTML = `K = S1 + S2 + S3 <br> K = ${sisi1} + ${sisi2} + ${sisi3} <br> K = ${keliling}`;
})