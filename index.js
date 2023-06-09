import { products, createProduct } from './create_product.js';
import { card_items } from './shoppingcard.js';
// make a poduct in the DOM

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector('main');
    elements.addToCardButtons = Array.from(document.querySelectorAll('button.addToCardBtn'));

    // console.log('elements.main:', elements);
}


const appendEventlisteners = () => {
    // Eventlistener for all addToCard buttons
    elements.addToCardButtons.forEach(button => {
        addEventListener('click', addToCard)
    });
}

const addToCard = () => {
    console.log("hello")
}

const populatePage = () => {

    const parent = document.querySelector('main');
    //create a  container for all products and put in the main tag
    const containerProducts = document.createElement('div');

    parent.append(containerProducts);

    // create product properties from the product array
    products.forEach(i => {
        // product container
        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer')
        containerProducts.append(productContainer);
        //image
        const image = document.createElement('img');
        image.src = i["image"];
        image.classList.add('productImages');
        productContainer.append(image);
        // header
        const header = document.createElement('h6');
        header.innerHTML = i["header"];
        header.classList.add('productHeader');
        productContainer.append(header);
        // productDescription (actually id, has yet to be changed)
        const productDescription = document.createElement('p');
        productDescription.innerHTML = i["productText"]
        productDescription.classList.add('productDescription')
        productContainer.append(productDescription);
        //price
        const price = document.createElement('p')
        price.innerHTML = `${i["price"]} EUR`
        price.classList.add('price')
        productContainer.append(price);
        // shoppingcard button
        const btn_add_to_card = document.createElement('button')
        btn_add_to_card.innerHTML = 'Add to card'
        btn_add_to_card.classList.add('btn', 'btn-dark', 'btn-sm', 'addToCardBtn')
        // btn_add_to_card.
        productContainer.append(btn_add_to_card)

    });
};



const init = () => {
    populatePage();
    domMapping();
    appendEventlisteners();
}

// INIT
document.addEventListener('DOMContentLoaded', init);



/*
let product = {
    "header": header,
    "id": id,
    "image": image,
    "productText": text,
    "price": price,
    "unit": unit,
    "priceunit": priceunit
};
*/