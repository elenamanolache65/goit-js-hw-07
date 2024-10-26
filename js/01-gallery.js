import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const getEl = createGallery(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', getEl);

function createGallery(cards){
  const markUp = cards.map(({original,preview,description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  }).join('')
  return markUp;  
}

let instance;

const closeModal = (e) => {
    if (e.key === 'Escape') {
      instance.close();
    }
  };


function openModalWindow(event){
  event.preventDefault();

  const currentImg = event.target.dataset.source;

  if(!currentImg){
    return;
  };
  

   instance = basicLightbox.create(
    `<img src="${currentImg}" width="800" height="600">`
,{
  onShow: (instance) => {
    document.addEventListener('keydown', closeModal )
  },
  onClose: (instance) =>{
    document.removeEventListener('keydown', closeModal)
  }
}
);

  instance.show();
}

galleryEl.addEventListener('click', openModalWindow);