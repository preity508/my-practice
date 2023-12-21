

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

let number3 = [10,20,30,40,50,60,70 ]
let number4 = [];
console.log(number1);

for( let x = 0 ; x < number3.length ; x++){
    number4.push(number3[x]);
}
console.log(number4);
 

let number5 = [10,20,30,40,50,60,70 ]
let number6 = []
number5.forEach( index =>{
    if( index != 50){
        number6.push(index)
    }
})
console.log('number6',number6);

let number7 = [10,20,40,30,50,60,70,];
let [u, v, w, x, ...y] = number7;
console.log('u',u);
console.log('v',v)
console.log('w',w);
console.log('y',y);