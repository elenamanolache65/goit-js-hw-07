import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const getEl = makeGallery(galleryItems);

function makeGallery(cards){
    const markUp = cards.map(card => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${card.original}">
      <img class="gallery__image" src="${card.preview}" alt="${card.description}" />
   </a>
</li>`
    }).join('');

    return markUp;
}

galleryEl.insertAdjacentHTML('beforeend', getEl);

const lightBox = new SimpleLightbox('.gallery__link', {
    captionDelay: 250,
    captionsData: 'alt'
});