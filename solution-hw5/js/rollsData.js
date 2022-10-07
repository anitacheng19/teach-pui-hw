const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }
};


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

const glazingArray = [original, sugarMilk, vanilla, choco];
const packArray = [pack1, pack3, pack6, pack12];