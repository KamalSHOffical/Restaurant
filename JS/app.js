'use strict';

// Food Constructor
function Food(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
}

// Array to store food items
Food.prototype.foodItems = [];

// Create an instance of Food
let foodInstance = new Food();
/*
// Array to store each generated id 
const generatedIds = [];

// Generate unique 4-digits ID
Food.prototype.generateUniqueId = function () {
    // Generates a random number between 1000 and 9999
    let id = Math.floor(1000 + Math.random() * 9000); 
    // check if this generated id is within the array
    let checkId = generatedIds.includes(id);
    // it will returns true or false
    while (checkId === true) {
        // if this checked id is not in the array, its a new id so push it to array
        // and return this id  
        id = Math.floor(1000 + Math.random() * 9000); 
        checkId = generatedIds.includes(id);
    }
    generatedIds.push(id);
    return id;
};
*/
let id = 999;
// Generate unique 4-digits ID
Food.prototype.generateUniqueId = function () {

    if (id === 9999) {
        alert("You have reached the maximum allowed numbers of items!")
        return null;
    } else {
        id += 1;
        return id;
    }

};

// Add food to the table method
Food.prototype.addFoodItem = function () {
    let foodName = document.getElementById('food-name').value;
    let foodType = document.getElementById('food-type').value;
    let foodPrice = document.getElementById('food-price').value;

    let foodId = this.generateUniqueId();

    if (foodId === null) {
        // Do nothing
    } else {
        let food = new Food(foodId, foodName, foodType, foodPrice);
        this.foodItems.push(food);
        this.renderFoodItems();
    }

};

// Method to display food items in a table
Food.prototype.renderFoodItems = function () {
    let tableBody = document.getElementById('food-table-body');
    tableBody.innerHTML = ''; // Clear the whole table to render it again with new items

    for (let i = 0; i < this.foodItems.length; i++) {
        let food = this.foodItems[i];

        let row = document.createElement('tr');
        let idCell = document.createElement('td');
        let nameCell = document.createElement('td');
        let typeCell = document.createElement('td');
        let priceCell = document.createElement('td');

        idCell.textContent = food.id;
        nameCell.textContent = food.name;
        typeCell.textContent = food.type;
        priceCell.textContent = food.price;

        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(typeCell);
        row.appendChild(priceCell);

        tableBody.appendChild(row);
    }
};

// Event listener
let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', function () {
    foodInstance.addFoodItem();
});
