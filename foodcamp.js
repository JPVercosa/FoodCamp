const submitBttn = document.querySelector('.btn')
const dishList = document.querySelectorAll('.main-dish .card')
const drinkList = document.querySelectorAll('.drink .card')
const dessertList = document.querySelectorAll('.dessert .card')
const checkIcon = document.querySelector('ion-icon')


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
            el.lastElementChild.classList.toggle('show')
            dishSelected = false;

        } else {
            dishList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                    el.lastElementChild.classList.toggle('show')
                }
            })
            el.classList.toggle('selected')
            el.lastElementChild.classList.toggle('show')
            dishSelected = true;
        }
        checkButton()
    })
})

drinkList.forEach(el => {
    el.addEventListener('click', e => {
        if (el.classList.contains('selected')) {
            el.classList.toggle('selected')
            drinkSelected = false;

        } else {
            drinkList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                }
            })
            el.classList.toggle('selected')
            drinkSelected = true;
        }
        checkButton()
    })
})

dessertList.forEach(el => {
    el.addEventListener('click', e => {
        if (el.classList.contains('selected')) {
            el.classList.toggle('selected')
            dessertSelected = false;

        } else {
            dessertList.forEach(elem => {
                if (elem.classList.contains('selected')) {
                    elem.classList.toggle('selected')
                }
            })
            el.classList.toggle('selected')
            dessertSelected = true;
        }
        checkButton()
    })
})




