//задание 1:
function getResult(array, сallback) {
    const result = array.reduce(сallback);
    
    console.log(result);
}
function mult(elem1, elem2) {
    return elem1 * elem2;   
}
    function sum(elem1, elem2) {    
    return elem1 + elem2;
}
 
getResult ([3, 4, 1, 9], mult); 
getResult ([3, 4, 1, 9], sum); 
 
//Заданиe 2:
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
 
each = (arr, callback) => {
    callback(arr);
}
const qwadr = [1, 4, 9, 7];
const qwadrRes = (arr) => {
   
    console.log(arr.map(item => item ** 2));
}
  
const qwert = [1, '4', false, 9, 'two'];
const reversArr = (arr) => { 

    console.log(arr.reverse());
}
const array = [1, '4', 9, 'two'];
const toNumberArr = (arr) => {
    arr = arr.map(item =>(Number(item)));
    console.log(arr.filter(item => item >= 0));
}
// либо :console.log(arr.filter(item => !isNaN(item)));
each(qwadr,qwadrRes);
each(array, reversArr); 
each(qwert, toNumberArr);
 
//Задание 4:
 
const idInterval = setInterval(() => {
    console.log (new Date());
},3000);
setTimeout(() => {
clearInterval(idInterval);
    console.log ('30 секунд прошло ');
}, 30000);
 
//Задание 5:
function calling() {
    console.log('Звоню!');
};
 
function beeps(callback) {
    setTimeout(() => {
     console.log('Идут гудки');
     callback();
    }, 1000);
}
 
function talk() {
   
        console.log('Разговор')
    
}
 
calling();
beeps(talk);

