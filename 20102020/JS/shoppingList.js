
let learnSection = document.getElementById('dom-practice');



//document.title 
console.log("Before Changing Title was", document.title);
document.title = "Shop-a-hole"

console.log("New Title is", document.title);
// document.write(`New Title is ${document.title}`);
//eof document.title


//document.form
let formHTMLCollection = document.forms;
console.log(formHTMLCollection)

console.log("Selecting from HTMLCollection");
console.log("By index", formHTMLCollection[0])
console.log("By id", formHTMLCollection['add-item-to-shop'])

for(i = 0 ; i < formHTMLCollection.length ; i++){
    console.log(formHTMLCollection.item(i))
}

console.log("Iterate elements by shallow copying HTMLCollection to Array: ")
let hc2Array = Array.from(formHTMLCollection);
hc2Array.forEach(item => 
    console.log(item)
)
//eof document.form

//firstElementChild, lastElementChild, children, childNodes

/*
The difference between this property and childNodes, is that: 
childNodes contain all nodes, including text nodes and comment nodes, 
while children only contain element nodes.
*/

let shoppingDiv = document.getElementById("shopping-list");

console.log("Selecting <UL> using lastElementChild", shoppingDiv.lastElementChild)
console.log("Selecting 2nd child of <UL> using children", shoppingDiv.lastElementChild.children[1])
console.log("Children vs childNodes")
console.log(shoppingDiv.lastElementChild.children, shoppingDiv.lastElementChild.childNodes)

//eof firstElementChild, lastElementChild, children, childNodes





