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
    var price = document.getElementById("price");
    newPrice = (2.49 + glazingArray[glazeDrop.selectedIndex].priceDiff) * packArray[packDrop.selectedIndex].priceMult;
    price.innerHTML = "$" + newPrice.toFixed(2).toString();
}