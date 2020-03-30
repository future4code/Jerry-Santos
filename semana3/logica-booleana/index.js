// Exercícios de interpretação de código

// 1.
/* 

a. false
b. false
c. true
d. false
e. boolean

*/

// 2.
/*

a. um Array é uma maneira de guardar e acessar mais de uma informação, se declara com "let nome = [i,i,i]"
b. [0]
c. array.length
d. I - undefined; II - null; III - 11; IV - 3 e 4; V - 19 e 9; VI - 3; VII - 1;


*/


// Exercícios de escrita de código

// 1.
// a.
let grausF = 77;
let grausK = (grausF - 32) * 5/9 + 273.15;

console.log("a. " + grausK + "°K");

// b.
let grausC = 80;
grausF = (grausC) * 9/5 + 32;

console.log("b. " + grausF + "°F");

// c.
grausC = 30;
grausF = (grausC) * 9/5 + 32;
grausK = (grausF - 32) * 5/9 + 273.15;

console.log("c. " + grausF + "°F e " + grausK + "°K");

// d.
grausC = Number(prompt("Digite o valor em graus Celsius:"));
grausF = (grausC) * 9/5 + 32;
grausK = (grausF - 32) * 5/9 + 273.15;

console.log("d. " + grausF + "°F e " + grausK + "°K");


// 2.
const perguntaUm = prompt("Qual sua banda favorita?");
console.log("1. Qual sua banda favorita?");
console.log("Resposta: " + perguntaUm);

const perguntaDois = prompt("Qual sua cidade preferida?");
console.log("2. Qual sua cidade preferida?");
console.log("Resposta: " + perguntaDois);

const perguntaTres = prompt("Melhor show que você já foi?");
console.log("3. Melhor show que você já foi?");
console.log("Resposta: " + perguntaTres);

const perguntaQuatro = prompt("Bolacha ou Biscoito?");
console.log("4. Bolacha ou Biscoito?");
console.log("Resposta: " + perguntaQuatro);

const perguntaCinco = prompt("Uma foto com o Raça Negra ou R$500?");
console.log("5. Uma foto com o Raça Negra ou R$500?");
console.log("Resposta: " + perguntaCinco);


// 3.

let kwHora = Number(prompt("Digite os Quilowatt/h consumidos no mês:"));
let consumo = kwHora * 0.05;
console.log("Valor a ser pago esse mês - R$ " + consumo);

let desconto = Number(prompt("Digite apenas com numeros o valor do desconto (%):"));
let final = consumo - ((desconto*consumo)/100);
console.log("Valor a ser pago com desconto - R$ " + final);

console.log("Considerando o consumo de 280kwH e 15% de desconto:")
kwHora = 280;
consumo = kwHora * 0.05;
console.log("Valor a ser pago esse mês - R$ " + consumo);
66
desconto = 15;
final = consumo - ((desconto*consumo)/100);
console.log("Valor a ser pago com desconto - R$ " + final);