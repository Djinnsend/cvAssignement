// This is for the variables in the cv file
let newName = document.getElementById('inputName');
let newAddress = document.getElementById('inputAdd');
let newNum = document.getElementById('inputNum');
let newMail = document.getElementById('inputMail');
 
newName.innerHTML = (localStorage.getItem('first')) + ' ' + (localStorage.getItem('middle')) + ' ' + (localStorage.getItem('last')); 
newAddress.innerHTML = localStorage.getItem('address');
newNum.innerHTML = localStorage.getItem('number');
newMail.innerHTML = localStorage.getItem('email');