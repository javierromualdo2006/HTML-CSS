
function number1() {
    const number1 = document.getElementById("number1").value;
    return parseInt(number1);
}

function number2() {
   const number2 = document.getElementById("number2").value;
   return parseInt(number2);
}

function calculadora() {
   resultado = number1() + number2();
   document.getElementById("resultado").textContent = resultado;

}














