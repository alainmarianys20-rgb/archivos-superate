let resultado = document.getElementById('resultado');
let operacionActual = '';
let operadorActual = '';
let operadorAnterior = '';
let valorActual = '';
function agregarNumero(num) {
 operacionActual += num;
 resultado.value = operacionActual;
}
function agregarOperador(op) {
 if (operacionActual === '') return;
 if (operadorActual !== '') {
 calcular();
 }
 operadorActual = op;
 operacionActual += op;
 resultado.value = operacionActual;
}
function calcular() {
 if (operadorActual === '') return;
 let partes = operacionActual.split(operadorActual);
 let numero1 = parseFloat(partes[0]);
 let numero2 = parseFloat(partes[1]);
 let resultadoOperacion = 0;
 switch (operadorActual) {
 case '+':
 resultadoOperacion = numero1 + numero2;
 break;
 case '-':
 resultadoOperacion = numero1 - numero2;
 break;
 case '*':
 resultadoOperacion = numero1 * numero2;
 break;
 case '/':
 resultadoOperacion = numero1 / numero2;
 break;
 }
 resultado.value = resultadoOperacion;
 operacionActual = resultadoOperacion.toString();
 operadorActual = '';
}
function limpiar() {
 operacionActual = '';
 operadorActual = '';
 resultado.value = '';
}