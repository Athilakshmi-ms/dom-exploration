document.title = "Athi's favourite dog breeds collection";
const collection = [{
    name: 'Rajapalayam',
    native: 'Tamil Nadu',
    years: 'Lifespan',
    lifespan: '9-12 yrs',
    picture: 'images/Rajapalayam.jpg'
},
{
    name: 'Chippiprai',
    native: 'Tamil Nadu',
    years: 'Lifespan',
    lifespan: '12-15 yrs',
    picture: 'images/Chippiparai.jpg'
},
{
    name: 'Bullikuttan',
    native: 'India, Pakistan',
    years: 'Lifespan',
    lifespan: '8-10 yrs',
    picture: 'images/bully_kutta.jpg'
},
{
    name: 'Labrador Retriever',
    native: 'British Breed',
    years: 'Lifespan',
    lifespan: '10-12 yrs',
    picture: 'images/Labrador-Retriever-Breed-Feature-Image.jpg'
},
{
    name: 'German Shepherd',
    native: 'German Breed',
    years: 'Lifespan',
    lifespan: '9-13 yrs',
    picture: 'images/German-Shepherd.jpg'
},
{
    name: 'Golden Retriever',
    native: 'Scottish breed',
    years: 'Lifespan',
    lifespan: '10-12 yrs',
    picture: 'images/Golden_retriever.jpg'
},
{
    name: 'Pug',
    native: 'China',
    years: 'Lifespan',
    lifespan: '12-15 yrs',
    picture: 'images/pug.jpg'
},
{
    name: 'Pomeranian',
    native: 'Central Europe',
    years: 'Lifespan',
    lifespan: '12-15 yrs',
    picture: 'images/Pomeranian.jpg'
},
{
    name: 'Beagle',
    native: 'United Kingdom',
    years: 'Lifespan',
    lifespan: '12-15 yrs',
    picture: 'images/Beagle.jpg'
},
{
    name: 'Rottweiler',
    native: 'Germany',
    years: 'Lifespan',
    lifespan: '8-10 yrs',
    picture: 'images/Rottweiler.jpg'
}];
console.log(collection);

for (let i = 0; i < collection.length; i++) {
    let container = document.getElementById('container');
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    let bottomContainer = document.createElement('div');
    let categoryContainer = document.createElement('div');
    let category = document.createElement('p');
    let categoryValue = document.createElement('p');
    let content = document.createElement('div');
    let heading = document.createElement('h3');
    let subTitle = document.createElement('p');
    let description = document.createElement('p');

    imageContainer.appendChild(image);
    categoryContainer.append(category);
    categoryContainer.append(categoryValue);
    content.append(heading);
    content.append(subTitle);
    content.append(description);
    bottomContainer.append(categoryContainer);
    bottomContainer.append(content);
    container.append(imageContainer);
    container.append(bottomContainer);

    image.src = collection[i].picture;
    category.innerText = collection[i].years;
    categoryValue.innerText = collection[i].lifespan;
    heading.innerText = collection[i].name;
    subTitle.innerText = collection[i].native;
    description.innerText = "The dog is a domesticated descendant of the wolf.  Dogs were the first species-be domesticated by hunter-gatherers 15,000 years ago before the development of agriculture.";

    //container for each object should be
    container.style.backgroundColor = "#e6e2e2";
    container.style.borderRadius = "5px";
    container.style.fontSize = "0.8rem";
    container.style.textAlign = "left";
    container.style.width = "180px";
    container.style.height = "400px";
    container.style.border = "1px solid black";

    //create a container
    image.style.objectFit = "cover";
    image.style.width = "180px";
    image.style.height = "100px";

    //category content
    categoryContainer.style.display = "flex";
    categoryValue.style.marginLeft = "0.5rem";
    categoryValue.style.border = "1px solid rgb(110, 183, 204)";
    categoryValue.style.padding = "3px"
    categoryValue.style.borderRadius = "5px"
    categoryValue.style.fontSize = "10px"
    categoryValue.style.backgroundColor = "rgb(110, 183, 204)"
    category.style.padding = "3px"
    category.style.fontSize = "10px"
    category.style.border = "1px solid #e1e10f";
    category.style.backgroundColor = "#e1e10f"
    category.style.borderRadius = "5px"

    //heading content
    heading.style.fontSize = "1rem";
    heading.style.paddingBottom = "0px";
    subTitle.style.color = "gray";
    subTitle.style.paddingTop = "0px";
    bottomContainer.style.padding = "10px";
}
/*

let sampleContainer = {
    name: 'Rajapalayam',
    native: 'Tamil Nadu',
    years: 'Lifespan:',
    lifespan: '9-12 yrs',
    picture: 'assets/images/Rajapalayam.jpg'
};

image.src = sampleContainer.picture;
category.innerText = sampleContainer.years;
categoryValue.innerText = sampleContainer.lifespan;
heading.innerText = sampleContainer.name;
subTitle.innerText = sampleContainer.native;
description.innerText = "The dog is a domesticated descendant of the wolf.  Dogs were the first species-be domesticated by hunter-gatherers 15,000 years ago before the development of agriculture.";
*/

/*collection.forEach((index) => {
    image.src = collection[index].picture;
    category.innerText = collection[index].years;
    categoryValue.innerText = collection[index].lifespan;
    heading.innerText = collection[index].name;
    subTitle.innerText = collection[index].native;
    description.innerText = "The dog is a domesticated descendant of the wolf.  Dogs were the first species-be domesticated by hunter-gatherers 15,000 years ago before the development of agriculture.";
});
*/







