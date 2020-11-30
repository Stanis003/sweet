new ProductList(new Cart());

//Timer
const deadline = '2020-12-15';

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor((total / (1000 * 60 * 60 * 24))),
        seconds = Math.floor((total / 1000) % 60),
        minutes = Math.floor((total / 1000 / 60) % 60),
        hours = Math.floor((total / (1000 * 60 * 60) % 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

var getZero = num => (num >= 0 && num < 10) ? '0' + num : num;

function setClock(selector, endtime) {

    const timer = document.querySelector(selector),
        days = timer.querySelector("#days"),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);

    updateClock();

    function updateClock() {
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}

setClock('.timer', deadline);