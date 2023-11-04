

let text = ' i live in mumbai ';
let textLength = text.length;
console.log('textlength', textLength);

let a = 'i am from pune';
let alength = a.length;
console.log('a Length', alength);

let b = ' hi my name is bharati patil i am from pimpri-chinchwad pune'
let blength = b.length
console.log('blength', blength);

let c = 'my name is rahul chavan i am from india but i live in bangkok'
let clength = c.length;
console.log('clength', clength);

let d = ' Hello everyone my name is hardik patil i am basically from samsarover but live in dubai'
let dlength = d.length;
console.log('d ', dlength);

let e = text.slice(1, 13)
console.log('e-->', e);


let u = a.slice(1, 14)
console.log('u-->', u);

let v = b.slice(7, 15);
console.log('v-->', v);

let z = 'my name is bharati patil';
let zlength = z.length;
console.log('z', zlength);


let k = z.slice(2, 12)

console.log('k-->', k)

let k1 = text.slice(-10, -5);

console.log('k1', k1);

let d1 = z.slice(-10, -6);
console.log('d1-->', d1);

let f1 = z.slice(-16, -8);
console.log('f1-->', f1);

let g1 = z.slice(-14, -6)
console.log('g1-->', g1);

console.log(z.substring(10, -5));


console.log(c.substring(-15, -5));

console.log(z.substr(2, 16));

let p = 'apple, kiwi , mango, orange'
let plength = p.length;
console.log('p-->', p);

console.log(p.slice(5, 10));
console.log(p.slice(14, 20));
console.log(p.slice(21, 29));
console.log(p.slice(-10, -5));
console.log(p.substring(-10, 9));
console.log(p.substr(10, 6));
console.log(p.substr(8, 15));


let o = 'console.log pune(p.slice pune(5, 10)); pune'
let q = o.replace('pune', 'mumbai')
console.log(q);
let o1 = o.replaceAll('pune', 'mumbai')
let o2 = o.replaceAll('consol log')
console.log(o);

let m1 = 'In formal patana language theory and  patana computer science, a  patana substring is a  patana contiguous  patana sequence of characters within a string.'
let m2 = m1.replace('patana', 'Delhi')
console.log(m2)
let m3 = m1.replaceAll('patana', 'Delhi')
console.log(m3);

let a1 = m1.replaceAll('patana', 'jaipur');
console.log(a1);


let b2 = ' Arrays consist  mumbai of an ordered collection mumbai or list containin mumbai zero or ,mumbai more data types, and use numbered indices'
let b3 = b2.replace('mumbai', 'bali',);
console.log(b3);
let b4 = b2.replaceAll('mumbai', 'bali')
console.log(b4);

let s = b2.replace(/mumbai/gi, 'thailand');
console.log(s);

let s1 = b2.replaceAll('mumbai', 'thailand');
console.log(s1);

let a2 = 'foot, basketball,cricket,hocky,'
let a3 = a2.slice(3, 6)
console.log(a3);

let a4 = a2.slice(6, 10)
console.log(a4);

let r2 = a2.substring(5, 10)
console.log(r2);

let FN = 'bharati';
let LN = 'patil';
let F_name = FN + ' ' + LN;
console.log(F_name);

let Full_N = FN.concat(' ', LN, ' ', 'ganesh')
console.log(Full_N);

let BN = 'bharati';
let BL = 'patil';
let B_F = (BN + ' ' + BL)
console.log(B_F);

let F_N = BN.concat(' ', BL, ' ', 'ganesh')
console.log(F_N);

let k2 = ' sharvil';
let s2 = 'Dolas';
let S_N = k2 + ' ' + s2
console.log(S_N);

let q1 = 'shweta';
let q2 = 'patil';
let q3 = (q1 + ' ' + q2);
console.log(q3);

let q4 = q1.concat(' ', 'ganesh', ' ', BL,)
console.log(q4);

let b1 = 'Anachronism is bali when something does not belong bali in a group or something bali that is out of place, bali specifically bali when something does not '
let x1 = b1.replace('bali', 'dubai')
console.log(x1);

let x2 = b1.replaceAll('bali', 'dubai')
console.log(x2);
let x3 = b1.replace(/bali/ig, 'dubai')
console.log(x3);

let city = 'MUMBAI';
let city1 = city.toLowerCase()
console.log('city-->', city1);

