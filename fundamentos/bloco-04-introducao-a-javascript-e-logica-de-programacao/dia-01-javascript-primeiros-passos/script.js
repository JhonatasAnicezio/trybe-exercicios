//exercicio 1

const a = 75;
const b = 40;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


//exercicio 2

const n1 = 40;
const n2 = 30;

if (n1 > n2){
    console.log(n1)
}
else if (n2 > n1){
    console.log(n2)
}


//exercicio 3

const nu1 = 40;
const nu2 = 30;
const nu3 = 55;

if (nu1 > nu2 && nu1 > nu3){
    console.log(nu1)
}

else if (nu2 > nu3 && nu2 > nu1){
    console.log(nu2)
}

if (nu3 > nu2 && nu3 > nu1){
    console.log(nu3)
}


//exercicio 4

const Q = 5;

if (Q == true){
    console.log("positive")
}

else if (Q == false){
    console.log("negative")
}

else{
    console.log("zero")
}


//exercicio 5

const a1 = 80;
const a2 = 50;
const a3 = 50;

//poderia tbm usar uma quarta const como o exemplo abaixo
// const somaA = a1 + a2 + a3;
// if (somaA == 180)

if (a1 + a2 + a3 == 180){
    console.log("O valor corresponde ao angulo de um triangulo")
}

else{
    console.log("erro")
}


//exercicio 6

const peca = "BiSpO";

if (peca.toLowerCase() == "bispo"){
    console.log("diagonal")
}

else if (peca.toLowerCase() == "torre"){
    console.log("horisontal e vertical")
}

else if (peca.toLowerCase() == "cavalo"){
    console.log("L")
}

else if (peca.toLowerCase() == "rainha"){
    console.log("horisontal, vertical e diagonal")
}

else if (peca.toLowerCase() == "rei"){
    console.log("horisontal, vertical e diagonal")
}


else if (peca.toLowerCase() == "peao"){
    console.log("vertical(podendo matar na diagonal)")
}


else{
    console.log("isso não é uma peça")
}


//exercicio 7

const nota = 79;

let porcentagem = (nota/100) * 100;
porcentagem = (nota/100)*100;



if (porcentagem >= 90 && porcentagem <= 100){
    console.log("A")
}

else if (porcentagem >= 80 && porcentagem <= 90){
    console.log("B")
}

else if (porcentagem >= 70 && porcentagem <= 80){
    console.log("C")
}

else if (porcentagem >= 60 && porcentagem <= 70){
    console.log("D")
}

else if (porcentagem >= 50 && porcentagem <= 60){
    console.log("E")
}

else if (porcentagem < 50 && porcentagem <= 0 ){
    console.log("F")
}

else{
    console.log("error");
}


//exercico 8


const number1 = 3;
const number2 = 6;
const number3 = 3;

let resultado1;
let resultado2;
let resultado3;

resultado1 = number1 % 2 == 0;
resultado2 = number2 % 2 == 0;
resultado3 = number3 % 2 == 0;

if (resultado1 == true || resultado2 == true || resultado3 == true  ){
    return true;
}

else{
    return false;
}


//exercicio 9

const number4 = 1;
const number5 = 6;
const number6 = 4;

let resultado4;
let resultado5;
let resultado6;

resultado4 = number4 % 2 == 1;
resultado5 = number5 % 2 == 1;
resultado6 = number6 % 2 == 1;

if (resultado4 == true || resultado5 == true || resultado6 == true  ){
    return true;
}

else{
    return false;
}


//exercicio 10

const valorCusto = 10;
const valorVenda = 15;

let impostoSobreOCusto = (valorCusto/100) * 20;
let valorCustoTotal = valorCusto + impostoSobreOCusto; 

let lucro = valorVenda - valorCustoTotal;


if(valorCusto < 0 && valorVenda < 0){
    console.log("error")
}

else{
    console.log(lucro * 1000)
}


//exercicio 11


let inss;
let ir;
const salarioBruto = 4500.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} 

else if (salarioBruto <= 2594.92) {
  inss= salarioBruto * 0.09;
}

 else if (salarioBruto <= 5189.82) {
  inss= salarioBruto * 0.11;
}

 else {
  inss= 570.88;
}

const salarioInss = salarioBruto - inss;

if (salarioInss <= 1903.98) {
  ir = 0;
} 

else if (salarioInss <= 2826.65) {
  ir = (salarioInss * 0.075) - 142.80;
} 

else if (salarioInss <= 3751.05) {
  ir = (salarioInss * 0.15) - 354.80;
}

else if (salarioInss <= 4664.68) {
  ir = (salarioInss * 0.225) - 636.13;
} 

else {
  ir = (salarioInss * 0.275) - 869.36;
};

let salarioLiquido = salarioInss - ir;

console.log(salarioInss - ir);


