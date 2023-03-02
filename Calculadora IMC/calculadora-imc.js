function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }
  
    var imc = peso / (altura * altura);
    var status;
  
    if (imc < 18.5) {
      status = "abaixo do peso";
    } else if (imc < 25) {
      status = "no peso normal";
    } else if (imc < 30) {
      status = "com sobrepeso";
    } else {
      status = "obeso";
    }
  
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + ", o que significa que você está " + status + ".";
  }
  