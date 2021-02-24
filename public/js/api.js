// API
// IP ADDRESS/FOURNISSEUR
let ville = document.querySelector('#city')
let pays = document.querySelector('#country')
let adresseIp = document.querySelector('#ip')
let provider = document.querySelector('#isp')
let info = document.querySelector('#info')
let hours = document.querySelector('#hours').innerHTML = Date();

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

// let date = new Date();
// // let heure = new Hours();
// let date_actuelle = date.getDate();
// let mois = date.getMonth()+1;
// let annee = date.getFullYear();
// let heure_actuelle = date.getHours();
// let minutes_actuelle = date.getMinutes()+1;
// let seconde_actuelle = date.getSeconds()+1
// mois < 10 ? mois = `0${mois}` : mois
// seconde_actuelle < 10 ? seconde_actuelle = `0${seconde_actuelle}` : seconde_actuelle

// // FORMAT DATE
// document.getElementById("date").innerHTML=""+date_actuelle+"/"+mois+"/"+annee;
// console.log(date);

// document.getElementById("hours").innerHTML=""+heure_actuelle + ":" + minutes_actuelle + ":" +seconde_actuelle;

// DATE et HEURE

let date = new Date();
// let heure = new Hours();
function jour(){
    let date_actuelle = date.getDate();
    let mois = date.getMonth()+1;
    let annee = date.getFullYear();
    mois < 10 ? mois = `0${mois}` : mois
    document.getElementById("date").innerHTML=""+date_actuelle+"/"+mois+"/"+annee;
    console.log(date);
}
jour()

let updateClock = () => {
    let date = new Date()
    let heure_actuelle = date.getHours();
    let minutes_actuelle = date.getMinutes()+1;
    let seconde_actuelle = date.getSeconds()+1
    seconde_actuelle < 10 ? seconde_actuelle = `0${seconde_actuelle}` : seconde_actuelle
    let hours = document.querySelector('#hours')
    hours.innerText=`${heure_actuelle} :  ${minutes_actuelle} : ${seconde_actuelle}`

}
updateClock()
setInterval(updateClock,1000);