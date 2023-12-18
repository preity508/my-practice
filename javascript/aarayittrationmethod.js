//foreach //

let cars = ['i10', ' i20', 'swift', 'jaguar', 'audi', 'mersedeze',]
let cars1 = [];
for (let i = 0; i < cars.length; i++) {
    cars1.push(cars[i])
}
console.log('cars1', cars1);

let cars2 = []
cars.forEach(element => {
    cars2.push(element)
})
console.log('cars2', cars2);

//spread operator//

let cars3 = [...cars];
console.log('cars3', cars3);

let fruit = ['aaple', 'banana', 'kiwi', 'orange', 'mango']
let fruit1 = [];
for (let index = 0; index < fruit.length; index++) {
    fruit1.push(fruit[index])
}
console.log('fruit1 ', fruit1);

let fruit2 = []
fruit.forEach(ele => {
    fruit2.push(ele)
})
console.log('fruit2', fruit2);

let fruit3 = [...fruit]
console.log('fruit3', fruit3);

let employee = [
    { name: 'bharati patil', age: 30 },
    { name: 'swapnil patil', age: 30 },
    { name: 'shweta patil', age: 24 },
    { name: 'ashwini patil', age: 26 }]

     let employeenames = employee.map(employeeObject =>{
       return employeeObject.name;
    })
    console.log('employeenames',employeenames);

let empname = []
employee.map( employeedata =>{
    empname.push(employeedata.name)
})
console.log('empname', empname);

function test(){
    let employee = [
        { name: 'bharati patil', age: 30 },
        { name: 'swapnil patil', age: 30 },
        { name: 'shweta patil', age: 24 },
        { name: 'ashwini patil', age: 26 }]
    
         let employeenames = employee.map(employeeObject =>{
           return employeeObject.name;
        })
        console.log('employeenames',employeenames);
    
    let empname = []
    employee.map( employeedata =>{
        empname.push(employeedata.name)
    })
    console.log('empname', empname);
    
}

let a = [ 'apple', 'kiwi','mango','banana','orange']
let a1 = []
for( let i = 0 ; i < a.length ; i++){
    a1.push ( a [ i])
}
console.log('a1', a1);

let a2 = [ ]
a.forEach( element =>{
a2.push( element)
})
    console.log('a2', a2);

    let a3 = [...a ]
    console.log('a3', a3);

    let b = [ 'honda','hyndai','creata','seltos','audi',]
    let b1 = [ ]
    for ( let i = 0 ; i < b.length ; i++){
        b1.push ( b[i])
    }
    console.log('b1', b1);

    let c = []
    b.forEach( ele =>{
        c.push( ele)
    })
    console.log('c', c);

    let b2 = [ ...b]
    console.log('b2', b2);


function cascading(){
    console.log( ' cascading calling...');
    test()
}
function addition (){
    let result = 30 + 60 ;
    console.log( result);
}

function addition1 ( ){

}

let number = [ 10,20,30,40,50,60]
let number1 = []
number.forEach ( index => {
    if(  index != 50 ){
        number1.push(index)
    }
})
console.log('number1', number1);

//for loop 
let z = ['i10', ' i20', 'swift', 'jaguar', 'audi', 'mersedeze',]
let z1 = []

for(let i = 0 ; i < z.length; i++ ){
z1.push(z[i])
}
console.log('z1',z1);

//forEach : 
let z3 = []
z.forEach(item => {
    z3.push(item)
    })
console.log('z3',z3);

let U1 = ['i10', ' i20', 'swift', 'jaguar', 'audi', 'mersedeze',]
let U2 = []
for( let x = 0 ; x < U1.length ; x++){
    U2.push(U1[x])}
    console.log(U2);

    //let employee1 = [
     //   { name: 'bharati patil', age: 30 },
       // { name: 'swapnil patil', age: 30 },
       // { name: 'shweta patil', age: 24 },
        //{ name: 'ashwini patil', age: 26 }]

  //let employeenames1 =  employee1.map(employeeData=>{
    //return employeeData.name
  //}) 
  //console.log('employeenames1',employeenames1);    
 

  //let employeeData = employee1.map(employeeage=>{
    //return employeeage.age
  //})
  //console.log('employeeData',employeeData);

  function Test(){
    let employee = [
        { name: 'bharati patil', age: 30 },
        { name: 'swapnil patil', age: 30 },
        { name: 'shweta patil', age: 24 },
        { name: 'ashwini patil', age: 26 }]


  }
  let employee3 = employee.map(elementname =>{
    return elementname.name
  }
)   
console.log('employee3',employee3);
 

  