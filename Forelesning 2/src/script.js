import { getPostes } from '../data/posts.js';

const posts = getPostes(); //Gets postes from data

//DOM connections
let container = document.getElementById('container');

//Creates a H2 with text
const createTitle = (title) => {
    let header = document.createElement('H2');
    const text = document.createTextNode(title);
    header.className = 'title';
    header.appendChild(text);
    return header;
}

//TODO: Create a img function to present an image
const createImageFrom = (imageURL) => {
    let image = document.createElement('img'); 
    image.src = imageURL;
    image.className = 'image-container';
    return image
}

//TODO: Create a description child node
const createDescription = (text) => {
    let description = document.createElement('H3');
    const textNode = document.createTextNode(text);
    description.className = "description-text"
    description.appendChild(textNode);
    return description;
}

/* TODO: 
Maby make a card View that is combining all 
the other functions and creates a nice representation 
of each item in the database */
const createCardView = (post) => {
    let innerContainer = document.createElement('div');
    let textContainer = document.createElement('div');

    innerContainer.className = 'card-view';
    textContainer.className = 'text-card-view';

    const image = createImageFrom(post.image);
    const header = createTitle(post.title);
    const description = createDescription(post.description);

    innerContainer.appendChild(image);

    textContainer.appendChild(header);
    textContainer.appendChild(description);
    innerContainer.appendChild(textContainer);
    
    return innerContainer;
}

//Prints one by one post
posts.forEach(post => {
    const card = createCardView(post);
    container.appendChild(card);
});