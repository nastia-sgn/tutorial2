// const message = 'JavaScript is awesome!';

// alert('message');
// console.log(message[5]); //c

// const isComing = confirm("Please confirm hotel reservation");
// const hotelName = prompt('Please enter desired hotel name');

// console.log(7 <= '7'); //true

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }

// Просимо клієнта підтвердити бронювання готелю
// і зберігаємо результат роботи confirm у змінну
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const num1 = 5;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10

/////////////// ЦИКЛИ /////////////////////////////

// let counter = 0;

// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }
// в консолі від 0 до 9

// for (let i = 0; i <= 20; i += 5) { // від 0 і +5 на кожн інтерації 0,5,10...
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log('Знайшли число 3, перериваємо виконання циклу');
//     break;
//   }
// }
// console.log('Лог після циклу');

let counter = 0;

while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}
