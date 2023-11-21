# desafio de uma Calculadora que soma os números divisiveis por 3 e por 5

## Como Rodar o Projeto

### Sem Git na Máquina

1. Clique no botão verde "Code" acima.

2. Selecione "Download ZIP".

3. Extraia o conteúdo do arquivo ZIP em um diretório de sua escolha.

4. Abra o arquivo `index.html` no seu navegador preferido.

   Você pode fazer isso clicando com o botão direito no arquivo `index.html` e selecionando "Abrir com" e escolhendo o navegador.
   Ou tambem pode apenas arastar o arquivo 'index.html' para a guia do navegador

6. Insira um número no campo de entrada, clique em "Calcular" e veja o resultado.

### Com Git na Máquina

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/js-somatorio-por-3-5.git

2. navegue até o diretório do projeto com cd js-somatorio-por-3-5
3. Abra o arquivo `index.html` no seu navegador preferido.
4. Insira um número no campo de entrada, clique em "Calcular" e veja o resultado.

#### Explicando o código

Este é um código bem simples que pede à pessoa para digitar um número. É criada a função `somatorioDivisiveisPor3ou5(numero)`, onde esse número é passado por um laço `for` que começa com `i = 1` e continua até que `i` seja menor que o número (`i < numero`).

Logo em seguida, temos um teste condicional `if` e `else` que verifica se o número é divisível por 3 ou por 5, utilizando o operador `%` que verifica o resto da divisão. Se ele for igual a 0, o resultado é verdadeiro e o bloco dentro do `if` é executado.

Com isso, temos `somatorio += i;`. Se a condição do `if` for verdadeira, o valor de `i` é adicionado ao somatório. Isso acumula os valores que são divisíveis por 3 ou 5.

Para mostrar para o usuário o funcionamento da função `somatorioDivisiveisPor3ou5`, eu fiz uma pequena tela para mostrar o resultado quando o usuário clicar no botão. O funcionamento do botão também é bem simples: a função `somatorioDivisiveisPor3ou5` é chamada quando o botão é clicado.

let numero = document.getElementById('inputNumero').value; essa parte é onde vamos salvar o valor digitado 
document.getElementById('resultado').innerText = "Resultado: " + somatorioDivisiveisPor3ou5(numero);: Aqui, a função somatorioDivisiveisPor3ou5 é chamada com o número inserido pelo usuário. O resultado retornado por essa função é exibido no HTML. O valor do parágrafo com o ID resultado é atualizado para incluir a string "Resultado:" seguida pelo valor do somatório calculado.

