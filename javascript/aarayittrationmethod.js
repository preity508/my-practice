let car = ['i20','audi','mercedez','BMW','swift']
let newcars  = [];
for( let i = 0 ; i < car.length ; i++){
newcars.push(car[i])
}
console.log('newcars', newcars);


let newcars1 = [];
car.forEach( item => {
    newcars1.push(item)
})
console.log('newcars1',newcars1);

let newcars2 = [...car]
console.log('newcars2',newcars2);