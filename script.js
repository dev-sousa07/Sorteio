function sortear() {
    const num1 = parseInt(document.getElementById("number1").value.trim());
    const num2 = parseInt(document.getElementById("number2").value.trim());
  
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("resultado").textContent = "[ERRO] Preencha os dois campos com números válidos.";
      return;
    }
  
    const min = Math.min(num1, num2);
    const max = Math.max(num1, num2);
  
    const sorteio = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").textContent = "Sorteado: " + sorteio;
  }
  