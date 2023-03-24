// Задание 1 :
console.log('здравствуйте!'.toUpperCase());


//Задание 2 :
function searchStart (arr, search) {
  let result = [];
  arr.forEach((item) => {
    if(item.toLowerCase().startsWith(search.toLowerCase())){
      result.push(item);
    }
});
return result;
}
console.log (searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко')); 

//Задание 3:
console.log(Math.floor(32.58884));
console.log(Math.ceil(32.58884));
console.log(Math.round(32.58884));


//Задание 4:
console.log(Math.max(52, 53, 49, 77, 21, 32));
console.log(Math.min(52, 53, 49, 77, 21, 32));


//Задание 5:
function randomInteger(min, max) {
   
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  console.log ( randomInteger(1, 10) );
 

//Задание 6 
let ywe = Number(prompt ('Введите число'));
function getRandomArrNumbers (length = Math.floor(ywe/2)) {
  return Array.from(Array(length),() => Math.floor(Math.random()*ywe)+1);
}
const randomarr = getRandomArrNumbers();
console.log(randomarr);


// Задание 7:
let min = Number( prompt('Введите первое число'));
let max = Number(prompt('Введите второе число'));
   
    let result = function (min,max) {
      if (isNaN(min) || isNaN(max)) {
        console.log('Одно или оба значения не являются числом');
      }
      else { let zxc = min + Math.random() * (max + 1 - min);
          console.log(Math.floor(zxc));
      }
    }
      result(min,max);
  

  //Задание 8:
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

let myDate = new Date(); 
let fullDate = myDate.getDate() + " " + months[myDate.getMonth()] +" " + myDate.getFullYear() + ", " + days[myDate.getDay()];
console.log(fullDate);


// Задание 9 :
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log (currentDate);


//Задание 10:
const day = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDates = new Date();
const hour = myDate.getHours(); 
const minute = myDate.getMinutes(); 
const second = myDate.getSeconds();

let resultsdate = function (){
let allDate = myDates.getDate() + " " + month[myDates.getMonth()] +" " + myDates.getFullYear() + ", " + day[myDates.getDay()]+ " " + (" время: " + hour + ":" + minute + ":" + second );
console.log(allDate);
}
resultsdate ();


//Задание 11:
function GameTextButtonWords() { 
    
  const fructs = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  let fructsi = fructs.sort(() => Math.random() - 0.5);
  alert (fructsi);

  const answerUser = prompt('Чему равнялся первый элемент массива');
  const answer = fructsi[0]; 

  if (answerUser.toLowerCase() === answer.toLowerCase()) {
    alert('Вы близки к победе!');
  } else {
    alert(`Не угадал, правильный ответ: ${answer}`); 
  }

  let answerUser2 = prompt('Чему равнялся последний элемент массива');
  const answer2 = fructsi[6];

  if ((answerUser.toLowerCase() === answer.toLowerCase()) && (answerUser2.toLowerCase() === answer2.toLowerCase() )) {
    alert('Вы победитель!');}

  else if(answerUser2.toLowerCase() === answer2.toLowerCase()) {
    alert('А здесь угадал!');

  } else {
    alert(`Не угадал, правильный ответ: ${answer2}`); 
  }
}
;



