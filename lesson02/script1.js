alert('Начали!');
let num = 266219;
console.log('num: ', num);

let result = 1;

for (; num > 0; num = Math.floor(num /10))  {
    result *= (num % 10);
}

console.log('произведение цифр: ', result);

result = result ** 3;
console.log('возведение в степень: ', result);

for (; result > 100; result = Math.floor(result /10))  {
    
}
console.log('первые две цифры: ', result); 