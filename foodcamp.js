const submitBttn = document.querySelector('.btn')
const finishBttn = document.querySelector('.finish')
const cancelBttn = document.querySelector('.cancel')
const dishList = document.querySelectorAll('.main-dish .card')
const drinkList = document.querySelectorAll('.drink .card')
const dessertList = document.querySelectorAll('.dessert .card')
const checkIcon = document.querySelector('ion-icon')
const popup = document.querySelector(".popup-wrapper")
const chosenDish = document.querySelector(".popup .dish")
const chosenDrink = document.querySelector(".popup .drink")
const chosenDessert = document.querySelector(".popup .dessert")
const htmlTotal = document.querySelector(".popup .total")


let dishSelected = false;
let drinkSelected = false;
let dessertSelected = false;

function checkButton() {
    if (dishSelected && drinkSelected && dessertSelected) {
        submitBttn.disabled = false;
        submitBttn.textContent = "Fechar Pedido"
    } else {
        submitBttn.disabled = true;
        submitBttn.textContent = "Selecione os 3 itens para fechar o pedido"
    }
}

dishList.forEach(el => {
    el.addEventListener('click', e => {
        if (el.classList.contains('selected')) {
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            dishSelected = false;

        } else {
            dishList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                    span = elem.children[3].children[0]
                    span.classList.toggle('show')
                }
            })
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            dishSelected = true;
        }
        checkButton()
    })
})

drinkList.forEach(el => {
    el.addEventListener('click', e => {
        if (el.classList.contains('selected')) {
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            drinkSelected = false;

        } else {
            drinkList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                    span = elem.children[3].children[0]
                    span.classList.toggle('show')
                }
            })
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            drinkSelected = true;
        }
        checkButton()
    })
})

dessertList.forEach(el => {
    el.addEventListener('click', e => {
        if (el.classList.contains('selected')) {
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            dessertSelected = false;

        } else {
            dessertList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                    span = elem.children[3].children[0]
                    span.classList.toggle('show')
                }
            })
            el.classList.toggle('selected')
            span = el.children[3].children[0]
            span.classList.toggle('show')
            dessertSelected = true;
        }
        checkButton()
    })
})

submitBttn.addEventListener('click', e => {
    let total = 0
    let dish = undefined;
    let drink = undefined;
    let dessert = undefined;

    dishList.forEach(el => {
        if (el.classList.contains('selected')) {
            const rawPrice = el.querySelector('.price');
            const name = el.querySelector('.name').innerText.slice(0, 24);
            const price = rawPrice.innerText.slice(2);
            dish = `${name} <span class="align-rigth">${rawPrice.innerText}</span>`;
            total += parseFloat(price.replace(/,/g, '.'));
        }
    })
    drinkList.forEach(el => {
        if (el.classList.contains('selected')) {
            const rawPrice = el.querySelector('.price');
            const name = el.querySelector('.name').innerText.slice(0, 24);
            const price = rawPrice.innerText.slice(2);
            drink = `${name} <span class="align-rigth">${rawPrice.innerText}</span>`;
            total += parseFloat(price.replace(/,/g, '.'));
        }
    })
    dessertList.forEach(el => {
        if (el.classList.contains('selected')) {
            const rawPrice = el.querySelector('.price');
            const name = el.querySelector('.name').innerText.slice(0, 24);
            const price = rawPrice.innerText.slice(2);
            dessert = `${name} <span class="align-rigth">${rawPrice.innerText}</span>`;
            total += parseFloat(price.replace(/,/g, '.'));
        }
    })

    chosenDish.innerHTML = dish;
    chosenDrink.innerHTML = drink;
    chosenDessert.innerHTML = dessert;
    total = total.toFixed(2).replace('.', ',')
    htmlTotal.innerHTML = `Total: <span class="align-rigth">RS${total}</span >`;
    popup.style.display = 'inherit';
})

cancelBttn.addEventListener('click', e => {
    popup.style.display = 'none';
})

finishBttn.addEventListener('click', e => {
    const num = 5521998571130;
    const msg = `Olá gostaria de fazer o pedido:\n- ${chosenDish.innerText}
    \n- ${chosenDrink.innerText}\n- ${chosenDessert.innerText}\n ${htmlTotal.innerText} `;
    const link = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
    //alert(link)
    window.location.href = link;
})




