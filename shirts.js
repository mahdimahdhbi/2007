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
  {name : "Triple M T-shirt", price: 99.99, image: "Capture_d_écran_2024-07-23_120715-removebg.png"},
  {name : "Black T-shirt", price: 70.59, image: "vecteezy_isolated-black-t-shirt-front_8847318.png"},
  {name : "Blue T-shirt", price: 69.80, image: "vecteezy_transparent-blue-t-shirt-png_21095969.png"},
  {name : "White T-shirt", price: 80.75, image: "vecteezy_isolated-white-t-shirt-front_8847320.png"},
  {name : "Green T-shirt", price: 55.54, image: "green-t-shirt-free-png.webp"},
  {name : "Yellow T-shirt", price: 85.25, image: "vecteezy_yellow-t-shirt_21095976.png"},
  {name : "Red T shirt", price: 75.95, image: "vecteezy_red-t-shirt_21096001.png"},
  {name : "Pink T-shirt", price: 67.52, image: "vecteezy_pink-t-shirt-mockup-on-transparent-background-ai-generated_25140283.png"},
  {name : "Orange T-shirt", price: 45.25, image: "JcvzGC-orange-t-shirt-image.png"},
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
            <img src="${persons[i].image}">
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
