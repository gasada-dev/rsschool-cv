const gridImg = document.querySelector(".portfolio__grid-img");
const imgArray = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
};

for (let i = 1; i <= 12; i++) {
  imgArray.push(`
    <img class="portfolio__img" src="./src/img/portfolio-${i}.png" alt="img">
    `)
};
gridImg.innerHTML = imgArray.join("");

function clickBtn(value, array) {
  if (!value.classList.contains("focus")) {
    gridImg.innerHTML = shuffle(imgArray).join("");
    array.forEach((value) => {
      value.classList.remove("focus");
    });
    value.classList.add("focus");
  };
};

document.querySelectorAll(".btn-filter")
  .forEach((value, id, array) => {
    value.addEventListener("click", () => clickBtn(value, array));
  });

