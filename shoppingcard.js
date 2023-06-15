import { products } from './data.js';

const getStorage = () =>  {
    let cardString = localStorage.getItem('card');
    let card = JSON.parse(cardString);
    return card;
};

const updateLocalStorage = (obj) => {
    let card = JSON.stringify(obj)
    localStorage.setItem('card', card);
};

const cardObject = getStorage();

const populateProducts = () => {
    // make a main tag
    const main = document.querySelector('main');
    //create a  div-container for all products
    const cardContainerProducts = document.createElement('div');
    main.append(cardContainerProducts);
    // display each item in the dom with all needed infos from the object
    cardObject.forEach(item => {
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

    // function that returns the current product from the card
    let currentCardItem = {};
    let currentPositionInCardObjectArray = -1;
    const getCurrentCardItem = cardObject.find((item) => {
        currentPositionInCardObjectArray += 1;
        return item.id === product.id;
    });

    // sum of quantity from shopping card and product price
    const sum = (product.price * item.count).toFixed(2);

    const updateAndDisplaySum = (sum) => {
        sum = (product.price * getCurrentCardItem.count).toFixed(2);
        showSum.innerHTML = `${sum} €`
        showQuantityContainer.innerHTML = `${getCurrentCardItem.count} x ${product.price} €`;
        changeQuantityInput.value = getCurrentCardItem.count;
    }

    // create an Element in the DOM
    const createElementAndAppend = (parentElement, elementType, classNames, content) => {
        const newElement = document.createElement(elementType);
        if (Array.isArray(classNames)) {
          classNames.forEach(className => {
            newElement.classList.add(className);
          });
        } else if (typeof classNames === 'string') {
          newElement.classList.add(classNames);
        }
        newElement.innerHTML = content;
        parentElement.appendChild(newElement);

        return newElement;
      };

    //************************************************************** */

    // display image
    const image = createElementAndAppend(productContainer, 'img', 'shoppingImagesCard');
    image.src = product['image'];
    // display header
    const header = createElementAndAppend(productContainer, 'h6', 'productHeaderCard', product['header']);
    const empty1 = createElementAndAppend(productContainer, 'div', 'empty', ' ');
    //container
    const changeQuantityContainer = createElementAndAppend(productContainer, 'div', 'changeQuantityContainer', '');
    // decrease button
    const decreaseQantity = createElementAndAppend(changeQuantityContainer, 'button', ['changeQuantityBtn', 'bi', 'bi-dash-circle', 'ms-auto'], '');
    // eventlistener decrease
    const decrease = (sum) => {
        getCurrentCardItem.count = item.count - 1;
        // change display of quantity in inputfield and show-quantity-field according to decrease
        updateAndDisplaySum(sum);
        updateLocalStorage(cardObject);
    };
    decreaseQantity.addEventListener('click', decrease);
    // show quantitychange input field
    const changeQuantityInput = createElementAndAppend(changeQuantityContainer, 'input', 'changeQuantityInput', '');
    changeQuantityInput.value = getCurrentCardItem.count;
    // increase button
    const increaseQantity = createElementAndAppend(changeQuantityContainer, 'button', ['changeQuantityBtn', 'bi', 'bi-plus-circle', 'ms-auto'], '');
    //eventListener increase
    const increase = (sum) => {
        getCurrentCardItem.count = item.count + 1;
        // change display of quantity in inputfield and show-quantity-field according to increase
        updateAndDisplaySum(sum);
        updateLocalStorage(cardObject);
    };
    increaseQantity.addEventListener('click', increase);
    // display empty container
    const empty2 = createElementAndAppend(productContainer, 'div', 'empty', ' ');
    // show and change display Quantity and item price
    const showQuantityContainer = createElementAndAppend(productContainer, 'div', 'showQuantityContainer', `${getCurrentCardItem.count} x ${product.price} €`);
    // show sum and delete option
    const showSumAndDeleteOptionContainer = createElementAndAppend(productContainer, 'div', 'showSumAndDeleteOptionContainer', '');
    // show sum
    const showSum = createElementAndAppend(showSumAndDeleteOptionContainer, 'p', 'showSum', `${sum} €`);
    // delete button with eventListener
    const deleteBtn = createElementAndAppend(showSumAndDeleteOptionContainer, 'button', ['deletBtn', 'bi', 'bi-trash'], '');
    const deleteItem = () => {
        cardObject.splice(currentPositionInCardObjectArray, 1);
        updateLocalStorage(cardObject);
        cardProductContainer.remove();
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