// EXO caroussel Kevin - Ismail - Sonia - Yoann


// Création variable qui font des RAPPELS du HTML
//-----------------------------------------------

// Rappel du bouton créer dans le HTML
let buttons = document.getElementsByClassName('btn');
// Rappel des images dans le HTML
let images = document.getElementsByClassName('img_slide');
// Création d'un "compteur"
let count = 0;
// console.log(count);


// Création des variables "BOUTONS"
//---------------------------------

// Rappel du bouton précédent
let prev = document.getElementById('prev');
// Rappel du bouton suivant
let next = document.getElementById('next');

// Création des événement d'écoute
//--------------------------------

// Création d'événement d'écoute du click pour un "slide précédent"
next.addEventListener('click', nextSlide);
// Création d'événement d'écoute du click pour un "slide suivant"
prev.addEventListener('click', prevSlide);

// Création des FONCTION précédente et suivante
//----------------------------------------------

// Création d'une fonction "suivant"
function nextSlide() {
    images[count].classList.remove('active'); // Rappel de "images" avec la classe "active" qui sura "supprimer"
   
    if (count < images.length-1) { // Taille du "tableau" en suppriment "-1" pour le départ à 0
        count++; // Demande de faire passer la classe "active" à 'image suivante
    } else {
        count = 0; // Départ de "COUNT" à l'image 1 qui se trouve dans le tableau "0"
    }
    images[count].classList.add('active'); // Rajout de la classe "active" à l'image suivante

}

// Création d'une fonction "précédent"
function prevSlide() {
    images[count].classList.remove('active'); // Rappel de "images" avec la classe "active" qui sura "supprimer"

     if (count > 0) { // Compteur suprérieur à "0"
        count--; // décrémente de "-1"
    } else {
        count = images.length-1; // "COUNT" fait la taille du tableau
    } 

    images[count].classList.add('active'); // Rajout de la classe "active" à l'image suivante
}