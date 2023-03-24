//задание 1:

function firstFunc(arr, callback){
 
	let array = [];
		for(let key in arr){
			
			array += callback(arr[key]);
		}
	return `${array}`;
	}	
	function mult(elem){

		return `${elem * elem},`;
	}

	 console.log(firstFunc([10, 20, 30], mult));
	 
	
	 function sum(elem){
         
		return `${elem+elem},`;
	}

	console.log(firstFunc([10, 20, 30], sum));


//Задание2:
const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
}
users.sort(compareUser); 
console.log (users);


//Задание 3:
function each(arr, callback) {
	let result = [];
	
	for (let elem of arr) {
		result.push( callback(elem) ); 
	}
	
	return result;
}

let result1 = each([1, '4', 9, 7], function(num) {
	return num ** 2;
});

console.log(result1);

let result2 = each([1, '4', 9, 'two'], function(num) {
	let line = [1, '4', 9, 'two']; 
    line = line.reverse();
	return num = line;
});
console.log(result2);

let result3 = each( [1, '1', false, 9, 'two'],function(num){
	let myMass = [1, '4', false, 9, 'two'];

	let result  = myMass.map(function(item) {
	  let number = parseInt(item);
	  num = isNaN(number)? item : number;
	  return num;
	});
	
	console.log(result);
});

	
//Задание 4:

const timer = (dedline) => {
let time = dedline;
console.log (new Date());
const idInterval = setInterval(() => {
	time -= 1;
	console.log (new Date());
},3000);

setTimeout(() => {
clearInterval(idInterval);
	console.log ('30 секунд прошло ');
}, 30000 * dedline);
};
timer(1);



//Задание 5:
function calling() {
    console.log('Звоню!')
};

function beeps() {
    setTimeout(() => {
     console.log('Разговор')
    }, 1000);
}

function talk() {
    console.log('Идут гудки...')
}

calling();
beeps();
talk();


