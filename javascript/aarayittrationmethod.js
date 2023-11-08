let car = ['i20', 'audi', 'mercedez', 'BMW', 'swift']
let newcars = [];
for (let i = 0; i < car.length; i++) {
    newcars.push(car[i])
}
console.log('newcars', newcars);


let newcars1 = [];
car.forEach(item => {
    newcars1.push(item)
})
console.log('newcars1', newcars1);

let newcars2 = [...car]
console.log('newcars2', newcars2);

let car1 = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
let newcar1 = [];
for (let index = 0; index < car1.length; index++) {
    newcar1.push(car1[index]);

}
console.log('newcar1', newcar1);

let a = ['apple', 'banana', 'mango', 'i20', 'audi', 'mercedez'];
let a1 = [];
for (let i = 0; i < a.length; i++) {
    a1.push(a[i])
}
console.log('a1', a1);

let B = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
let B1 = [];
B.forEach(Element => {
    B1.push(Element)
})
console.log(B1);
let b = ['apple', 'banana', 'mango', 'orange', 'pineapple'];
let b1 = [];
B.forEach(item => {
    b1.push(item)
})
console.log('b1', b1);

let c = ['apple', 'banana', 'mango', 'orange', 'pineapple']
let c1 = [...c];
console.log('c1', c1);

let d = ['audi', 'BMD', 'swift', 'seltos', 'creata', 'huydai']
let d1 = [];
for (let i = 0; i < d.length; i++) {
    d1.push(d[i])
}
console.log('d1', d1);

let f = []
B.forEach(index => {
    f.push(index)
});
console.log(f);

let G = [];
d.forEach(i => {
    G.push(i)
})
console.log('G', G);

let Z = [...d];
console.log('Z', Z);

let N = ['apple', 'banana', 'orange', 'kiwi', 'pineapple', 'mango', 'tomato']
let N1 = [];
for (let i = 0; i < N.length; i++) {
    N1.push(N[i])
}
console.log('N1', N1);
let N2 = []
N.forEach(ele => {
    N2.push(ele)
})
console.log('N2', N2);
let N3 = [...N]
console.log('N3', N3);

let J = ['audi', 'seltos', 'hyundai', 'swift', 'i20', 'i10']
let J1 = []
J.forEach(B => {
    J1.push(B)
})
console.log(J1);
let k = []
J.forEach(M => {
    k.push(M)
})
console.log(k);
L = [...J]
console.log('L', L);

let T = ['apple', 'banana', 'orange', 'kiwi', 'pineapple', 'mango', 'tomato']
let T1 = []
for (let i = 0; i < T.length; i++) {
    T1.push(T[i])
}
console.log(T1);
let T2 = [];
T.forEach(element => {
    T2.push(element)
})
console.log('T2', T2);

let T3 = [...T]
T3.splice(1, 1, ' chiku')
console.log('T3', T3);

let T4 = [];
T.forEach(index => {
    T4.push(index)
    T4.splice(1, 1, ' bharati')
})
console.log('T4', T4)

let employee = [
{ name: 'bharati patil', age: 30 },
{ name: 'poonam patil ', age: 30 },
{ name: 'prerana patil', age: 30 },
{ name: 'aditya patil', age: 30 },
{ name: 'shweta patil', age: 30 }]

let employeeNames = employee.map(employeedata =>{
    return employeedata.name;
})
console.log('employeeNames', employeeNames);
