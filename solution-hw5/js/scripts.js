const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const chosenRoll = params.get('roll')

// class definition 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// update price
function priceChange() {
    newPrice = (rolls[chosenRoll].basePrice + glazingArray[glazeDrop.selectedIndex].priceDiff) * packArray[packDrop.selectedIndex].priceMult;
    rollPrice.innerHTML = "$" + newPrice.toFixed(2).toString();
}

// Update header text
const headerElement = document.getElementById('roll-title');
headerElement.innerHTML = chosenRoll + ' Cinnamon Roll'

// Update image
const rollImage = document.querySelector('#detail-image');
rollImage.src = 'HW5/products/' + rolls[chosenRoll].imageFile;
rollImage.alt = chosenRoll + ' Cinnamon Roll';

// Update price
const rollPrice = document.getElementById('price');
rollPrice.innerHTML = '$' + rolls[chosenRoll].basePrice;

// fill in glazing array
var glazeDrop = document.getElementById("glazingOptions");
for (let i = 0; i < glazingArray.length; i++) {
    let selected = document.createElement("option");
    selected.innerHTML = glazingArray[i].name;
    selected.value = glazingArray[i].priceDiff.toString();
    glazeDrop.add(selected);
}

// fill in pack size array
var packDrop = document.getElementById("packSizes");
for (let i = 0; i < packArray.length; i++) {
    let selected = document.createElement("option");
    selected.innerHTML = packArray[i].name;
    selected.value = packArray[i].priceMult.toString();
    packDrop.add(selected);
}

// add to cart from detail page
function addToCart() {
    const addedRoll = new Roll(chosenRoll, glazingArray[glazeDrop.selectedIndex].name, packArray[packDrop.selectedIndex].name, rolls[chosenRoll].basePrice);
    cart.push(addedRoll);
    console.log(JSON.stringify(cart));
}