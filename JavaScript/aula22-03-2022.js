function mostrarDiaSemana() {
    let diaSemana = new Date().getDay();
    switch(diaSemana) {
        case 0: console.log("Domingo");
        break;
        case 1: console.log("Segunda-feira");
        break;
        case 2: console.log("Terça-feira");
        break;
        case 3: console.log("Quarta-feira");
        break;
        case 4: console.log("Quinta-feira");
        break;
        case 5: console.log("Sexta-feira");
        break;
        case 6: console.log("Sábado");
        break;
        default: console.log("Este número é inválido");
    }
}

function mostrarDiaSemanaHtml() {
    let diaSemana = new Date().getDay();
    switch(diaSemana) {
        case 0: document.getElementById("diaSemana").innerText = "Domingo";
        break;
        case 1: document.getElementById("diaSemana").innerText = "Segunda-feira";
        break;
        case 2: document.getElementById("diaSemana").innerText = "Terça-feira";
        break;
        case 3: document.getElementById("diaSemana").innerText = "Quarta-feira";
        break;
        case 4: document.getElementById("diaSemana").innerText = "Quinta-feira";
        break;
        case 5: document.getElementById("diaSemana").innerText = "Sexta-feira";
        break;
        case 6: document.getElementById("diaSemana").innerText = "Sábado";
        break;
        default: document.getElementById("diaSemana").innerText = "Este número é inválido";
    }
}