'use strict';

let weekDay = ['Воскресенье', 'Понедельник','Вторник', 'Среда', 'Четверг' , 'Пятница', 'Суббота'],
    months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function decl(n, words) {  
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) return n + ' ' + words[2]; 
    if (n1 > 1 && n1 < 5)  return n + ' ' + words[1]; 
    if (n1 == 1)  return n + ' ' + words[0]; 
    return n + ' ' + words[2];
}

function addingZero(n) {
    return (`${n}`.length === 1) ? '0' + n : n;
}

setInterval(function getDateA() {
    let date = new Date(),
        paragraphA = document.querySelector('.date-A');
    paragraphA.innerHTML =  'Сегодня ' + weekDay[date.getDay()] + ', ' + date.getDate() + ' ' + months[date.getMonth()] + 
        ' ' + date.getFullYear() + ' года ' + decl(date.getHours(), ['час', 'часа', 'часов']) + ' ' + 
        decl(date.getMinutes(), ['минута', 'минуты', 'минут']) + ' ' + decl(date.getSeconds(), ['секунда', 'секунды', 'секунд']) + "<br><br>";
}, 1000);

setInterval(function getDateB() {
    let date = new Date(),
        paragraphB = document.querySelector('.date-B');
    paragraphB.innerHTML = addingZero(date.getDay() - 1) + '.' + addingZero(date.getMonth() + 1) + '.' + date.getFullYear() 
        + ' - ' + addingZero( date.getHours() ) + ':' + addingZero( date.getMinutes() ) + ':' + addingZero( date.getSeconds() );
}, 1000);
