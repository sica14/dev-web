var a = 10;
{
    var a = 20;
}
console.log(a); 


let b = 30;
{
    let b = 40;
    console.log(b); 
}
console.log(b); 


const c = 50;
{
    const c = 60;
    console.log(c); 
}
console.log(c); 

// array

let numeros = [1, 2, 3, 4, 5];


console.log(numeros.length); 


console.log(numeros[0]); 


numeros.push(6);
console.log(numeros); 


numeros.pop();
console.log(numeros); 


numeros.unshift(0);
console.log(numeros); 


numeros.shift();
console.log(numeros); 
