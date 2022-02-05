//1

const dez = 10;
let fatorialDe10 = 1;
let array = []

for (let index = 1; index < dez ; index += 1){
    array.push(index)
}
for (let index2 = 0; index2 < array.length; index2 +=1){
        fatorialDe10 = fatorialDe10 * array[index2]
}
console.log(fatorialDe10);


//2
let word = 'tryber';
let array = word.split('');
let array2 = [];


for (let index = 0; index < array.length ; index += 1){
    array2.unshift(array[index]);
}
console.log(array2);

//3
let array = ['java', 'javascript', 'python', 'html', 'css'];
let caracteres = array[0];
let caracteres2 = array[0];
let valorDaArray;
for (let index = 0; index < array.length; index +=1){
    valorDaArray = array[index].length;
    if (valorDaArray < caracteres.length){
        caracteres = array[index];
    }
}  
for (let index = 0; index < array.length; index +=1){
    valorDaArray = array[index].length;
    if (valorDaArray > caracteres2.length){
        caracteres2 = array[index];
    }
}  
console.log('valor maior ' + caracteres2);
console.log('valor menor ' + caracteres);

//4

let numeros = [];
let numerosPrimo = [];

for (let index = 0; index <= 50 ; index += 1){
    numeros.push(index);
}

for (let index2 = 1; index2 <= numeros.length ; index2 += 1){
    if (numeros[index2] % 2 !== 0 && 
        numeros[index2] % 3 !== 0 && 
        numeros[index2] % 5 !== 0 && 
        numeros[index2] % 7 !== 0 && 
        numeros[index2] % 11 !== 0 ||
        numeros[index2] === 2 || 
        numeros[index2] === 3 || 
        numeros[index2] === 5 || 
        numeros[index2] === 7 || 
        numeros[index2] === 11){

        numerosPrimo.push(numeros[index2]);
    }

    
}
console.log(numerosPrimo);
