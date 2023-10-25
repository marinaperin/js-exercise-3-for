// ARRAY ADD NUMBERS

let userNumber = Number(prompt('Pick a number'));
let numbers = [];
let somma = 0;
for(let i = 0;  somma < 50; i++){
    somma += userNumber;
    numbers = userNumber;
    console.log(numbers);
}

// N ARRAYS

const n = prompt('Choose a number');

for(let i = 0; i < n ; i++){
    let random = [Math.random()*100]
    let result = Math.floor(random)+1;
    let array = [result];
    console.log(array);
}

// GATSBY PARTY

let guests = ['Hyur', 'Max', 'Alex', 'Alessio', 'Laura', 'Marco', 'Franco', 'Sergio', 'Leonardo', 'Marina', 'Maya', 'Nadina', 'Helga', 'Calin', 'Davide', 'Amanda', 'Fabio', 'Manuel', 'Vitor'];
const userName = prompt('Write your name');
if(guests.includes(userName)){
    alert('You are invited to the party');
}else{
    alert('Sorry to inform you, you are not invited');
}

// 4 DIGITS NUMBER

let insertedNumber = prompt('Write a 4 digit number');
let insertedNumberInt = parseInt(insertedNumber);
let insertedNumberString = insertedNumberInt.toString();

if (isNaN(insertedNumberString) || insertedNumberString.length !==4){
    alert('Try again');
}else{
    let sum = 0;
    for(let i = 0; i<4; i++){
        let digits = insertedNumberString[i];
        sum += Number(insertedNumberString);
        alert(sum);
    }
    
}

// 10 OBJECTS ARRAY