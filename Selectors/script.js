//Add a title attribute to every element that has the important class,

let important = document.getElementsByClassName("important");
for(let i=0; i<important.length; i++){
important[i].setAttribute("title","This is an important item");
}
//Select all the img tags and loop through them. If they have no important class, turn their display property to none

let image = document.querySelectorAll('img'); //now var image is having two img tags with its indexes
for(let i=0; i<image.length; i++){
    if(image[i].classList.contains('important')){
        image[i].style.display = "content";
    }
    else{
        image[i].style.display = "none";
    }
}

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well

let paragraph = document.querySelectorAll('p'); //getting every p and assigning it as value a value to a var
let displayPara = "";   //just creating a new var to display the content, until assigning a value to a var,it will be defined, so defining it with strings
for(let i=0; i<paragraph.length; i++){  //we have to get to reach each element inside the array, so here comes the loop
    if(paragraph[i].classList.length>0 ){
        console.log(paragraph[i].className);
    }
    else{
        console.log(paragraph[i].innerHTML); 
    }
    //displayPara += paragraph[i].innerHTML;  //we want the text(innerhtml) of each p and giving it to var to use if after for displaying

    //If the paragraph has a class, display its classname as well    
    //if(paragraph){
     //   console.log(paragraph[i].classList.);
    //}
 }
//console.log(displayPara);

// take the img elements and put them in a let 
//create a for loop and check each element for class
//we add a if else clause to give the condition
//if this is true  === then this happens


