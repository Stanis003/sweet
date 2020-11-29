new ProductList(new Cart());

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


    // const prodJson =
    //     ``;


    // const listProduct = document.querySelector('.products-list'),
    //     cakes = listProduct.querySelector('.cakes'),
    //     cookies = listProduct.querySelector('.cookies'),
    //     cupcakes = listProduct.querySelector('.cupcakes'),
    //     pructsPrice = JSON.parse(prodJson);


    // function cardsView(selector) {
    //     for (const productCard of pructsPrice[`${selector.className}`]) {
    //         selector.innerHTML += `
        
    //     <article class="product-card ${selector.className + '_card'}">
    //         <img src=${productCard.src} alt="Cake">
    //         <h3>${productCard.name}</h3>
    //         <h3>${productCard.price}</h3>
    //         <div class="product_buttom">
    //             <button class="order_product  btn btn-danger .product">Order</button>
    //         </div>
    //     </article>
    //     `;
    //     }
    // }
    // cardsView(cakes);
    // cardsView(cookies);
    // cardsView(cupcakes);

    //slider
    // let slideIndex = 1;
    // const slides = document.querySelectorAll('.cakes_card'),
    //     prev = document.querySelector('.offer__slider-prev'),
    //     next = document.querySelector('.offer__slider-next'),
    //     total = document.querySelector('#total'),
    //     current = document.querySelector('#current');

    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (n < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach((item) => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block';

    //     if (slides.length < 10) {
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) {
    //     showSlides(slideIndex += n);
    // }

    // prev.addEventListener('click', function () {
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', function () {
    //     plusSlides(1);
    // });

    // let slideIndexCo = 1;
    // const slidesCo = document.querySelectorAll('.cookies_card'),
    //     prevCo = document.querySelector('.offer__slider-prevCo'),
    //     nextCo = document.querySelector('.offer__slider-nextCo'),
    //     totalCo = document.querySelector('#totalCo'),
    //     currentCo = document.querySelector('#currentCo');

    // showSlidesCo(slideIndexCo);

    // if (slidesCo.length < 10) {
    //     totalCo.textContent = `0${slidesCo.length}`;
    // } else {
    //     totalCo.textContent = slidesCo.length;
    // }

    // function showSlidesCo(n) {
    //     if (n > slidesCo.length) {
    //         slideIndexCo = 1;
    //     }
    //     if (n < 1) {
    //         slideIndexCo = slidesCo.length;
    //     }

    //     slidesCo.forEach((item) => item.style.display = 'none');

    //     slidesCo[slideIndexCo - 1].style.display = 'block';

    //     if (slidesCo.length < 10) {
    //         currentCo.textContent = `0${slideIndexCo}`;
    //     } else {
    //         currentCo.textContent = slideIndexCo;
    //     }
    // }

    // function plusSlidesCo(n) {
    //     showSlidesCo(slideIndexCo += n);
    // }

    // prevCo.addEventListener('click', function () {
    //     plusSlidesCo(-1);
    // });

    // nextCo.addEventListener('click', function () {
    //     plusSlidesCo(1);
    // });

    // let slideIndexCu = 1;
    // const slidesCu = document.querySelectorAll('.cupcakes_card'),
    //     prevCu = document.querySelector('.offer__slider-prevCu'),
    //     nextCu = document.querySelector('.offer__slider-nextCu'),
    //     totalCu = document.querySelector('#totalCu'),
    //     currentCu = document.querySelector('#currentCu');

    // showSlidesCu(slideIndexCu);

    // if (slidesCu.length < 10) {
    //     totalCu.textCuntent = `0${slidesCu.length}`;
    // } else {
    //     totalCu.textCuntent = slidesCu.length;
    // }

    // function showSlidesCu(n) {
    //     if (n > slidesCu.length) {
    //         slideIndexCu = 1;
    //     }
    //     if (n < 1) {
    //         slideIndexCu = slidesCu.length;
    //     }

    //     slidesCu.forEach((item) => item.style.display = 'none');

    //     slidesCu[slideIndexCu - 1].style.display = 'block';

    //     if (slidesCu.length < 10) {
    //         currentCu.textCuntent = `0${slideIndexCu}`;
    //     } else {
    //         currentCu.textCuntent = slideIndexCu;
    //     }
    // }

    // function plusSlidesCu(n) {
    //     showSlidesCu(slideIndexCu += n);
    // }

    // prevCu.addEventListener('click', function () {
    //     plusSlidesCu(-1);
    // });

    // nextCu.addEventListener('click', function () {
    //     plusSlidesCu(1);
    // });


//Forms
const forms = document.querySelector('.order__form');
const messege = {
    loading: 'img/form/spinner.svg',
    success: 'Thanks!',
    failure: 'Something wrong!'
};


function postData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const statuMessage = document.createElement('img');
        statuMessage.src = messege.loading;
        statuMessage.style.cssText = `
        display:block;
        margin: 0 auto;`;
        form.insertAdjacentElement('afterend', statuMessage);


        const formData = new FormData(form);
        const json =JSON.stringify(Object.fromEntries(formData.entries));



        fetch('server.php', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: json
            }).then(data => data.text())
            .then(data => {
                console.log(data);
                showThanksModal(messege.success);
                statuMessage.remove();
            }).catch(() => {
                showThanksModal(messege.failure);

            }).finally(() => {
                form.reset();

            });

    });
}

function showThanksModal(messege) {
    const prevModalDiaolg = document.querySelector('.modal__dialog');

    prevModalDiaolg.classList.add('hide');

    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
<div class="modal__content">
<div class="modal__close>&times;</div>
<divclass="modal__title>${messege}</div>
</div>
`;

    document.querySelector('modal').append(thanksModal);

    setTimeout(() => {
        thanksModal.remove();
        prevModalDiaolg.classList.add('show');
        prevModalDiaolg.classList.remove('hide');
        closeModal();
    }, 4000);

}
