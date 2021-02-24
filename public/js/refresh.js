// REFRESH ET GARDER LE COMPTEUR
window.addEventListener('load', ()=> {
    let number = parseInt(localStorage.length)
    compteur(number)
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        creerElements(final)
    }
})

function compteur (x) {
    return count = x
}

// CLEAR STORAGE
let btnClear = document.querySelector('.removeStag')

btnClear.addEventListener('click', ()=> {
    localStorage.clear()
})

// REFRESH PAGE
let btnRefresh = document.querySelector('.refreshStag')

btnRefresh.addEventListener('click', ()=> {
    document.location.reload()
})