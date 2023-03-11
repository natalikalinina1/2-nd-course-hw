//Задание 1:
let i = 0;  
while (i < 2) {console.log('Привет');i++;}

//Задание 2:
let a = 1;
while (a <= 5) {console.log(a);a++;}

//Задание 3:
let b = 7;
do {console.log(b);b++; }
while (b <= 22);

//Задание 4:
const obj = {
	'Коля': '200',
	'Вася': '300',
	'Петя': '400'
};
for (let salary in obj) {alert (`${salary}, — зарплата ${obj[salary]} долларов`);}

// Задание 5:      
for (n = 1000, num = 0; n >= 50; n/2, num++) 
{n/= 2; console.log(n);}			
console.log (num);
	
// Задание 6:
for ( let dayNumber = 1; dayNumber <= 31; dayNumber++) { 
	  if (dayNumber % 7 == 0) {
		  console.log (`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`); 
		  continue; 
	  }
	};

