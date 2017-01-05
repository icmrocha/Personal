//script.js
function entendi () {    // criei esta função que executa todas as funções abaixo

  //A palavra-chave FUNCTION, quando usada como uma declaração, pode ser usada para declarar uma variável e dar a ela uma função como valor (ex.1 abaixo)
  //quando usada como uma expressão, cria um valor de função (ex. 2 abaixo)

var square=function(x) {    //Tanto faz usar
                           // var nomefunção = FUNCTION (parâmetro) {
                          //  código;
                         //   }
  return x*x;
};

                            // ou usar
function square1(y){       // FUNCTION = nomefunção(parâmetro) {}
                          //  código;
  return y*y;            //    }
                        //<<< Neste exemplo, como nome de square1 porque já existe uma função de nome square, ela nem será chamada lá embaixo
}

 var a;
 a = prompt("Digite sua idade");

function number(){
  return a;
}

// O parâmetro da função, ao ser usado em outra parte do código, deve ser:

              // ou um valor hard coded dentro dos parênteses, por exemplo:

              document.write(square(2));  //Aqui, ele chama a função square e passa o valor 2 dentro do parênteses.
              document.write("<br>");    //a função square diz que o que estiver dentro do parênteses (x) será multiplicado
                                          //por ele mesmo no código dentro das chaves { x * x }. Como passamos 2, o resultado é 4.

            //ou um valor hard coded dentro de uma variável, por ex:

             var num = 3;                   //Aqui eu declarei uma variável de valor 3 e a função square chama a variável dentro
             document.writeln(square(num));   // do parênteses, pega qual é o valor dentro dela e executa a operação do código
             document.write("<br>");

            //ou um valor que veio de um input de usuário, por ex:

             var n;                          //Aqui eu declarei a variável n, que recebeu um imput de usuário (prompt)
             n = prompt("Digite um número"); // depois eu chamei esta variável (que estava com o valor digitado) e executo
             document.write(square(n));      //a função square
             document.write("<br>");

            //ou um valor que veio de um input de usuário, que ficou guardado na variável a, que é retornado pela função number
            //(apenas para fins de exemplo!)

             document.write(square(number())); // Aqui eu chamei a função square passando como parâmetro a função number. Dentro da
                                              // função number, eu tenho o retorno de a, que é a variável que recebe input do usuário (idade)

}

function printFarm(cows, chickens){
var cowString = String(cows);
while (cowString.lengh < 3)
 cowString = "0" + cowString;
console.log(cowString + " cows.");
var chickenString = String(chickens);
while (chickenString.lengh < 3 )
  chickenString = "0" + chickenString;
console.log(chickenString + " chickens.")
}

printFarm(10,20);

function min(a,b) {
  var a = Number(a);
  var b = Number(b);
 return Math.min(a,b);
}

console.log(min (0,10));
console.log(min (0,-10));
