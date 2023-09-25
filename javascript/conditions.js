console.log('bharati patil ');



let a = 30;
let b = 40;

if (a > b) {
    console.log(' a is big ');
}

if (a < b) {
   console.log( 'a is small'); 
}
else {
    console.log('a is big');
//else if ->> if want to check more than 2 conditions
}
if ( a == b) {
    console.log(' a and b are equal');
    
}
else if (a < b) {
    console.log( 'a is smaller than b');
    
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
        case 'white' :
            console.log('color is white');
            break;

    default:
        console.log('no color');
        break;
}