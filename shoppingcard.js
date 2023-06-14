import { cardItems } from './data.js';
import { products } from './data.js'

console.log('shoppingcard cardItems', cardItems)

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
        if (product) {
            // if product exists than display it in the DOM
            displayProduct(product, cardProductContainer, item, cardProductContainer)
        } else {
            console.log('Product not availabe')
        }
    })
};

const displayProduct = (product, productContainer, item, cardProductContainer) => {

    // variables for multiple use within funtion
    //************************************************************** */
    let currentCardItem = {};
    const getCurrentCardItem = cardItems.forEach((item) => {
        if (item.id === product.id) {
            currentCardItem = item;
            return currentCardItem;
        }
    });

    const sum = (product.price * item.count).toFixed(2);

    const updateAndDisplaySum = (sum) => {
        sum = (product.price * currentCardItem.count).toFixed(2);
        showSum.innerHTML = `${sum} €`
        showQuantityContainer.innerHTML = `${currentCardItem.count} x ${product.price} €`;
        changeQuantityInput.value = currentCardItem.count;
    }
    //************************************************************** */

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
    // display empty container
    const empty1 = document.createElement('div');
    empty1.innerhtml = ' ';
    productContainer.append(empty1);

    // display Change Quantity with plus and minus
    //************************************************************** */
    //container
    const changeQuantityContainer = document.createElement('div');
    changeQuantityContainer.classList.add('changeQuantityContainer');
    productContainer.append(changeQuantityContainer);
    // make three items for '+' / 'changequantity' / '-'
    // decrease button
    const decreaseQantity = document.createElement('button');
    decreaseQantity.classList.add('changeQuantityBtn', 'bi', 'bi-dash-circle', 'ms-auto');
    changeQuantityContainer.append(decreaseQantity);
    // eventlistener decrease
    const decrease = (sum) => {
        currentCardItem.count = item.count - 1;
        // change display of quantity in inputfield and show-quantity-field according to increase
        updateAndDisplaySum(sum);
    };
    decreaseQantity.addEventListener('click', decrease);
    // show quantitychange
    const changeQuantityInput = document.createElement('input');
    changeQuantityInput.value = currentCardItem.count;
    changeQuantityInput.id = 'changeQuantityInput';
    changeQuantityContainer.append(changeQuantityInput);
    // increase button
    const increaseQantity = document.createElement('button');
    increaseQantity.classList.add('changeQuantityBtn', 'bi', 'bi-plus-circle', 'ms-auto');
    changeQuantityContainer.append(increaseQantity);
    //eventListener increase
    const increase = (sum) => {
        currentCardItem.count = item.count + 1;
        // change display of quantity in inputfield and show-quantity-field according to increase
        updateAndDisplaySum(sum);
    };
    increaseQantity.addEventListener('click', increase);


    // display empty container
    const empty2 = document.createElement('div');
    empty1.innerhtml = ' ';
    productContainer.append(empty2);

    // show and change display Quantity and item price
    const showQuantityContainer = document.createElement('div');
    showQuantityContainer.classList.add('showQuantityContainer');
    productContainer.append(showQuantityContainer);
    showQuantityContainer.innerHTML = `${currentCardItem.count} x ${product.price} €`;

    //************************************************************** */
    // show sum and delete option
    const showSumAndDeleteOptionContainer = document.createElement('div');
    showSumAndDeleteOptionContainer.classList.add('showSumAndDeleteOptionContainer');
    productContainer.append(showSumAndDeleteOptionContainer);
    // show sum
    const showSum = document.createElement('p');
    showSum.id = 'showSum';
    showSum.innerHTML = `${sum} €`
    showSumAndDeleteOptionContainer.append(showSum);
    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deletBtn', 'bi', 'bi-trash')
    showSumAndDeleteOptionContainer.append(deleteBtn);

    const deleteItem = () => {
        cardItems.splice(currentCardItem, 1);
        cardProductContainer.remove();
        //    const currentCardItem = cardItems[item.id - 1];
    };
    deleteBtn.addEventListener('click', deleteItem);
};


const init = () => {
    populateProducts();
}

// INIT
document.addEventListener('DOMContentLoaded', init);

// TODO
// after the loop show the sum of purchase
// change flickering of delete button during change of quantity