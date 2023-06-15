import { products } from './data.js';

// make a poduct in the DOM

// KONSTANTEN / VARIABLEN
const elements = {};

// FUNKTIONEN
const domMapping = () => {
    elements.main = document.querySelector('main');
}

const appendEventlisteners = () => {
}

const getStorage = () =>  {
    let cardString = localStorage.getItem('card');
    let card = JSON.parse(cardString);
    return card;
};

let LS = getStorage();

const addToCard = event => {
    // get the product ID from the klicked article
    const klickedID =  parseInt(event.target.parentNode.childNodes[0].innerHTML)
    // if the card item exists in the card Items array

    if (cardItemExistanceCheck(LS, klickedID)) {
        const item = LS.find(item => item.id === klickedID);
        // either increment the card item by 1
        item.count = item.count + 1;
        updateLocalStorage();
    } else {
        // push new to the array
        LS.push({id:klickedID, count:1});
        updateLocalStorage();
    }
    /// update local storage
    getStorage();
    // updateLocalStorage();
};

// check if product is in shoppingcard array
const cardItemExistanceCheck = (array, id) => {
    if (array.some(obj => obj.id === id)) return true;
    else return false;
};

const updateLocalStorage = () => {
    let card = JSON.stringify(LS);
    localStorage.setItem('card', card);
    console.log('local storage updated!')
};

const populatePage = () => {
    // make a main tag
    const parent = document.querySelector('main');
    //create a  container for all products
    const containerProducts = document.createElement('div');
    containerProducts.classList.add('containerProducts');
    parent.append(containerProducts);

    // create html from the product array
    products.forEach(i => {
        // product container
        const productContainer = document.createElement('div');
        productContainer.classList.add('productContainer')
        containerProducts.append(productContainer);
        // id
        const id = document.createElement('div');
        id.innerHTML = i["id"];
        id.classList.add('productId');
        productContainer.append(id);
        // image
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
    getStorage();
}

// INIT
document.addEventListener('DOMContentLoaded', init);


