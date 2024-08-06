let fruits = ["Gum-Gum Fruit", "Wax-Wax Fruit", "Door-Door Fruit", "Revive-Revive Fruit", "Flame-Flame Fruit", "Op-Op Fruit", "Bari-Bari Fruit", "Paint-Paint Fruit", "Brain-Brain Fruit", "Magma-Magma Fruit", "Ton-Ton Fruit", "Rumble-Rumble Fruit", "Flower-Flower Fruit"]

function displayFruitsInformation(fruits) {
    //task 1
    let fruitSentences = [];

    for(const fruit of fruits) {
        fruitSentences.push("I love " + fruit);
    }

    //task 2
    let shortestFruit = fruits[0];
    let longestFruit = fruits[0];

    for(const fruit of fruits) {
        if(fruit.length > longestFruit.length) {
            longestFruit = fruit;
        }

        if(fruit.length < shortestFruit.length) {
            shortestFruit = fruit;
        }

    }

    return {
        fruitSentences: fruitSentences,
        shortestFruit: shortestFruit,
        longestFruit: longestFruit
    }
}


// Don't change this line
if(typeof module !== 'undefined') {
module.exports = {
  displayFruitsInformation
};
}
