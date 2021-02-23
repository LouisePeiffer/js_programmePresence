// // // Ciblage
// let divStag = document.querySelector('#listStagiaires');
// let listStag = document.querySelector('.listStag');

// let inpKey = document.querySelector('#inpKey');
// let inpValue = document.querySelector('#inpValue');
// let ajouteStag = document.querySelector('.ajouteStag');

// let removeStag = document.querySelector('.removeStag');
// let refreshStag = document.querySelector('.refreshStag');


// // ajouter
// ajouteStag.onclick =  function() {
//     const key = inpKey.value;
//     const value = inpValue.value;

//     if (key && value) {
//         localStorage.setItem(key, value);
//         location.reload();
//     }
// }; 

// for (let i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);

//     // Ma liste
//     let list = document.createElement('li');
//     list.innerText = inpValue.value;
//     list.classList.add('stagiaire');
//     listStag.appendChild(list);
//     console.log(localStorage);
//     listStag.innerHTML += `${value}`;
//     // bouton de check
//     let checkBtn = document.createElement('input');
//     checkBtn.setAttribute('type', 'checkbox')
//     checkBtn.classList.add('check-btn');
//     listStag.appendChild(checkBtn);
//     // bouton de supprimer
//     let removeBtn = document.createElement('button');
//     removeBtn.innerHTML = 'remove';
//     removeBtn.classList.add('remove-btn');
//     listStag.appendChild(removeBtn);
//     removeBtn.addEventListener('click', ()=> {
//         list.remove()
//     })
// };

let liste = document.querySelector('.listStag')

function addStagiaire(a,b,c,key) {
    let newStag = {
        id: a,
        nom: b,
        count: c,
    }
    let myObj = JSON.stringify(newStag)
    localStorage.setItem(key, myObj)
    let final = JSON.parse(localStorage.getItem(key))
    console.log(final);
    
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
}

let input = document.querySelectorAll('input')
let count = 0

let addBtn = document.querySelector('.ajouteStag').addEventListener('click', (e) => {
    e.preventDefault
    let id = input[0].value
    let nom = input[1].value
    count++
    addStagiaire(id,nom,count)
    input[0].value = ""
    input[1].value = ""
})
