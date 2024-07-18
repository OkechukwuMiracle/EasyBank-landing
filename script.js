const hamburger1 = document.querySelector ('.hamburger_1')
const hamburger2 = document.querySelector ('.hamburger_2')
const menu = document.querySelector('.menu')
const mobile_mockups_container = document.querySelector('.mobile_mockups_container')
const bg_container = document.querySelector ('.bg_container')

hamburger1.addEventListener('click', ()=> {
    hamburger1.classList.add('invisible')
    hamburger2.classList.add('visible')
    menu.classList.add('visible')
    mobile_mockups_container.classList.add('invisible')
    bg_container.classList.add('invisible')
})

hamburger2.addEventListener('click', ()=> {
    hamburger1.classList.remove('invisible')
    hamburger2.classList.remove('visible')
    menu.classList.remove('visible')
    mobile_mockups_container.classList.remove('invisible')
    bg_container.classList.remove('invisible')
})