let city2 = city.toUpperCase();
console.log('city-->', city2);

let name = '  bharati     ';
let name1 = name.trim();
console.log('name-->', name1);

let city5 = 'MUMBAI , DUBAI , HAIDRABAD , BAINGLOR , PUNE , NASHIK , DHULE , NANDED';
let city3 = city2.toLowerCase();
console.log('city3', city3);

let city4 = 'mumbai , dubai , haidrabad , banglor , pune , nashik , dhule , nanded';
let city6 = city4.toUpperCase();
console.log('city6-->', city6);

//Trim method()
let name3 = '   bharati      ';
let name4 = name3.trim();
console.log(' name4', name4);

let name5 = '    bharati     ';
let name6 = name5.trimStart();
console.log('name-->', name6);

let name7 = '      bharati     ';
let name8 = name7.trimEnd();
console.log('name8-->', name8);

//charAt method()
let text1 = ' bharati ';
console.log(text1.charAt(1));
let text2 = ' bharati ';
console.log(text2.charAt(2));
let text3 = ' bharati';
console.log(text3.charAt(3))
let text4 = ' bharati ';
console.log(text4.charAt(4));
let text5 = ' bharati ';
console.log(text5.charAt(5));
let text6 = ' bharati ';
console.log(text6.charAt(6));
let text7 = ' bharati ';
console.log(text7.charAt(7));


let dob = ' 08/08/2000 ';
let newdob = dob.split('/');
console.log('->', newdob);
console.log(newdob[1]);

let u1 = 'bharati A patil';
let u2 = u1.split(" ");
console.log(u2);
console.log(u2[0]);
console.log(u2[1]);
console.log(u2[2]);


//always start counting to 0//
let d2 = 'my dog is cute but littel bit wild';
console.log(d2.indexOf('c'));
console.log('last index', d2.lastIndexOf('c'));
let d3 = 'bharati ganesh patil iam from punjab';
console.log(d3.indexOf('e'));
console.log(d3.lastIndexOf('e'));
console.log(d3.search('p'));
console.log(d3.match('ati'));
console.log(d3.match(/esh/));
console.log(d3.match(/ati/ig));

let w = 'Hello World , welcome to the univers'
console.log(w.includes("World"));

let w1 = 'hi my name is bharati patil'
console.log(w1.includes('patil'));

let w2 = 'hello world welcome to the univers';
console.log(w2.indexOf('w'));
console.log(w2.lastIndexOf('w'));
console.log(w2.indexOf('t'));
console.log(w2.lastIndexOf('t'));
console.log(w2.search('e'));
console.log(w2.search('w'));
console.log(w2.match('rld'));
console.log(w2.match(/to/));
console.log(w2.match(/the/g))

console.log(w2.charAt(6));

let ab = 'hello,world welcome to the univers'
let ab1length = ab.length
console.log('ablength', ab1length);

let ab2 = ' hi , my name is bharati patil'
console.log('ab2 length', ab2.length);
let ab3length = ab2.length
console.log('ab3length', ab3length);

let ab4 = 'mumbai,delhi,banglor,pune,hydrabad,zarkhand,nagpur,amravati,gondiya';
console.log('ab4length', ab4.length);
let ab5length = ab4.length;
console.log('ab5length', ab5length);

let bc = 'hello,world welcome to the univers';
console.log('bc', bc.slice(3, 6));
console.log('bc', bc.slice(6, 19));
console.log('bc', bc.slice(27, 34));

let bc1 = 'hi,akshay whats doing on'
console.log(bc1.substring(-5, 11));
console.log(bc1.substring(-7, 10));
console.log(bc1.substring(-1, 3));
console.log(bc1.substring(-2, 15));
console.log(bc1.substr(5, 10));
console.log(bc1.substring(-5, 20))

let ca = 'kiwi,orange,mango,pineapple,apple,custerd,banana';
console.log(ca.substring(0, 12));
console.log(ca.substring(5, 12));
console.log(ca.substring(-5, 10));

let ca2 = 'clain , plain , main , spain , rain , thain , gain';
console.log(ca2.includes("plain"));

let msg = '200,300,400,500';
console.log(msg.startsWith('300,4'));

let r1 = 'hello world , welcome to the univers';
console.log(r1.length);
console.log(r1.slice(3, 5)); ``
console.log(r1.slice(6, 12))
console.log(r1.substring(-5, 9));

