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
  {name : "Triple M Pants", price: 99.99, image: "Sans titre.png"},
  {name : "Black Sports Pant", price: 85.25, image: "vecteezy_mockup-of-blank-black-sports-pant_47064684.png"},
  {name : "White Sports Pant", price: 65.89, image: "vecteezy_mockup-of-blank-white-sports-pant_47064661.png"},
  {name : "Black Pants", price: 70.69, image: "png-clipart-waist-pocket-trousers-mens-pant-hd-black-active-pants-removebg-preview.png"},
  {name : "Beige Cargo Pants", price: 80.56, image: "png-transparent-cargo-pants-khaki-pocket-pant-zipper-waist-trousers-removebg-preview.png"},
  {name : "Yellow Cargo Pants", price: 86.32, image: "png-clipart-cargo-pants-t-shirt-trousers-trouser-s-trouser-png-transparent-images-transparency-and-translucency-removebg-preview.png"},
  {name : "Green Cargo Pants", price: 55.50, image: "png-transparent-cargo-pants-m-1965-field-jacket-workwear-clothing-pantalon-cardigan-pantalon-pants-thumbnail-removebg-preview.png"},
  {name : "Propper Pants", price: 60.30, image: "battle-dress-uniform-tactical-pants-propper-u-s-woodland-pant-removebg-preview.png"},
  {name : "Jeans Pants", price: 91.80, image: "Stylish-jeans-pants--on-transparent-background-PNG-removebg-preview.png"},
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
