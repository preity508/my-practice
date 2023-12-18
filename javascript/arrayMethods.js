let Ano = [ 10,20,30,40,50,60,70,80,90,100]
console.log(Ano.length);

let a = Ano.toString();
console.log(a);

let a2 = ['banana','mango','apple','orange'];
let a3 = a2.pop(2);
console.log(a2);
console.log(a3);

let x = [ 'mango','melon','lemon','kiwi']
let x1 = x.pop()
console.log(x);
console.log(x1);

let q = ['audi','seltos','BMW','mercedez','huyndai','city100']
let q1 = q.pop();
console.log(q);
console.log(q1);

let q2 = ['banana','mango','apple','orange'];
let q3 = q2.push('kiwi')
console.log(q2);
console.log(q3);

let a4 = ['audi','seltos','BMW','mercedez','huyndai','city100'];
let a5 = a4.push('kiwi');
console.log(a4);
console.log(a5);
 
let d = ['audi','seltos','BMW','mercedez','huyndai','city100'];
let d1 = d.shift();
console.log(d);
console.log(d1);

let y =  ['banana','mango','apple','orange'];
let y1 = y.pop();
console.log(y);
console.log(y1);
 
let y2 = y.push('kiwi');
console.log(y);
console.log('kiwi');

let y3 = ['audi','seltos','BMW','mercedez','huyndai','city100'];
let y4 = y3. push('KIA');
console.log(y3);
console.log(y4 );

let t2 = ['audi','seltos','BMW','mercedez','huyndai','city100']
let t3 = t2.shift();
console.log(t2);
console.log(t3);

let fruits = ['banana','mango','apple','orange'];
let fruits1 = fruits.unshift('KIWI','pineapple');
console.log(fruits);
console.log(fruits1);
 
let fruits2 = ['banana','mango','apple','orange'];
let fruits3 = ['kiwi','pineapple']
let fruits4 = fruits2.concat(fruits3)
console.log(fruits4);

let r = ['banana','mango','apple','orange'];
console.log(r.join('$'));

let r1 = [ 8,8,2000];
console.log(r1.join('/'));
console.log(r1.join(' / '));
console.log(r1.join('-'));
console.log(r1.join(' - '));

let r2 = [10,20,30,40,50,60,80,90]
console.log(r2.slice(4));

let fruits0 = ['banana','orange','apple','mango'];
fruits0.splice(1 , 0 , ' bharati')
console.log(fruits0);

let fruit0 = ['banana','orange','apple','mango'];
fruit0.splice(1,0,'kiwi')
console.log(fruit0);

fruit0.sort();
console.log(fruit0);
fruit0.reverse();


let d2 = [ 20 , 30 ,60 , 80 ,10 ,40, 100];
// tostring //pop//push//shift//unshift//concat//join//slice //splice//sort//reverse 

//tostring
let S = [ 10,20,30,40,50,60];
let S1 = S.toString();
console.log(S1);
  
let S2 = [ 'orange ', ' banana ', 'apple', 'pineapple']
let S3 = S2.pop();
console.log(S2);
console.log(S3);   

let s1 = ['orange ', ' banana ', 'apple', 'pineapple'];
let s2 = s1.push('kiwi','tomato');
console.log(s1);
console.log(s2);

let s3 = ['orange ', ' banana ', 'apple', 'pineapple'];
let s4 = s3.shift();
console.log(s3);
console.log(s4);

let s5 = ['orange ', ' banana ', 'apple', 'pineapple']
let s6 = s5.unshift('mango','tomato');
console.log(s5);
console.log(s6);

let p = ['orange ', ' banana ', 'apple', 'pineapple']
let p1 = [ 'kiwi','mango']
console.log(p.concat(p1)); 
 
let u = [ 8 , 8 , 2000]
console.log(u.join(' - '));
console.log(u.join( ' / ')); 

let u1 = [ 10,20,30,40,50,60,70];
console.log(u1.slice(2,6));

let u2 = [ 'orange ', ' banana ', 'apple', 'pineapple'];
let u3 = u2.splice( 1 , 0 ,'kiwi')
console.log(u2);
console.log(u3);

let u4 = ['orange ',  'banana', 'apple', 'pineapple'];
let u5 = u4.sort();
console.log(u4);
console.log(u5);
let u6 =u4.reverse()
console.log(u6);

//length Property

let A = [10,20,30,40,50,60,70]
console.log(A.length);  

//Tostring ()
let A1 = A.toString()
console.log();

//pop()method: 1st element pop out (deleted) 


let A2 = ['orange ', ' banana ', 'apple', 'pineapple']
let A3 = A2.pop()
console.log('A3',  A2);
console.log(A3);

//push()method : add in end of element
let A5 = ['orange ', ' banana ', 'apple', 'pineapple']
console.log(A5.push('kiwi'));
console.log('A5',  A5);


//shift () //returns remove item in aaray : deleted 1st item in aaray
let A6 = ['orange ', ' banana ', 'apple', 'pineapple']
console.log(A6.shift());
console.log('A6',A6);

//unshift() : returns in original item in aaray

let A7 = ['orange ', ' banana ', 'apple', 'pineapple']
console.log(A7.unshift('bharati','patil'));
console.log(A7);

//to delete item => pop,shift & delete-operator : deleted item creates undefined
//whole in original aaray so length will remains same with delete operator

//join() Method //
let A8 = ['orange ', ' banana ', 'apple', 'pineapple']
console.log(A8.join('#'));
console.log('A8',A8);

let A9 = [ 8,8,2000]
console.log(A9.join('-'));
console.log('A9',A9);


//slice()Method
let B1 = [10,20,30,40,50,60,70]
console.log(B1.slice(2,5));

//splice()Method : add and delete item

let B2 = ['orange','banana','apple','pineapple']
let B3 = B2.splice(1,1,'kwi')
console.log('B3',B3);

//sort() : assending order
let B4 = ['orange','banana','apple','pineapple']
console.log(B4.sort());

//reverse() : Desending order
let B5 = ['orange','banana','apple','pineapple']
console.log(B5.reverse());

let B6 = ['orange','banana','apple','pineapple']
let B7 = B6.sort().reverse()
console.log('B6',B6);
