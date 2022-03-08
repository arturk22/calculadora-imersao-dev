var primeiroValor = parseFloat(prompt("digite o primeiro valor:"))
var segundoValor = parseFloat(prompt("digite o segundo valor:"))
var operacao = prompt("digite a operação: 1 para soma; 2 para subtração; 3 para multiplicação; 4 para divsão")

// escolha das operações

if (operacao == 1) {
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + "+" + segundoValor + "=" + resultado + "</h2>")
} 
else if (operacao == 2) {
  var resultado = primeiroValor - segundoValor
  document.write("<h2>" + primeiroValor + "-" + segundoValor + "=" + resultado + "</h2>")
}
else if (operacao == 3) {
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + "x" + segundoValor + "=" + resultado + "</h2>")
}
else if (operacao == 4) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + "/" + segundoValor + "=" + resultado + "</h2>")
}
else{
   document.write("<h2> opção invalida </h2>")
}


