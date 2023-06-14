import { cardItems } from './data.js';
import { products } from './data.js'

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
            displayProduct(product, cardProductContainer, item)
            console.log('product:', product);
        } else {
            console.log('Product not availabe')
        }
    })
};

const displayProduct = (product, productContainer, item) => {
    // id of current card item
    const currentCardItem = cardItems[item.id - 1];
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
        changeQuantityInput.value = currentCardItem.count;
        changeQuantityInput.id = 'changeQuantityInput';
        changeQuantityContainer.append(changeQuantityInput);
        // increase button
        const increaseQantity = document.createElement('button');
        increaseQantity.classList.add('bi', 'bi-plus-circle');
        changeQuantityContainer.append(increaseQantity);
        //eventListener increase
        console.log('item', item)
        const increase = () => {
            console.log('currCardItem count before:', currentCardItem.count);
            currentCardItem.count = item.count + 1;
            console.log('currCardItem count after:', currentCardItem.count);
            console.log('cardItems:', cardItems)
            // change display of quantity in inputfield and show-quantity-field according to increase
            changeQuantityInput.value = currentCardItem.count;
            showQuantityContainer.innerHTML = `${currentCardItem.count} x ${product.price} EUR`;
        };
        increaseQantity.addEventListener('click', increase);
    // show Quantity and item price
    const showQuantityContainer = document.createElement('div');
    showQuantityContainer.classList.add('showQuantityContainer');
    productContainer.append(showQuantityContainer);
    showQuantityContainer.innerHTML = `${item.count} x ${product.price} EUR`;
    // show sum and delete option
    const showSumAndDeleteOptionContainer = document.createElement('div');
    showSumAndDeleteOptionContainer.classList.add('showSumAndDeleteOptionContainer');
    productContainer.append(showSumAndDeleteOptionContainer);
        // show sum
        const showSum = document.createElement('p');
        showSum.id = 'showSum';
        const sum = (product.price * item.count).toFixed(2);
        showSum.innerHTML = `${sum} EUR`
        showSumAndDeleteOptionContainer.append(showSum);
        // delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('bi', 'bi-trash')
        showSumAndDeleteOptionContainer.append(deleteBtn);

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



