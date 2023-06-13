document.title = "Athi's favourite dog breeds collection";
const collection = [{
    name: 'Rajapalayam',
    native: 'Tamil Nadu',
    years: 'Lifespan',
    lifespan: '9 to 12 yrs',
    picture: 'images/Rajapalayam.jpg'
},
{
    name: 'Chippiprai',
    native: 'Tamil Nadu',
    years: 'Lifespan',
    lifespan: '12 to 15 yrs',
    picture: 'images/Chippiparai.jpg'
},
{
    name: 'Bullikuttan',
    native: 'India, Pakistan',
    years: 'Lifespan',
    lifespan: '8 to 10 yrs',
    picture: 'images/bully_kutta.jpg'
},
{
    name: 'Labrador Retriever',
    native: 'British Breed',
    years: 'Lifespan',
    lifespan: '10 to 12 yrs',
    picture: 'images/Labrador-Retriever-Breed-Feature-Image.jpg'
},
{
    name: 'German Shepherd',
    native: 'German Breed',
    years: 'Lifespan',
    lifespan: '9 to 13 yrs',
    picture: 'images/German-Shepherd.jpg'
},
{
    name: 'Golden Retriever',
    native: 'Scottish breed',
    years: 'Lifespan',
    lifespan: '10 to 12 yrs',
    picture: 'images/Golden_retriever.jpg'
},
{
    name: 'Pug',
    native: 'China',
    years: 'Lifespan',
    lifespan: '12 to 15 yrs',
    picture: 'images/pug.jpg'
},
{
    name: 'Pomeranian',
    native: 'Central Europe',
    years: 'Lifespan',
    lifespan: '12 to 15 yrs',
    picture: 'images/Pomeranian.jpg'
},
{
    name: 'Beagle',
    native: 'United Kingdom',
    years: 'Lifespan',
    lifespan: '12 to 15 yrs',
    picture: 'images/Beagle.jpg'
},
{
    name: 'Rottweiler',
    native: 'Germany',
    years: 'Lifespan',
    lifespan: '8 to 10 yrs',
    picture: 'images/Rottweiler.jpg'
}];
console.log(collection);
let sampleContainer = {
    name: 'Rajapalayam',
    native: 'Tamil Nadu',
    years: 'Lifespan',
    lifespan: '9 to 12 yrs',
    picture: 'images/Rajapalayam.jpg'
};

let container = document.getElementById('container');
let imageContainer = document.createElement('div');
let image = document.createElement('img');
let bottomContainer = document.createElement('div');
let categoryContainer = document.createElement('div');
let category = document.createElement('p');
let categoryValue = document.createElement('p');
let content = document.createElement('div');
let heading = document.createElement('h1');
let subTitle = document.createElement('h2');
let description = document.createElement('p');

imageContainer.append(image);
categoryContainer.append(category);
categoryContainer.append(categoryValue);
content.append(heading);
content.append(subTitle);
content.append(description);
bottomContainer.append(categoryContainer);
bottomContainer.append(content);
container.append(imageContainer);
container.append(bottomContainer);





