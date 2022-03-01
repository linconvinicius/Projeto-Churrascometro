// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// Refrigerante/Agua - 1000 ml por pessoa + 6 horas - 1500 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando...");

let adultos = inputAdultos.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;

let qdtTotalCarne = carnePP() * adultos + (carnePP(duracao) / 2 * criancas)
let qdtTotalCerveja = cervejaPP(duracao) * adultos;
let qdtTotalRefrigerante = refrigerantePP() * adultos + (refrigerantePP(duracao) / 2 * criancas)

resultado.innerHTML = `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`
resultado.innerHTML += `<p>${Math.ceil(qdtTotalRefrigerante / 2000)} Garrafas de Refrigerante</p>`

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function refrigerantePP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}