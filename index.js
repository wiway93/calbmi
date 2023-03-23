
let url = window.location.href
let params = (new URL(url)).searchParams
let jenkel = params.get('jenkel')
let berat_badan = params.get('berat_badan')
let usia = params.get('usia')
let tinggi_badan = params.get('tinggi_badan')
tinggi_badan = tinggi_badan / 100


let bmi = berat_badan / (tinggi_badan * tinggi_badan)

if (bmi != 'NaN'){
    alert(Math.round(bmi))
}