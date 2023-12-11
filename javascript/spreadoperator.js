

let number = [10,20,30,40,50,60,70 ]
let number1 = [...number];
console.log(number1);

//part copy

let number2 = [10,20,40,30,50,60,70,];
let[a , b , c , d , ...e] = number2 ;
console.log('a',a);
console.log('b',b);
console.log('c',c);
console.log('d',d);
console.log('e',e);