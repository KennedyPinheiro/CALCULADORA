function somar(){
    var num1 = window.document.getElementById("valor1")
    var numero1 = Number(num1.value)

    var num2 = window.document.getElementById("valor2")
    var numero2 = Number(num2.value)

    var resposta = document.getElementById("res")
    var soma = numero1 + numero2

    resposta.innerText = `${soma}`
}

function subtrair(){
    var num1 = window.document.getElementById("valor1")
    var numero1 = Number(num1.value)

    var num2 = window.document.getElementById("valor2")
    var numero2 = Number(num2.value)

    var resposta = document.getElementById("res")
    var sub = numero1 - numero2

    resposta.innerText = `${sub}`

}

function multiplicar(){
    var num1 = window.document.getElementById("valor1")
    var numero1 = Number(num1.value)

    var num2 = window.document.getElementById("valor2")
    var numero2 = Number(num2.value)

    var resposta = document.getElementById("res")
    var mult = numero1 * numero2

    resposta.innerText = `${mult}`

}

function dividir(){
    var num1 = window.document.getElementById("valor1")
    var numero1 = Number(num1.value)

    var num2 = window.document.getElementById("valor2")
    var numero2 = Number(num2.value)

    var resposta = document.getElementById("res")
    var div = numero1 / numero2

    resposta.innerText = `${div}`

}
window.document