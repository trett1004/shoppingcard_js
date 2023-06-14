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
    image.classList.add('shoppingImagesCard');
    image.src = product['image'];
    // display header
    const header = document.createElement('h6');
    header.classList.add('productHeaderCard');
    header.innerHTML = product['header'];
    productContainer.append(header);
    // empty container
    const empty1 = document.createElement('div');
    empty1.innerhtml = ' ';
    productContainer.append(empty1);
    // Change Quantity
    const changeQuantityContainer = document.createElement('div');
    changeQuantityContainer.classList.add('changeQuantityContainer');
    productContainer.append(changeQuantityContainer);
        // make three items for '+' / 'changequantity' / '-'
        // decrease button
        const decreaseQantity = document.createElement('button');
        decreaseQantity.classList.add('bi', 'bi-dash-circle');
        changeQuantityContainer.append(decreaseQantity);
        // show quantitychange
        const changeQuantityInput= document.createElement('input');
        changeQuantityInput.value = 1;
        changeQuantityInput.id = 'changeQuantityInput';
        changeQuantityContainer.append(changeQuantityInput);
        // increase button
        const increaseQantity = document.createElement('button');
        increaseQantity.classList.add('bi', 'bi-plus-circle');
        changeQuantityContainer.append(increaseQantity);
    // Show Quantity and item price
    const showQuantityContainer = document.createElement('div');
    showQuantityContainer.classList.add('showQuantityContainer');
    productContainer.append(showQuantityContainer);
    // Show sum and delete option
    const showSumAndDeleteOption = document.createElement('div');
    showSumAndDeleteOption.classList.add('showSumAndDeleteOption');
    productContainer.append(showSumAndDeleteOption);
    // create a container for the price and append it to the last grid item
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('priceContainer');
    productContainer.appendChild(priceContainer);
    // display price inside the price container
    const price = document.createElement('p');
    price.classList.add('priceCard');
    price.innerHTML = `${product["price"]} EUR`;
    priceContainer.appendChild(price);



    // display price
    // const price = document.createElement('p');
    // price.classList.add('priceCard');
    // price.innerHTML = `${product["price"]} EUR`
    // productContainer.append(price);

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



