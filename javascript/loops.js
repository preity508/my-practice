

//let cars = ['i20','i10','swift','jaguar','audi','BMW',200,true,test()]

//function test() {
//return 20;

//}
//console.log(cars);

//let cars = ['i20','i10','swift','jaguar','audi','BMW',]
//console.log(cars.length)

//console.log(cars[0]);
//console.log(cars[1]);
//console.log(cars[2]);
//console.log(cars[3]);
//console.log(cars[4]);
//console.log(cars[5]);

let cars = ['mercedes', 'BMW', 'honda', 'toyota', 'hyundai', 'ford', 'audi', 'tata mtors',
    'nissan', 'renault', 'jeep', 'chevrolet', 'cadillac',
    'ferrari', 'mini', 'lamborghini', 'KIA', 'fortuner', 'nissan'
]
let value = cars[17];
console.log('value', value);
let data = cars[15];
console.log('data', data);
console.log(cars.length);

console.log(cars.length);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);
console.log(cars[6]);
console.log(cars[7]);
console.log(cars[8]);
console.log(cars[9]);
console.log(cars[10]);
console.log(cars[11]);
console.log(cars[12]);
console.log(cars[13]);
console.log(cars[14]);
console.log(cars[15]);
console.log(cars[16]);


//for(let i = 0 ; i < cars.length ; i++){
//console.log(cars[i]);
//}

for (
    i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}






for (let index = 0; index < cars.length; index++) {
    console.log(cars[index]);

}

for (let i in cars) {
    console.log(i);
}
//for loop
let student = {
    name: 'nitin',
    age: 23,
    mob: 234567890,

}
for (let x in student) {
    console.log(student[x]);
}

let numbers = [10, 20, 30, 40, 50, 60, 70, 80];

for (
    let num of numbers) {
    console.log(num);
}


let f = 30;
do {
    f++;
    console.log(f);


} while (f < 35);

let f1 = 20;
do {
    f1++;
    console.log(f1);


} while (f1 < 25);



for (let index = 1; index < cars.length; index++) {
    console.log(index);

}


let std = {
    name: 'Bharati Patil',
    age: 23,
    mobile: 9345678434,
    dist: ' ch.Sambhaji nagar',
    state: 'Maharashtra',
    nation: 'India',
    sex: 'Female',
    category: 'open',


}
for (let b in std) {
    console.log(std[b]);

}

let motor = ['audi', 'BMW', 'hundai', 'i20', 'i10', 'murcedez', 'swift']
let vlu = motor[0];
console.log('vlu-->', vlu);
console.log('-->', motor[1]);
console.log('-->', motor.length);
console.log('-->', motor[2]);
console.log(motor[3]);
console.log(motor[4]);
console.log(motor[5]);
console.log(motor[6]);

let motor1 = ['john', 'mahesh', 'jonny', 'sachin', ' ankush ', 'kartik']
console.log(motor1.length);
console.log(motor1[0]
);
console.log(motor1[1]);
console.log(motor1[2]);

for (let i = 0; i < motor1.length; i++) {
    console.log(motor1[i]);
}

let cars1 = ['swift', 'hundai', 'BMW', 'mercedez', 'audi', 'porche']
console.log(cars1.length);
console.log(cars1[0]);
console.log(cars1[1]);
console.log(cars1[2]);
console.log(cars1[3]);
console.log(cars1[4]);
console.log(cars1[5]);

for (let index = 1; index < cars1.length; index++) {
    console.log(cars1[index]);


}

let cars2 = ['mercedes', 'BMW', 'honda', 'toyota', 'hyundai', 'ford', 'audi', 'tata mtors',
    'nissan', 'renault', 'jeep', 'chevrolet', 'cadillac',
    'ferrari', 'mini', 'lamborghini', 'KIA', 'fortuner', 'nissan']

console.log(cars2.length);
console.log(cars[2]);

for (let i = 0; i < cars2.length; i++) {
    console.log(cars2[i])
}

let student1 = {
    name1: 'bharati',
    age: 23,
    mobile: 9876543210
}
for (let x in student1) {
    console.log(student1[x]);

}

