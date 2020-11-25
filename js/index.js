window.addEventListener('DOMContentLoaded', function () {

    //Timer
    const deadline = '2020-11-30';

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

    // Cards objects

    const prodJson =
        `{
  "cakes" : [
{"name":"Cake Vanila", "price": "$25/kg.", "src": "img/sweets/cakes/cake_lemon.jpg"},
{"name":"Cake Red", "price": "$28/kg.", "src": "img/sweets/cakes/cake_red.jpg"},
{"name":"Cake Reinbow", "price": "$26/kg.", "src": "img/sweets/cakes/cake_reinbow.jpg"},
{"name":"Cake Semio", "price": "$27.5/kg.", "src": "img/sweets/cakes/cake_semio.jpg"},
{"name":"Cake Oreo", "price": "$29/kg.", "src": "img/sweets/cakes/cake_oreo.jpg"}
  ],

"cookies":[
{"name": "Cookies Bake", "price": "$15/kg.", "src": "img/sweets/cookies/cookies_bake.jpg"},
{"name": "Cookies Browni", "price": "$12/kg.", "src": "img/sweets/cookies/cookies_brown.jpg"},
{"name": "Cookies Buono", "price": "$14.5/kg.", "src": "img/sweets/cookies/cookies_buono.jpg"},
{"name": "Cookies Hell", "price": "$16.7/kg.", "src": "img/sweets/cookies/cookies_hell.jpg"},
{"name": "Cookies Hellowen", "price": "$17/kg.","src": "img/sweets/cookies/cookies_hellowen.jpg"}
],

"cupcakes":[
{"name": "Cupcake Choco", "price": "$16/kg.", "src": "img/sweets/cupcakes/cupcake_choco.jpg"},
{"name": "Cupcake Fann", "price": "$18/kg.", "src": "img/sweets/cupcakes/cupcake_fancake.jpg"},
{"name": "Cupcake Oreo", "price": "$18/kg.", "src": "img/sweets/cupcakes/cupcake_oreo.jpg"},
{"name": "Cupcake Penual", "price": "$19/kg.", "src": "img/sweets/cupcakes/cupcake_penual.jpg"},
{"name": "Cupcake Strawberry", "price": "$17/kg.", "src": "img/sweets/cupcakes/cupcake_strawberry.jpg"}
]
}`;


    const listProduct = document.querySelector('.products-list'),
        cakes = listProduct.querySelector('.cakes'),
        cookies = listProduct.querySelector('.cookies'),
        cupcakes = listProduct.querySelector('.cupcakes'),
        pructsPrice = JSON.parse(prodJson);


    function cardsView(selector) {
        for (const productCard of pructsPrice[`${selector.className}`]) {
            selector.innerHTML += `
        
        <article class="product-card ${selector.className+'_card'}">
            <img src=${productCard.src} alt="Cake">
            <h3>${productCard.name}</h3>
            <h3>${productCard.price}</h3>
            <div class="product_buttom">
                <button class="order_product  btn btn-danger">Order</button>
            </div>
        </article>
        `;
        }
    }
    cardsView(cakes);
    cardsView(cookies);
    cardsView(cupcakes);

    //slider
    let slideIndex = 1;
    const slides = document.querySelectorAll('.cakes_card'),
        prev = document.querySelector('.offer__slider-prev'),
        next = document.querySelector('.offer__slider-next'),
        total = document.querySelector('#total'),
        current = document.querySelector('#current');

    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function () {
        plusSlides(-1);
    });

    next.addEventListener('click', function () {
        plusSlides(1);
    });

    let slideIndexCo = 1;
    const slidesCo = document.querySelectorAll('.cookies_card'),
        prevCo = document.querySelector('.offer__slider-prevCo'),
        nextCo = document.querySelector('.offer__slider-nextCo'),
        totalCo = document.querySelector('#totalCo'),
        currentCo = document.querySelector('#currentCo');

    showSlidesCo(slideIndexCo);

    if (slidesCo.length < 10) {
        totalCo.textContent = `0${slidesCo.length}`;
    } else {
        totalCo.textContent = slidesCo.length;
    }

    function showSlidesCo(n) {
        if (n > slidesCo.length) {
            slideIndexCo = 1;
        }
        if (n < 1) {
            slideIndexCo = slidesCo.length;
        }

        slidesCo.forEach((item) => item.style.display = 'none');

        slidesCo[slideIndexCo - 1].style.display = 'block';

        if (slidesCo.length < 10) {
            currentCo.textContent = `0${slideIndexCo}`;
        } else {
            currentCo.textContent = slideIndexCo;
        }
    }

    function plusSlidesCo(n) {
        showSlidesCo(slideIndexCo += n);
    }

    prevCo.addEventListener('click', function () {
        plusSlidesCo(-1);
    });

    nextCo.addEventListener('click', function () {
        plusSlidesCo(1);
    });


});