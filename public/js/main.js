// // // Ciblage
let ajouter = document.querySelector('.ajouteStag')
let modalBg = document.querySelector('.modalBg')

ajouter.addEventListener('click', function () {
    modalBg.classList.add('bg-active')

    console.log(modalBg);
    console.log("salut");
})

let closeModal = document.querySelector('#closemodal')

closeModal.addEventListener('click', function(){
    modalBg.classList.remove('bg-active')
})

let liste = document.querySelector('.listStag')
function creerElements (x) {
    let li = document.createElement('li')
    li.setAttribute('class', 'elementListe')
    li.innerText = x.nom
    let check = document.createElement('input')
    check.setAttribute('class', "checkbox")
    check.setAttribute('type', 'checkbox')
    let removeBtn = document.createElement('button')
    removeBtn.classList.add('remove')
    removeBtn.innerText= 'Remove'
    li.append(check, removeBtn)
    liste.appendChild(li)
    
    
    removeBtn.addEventListener('click', ()=>{
        let parentBtn = removeBtn.parentElement
        parentBtn.remove()
    })
}

function addStagiaire(a,b,key) {
    let newStag = {
        id: a,
        nom: b,
    }
    let convertObj = JSON.stringify(newStag)
    console.log(convertObj);
    localStorage.setItem(key, convertObj)
    console.log(key);
    var final = JSON.parse(localStorage.getItem(key))
    console.log(final);
    creerElements(final)
}
// console.log(final);

let input = document.querySelectorAll('input')
let count = 0

let addBtn = document.querySelector('#addStag').addEventListener('click', (e) => {
    e.preventDefault
    let id = input[0].value
    let nom = input[1].value
    if (id && nom) {
        addStagiaire(id,nom,count)
    }
    count++
    input[0].value = ""
    input[1].value = ""
})


// REFRESH 
window.addEventListener('load', ()=> {
    let number = parseInt(localStorage.length)
    compteur(number)
})

function compteur (x) {
    return count = x
}

// API
// IP ADDRESS/FOURNISSEUR
let ville = document.querySelector('#city')
let pays = document.querySelector('#country')
let adresseIp = document.querySelector('#ip')
let provider = document.querySelector('#isp')
let info = document.querySelector('#info')
let hours = document.querySelector('#hours').innerHTML = Date();
let modal = document.querySelector('#mod')
let fermer = document.querySelector('#fermer')

fetch('http://api.ipify.org/?format=json')
.then(res => res.json())
.then(res =>{
    adresseIp.innerHTML = res.ip
})
// console.log(Votre adresse ip : ${data.json});

fetch('http://ip-api.com/json/')
.then(res=>res.json())
.then(res =>{
    ville.innerHTML = res.city
    pays.innerHTML = res.country
    // adresseIp.innerHTML = res.ip
    provider.innerHTML = res.isp
})

// DATE 

let date = new Date();
console.log(date);

info.addEventListener('click', () => {
    if (modal.classList.contains('d-none')) {
        modal.classList.remove('d-none')
    }
})

info.addEventListener('click', () => {
    modal.style.display = "block"
})

fermer.addEventListener('click', () => {
    modal.style.display = "none"
    document.body.style.overflow= null
})