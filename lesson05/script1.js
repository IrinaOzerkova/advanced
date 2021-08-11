'uses strict';

let arr = [];
for (let i = 0; i < 7; i++) {
    arr[i] = prompt('Введите длинное число с номером ' + i); 
}

console.log(arr);

for (let i = 0; i < 7; i++) {
    if (arr[i][0] == '2' || arr[i][0] == '4') {
        console.log(arr[i]);
    }
}

for (let n = 2; n <= 100; n++) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    if (arr.length == 2) {
        console.log(n + ' Делители этого числа 1 и ' + n);
    }
}