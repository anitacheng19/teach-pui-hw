const cart = []

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll')

// Update header text
const headerElement = document.getElementById('roll-title');
headerElement.innerHTML = chosenRoll + ' Cinnamon Roll'

// Update image
const rollImage = document.querySelector('#detail-image');
rollImage.src = 'HW4/products/' + rolls[chosenRoll].imageFile;
rollImage.alt = chosenRoll + ' Cinnamon Roll';

// Update price
const rollPrice = document.getElementById('price');
rollPrice.innerHTML = '$' + rolls[chosenRoll].basePrice;

// glaze and pack objects
const original = {
    name: "Keep Original",
    priceDiff: 0
};

const sugarMilk = {
    name: "Sugar milk",
    priceDiff: 0
};

const vanilla = {
    name: "Vanilla milk",
    priceDiff: 0.5
};

const choco = {
    name: "Double chocolate",
    priceDiff: 1.5
};

const pack1 = {
    name: "1",
    priceMult: 1
};

const pack3 = {
    name: "3",
    priceMult: 3
};

const pack6 = {
    name: "6",
    priceMult: 5
};

const pack12 = {
    name: "12",
    priceMult: 10
};

// fill in glazing array
const glazingArray = [original, sugarMilk, vanilla, choco];
var glazeDrop = document.getElementById("glazingOptions");
for (let i = 0; i < glazingArray.length; i++) {
    let selected = document.createElement("option");
    selected.innerHTML = glazingArray[i].name;
    selected.value = glazingArray[i].priceDiff.toString();
    glazeDrop.add(selected);
}

// fill in pack size array
const packArray = [pack1, pack3, pack6, pack12];
var packDrop = document.getElementById("packSizes");
for (let i = 0; i < packArray.length; i++) {
    let selected = document.createElement("option");
    selected.innerHTML = packArray[i].name;
    selected.value = packArray[i].priceMult.toString();
    packDrop.add(selected);
}

// update price
function priceChange() {
    newPrice = (rolls[chosenRoll].basePrice + glazingArray[glazeDrop.selectedIndex].priceDiff) * packArray[packDrop.selectedIndex].priceMult;
    rollPrice.innerHTML = "$" + newPrice.toFixed(2).toString();
}

// class definition 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// add to cart
function addToCart() {
    const addedRoll = new Roll(chosenRoll, glazingArray[glazeDrop.selectedIndex].name, packArray[packDrop.selectedIndex].name, rolls[chosenRoll].basePrice);
    cart.push(addedRoll);
    console.log(JSON.stringify(cart));
}