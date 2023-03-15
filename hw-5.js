// Задание 1:
function min (a, b) {
if (a < b) { return a;
}
else {
    return b;
}
}
console.log (min (8, 4));
console.log (min (6, 6));

//Задание 2:
let c = Number (prompt ('Введите число'));
let EvenOdd;

    if (c % 2 == 0) {  EvenOdd = function () {
        console.log ('Число четное');
    }
    }
    else { EvenOdd = function () { 
        console.log ('Число нечетное');    
    }  
}
EvenOdd ();

//Задание 3.1:

let x = Number(prompt('Введите число'));

function squareOfNumber(x) {

    let square = x ** 2;

    return square;
}
console.log(squareOfNumber(x));

//Задание 3.2:
let e = Number (prompt ('Введите число'))

function square (e){

    return e*e;
};
// Задание 4:

let age = prompt('Сколько Вам лет?');
let printMessage;

if (age < 0) {

    printMessage = function () {
        alert('Вы введи неправильное значение!');
    }

} else if (age > 0 && age < 12) {

    printMessage = function () {
        alert('Привет друг!');
    }
}    
   else {

    printMessage = function () {
        alert('Добро пожаловать!');
   } 
}

printMessage();

//Задание 5 :
let first = prompt('Введите первое число');
let second = prompt('Введите второе число');

let result = function (){
  if (isNaN(first, second)){
    console.log('Одно или оба значения не являются числом');
  } else {
    console.log(first * second);
  }
}
result();

//Задание 6 :
let n = prompt('Введите число');
let readNumber;
let v = n**2;

if (isNaN(n)) { readNumber = function () { alert('Переданный параметр не является числом');
}
    
} 
else {
    readNumber = function () {alert (`${n} в кубе равняется ${v}`); }
}

readNumber();


//Задание 7 :
function getRectangleArea() {
    return (this.radius * this.radius)* 3.14;
  }
  function getRectanglePerimeter() {
    return this.radius * 2 *3.14;
  }
  
  const circle1 = {
    radius: 2,

    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const circle2 = {
    radius: 4,
    
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  console.log(circle1.getArea());
  console.log(circle1.getPerimeter());
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter());


// Задание 8 ^
  function GameTextButton() { 
    
        let numMoth = Number(prompt('Введите номер месяца'));

        if (numMoth > 2 && numMoth < 6) { console.log ('Весна');}
          
        if (numMoth > 5 && numMoth < 9) { console.log ('Лето');}
           
        if (numMoth > 8 && numMoth < 12) { console.log ('Осень');}
            
        if (numMoth > 0 && numMoth < 4 || numMoth == 12) { console.log ('Зима');}
   
        else { console.log ('Такого месяца не бывает!:)');}

}
    
 
