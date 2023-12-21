

var colors = [ 'red','orange','yellow','pink','grey','black','white'];
var colors1 = colors
console.log('colors', colors);
console.log('colors1',colors1);

// shallow copy : if we changing items from copied array the changes 
//will reflect to the original aaray as well

let a = [ 10,20,30,40,50];
a[2] = 80;
console.log(a);

colors1 [ 3] = 'skyblue'
console.log(colors);
console.log(colors1);

// deep copy : original aaray or object item will not get affected if we change 
//item of copied aaray or object
  
let cars = [ 'swift','seltos', ' mercedez','BMW','Audi','jaguar']//memory location of cars and car1 is different in deep copy
let car1 = [...cars]
console.log('car',cars);
console.log( 'car1', car1);

car1[2] = ' bharati'
console.log('cars',cars);
console.log(car1);



let fruit = [ 'mango','apple','orange','pineapple','kiwi',]
let fruit1 = fruit
console.log('fruit',fruit);
console.log('fruit1',fruit1);
fruit[2] = 'custerd apple'
console.log('fruit',fruit);
console.log('fruit1',fruit1);

let fruit2 = [...fruit]
console.log('fruit',fruit);
console.log('fruit2',  fruit2);

let cardetails = {
    CarName : 'Seltos',
    color : 'white',
    Price : 900000,
    tpermite : true

}

// shallow copy of object //
let cardetails1 = cardetails
console.log('cardetail',cardetails);
console.log('cardetails',cardetails1);

cardetails1.Price = 1000000

console.log('cardetail',cardetails);
console.log('cardetails',cardetails1);


//deep copy
let cardetails2 = {
    CarName : 'Seltos',
    color : 'white',
    Price : 900000,
    tpermite : true
}

let cardetails3 = {...cardetails2}
console.log('cardetails2',cardetails2);
console.log('cardetails3',cardetails3);

cardetails3.color = 'black'
console.log('cardetails2',cardetails2);
console.log('cardetails3',cardetails3);


//json stringify : 
 
let student = '{ "std name" : "pooja", "age" : 20}' //json stringyfyed formate
let student1 = { name : 'pooja', age : 20} //json parsed formate 
 
//JSON : javascript data interchange formate
//when we transfering data from front end to back end or getting data from
// backend to front end it should be in JSON format

let employee = {
    employeeName : ' sourabh',
    employeefrd : ['sanchit','pawan','ram','radha '],
    employeecar : [
        {carname :  'audi', color : 'gray'},
         {carname :  'audi', color : 'black'},
         {carname :  'audi', color : 'white'},
    ],
    employeeaddr : { city : 'mumbai', pincode : 41020}
    }

    let cardetails6 = {
    CarName : 'Seltos',
    color : 'white',
    Price : 900000,
    tpermite : true
}

let stringyfyed_obj = JSON.stringify(cardetails6);
console.log('stringifyed_obj',stringyfyed_obj);

let ParseData = JSON.parse(stringyfyed_obj);
console.log('ParseData',ParseData);
console.log(ParseData.Price);

//shallow copy : 

let car10 = [ 'seltos','creata','mercedez','audi','bollero','bulleno',]
let car11 = car10
console.log('car',car10);
console.log('car',car11);
car11[1] = 'pink'
console.log('car11',car11);
console.log('car10c',car10);

let A = [ 10,20,30,40,50]
A[1] = 200
console.log('A',  A);



let colour = ['pink','orange','white','black','grey','purple','blue']
let colour1 = [...colour]
console.log('colour',colour);
console.log('colour1',colour1);
colour1[2] = 'red'
console.log('colour',colour);
console.log('colour1',colour1);

//shallow copy of object
let car12 = {
    carname : 'audi',
    color : 'white',
    price : 2000000,
    tpermite : true
}
let car13 = car12;
console.log('car12',car12);
console.log('car13',car13);

car12.price = 3000000
console.log('car12',car12);
console.log('car13',car13);

//--------------------------------------------------------------------//
//--------------------------------------------------------------------//


//deep copy of object

 let car14 = {
    carname : 'audi',
    color : 'white',
    price : 2000000,
    tpermite : true
 }

let car15 = {...car14}
console.log('car14',car14);
console.log('car15',car15);

car15.color = 'black'
console.log('car14',car14);
console.log('car15',car15);



// stingyfy method
let car16 = {
    carname : 'audi',
    color : 'white',
    price : 2000000,
    tpermite : true
 }

 let stringyfy_data = JSON.stringify(car16)
 
 console.log('stringyfy_data',stringyfy_data);

 let stringyfy_data1 = JSON.parse(stringyfy_data)
 console.log('stringyfy_data',stringyfy_data1);
 console.log(stringyfy_data1.price);

