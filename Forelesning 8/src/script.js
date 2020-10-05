const root = document.getElementById('root');

const items = [
    {
        imageURL: 'https://cdn.tasteatlas.com/images/dishes/9e6dc87fa81c4544bb893664e6c2aa93.jpg?w=600&h=450',
        imageAltText: 'taco with shrimp',
        cardTitle: 'Tijuana',
        cardbodyText: 'Meksikansk - Vegetar - Hjemmelaget - Kjøtt - Taco'
    },
    {
        imageURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/grilled-cheese-horizontal-jpg-1522266016.jpg',
        imageAltText: 'Grilled Cheese Sandwich',
        cardTitle: 'MELT Grilled Cheese',
        cardbodyText: ' Amerikansk - Sandwich - Fingermat - Hjemmelaget - Pick-Up'
    },
    {
        imageURL: 'https://trinesmatblogg.no/app/uploads/2018/10/IMG_8648-1.jpg',
        imageAltText: 'pizza bakt i stegn ovn',
        cardTitle: 'Pizzavino',
        cardbodyText: ' Pizza - Italiensk - Hjemmelaget - Pasta - Pick-Up'
    },
    {
        imageURL: 'https://aichasmat.no/wp-content/uploads/2019/01/Falafel-meze-5-.jpg',
        imageAltText: 'Vegan meze',
        cardTitle: 'Mardin',
        cardbodyText: 'Midtøsten - Hjemmelaget - Kjøtt - Pick-Up'
    },
    {
        imageURL: 'https://trinesmatblogg.no/app/uploads/2020/04/IMG_9464.jpg',
        imageAltText: 'sushi',
        cardTitle: 'Taste of Asia',
        cardbodyText: 'Asiatisk - Vegetar - Dumplings - Sjømat - Sushi'
    }
];

const createCardView = (item) => {
    const cardView = document.createElement('div');

    cardView.innerHTML = `
        <div class="card">
            <img class="card-image" src=${item.imageURL} alt=${item.imageAltText}>
            <div class="container">
                <h4>${item.cardTitle}</h4>
                <p>${item.cardbodyText}</p>
            </div>
        </div
    `;

    cardView.addEventListener('click', () => {
        createRestuarantpage(item, root);
    });

    return cardView;
};

const createMainPage = () => {
    root.innerHTML = `<h1> Velkommen til FoodDeliva 🍽 </h1>`;

    items.map(item => {
        const newCard = createCardView(item);
        root.appendChild(newCard);
    });
};

const createRestuarantpage = (item, parent) => {
    const pageViwe = document.createElement('div');

    pageViwe.innerHTML = `
        <div class="restaurant-view">
            <button type="button" id="return-button">X</button>
            <img class="restaurant-image" src="${item.imageURL} alt=${item.imageAltText}>"
            <h2>${item.cardTitle}</h2>
            <h3>${item.cardbodyText}</h3>
        </div>
    `;

    /* parent.innerHTML = null;
    parent.appendChild(pageViwe); */

    parent.innerHTML = pageViwe.innerHTML;

    const returnButton = document.getElementById('return-button');
    returnButton.addEventListener('click', () => {
        createMainPage();
    });
};


createMainPage();

/* const createButton = (text, parent, event) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'simple-button';
    button.innerText = text;

    button.addEventListener('click', event);
    parent.appendChild(button);
};

createButton('Tap me', root, () => {
    console.log('Tapped');

    const text = document.createElement('h1');
    text.innerText = 'Hello';
    root.appendChild(text);
}); */