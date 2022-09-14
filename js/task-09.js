// Задание 9
// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");

const handleClick = () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  
  console.log(bodyEl.getAttribute("style"));
// вирішив в спан записати значення з боді
  spanEl.textContent = bodyEl.getAttribute("style").slice(18, bodyEl.getAttribute("style").length - 1);
  // якщо ні то варіант нижче
  // spanEl.textContent = getRandomHexColor();
};

buttonEl.addEventListener("click", handleClick)

