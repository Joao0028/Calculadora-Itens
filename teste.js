var hora = ["13:30", "14:00", "13:00", "8:00"];

function compararNumeros(a, b) {
  return a - b;
}

hora.sort(compararNumeros); // Aqui você passa a função de comparação como parâmetro
console.log(hora);
