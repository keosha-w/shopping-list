const list = [
    {
        id: 1,
        item: "Milk",
        price: 6.99,
    },
    {
        id: 2,
        item: "Eggs",
        price: 4.99,
    },
    {
        id: 3,
        item: "Pizza Rolls",
        price: 2.50,
    },
    {
        id: 4,
        item: "Chicken Breast",
        price: 7.99,
    },
    {
        id: 5,
        item: "Bananas",
        price: 2.00,
    },
    {
        id: 6,
        item: "Sandwich Buns", 
        price: 3.99,
    }, 
    {
        id: 7,
        item: "Mustard",
        price: 4.49,
    }
]

const addToShoppingList = (item, id) => {
    item.id = id;
    list.push(item);
}


const newItem = {
    item: "Strawberries",
    price: 4.99,
}

addToShoppingList(newItem, 8)

console.log(list)

