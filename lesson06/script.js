'uses strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let answer;

let myGame = function(n) {
    const number = Math.floor(Math.random()* 99.9999);

    let iteration = function(n) {
            
        if (n == 0) {
            if (confirm('Попытки закончились')) {
                myGame(10);
            } else {
                return n;
            } 
        }

        answer = prompt('Угадай число от 1 до 100');
        
        if (answer == null) {
            alert('Игра окончена');
            return n;
        } else if (isNaN(answer)) {
            alert('Введи число!');
            iteration(); 
        } else if (answer == number) {
            if (confirm('Поздравляю, угадали. Хотите сыграть ещё?')) {
                myGame(10);
            } else {
                return n;
            }
            return n;
        } else if (answer > number) {
            n--;
            alert('Загаданное число меньше. Осталось ' + n + ' попыток');
            iteration(n);
        } else {
            n--;
            alert('Загаданное число больше. Осталось ' + n + ' попыток');
            iteration();
        }
       
    };  
    iteration(n);
};

myGame(10);

