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






