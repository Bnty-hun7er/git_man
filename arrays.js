const items = ["mike" ,"ben" , "huthoo"]

console.log(items);


items.push("add1" , "add2")

console.log(items);

items.unshift("this is the first One")

console.log(items);

items.splice(1, 0 , "this is added to 2nd eliment")


console.log(items);



//   search in the array 
// if array contains the element that will show the index else it will return -1


console.log(items.indexOf("mike") !== -1);


// for reference data type search methods


const orders = [
    {id: 1, item:"phone" , qunt: 1},
    {id: 2, item:"watch" , qunt: 1},
    {id: 3, item:"card" , qunt: 1},
    {id: 4, item:"lap" , qunt: 1}
]

let results = orders.findIndex (function(order) {
    return order.item === "card" 
})

console.log(results);