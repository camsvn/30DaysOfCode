
let learnSection = document.getElementById('dom-practice');



//document.title DOM Document
console.log("Before Changing Title was", document.title);
document.title = "Shop-a-hole"

console.log("New Title is", document.title);
// document.write(`New Title is ${document.title}`);
//eof document.title DOM Document

console.log('********************');

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
console.log('********************');

//firstElementChild, lastElementChild, children, childNodes, nextSibling, nextElementSibling DOM Element

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
console.log(shoppingDiv.nextElementSibling)

//eof firstElementChild, lastElementChild, children, childNodes DOM Element
console.log('********************');

//DOM
console.log("List ShoppingItem using querySelector")
const shoppingItems = document.querySelectorAll('#shopping-list span.name');
shoppingItems.forEach(item => console.log(item.textContent))

// const item = document.getElementsByClassName('name');
// console.log(item)

//eof DOM
console.log('********************');
//clone node
const banner = document.getElementById('page-banner')

const clonedBannerDeep = banner.cloneNode(true) // deep-clone
const clonedBannerShallow = banner.cloneNode() // shallow-clone

console.log("Deep Clone", clonedBannerDeep);
console.log("Shallow Clone", clonedBannerShallow);

//eof clone node

console.log('********************');
//child parent node

//event bubbling

// var deleteBtns = document.querySelectorAll('#shopping-list .delete')

// deleteBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         const li = e.target.parentElement;
//         console.log("Selected", li);
//         li.parentElement.removeChild(li);
//     })
// })

var list = document.querySelector('#shopping-list ul')

list.addEventListener('click', (e) =>{ 
if(e.target.className === 'delete'){
    const li = e.target.parentElement;
    console.log("Selected", li);
    li.parentElement.removeChild(li);
}})
//eof event bubbling

//add itemToShop
const addItemForm = document.forms['add-item-to-shop'];
// console.log(addItemForm);

addItemForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const item = addItemForm.querySelector('input[type="text"]').value;
    addItemForm.querySelector('input[type="text"]').value = "";
    console.log(item);

    //Create New List Item
    const li = document.createElement('li'); //Create Element
    const item2Shop = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //Add Contents
    item2Shop.textContent = item;
    deleteBtn.textContent = 'delete';

    //Add Classes / Add Attributes
    item2Shop.classList.add('name')
    deleteBtn.setAttribute("class", 'delete')

    //Append Nodes
    li.appendChild(item2Shop);
    li.appendChild(deleteBtn);

    list.appendChild(li);
})
//eofadd itemToShop

//search items
const search = document.forms['search-items'].querySelector('input');

search.addEventListener('keypress', (e)=>{
    const term = e.target.value.toLowerCase();
    const items = list.getElementsByTagName('li');
    console.log(items);
    Array.from(items).forEach(item => {
        console.log(items)
        // const listItem = item.firstChildElement.textContent;
        // listItem.toLowerCase().indexOf(term) !=-1 ? listItem.style.display = 'block' : listItem.style.display = 'none' 
    })
})
//eof search items
