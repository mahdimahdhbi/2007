// toggleMenu.js
/*const menuItems = document.querySelector('.menu-items');
const menuIcon = document.querySelector('.menu-icon');

menuIcon.addEventListener('click', () => {
    if (menuItems.style.maxHeight === '0px' || !menuItems.style.maxHeight) {
        menuItems.style.maxHeight = '200px'; // adjust this height as needed
    } else {
        menuItems.style.maxHeight = '0px';
    } 

}); */
// toggleMenu.js

// Sélectionner les éléments du DOM
/*const menuItems = document.querySelector('.menu-items'); // Sélectionne l'élément contenant les items du menu
const menuIcon = document.querySelector('.menu-icon'); // Sélectionne l'icône du menu

// Ajouter un écouteur d'événement au clic sur l'icône du menu
menuIcon.addEventListener('click', () => {
    // Vérifier si la hauteur maximale de menuItems est actuellement '0px' ou non définie
    if (menuItems.style.maxHeight === '0px' || !menuItems.style.maxHeight) {
        menuItems.style.maxHeight = '200px'; // Définir la hauteur maximale à 200px (ajuster selon vos besoins)
    } else {
        menuItems.style.maxHeight = '0px'; // Réduire la hauteur maximale à '0px' pour fermer le menu
    }
});*/

var persons = [
  {name : "Triple M Shoe", price: 99.99, image: "Nouveau projet.png"},
  {name : "Air Force 1 White And blue", price: 58.25, image: "Nike-Air-Force-1-Low-Game-Royal-White-Grey-CI0056-400-Release-Date-4-removebg-preview.png"},
  {name : "Air Force 1 Triple White", price: 98.25, image: "air-force-1-low-07-triple-white-220238.webp"},
  {name : "Air Force 1 Blue And Red", price: 58.69, image: "nike-air-force-1-low-26888-3-removebg-preview.png"},
  {name : "Air Force 1 Grey And red,blue", price: 48.25, image: "6638022676-removebg-preview.png"},
  {name : "Air Force 1 White Gold", price: 75.58, image: "nike-air-force1-white-gold-sneakers-mzhx7k7yqlbr1eh6.png"},
  {name : "Air Force 1 Red And Blue", price: 80.25, image: "nike-air-force-1-07-barbershop-rojo-azul-blanco-1-removebg-preview.png"},
  {name : "Air Force 1 White And Orange", price: 78.50, image: "th-11134207-7r98t-ltuo2ppv91mnfe-removebg-preview.png"},
  {name : "Air Force 1 Triple Black", price: 91.57, image: "images-removebg-preview.png"},
];

init();

function sortByName() {
    persons.sort((a, b) => {
        const titleA = a.name.toUpperCase(); // ignore upper and lowercase
        const titleB = b.name.toUpperCase(); // ignore upper and lowercase
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
      
        // names must be equal
        return 0;
      });
}
  function compareByPrice(a, b) {
    return a.price - b.price;
  }

  function init() {

    let list = document.getElementById("myList");
    list.textContent = '';
            for (i = 0; i < persons.length; ++i) {
                
                let res = `<div class="col-4">
            <img src="${persons[i].image}" width="250px">
            <h4>${persons[i].name}</h4>
            <div class="rating">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            </div>
            <p>$${persons[i].price}</p>
        </div>`;
        list.innerHTML += res
            }
    }
        document.getElementById("sort").addEventListener("change", myFunction);
        function myFunction(event) {
            switch(event.target.value) {
                case "2":{
                    persons.sort(compareByPrice);
                    init();}
                    break;
                case "3":{
                    sortByName();
                    init();}
                  break;
                default:
                  // code block
              }
          }
