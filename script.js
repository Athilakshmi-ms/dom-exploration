//Display the document title in the console

console.log(document.title);

//Change the document title to Modifying the DOM

document.title = 'Modifying the DOM';

//Change the background color of the body to hot pink (#FF69B4).

//document.body.style.backgroundColor = '#FF69B4';
document.querySelector('body').style.backgroundColor = 'rgb(230,235,250)';

//display all children elements of the <body>
const childElements = document.body.children;
let displayElements = "";
for(let i = 0; i < childElements.length; i++){
    displayElements += childElements[i].tagName + "<br>";
}
document.getElementById("displayElements").innerHTML = displayElements;