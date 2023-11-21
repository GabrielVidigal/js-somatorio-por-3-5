function somatorioDivisiveisPor3ou5(numero) {
    let somatorio = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        somatorio += i;
      }
    }
  
    return somatorio;
  }
  
  function calcularSomatorio() {
    let numero = document.getElementById('inputNumero').value;
  
    numero = parseInt(numero);
  
    document.getElementById('resultado').innerText = somatorioDivisiveisPor3ou5(numero);
  }
  