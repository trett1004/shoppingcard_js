import { products } from './data.js'

// this file contains a function that creates a product object and appends it to the product list

// Array to store the products

// function for creating the poducts and push it to an array
export const createProduct = (header, id, image, text, price, unit, priceunit) => {
    let product = {
        "header": header,
        "id": id,
        "image": image,
        "productText": text,
        "price": price,
        "unit": unit,
        "priceunit": priceunit
    };
    products.push(product);

};

// create some products for display in shop (index.html)
createProduct("Red Umbrella", 1, './images/red_umbrella.jpeg', "beautiful mushroom with nice red Umbrella", 16.99, 'piece', 'EUR');

createProduct("White Spikes", 2, './images/white_spiky.jpeg', "Mushroom with nice white spiky head", 2.99, 'piece', 'EUR');

createProduct("Blue Glwoing Head", 4, './images/Blue_mushroom.jpeg', "Mushroom with a glowing head", 5.82, 'piece', 'EUR');














// const prod = writeProductToFile(
//     "newShroom",
//     2,
//     '/images/red_umbrella.jpeg'
// );

// console.log(prod);
