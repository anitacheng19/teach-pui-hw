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
const cartSet = new Set();
var checkoutPrice = 0;

// adding item
function addNewItem(rollType, rollGlazing, packSize, basePrice) {
    const cartItem = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(cartItem);
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
    cartImageElement.src = "HW6/products/" + rolls[cartItem.type].imageFile;
    cartTypeElement.innerText = cartItem.type + ' Cinnamon Roll';
    cartGlazingElement.innerText = 'Glazing: ' + cartItem.glazing;
    cartPackElement.innerText = 'Pack Size: ' + cartItem.size;
    newItemPrice = price(cartItem);
    checkoutPrice = newItemPrice + checkoutPrice;
    cartPriceElement.innerText = '$' + newItemPrice.toFixed(2);
}

function deleteItem(cartItem) {
    cartItem.element.remove();
    cartSet.delete(cartItem);
    ItemPrice = price(cartItem);
    checkoutPrice = checkoutPrice - ItemPrice;
    const cartItemArray = Array.from(cartSet);
    const cartItemArrayString = JSON.stringify(cartItemArray);
    localStorage.setItem('storedItems', cartItemArrayString);
    console.log(localStorage.getItem('storedItems'));
}

function retrieveFromLocalStorage() {
    const cartItemArrayString = localStorage.getItem('storedItems');
    const cartItemArray = JSON.parse(cartItemArrayString);
    for (const itemData of cartItemArray) {
        const cartItem = addNewItem(itemData.type, itemData.glazing, itemData.size, itemData.basePrice);
        createElement(cartItem);
    }
}

if (localStorage.getItem('storedItems') != null) {
    retrieveFromLocalStorage();
}

console.log(localStorage.getItem('storedItems'))