const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


const imageContainer = document.querySelector('.image-container');
const thumbs = document.querySelector('.thumbs');

// Per ogni elemento di ITEMS popolo IMAGE-CONTAINER
for (let i = 0; i < items.length; i++) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    // Inserire le immagini
    const newImage = `
    <div class="single-image">
        <img src="${thisPath}" alt="Img ${i}">

        <div class="text">
            <h2>${thisTitle}</h2>
            <p>${thisText}</p>
        </div>
    </div>
    `;
    imageContainer.innerHTML += newImage;

    // Inserire i thumbs
    const newThumbs = `
    <div class="single-thumbs">
        <img src="${thisPath}" alt="Img thumbs ${i}">
    </div>
    `;
    thumbs.innerHTML += newThumbs;
}


// Dare ACTIVE alla classe di un elemento
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const allThumbs = document.getElementsByClassName('single-thumbs');

allImages[activeImage].classList.add('active');
allThumbs[activeImage].classList.add('active');
