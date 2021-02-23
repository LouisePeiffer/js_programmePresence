// // IP ADDRESS/FOURNISSEUR
// let ville = document.querySelector('#city')
// let pays = document.querySelector('#country')
// let adresseIp = document.querySelector('#ip')
// let provider = document.querySelector('#isp')
// let info = document.querySelector('#info')
// let hours = document.querySelector('#hours').innerHTML = Date();
// let modal = document.querySelector('#mod')
// let fermer = document.querySelector('#fermer')

// fetch('http://api.ipify.org/?format=json%27')
// .then(res => res.json())
// .then(res =>{
//     adresseIp.innerHTML = res.ip
// })
// // console.log(Votre adresse ip : ${data.json});

// fetch('http://ip-api.com/json/%27')
// .then(res=>res.json())
// .then(res =>{
//     ville.innerHTML = res.city
//     pays.innerHTML = res.country
//     // adresseIp.innerHTML = res.ip
//     provider.innerHTML = res.isp
// })

// // DATE 

// let date = new Date();
// console.log(date);

// info.addEventListener('click', () => {
//     if (modal.classList.contains('d-none')) {
//         modal.classList.remove('d-none')
//     }
// })

// info.addEventListener('click', () => {
//     modal.style.display = "block"
// })

// fermer.addEventListener('click', () => {
//     modal.style.display = "none"
//     document.body.style.overflow= null
// })