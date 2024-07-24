// toggleMenu.js
const menuItems = document.querySelector('.menu-items');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    if (menuItems.style.maxHeight === '0px' || !menuItems.style.maxHeight) {
        menuItems.style.maxHeight = '200px'; // adjust this height as needed
    } else {
        menuItems.style.maxHeight = '0px';
    } 

}); 
// toggleMenu.js

// Sélectionner les éléments du DOM
const menuItems = document.querySelector('.menu-items'); // Sélectionne l'élément contenant les items du menu
const menuIcon = document.querySelector('.menu-icon'); // Sélectionne l'icône du menu

// Ajouter un écouteur d'événement au clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    // Vérifier si la hauteur maximale de menuItems est actuellement '0px' ou non définie
    if (menuItems.style.maxHeight === '0px' || !menuItems.style.maxHeight) {
        menuItems.style.maxHeight = '200px'; // Définir la hauteur maximale à 200px (ajuster selon vos besoins)
    } else {
        menuItems.style.maxHeight = '0px'; // Réduire la hauteur maximale à '0px' pour fermer le menu
    }
});
