import { products } from './data.js';
import { cardItems } from './data.js';

console.log('card Items:', products)
// make a poduct in the DOM

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector('main');
}


const appendEventlisteners = () => {
}

const addToCard = event => {
    // get the product ID from the klicked article
    const klickedID =  parseInt(event.target.parentNode.childNodes[0].innerHTML)
    if (cardItemExistanceCheck(cardItems, klickedID)) {
        const item = cardItems.find(item => item.id === klickedID);
        item.count = item.count + 1;
        console.log('updated quantity:', item)
    } else {
        cardItems.push({id:klickedID, count:1});
        console.log('newly added to card:', {id:klickedID, count:1})
    }
};

// check if product is in shoppingcard array
const cardItemExistanceCheck = (array, id) => {
    if (array.some(obj => obj.id === id)) return true;
    else return false;
};

const createNewCardItem = (idNumber) => {
    return {id:idNumber, count:1}
}

const populatePage = () => {
    // make a main tag
    const parent = document.querySelector('main');
    //create a  container for all products
    const containerProducts = document.createElement('div');
    parent.append(containerProducts);

    // create html from the product array
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
        productContainer.append(btn_add_to_card)
        // Eventlistener
        btn_add_to_card.addEventListener('click', addToCard)

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