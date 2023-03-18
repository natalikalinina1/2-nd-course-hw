//Задание 1:
const numbs = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//Задание 2:
const n = [2, 4, 5, 6, 8];
n.forEach((el,index) => {
    if (el == 4) {console.log(`${index}:${el}`);
    }    
});

//Задание 3:
let xxx = [1, 3, 5, 10, 20];
xxx = xxx.join('  ');
console.log(xxx);

//Задание 4:

let arrp = [];
let k = 1;
  for (let i = 0; i < 3; i++) {
    arrp[i] = []; 
    for(let j = 0; j < 3; j++){
      arrp[i].push(k); 
    }
  }
  console.log(arrp);


//Задание 5:
let abc = [1, 1, 1];
abc = abc.concat([2,2,2]);
console.log (abc);

//Задание 6:
let bacd = [9, 8, 7, 'a', 6, 5];
bacd = bacd.sort();
bci = bacd.pop();
console.log(bacd);

//Задание 7:

const qwe = [9, 8, 7, 6, 5];
let popt = prompt ('введите число');
const result = qwe.filter(el => el == popt);

if (popt == result) {console.log (`${result} содержится в массиве`);
}
else { console.log (`не содержится в массиве`);
}

//Задание 8:
let line = ['a','b','c','d','e','f'];
line = line.reverse();
console.log(line);

//Задание 9:
let rrr = [[1, 2, 3], [4, 5, 6]];
let resultRrr = [].concat(...rrr);
console.log(resultRrr);

//Задание 10:
const arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); //перебор массива
}
const arrSum = [];
const arrLength = arr.reduce((start, value, index) => {
return arrSum[index] = start + value;
},0);
console.log (arrSum);//сложение элементов

 // Задание 11:
 let array = [2, 4, 6]; 
 let double = array.map( item => item ** 2 );
 console.log( double ); 

// Задание 12:
let strok = 'слово длинное предложение буква';
strok = strok.split(' ');
console.log (strok);

//Задание 13:

const pos = [3,-5,8,-2,9,-10];
const neg = pos.filter(el =>el < 0);
console.log (neg);

// версия2: 
//let  positively = [1,2,3,5];
//let negative = positively.map(item => item *(-1 ));
//console.log( negative ); 



