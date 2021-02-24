// MODAL 1
let modal = document.querySelector('.mod')
let modalBg2 = document.querySelector('.modal')

let ajouter = document.querySelector('.ajouteStag')
let modalBg = document.querySelector('.modalBg')

ajouter.addEventListener('click', function () {
    modalBg.classList.add('bg-active')
})

let closeModal = document.querySelector('#closemodal')

closeModal.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
})

// OPEN ET FERMER LE MODAL INFO
info.addEventListener('click', () => {
    modalBg2.classList.add('showModal')
    modal.classList.add('showMod')
})

fermer.addEventListener('click', ()=> {
    modalBg2.classList.remove('showModal')
    modal.classList.remove('showMod')
})