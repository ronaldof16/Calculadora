//let resultado = eval(document.querySelector(".resultado").value);


function adicionarNumero(numero) {
    document.querySelector(".resultado").value += numero;
}

function adicionarOperador(operador) {
    document.querySelector(".resultado").value += operador;
}

function calcular() {
    let resultado = eval(document.querySelector(".resultado").value);

    document.querySelector(".resultado").value = resultado;
}

function limpar() {
    document.querySelector(".resultado").value = "";
} 

/* Criação do darkmode e lightmode */

let botaoLight = document.querySelector("button");
let body = document.body;
let principal = document.querySelector(".principal")
let btn = document.querySelectorAll(".btn")

function light() {
    body.classList.toggle("body-light");
    principal.classList.toggle("principal-light");
    btn.forEach(item => {
        item.classList.toggle("btn-light");
    })
}

botaoLight.addEventListener("click", light);






