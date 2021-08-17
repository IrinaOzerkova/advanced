'uses strict';

const books = document.querySelectorAll('.book');

//console.log(books);

books[1].remove();
books[4].remove();
books[2].remove();
books[0].before(books[1]);
books[3].before(books[4]);
books[5].after(books[2]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

const a = document.querySelectorAll('a');
a[2].textContent = 'Книга 3. this и Прототипы Объектов';

const adv = document.querySelector('.adv');
adv.remove();

const elem = document.querySelectorAll('li');
//console.log(elem);
elem[8].remove();
elem[12].remove();
elem[14].remove();
elem[15].after(elem[8]);
elem[9].after(elem[12]);
elem[10].before(elem[14]);

elem[38].remove();
elem[41].remove();
elem[45].remove();
elem[41].after(elem[38]);
elem[43].after(elem[41]);
elem[38].after(elem[45]);

const newElem = document.createElement('li');
newElem.textContent = 'Глава 8: За пределами ES6';
elem[56].before(newElem);