//Задание 1:
let password = 'Пароль';
let passwordCode = Number (prompt ('Введитe '+ password));
if (passwordCode === 12345) {alert (password + ' введен верно');} 
else { alert (password +' введен неправильно');}

//Задание 2:
let c = 4; 
if (c > 0 && c < 10) 
{console.log ('Верно');} 
else if (c === 0 && c === 10)   
{ console.log ('Равно');}
else {console.log ('Неверно');}

//Задание 3:
let d = 5;
let y = 105;
(d > 100 || y > 100) ? console.log('Верно') : console.log('Неверно');

//Задание 4:
let a = 2;
let b = 3;
alert(a + b);

//Задание 5:
let monthNumber = Number (prompt('Введите номер месяца'));                   
switch (monthNumber) {
case 1: alert('Январь,Зима');
break;
case 2: alert('Февраль,Зима');
break;
case 3:alert('Март,Весна');
break;
case 4:alert('Апрель,Весна');
break;
case 5:alert('Май,Весна');
break;
case 6:alert('Июнь,Лето');
break;
case 7:alert('Июль,Лето');
break;
case 8:alert('Август,Лето');
break;
case 9:alert('Сентябрь,Осень');
break;
case 10:alert('Октябрь,Осень');
break;
case 11:alert('Ноябрь,Осень');
break;
case 12:alert('Декабрь,Зима');
break;
default:alert('Такого месяца не существует!');
break;
}

//Задание 6 ( адаптив в css)

// Задание 7 :
let x = prompt ('Пожалуйста, введите любое число'); 
if (isNaN(x)) { alert (NaN); }
else { alert(x); } 
if (x = (x % 2 === 0)) {alert ('Число четное');}
else {alert ('Число нечетное');} 

//задание 8 :
let clientOS = 0 || 1;
if (clientOS === 0) {console.log ('Установите версию приложения для iOS по ссылке');}
else if ( clientOS === 1 ) {console.log ('Установите версию приложения для Android по ссылке');}
//Задание 9: 
let light =  clientDeviceYear >= 2015 ? '':'oблегченную';
if (clientOS === 0) { console.log (`Установите ${light} версию приложения для iOS по ссылке`);} 
else if (clientOS === 1 ) {console.log (`Установите ${light} облегченную версию приложения для iOS`);}

