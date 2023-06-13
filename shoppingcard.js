import { cardItems } from './data.js';
import { products } from './data.js'

console.log('cardItems:', cardItems)

const populateProducts = () => {
    // make a main tag
    const main = document.querySelector('main');
    //create a  div-container for all products
    const cardContainerProducts = document.createElement('div');
    main.append(cardContainerProducts);
    // display each item in the dom with all needed infos from the object
    cardItems.forEach(item => {
        // make a div for each product
        const cardProductContainer = document.createElement('div');
        cardProductContainer.classList.add('cardProductContainer')
        cardContainerProducts.append(cardProductContainer);
        // check if product from shopping card exists in products from shop
        const id = item.id;
        const product = products.find(obj => obj.id === item.id)
        console.log('products:', products)
        console.log('item id:', item.id);
        console.log('product:', product);
        if (product) {
            // if product exists than display it in the DOM
            console.log('hello');
            displayProduct(product, cardProductContainer)
        } else {
            console.log('Product not availabe')
        }
    })
};

const displayProduct = (product, productContainer) => {
    // display image
    const image = document.createElement('img');
    productContainer.append(image);
    image.classList.add('shoppingCardImages');
    image.src = product['image'];
    // display header
    const header = document.createElement('h6');
    header.classList.add('productHeader');
    header.innerHTML = product['header'];
    productContainer.append(header);
    // display price
    const price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = `${product["price"]} EUR`
    productContainer.append(price);

    // change quantity dropdown
    // remove button
};


const init = () => {
    populateProducts();
}

// INIT
document.addEventListener('DOMContentLoaded', init);

// TODO
// show the purchase quantity of the id
// show the Euro sum of quantity and price
// after the loop show the sum of purchase



