console.log('bharati patil ');



let a = 30;
let b = 40;

if (a > b) {
    console.log(' a is big ');
}

if (a < b) {
    console.log('a is small');
}
else {
    console.log('a is big');
    //else if ->> if want to check more than 2 conditions
}
if (a == b) {
    console.log(' a and b are equal');

}
else if (a < b) {
    console.log('a is smaller than b');

}
else if (b > a) {
    console.log(' b is greater than a');

}


let color = 'black'
switch (color) {
    case ' blue':
        console.log('color is blue');
        break;

    case 'black':
        console.log('color is black');
        break;
    case 'white':
        console.log('color is white');
        break;

    default:
        console.log('no color');
        break;
}
let a1 = 80;
let b1 = 60;

if (a1 > b1) {
    console.log('a1 is big than b1 ');

}

if (b1 < a1) {
    console.log('b1 is smaller than a1');

}
else {
    console.log('a1 is big');
}
///-------------------///
if (a1 == b1) {

    console.log('a1 and b1 are equal');

}
else if (a1 > b1) {
    'a1 is greater than b1'

}
else if (a1 < b1) {
    console.log('a1 is less than b1');

}
else {
    console.log('else block');
}
let clr = 'orange'
switch (clr) {
    case 'black':
        console.log('clr is black');
       break;


    case' white' :
        console.log('clr is orange');
         break;


    case' pink ':
        console.log(' clr is pink');
    break;

    //default:
       // console.log('no match');
       // break;
}

let x = 30;
let y = 150;

if( x < 100){
      if(x < y){
        if(y < 100){
            console.log(y);
        }
      }
}