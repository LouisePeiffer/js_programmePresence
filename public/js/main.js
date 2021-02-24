// // // Ciblage
// FONCTION AJOUTER UN STAGIAIRE
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



// FILTRE
let btnFilter = document.querySelector('.dropdown')
let btnAll = document.querySelectorAll('.dropdown-item')[0]
let btnFilter1 = document.querySelectorAll('.dropdown-item')[1]
let btnFilter2 = document.querySelectorAll('.dropdown-item')[2]
let btnFilter3 = document.querySelectorAll('.dropdown-item')[3]

btnFilter1.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        let finalId = final.id
        let finalFinal = finalId.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(liste.children)
        if (finalFinal !== "coding15") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})

btnFilter2.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        let finalId = final.id
        let finalFinal = finalId.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(liste.children)
        if (finalFinal !== "coding16") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})

btnFilter3.addEventListener('click', ()=> {
    console.log(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let valeur = localStorage.getItem(key)
        let final = JSON.parse(valeur)
        let finalId = final.id
        let finalFinal = finalId.toLowerCase().split(" ").join("")
        // console.log(finalFinal);
        let lesLi = Array.from(liste.children)
        if (finalFinal !== "coding17") {
            console.log(lesLi[i]);
            lesLi[i].style.display = "none"
        } else {
            lesLi[i].style.display = "block"
        }
    }
})

// btnAll.addEventListener('click', ()=> {
//     let lesLi = Array.from(liste.children)
//     lesLi.style.display = "block"
// })