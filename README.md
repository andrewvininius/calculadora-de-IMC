<h1>Calculadora de IMC</h1>

> Status: concluído  🖥️

#### Este é um script para calcular o Índice de Massa Corporal (IMC) com base no peso e altura inseridos pelo usuário. Ele também fornece uma mensagem de status com base no intervalo de IMC saudável de acordo com as diretrizes da Organização Mundial da Saúde (OMS).


## Como usar:
1) Adicione o código em seu arquivo HTML ou JavaScript.
2) Adicione um formulário com dois campos de entrada, um para o peso (com o ID "peso") e outro para a altura (com o ID "altura"), e um botão de envio que chama a função calcularIMC().
3) Quando o usuário clicar no botão, a função calcularIMC() será executada e o resultado será exibido em um elemento HTML com o ID "resultado".

## Funcionamento

A função calcularIMC() começa verificando se os valores inseridos pelo usuário são válidos (ou seja, são números positivos). Se algum dos valores for inválido, a função exibe uma mensagem de alerta e retorna sem calcular o IMC.

Se os valores forem válidos, a função calcula o IMC dividindo o peso pela altura ao quadrado. Em seguida, ela determina em que intervalo o IMC está com base nas diretrizes da OMS e define uma mensagem de status apropriada. Finalmente, a função exibe uma mensagem completa que inclui o valor do IMC e a mensagem de status.


## Tecnologias Usadas:

<table>
  <tr>
    <td>JavaScript</td>
  </tr>
 
</table>






