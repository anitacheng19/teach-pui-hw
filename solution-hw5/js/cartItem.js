// class definition 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//Update cart
const cart = new Set();
var checkoutPrice = 0;

// add to cart
function addNewItem(rollType, rollGlazing, packSize, basePrice) {
    const cartItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    cart.add(cartItem);
    return cartItem;
}
// calculate item price
function price(cartItem) {
    for (let i = 0; i < glazingArray.length; i++) {
        if (cartItem.glazing == glazingArray[i].name) {
            cartGlazingDiff = glazingArray[i].priceDiff;
        }
        if (cartItem.size == packArray[i].name) {
            cartSizeDiff = packArray[i].priceMult;
        }
    }
    newItemPrice = (cartItem.basePrice + cartGlazingDiff) * cartSizeDiff;
    return newItemPrice;
}

function createElement(cartItem) {
    // make a clone of the cart item template
    const template = document.querySelector('#cart-item-template');
    const clone = template.content.cloneNode(true);
    cartItem.element = clone.querySelector('.cart-item');

    const btnDelete = cartItem.element.querySelector('.cart-remove');
    btnDelete.addEventListener('click', () => {
        deleteItem(cartItem);
        const cartPrice = document.getElementById("cart-price");
        if (cart.length == 0) {
            cartPrice.innerText = '$0.00';
        } else {
            cartPrice.innerText = '$' + checkoutPrice.toFixed(2);
        }
    });

    // add the item clone to the DOM
    const cartElement = document.querySelector('#cart');
    cartElement.prepend(cartItem.element);

    // populate the item clone with the actual item content
    updateElement(cartItem);
    // calculating cart price
    const cartPrice = document.getElementById("cart-price");
    cartPrice.innerText = '$' + checkoutPrice.toFixed(2);
}

function updateElement(cartItem) {
    // get the HTML elements that need updating
    const cartImageElement = cartItem.element.querySelector('.cart-image');
    const cartTypeElement = cartItem.element.querySelector('.roll-type');
    const cartGlazingElement = cartItem.element.querySelector('.glazing');
    const cartPackElement = cartItem.element.querySelector('.pack-size');
    const cartPriceElement = cartItem.element.querySelector('.item-price');
    // copy our item content over to the corresponding HTML elements
    cartImageElement.src = "HW5/products/" + rolls[cartItem.type].imageFile;
    cartTypeElement.innerText = cartItem.type + ' Cinnamon Roll';
    cartGlazingElement.innerText = 'Glazing: ' + cartItem.glazing;
    cartPackElement.innerText = 'Pack Size: ' + cartItem.size;
    newItemPrice = price(cartItem);
    checkoutPrice = newItemPrice + checkoutPrice;
    cartPriceElement.innerText = '$' + newItemPrice.toFixed(2);
}

function deleteItem(cartItem) {
    cartItem.element.remove();
    cart.delete(cartItem);
    ItemPrice = price(cartItem);
    checkoutPrice = checkoutPrice - ItemPrice;
}

// initialize cart
const orgRoll = addNewItem('Original', 'Sugar milk', "1", 2.49);
const walRoll = addNewItem('Walnut', 'Vanilla milk', "12", 3.49);
const raisRoll = addNewItem('Raisin', 'Sugar milk', "3", 2.99);
const appRoll = addNewItem('Apple', 'Keep Original', "3", 3.49)

for (const cartItem of cart) {
    createElement(cartItem);
}