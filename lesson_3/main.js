'use strict';

let weekDay = [];
let namePerson = prompt('Как Вас зовут?'), positionPerson;
let lang = prompt('Выберите язык - ru или en (Раскладка не имеет значения)').toLowerCase();

weekDay['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
weekDay['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

namePerson === 'Артем' ? positionPerson = 'Директор' : namePerson === 'Максим' ? positionPerson = 'Преподаватель' : positionPerson = 'Студент';
// A
if (lang === 'ru') console.log(weekDay['ru']);
else if (lang === 'en') console.log(weekDay['en']);
// B
switch (lang) {
    case 'ru':
        console.log(weekDay['ru']);
        break;
    case 'en':
        console.log(weekDay['en']);
        break; 
}
// C
console.log(weekDay[lang]);

console.log('Ваша должность: ', positionPerson)