let itemList=document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor="#2345ff";

//childNode
console.log(itemList.childNodes);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor="yellow";

//firstChild
console.log(itemList.firstChild);

//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello';
itemList.firstElementChild.style.backgroundColor='grey';
 
//lastChild
console.log(itemList.lastChild);

//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor='red';
itemList.lastElementChild.style.color='white';

//nextSibling
console.log(itemList.nextSibling);

//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);

//previousSiblingElement
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent='item list';
itemList.previousElementSibling.style.color='violet';

//create a div
let newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='createnewdiv';
newdiv.setAttribute('title','hello div');
 
//create textnode
let newdivtext=document.createTextNode('hello world');

//add text to div
newdiv.appendChild(newdivtext);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');

console.log(newdiv);
container.insertBefore(newdiv,h1);
newdiv.style.color='black';
