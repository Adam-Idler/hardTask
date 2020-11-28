'use strict';

let date = new Date(),
    week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    nowDay = week[date.getDay()];

for (let key in week) {
    if (week[key] == nowDay)
        document.write(week[key].bold() + "</br>");
    else if (week[key] === 'Суббота' || week[key] === 'Воскресенье')
        document.write(week[key].italics() + "</br>");
    else
        document.write(week[key] + "</br>");
}