let r3 = 'hello my name is bharati patil i am from bangkok'
console.log(r3.substring(-6, 10));
console.log(r3.substr(5, 10));


//replace,replaceAll,tolowercase,touppercase,charat,trim,trimend,trimstart,
//name

let p1 = 'If an error pune occurs during pune the request pune or response pune processing, it will be caught by the pune .catch() method, pune and the error will be logged to the console.'
console.log(p1.replace(/pune/ig, 'Aurangabad'));
console.log(p1.replaceAll('pune', 'Aurangabad'));

console.log(p1.toUpperCase(p1));
let p2 = 'HI MY NAME IS BHARATI PATIL';
console.log(p2.toLowerCase());
let p4 = 'bharati';
console.log(p4.charAt(0));
console.log(p4.charAt(1));
console.log(p4.charAt(2));
console.log(p4.charAt(3));
console.log(p4.charAt(4));
console.log(p4.charAt(5));
console.log(p4.charAt(6));

let p5 = '  bharati '
console.log('p5.trim-->', p5.trim());
console.log('p5.trim-->', p5.trimStart());
console.log('p5.trim-->', p5.trimEnd());

let kl = 'bharati ganesh'
let k22 = 'patil'
let k13 = (' ', k22, '', 'ganesh')
console.log(k13);

//let FN = 'bharati';
//let LN = 'patil';
//let F_name = FN + ' ' + LN;
//console.log(F_name);

//let Full_N = FN.concat(' ', LN ,' ', 'ganesh')
//console.log(Full_N);

//let BN = 'bharati';
//let BL = 'patil';
//let B_F = ( BN + ' '+ BL)
//console.log(B_F);

//let F_N = BN.concat(' ', BL , ' ', 'ganesh' )
//console.log(F_N);

//let k2 = ' sharvil';
//let s2 = 'Dolas';
//let S_N = k2 + ' ' + s2
//console.log(S_N);


let m5 = 'my name is bharati paTIL'
console.log(m5.length);
console.log(m5.slice(4, 5));
console.log(m5.slice(2, 7));
console.log(m5.substring(6, 9));
console.log(m5.substr(5, 8));
console.log(m5.substr(3, 5));
console.log(m5.replace('my', 'our'));

let k4 = 'avaScript bharati arrays  bharati are flexible, bharati allowing you bharati to store and '
console.log(k4.replace(/bharati/ig, 'preity'));
console.log(k4.replaceAll('bharati', 'preity'));

let BN1 = 'bharati';
let BN3 = 'patil';

console.log(BN1 + ' ' + BN3);
console.log(BN1.concat(' ', BN3, ' ', 'ganesh'));

let p3 = 'arav';
let p6 = 'dolas';

console.log(p3 + ' ' + p6);
console.log(p3.concat(' ', p6, ' ', 'ganesh'));


let p7 = 'Mumbai';
console.log(p7.toUpperCase(p7));
console.log(p7.toLowerCase(p7));

let t2 = 'I Live in Mumbai         '
console.log(t2.toLowerCase(t2));
console.log(t2.toUpperCase(t2));
console.log(t2.trim());
console.log(t2.trimStart());
console.log(t2.trimEnd());

let t3 = 'mumbai';
console.log(t3.trimEnd());
console.log(t3.trimStart());
console.log(t3.charAt(0));
console.log(t3.charAt(1));
console.log(t3.charAt(2));
console.log(t3.charAt(3));
console.log(t3.charAt(4));
console.log(t3.charAt(5));

let t4 = 'o8/o8/2000';
let t5 = t4.split('/')
console.log(t5);
console.log(t5[0]);
console.log(t5[1]);
console.log(t5[2]);

let t6 = 'dog gggg'
console.log(t6.indexOf('d'));
console.log(t6.indexOf('o'));
console.log(t6.lastIndexOf('g'));
console.log(t6.lastIndexOf('o'));

let t7 = 'please forgive me maam ';
console.log(t7.search(/me/));
console.log(t7.search('me'));

let y2 = 'spain main train brain drain rain'
console.log(y2.match('ain'));
console.log(y2.match(/ain/));
console.log(y2.match(/ain/gi));
console.log(y2.includes('ain'));

let y3 = '3000 bharati';
console.log(y3.startsWith('300'));

let y4 = 'john deo';
console.log(y4.startsWith('j'));
console.log(y4.endsWith( 'eo'));