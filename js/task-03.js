// Напиши скрипт для создания галереи изображений по массиву данных. В HTML есть список ul.gallery.

// <ul class="gallery"></ul>

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// РЕШЕНИЕ 1
const listImages = document.querySelector(".gallery");
// console.log(listImages)

const listGallery = item => {
  return `<li>
    <img src="${item.url}" alt="${item.alt}"width='400'/>
  </li>`;
};

const markup = images.map(listGallery).join('');
// console.log(markup)
listImages.insertAdjacentHTML('beforeend', markup);



// РЕШЕНИЕ 2
// const listImages = document.querySelector(".gallery")
// images.forEach((imageList, index) => {
//   const item = document.createElement("li");
//   const image = document.createElement("img");
//   image.src = imageList.url;
//   image.alt = imageList.alt;
//   image.width = 400;
//   item.append(image);
// listImages.append(item)
// });

listImages.style.cssText = `
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:space-between;
list-style:none;
flex-direction:column;`
