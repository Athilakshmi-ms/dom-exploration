/* Modify the script.js to create a new <section> with a random background-color for each learner in your group.
 This section should contain a paragraph with the name of the learner. 
 Those sections should be appended in the <article>
If the background is dark the text should be white, if the background is light the text should be black
Find a way so that everytime you load the page the order of the elements changes!
creare new section with random bgcolor.bgcolor
each paragraph should be inside the section - paragraph should contain name of the learner
each sections should be inside the article

so:[ p > section >] article*/
  
  //1. We target the article --> .querySelector("article")
  // And we declare the array [first names] which will be iterated by the loop to generate each <section>
  
  //2. Loop: We generate our sections>paragraphs>content/background
  // 2.1. THE SECTIONS :
  // for(let i=0; i<array.length; i++) {
  // const sec = document. createElement("section");
  // article.appendChild(sec);
  // }
  // --> the first names will appear each time in the same order. We will have to fix this pb later in point 3.
  
  // 2.2. THE PARAGRAPHS and their content
  // let paragraphs = document. createElement("p");
  // sec.appendChild(paragraphs);
  
  // 2.3. FIRST NAMES
  // paragraphs. textContent = array[i];
  
  // 2.3. BACKGROUND
  // Background variable: random color for each RGB value
  // style the background of the <p>
  // if the paragraph is light/dark: text black/white
  
  // 3. The first names must be displayed randomly each time the page is refreshed: we insert the first names once out of two at the beginning/at the end of the <article> with if(Math.random()) . We rectify the beginning of the loop by including the condition.

const array = ["Athi", "Puppies", "Waterbottles", "Watches", "Bracelets", "HTML", "CSS"];
const article = document.querySelector("article");


for(let i=0; i<array.length; i++) {
    const sec = document.createElement("section");
    if(Math.random()<0.9){
        article.appendChild(sec);  
    } else {
        var lastOne = document.querySelector("section")
        article.insertBefore(sec, lastOne);
    }

    let paragraphs = document.createElement("p");
    sec.appendChild(paragraphs);     //AppendChild creates a node, so be careful if text only to add append! position.lastChild.appendChild(p)
    paragraphs.textContent = array[i];

    let colorRandom = [Math.floor(Math.random()*256), Math.floor(Math.random()*256), Math.floor(Math.random()*256)];
    sec.style = `background-color: rgb(${colorRandom})`;

    if(colorRandom[0]<128) {    //look at other people's code to see how they did "better"
        paragraphs.style.color = "white";
    }
    else {
        paragraphs.style.color = "black";
    } 
}

/*
let paragraph = document.createElement('p');
let section = document.createElement('section');
section.appendChild(paragraph);
let article = document.getElementsByTagName('article');
section.style.backgroundColor = getRandomColor();

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  
  }
  console.log(getRandomColor())*/