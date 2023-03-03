// задание 1:
let a = 10;
alert (a);
alert(a=20);

// задание 2:
let firstiPhone = Number(2007);
alert (firstiPhone);

// задание 3:
let javascriptcreator = 'Brendan Eich';
alert (javascriptcreator);

// задание 4:
let x = 10, y = 2;
alert (x+y);
alert (x-y);
alert (x*y);
alert (x/y);

//задание 5:
alert (2**5);

//задание 6:
let A=9;
let B=2;
alert (A%B);

//задание 7:
let num = 1;
num++;
num--;
num = num+5;
num = 12-num-3;
num = 1*7;
num = 21/3;
num = 5+num+1;
num = 8-1;
alert(num);

//задание 8:
let age = Number (prompt( "Сколько вам лет?"));
alert (age);

//задание 9:
const user = {
    name: 'Liza',
	age: 20,
    isAdmin: false
};
// задание 9.1:
user ['sity of residence']= true; 

//задание 9.2:
user.age=25;

//задание 9.3:
delete user ['sity of residence'];

//задание 9.4:
let info = (prompt ("Какую информацию хотите узнать о пользователе?") );
alert ((user[info]));

//задание 10:
let nameUser = (prompt ("Ваше имя?")); 
let Writes = nameUser;
alert (`Привет,${Writes } !`);
