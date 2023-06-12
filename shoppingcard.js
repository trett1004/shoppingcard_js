import {products} from './create_product.js'

export const cardItems = [{id:1, count:2}, {id:2, count:5}, {id:3, count: 3}]; // if this array is still filled, it is for testing purposes.

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
        cardContainerProducts.append(cardProductContainer);
        // check if product from shopping card exists in products from shop
        const id = item.id;
        console.log('product id:', item.id);
        const product = products.find(obj => obj.id === item.id)
        if (product) {
            // if product exists than display it in the DOM
            console.log('object:', product);
            displayProduct(product, cardProductContainer)
        } else {
            console.log('Product not availabe')
        }
    })
};

const displayProduct = (product1, productContainer1) => {
    const image1 = document.createElement('img');
    productContainer1.append(image1);
    image1.src = product1['image'];
    image1.classList.add('productImages');
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



