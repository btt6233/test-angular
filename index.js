// "use strict";

//Navigation menu - dropdown

let menuBtn  = document.querySelector(".items");
let commandesBtn  = document.querySelector(".items-2");

let sousMenu = document.querySelector(".sous-menu");
let sousMenuCommandes = document.querySelector(".sous-menu-commandes");

let visible = false;

commandesBtn.addEventListener('click', ()=> {
    visible = !visible;
    if (visible){
        sousMenuCommandes.style.opacity = 1;
        sousMenu.style.opacity = 0;

    } else {
        sousMenuCommandes.style.opacity = 0;   
    }
});

menuBtn.addEventListener('click', ()=> {
    visible = !visible;
    if (visible){
        sousMenu.style.opacity = 1;
        sousMenuCommandes.style.opacity = 0;

    } else {
        sousMenu.style.opacity = 0;   
    }
});

sousMenu.addEventListener('click', ()=>{
    console.log('helo');
    sousMenu.style.opacity = 0;
});

sousMenu.addEventListener('mouseleave', ()=>{
    console.log('cestmoi');
    sousMenu.style.opacity = 0;
})

sousMenuCommandes.addEventListener('click', ()=>{
    console.log('helo');
    sousMenuCommandes.style.opacity = 0;
});

sousMenuCommandes.addEventListener('mouseleave', ()=>{
    console.log('cestmoi');
    sousMenuCommandes.style.opacity = 0;
})

// Modal formulaire
let logBtn = document.getElementById('log');
let modal = document.getElementById("modal");
let formulaire = document.getElementById("form-card");

logBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
    console.log('modal');
    modal.style.zIndex= 5;
    modal.style.opacity = 0.6;
    document.getElementById('modal-form').style.marginTop = '0%';
    document.getElementById('modal-form').style.zIndex = '6';
})

window.onclick = function(event) {
    if (event.target == modal) {
        document.body.style.overflow = 'auto';
        modal.style.zIndex= '-10';
        modal.style.opacity = 0;
        document.body.style.overflow = 'auto';
        document.getElementById('modal-form').style.marginTop = '-100%';
        document.getElementById('modal-form').style.zIndex = '0';
    } 
  }

// Compte à rebours
console.log(new Date().getDate());

function compte_a_rebours() {

    // On met notre div dans une variable
    let compte_a_rebours = document.getElementById("compte_a_rebours");

    // On instancie la date actuelle
    let currentDate  = new Date();
    let currentMonth = new Date().getMonth();
    let currentDay   = new Date().getDate();
    let currentYear  = new Date().getFullYear();

    // On met la date de l'échéance
    // let deadLine = new Date("Oct 8 16:30:00 2020");
     let deadLine = new Date(currentMonth + 1 + " " + currentDay + " 08:55:00 "+ currentYear );
    // let deadLine = new Date().setHours("23:00:00");

    // On va devoir calculer la différence entre les deux dates (deadline - currentDate)
    let totalSec = (deadLine - currentDate) / 1000; // /1000 correspond aux milisecondes

    let prefixe = "Fin des commandes dans : ";

    // if (totalSec < 0) {
    //     prefixe = "Le commandes sont terminées ! À demain !"; // On modifie le préfixe si la diff est négative
    //     totalSec = Math.abs(totalSec); // On garde seulement la valeur absolue
    // }

    if (totalSec > 0) {

    // if (totalSec > 0) {

    // À faire nos calculs
    /**
     * Nous allos calculer le nombre de jours, d'heures, de minutes et de secondes restants
     * Le nombre étant en secondes, 1 jour = 60 x 60 x 24 secondes secondes x minutes x heures
     * La différence divisée par ce nombre nous donne le nombre de jours restants
     * On récupère alors le plus grand entier inférieur ou égal à la valeur retournée (on tronque à l'unité), afin de ne pas avoir 10.345 jours restants, mais 10. On utilise pour cela la function Math.floor()
     */
    // }

    var days = Math.floor(totalSec / (60 * 60 * 24));

    /**
     * Les heures restantes
     * Sur les 10.345 jours restants, on a gardé seulement 10. Il reste 0.345 jour que nous allons devoir convertir en heures.
     * On soustrait donc aux secondes totales le nombre de jours (en secondes). On récupère les 0.345 mais en secondes.
     * Vu que 1 heure = 60 x 60 secondes, la différence divisée par ce nombre nous permet d'obtenir le nombre d'heures restantes.
     * Pareil que pour les jours, on récupère le plus grand entier inférieur ou égal à la valeur retournée.
     */

    var hours = Math.floor((totalSec - (days * 60 * 60 * 24)) / (60 * 60));

    /**
     * Pareil pour les minutes et les secondes
     */

    var minutes = Math.floor((totalSec - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);
    var seconds = Math.floor(totalSec - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));

    compte_a_rebours.innerHTML = prefixe + hours + ' heures ' + minutes + ' minutes ' + seconds + ' secondes. ';

    } else { // Si total_secondes == 0 (puisque l'on a prit sa valeur absolue)

        compte_a_rebours.innerHTML = "Le commandes sont terminées ! À demain !";
    }

    

    


    var actualisation = setTimeout("compte_a_rebours();", 1000);
}

compte_a_rebours();

