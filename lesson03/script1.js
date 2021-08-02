'use strict';

let lang = prompt('Введите язык ru или en: ');

let dayRu = 'понедельник, вторник, среда, четверг, пятница, суббота, воскресенье';
let dayEn = 'monday, tuesday, wednesday, thursday, friday, saturday, sunday';

if (lang == 'ru') {
    console.log(dayRu);
} else if (lang == 'en'){
    console.log(dayEn);
}

switch (lang) {
    case 'ru': console.log(dayRu); break;
    case 'en' : console.log(dayEn);
}

let dayAll = [];
dayAll.ru = dayRu;
dayAll.en = dayEn;
console.log(dayAll[lang]);

let namePerson = prompt('Введите имя');

let result = namePerson == 'Артем' ? 'директор' : (namePerson == 'Максим' ? 'преподаватель' : 'студент');
console.log(result);

