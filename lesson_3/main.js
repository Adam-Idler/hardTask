'use strict';
//Первое задание
let weekDay = [];
weekDay['ru'] = ['Пн','Вт','СР','Чт','Пт','Сб','Вс'];
weekDay['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let lang = 'ru';
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

// Второе задание 
let namePerson = 'Максим';
namePerson === 'Артем' ? console.log('Директор') : namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент');