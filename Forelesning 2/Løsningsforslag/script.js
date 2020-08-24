import { getPostes } from '../data/posts.js';

const posts = getPostes(); //Gets postes from data

//DOM connections
let container = document.getElementById('container');

//Creates a H2 with text
const getTitle = (title) => {
    let header = document.createElement("H2");
    const text = document.createTextNode(title);
    header.className = "title";
    header.appendChild(text);
    return header;
};

//TODO: Create a img function to present an image
const getImage = (imgURL) => {
    let image = document.createElement("img");
    image.src = imgURL;
    return image;
};

//TODO: Create a description child node
const getDescription = (description) => {
    let descriptionElement = document.createElement("H4");
    descriptionElement.textContent = description;
    return descriptionElement;
};

/* TODO: 
Maby make a card View that is combining all 
the other functions and creates a nice representation 
of each item in the database */
const createCardView = (post) => {
    let cardDiv = document.createElement('div');
    let textDiv = document.createElement('div');

    const image = getImage(post.image);
    cardDiv.appendChild(image);

    const header = getTitle(post.title);
    textDiv.appendChild(header);

    const description = getDescription(post.description);
    textDiv.appendChild(description);
    textDiv.className = 'text-card-content';

    cardDiv.appendChild(textDiv);
    cardDiv.className = 'card-view';

    return cardDiv;
}


//Prints one by one post
posts.forEach(post => {
    const card = createCardView(post);
    container.appendChild(card);
});

/* 
Samme som over
for (let i = 0; i < posts.length; i++) {
    const card = createCardView(posts[i]);
    container.appendChild(card);
} 
*/