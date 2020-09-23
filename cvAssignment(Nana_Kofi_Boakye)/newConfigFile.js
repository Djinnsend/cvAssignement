//This is for the variables for the index.html file
let first = document.getElementById('firstName'); //This is first name
let middle = document.getElementById('middleName'); //This is middle name
let last = document.getElementById('lastName');
let address = document.getElementById('address');
let email = document.getElementById('email');
let number = document.getElementById('number');



let changeInfo = function(){
    localStorage.clear;
    localStorage.setItem('first',first.value);
    localStorage.setItem('middle',middle.value);
    localStorage.setItem('last',last.value);
    localStorage.setItem('address',address.value);
    localStorage.setItem('number',number.value);
    localStorage.setItem('email',email.value);
    window.location.href = 'cv.html';
}

let button = document.querySelector('button');
button.onclick = changeInfo;