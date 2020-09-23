// The variables below contain all the necessary info to be carried to 
//cv.html

let change = function () {
    event.preventDefault;
    // alert(first.innerHTML);
    var first = document.getElementById('firstName');
    var middle = document.getElementById('middleName');
    var last = document.getElementById('lastName');
    var number = document.getElementById('number');
    var email = document.getElementById('email');
    var address = document.getElementById('address');

    var nameChange = document.getElementById('inputName');
    localStorage.setItem('nameChange',nameChange.value);
    alert(nameChange.innerHTML)
}










// let button = document.querySelector('button');
// let first = document.getElementById("firstName").value;
// let middle = document.getElementById('middleName').value;
// let last = document.getElementById('lastName').value;
// let number = document.getElementById('number').value;
// let email = document.getElementById('email').value;
// let address = document.getElementById('address').value;

//localStorage.clear(); //Here we clear the localStorage for the addition of the stuff. 
                        //Not fully necessary but hey, why not?!

// let array = [first,middle,last,number,email,address]; //Array of our variables containing info


