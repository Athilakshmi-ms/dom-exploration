//Add a title attribute to every element that has the important class,

let important = document.getElementsByClassName("important");
for (let i = 0; i < important.length; i++) {
    important[i].setAttribute("title", "This is an important item");
}
//Select all the img tags and loop through them. If they have no important class, turn their display property to none

let image = document.querySelectorAll('img'); //now var image is having two img tags with its indexes
for (let i = 0; i < image.length; i++) {
    if (image[i].classList.contains('important')) {
        image[i].style.display = "content";
    }
    else {
        image[i].style.display = "none";
    }
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

const paragraph = document.querySelectorAll('p'); //getting every p and assigning them in whole as a value to a var
for (let i = 0; i < paragraph.length; i++) {  //we have to get to reach each element inside the array, so here comes the loop
    if (paragraph[i].classList.length > 0) {
        console.log(paragraph[i].className +" "+ paragraph[i].textContent);
    }
    else {
        console.log(paragraph[i].innerHTML);
    }
}

//Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.

let p = document.querySelectorAll('p');
for( let i=0; i<p.length; i++){
    if(p[i].classList.length == 0){
        p[i].style.color = getRandomColor();
    }
}
// Function to generate a random color
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}
console.log(getRandomColor())