let student2 = {
    name2: 'bharati patil',
    age: 23,
    mob1: 1234567890,
    sex: 'female',
    state: 'maharashtra',
    country: 'india',
    religion: 'hindu',
    caste: 'maratha'
}

for (let y in student2) {
    console.log(student2[y]);
}

let number = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130]
for (let num1 of number) {
    console.log(num1);
}

//nested if 
let s = 100
let t = 600

if (s < 200) {
    if (t < 800) {
        if (s > t) {
            console.log(t);

        }

    }

}

let a3 = 50
do {
    a3++;
    console.log(a3);

} while (a3 < 55);


let s3 = ['mercedes', 'BMW', 'honda', 'toyota', 'hyundai', 'ford', 'audi', 'tata mtors',
    'nissan', 'renault', 'jeep', 'chevrolet', 'cadillac',]

console.log(s3.length);
console.log(s3[2]);
console.log(s3[3]);
  for (let i2 = 0; i2 < s3.length; i2++) {
    console.log(s3[i2]);
    
  }
  let cars4 = ['jeep','bmw','hundai','ford','toyota','ford' ]
  console.log(cars4.length);
  console.log(cars4[0]);
  console.log(cars4[1]);
  console.log(cars4[2]);
  console.log(cars4[3]);
  console.log(cars4[4]);
  console.log(cars4[5]);

  for( let i3 = 0 ;  i3 < cars4.length; i3++){
    console.log(cars4[i3]);
  }
let student3 = {
    name: 'bharati ganesh patil',
    age: 23,
    mob : 102345678,
    gender: 'female',
    dist :  'chh.sambhaji nagar',
    state : 'maharashtra',
    country : 'india',
    religion : 'hindu'
    
}
for (let x1 in student3) {
    console.log(student3[x1]);
    
        
    }

let number2 = [ 150 , 160 ,170,130,120,110,140 ,170]
for ( let M of number2){
    console.log(M);
}
let number3 =[ 130,120,140,160,140,170,190]
for( let M1 of number3){
    console.log(M1);
}
 let A1 = [ 'bharati', 'ganesh','patil','delhi','sillod','Aurangabad']
 for( let M3 =  0 ; M3 < A1.length; M3++){
console.log(A1[M3]);
 }
 let b1 = [ 'mercedes', 'BMW', 'honda', 'toyota', 'hyundai', 'ford', 'audi', 'tata mtors',
 'nissan', 'renault', 'jeep', 'chevrolet', 'cadillac',]

 for ( let z = 0 ; z < b1.length; z++){
    console.log(b1[z]);
 }

 let b2 = [ 20,30,10,40,50,60,70,80,90,]
 for( let x2 of b2){
    console.log(x2);
 }
 let student4 =
 {
    name : 'bharati patil',
    age : 23,
    no : 1029384756,
    state : 'maharashtra',
    religion : 'hindu ',
    
 }
 for ( let x3 in student4){
    console.log( student4[x3]);
 }

 let car = ['i20 ', ' jaguar','honda ','city','bmd','merecedez','thar']
 console.log(car.length);
 console.log(car[0]);
 console.log(car[1]);
 console.log(car[2]);

 console.log(car[4]);
 console.log(car[5]);
 console.log(car[6]);
 

 for(let x = 0 ; x < car.length ; x++){
    console.log(car[x]);
 }
 let car1 = ['audi','mercedez','thar','jaguar','HONDAcity']
 for( let i in car1){
    console.log(car1[i]);
 }

 let colour = ['pink','orange','yellow','red','purple','brown']

 for(let index of colour){
    console.log(index);
 }
 for( let i = 0 ; i < colour.length; i++){
    console.log(colour[i]);
 }

 //nested if : 

 let a = 101
 let b =  100

 if( a < 100){
    if(a < b){
        if(b < 90)
        console.log(b);
    }
 }

 let stdname = {
    name : 'bharati patil',
    age : 20 ,
    mo : 9010123904
 }
 for( let x in stdname ){
    console.log(stdname[x]);
 }