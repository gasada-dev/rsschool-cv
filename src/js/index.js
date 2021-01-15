const slides = document.querySelectorAll('.frontpage__slide');
const prev = document.querySelector('.frontpage__slide-prev');
const next = document.querySelector('.frontpage__slide-next');
const frontpage = document.querySelector('.frontpage');
const frontpageSlider = document.querySelector('.frontpage__slider');
const colorsArray = ['#F06C64', '#648BF0'];
const bordersColorsArray = ['#EA676B', '#648BF0'];

//slider
let index = 0;

const activeSlide = () => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[index].classList.add('active')
  //backgroundColor
  frontpage.style.backgroundColor = colorsArray[index]
  frontpage.style.borderColor = bordersColorsArray[index]

};

const nextSlide = () => {
  if (index === slides.length - 1) {
    index = 0
    activeSlide();
  } else {
    index++
    activeSlide();
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1
    activeSlide(index);
  } else {
    index--
    activeSlide(index);
  }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//portfolioGrid

const gridImg = document.querySelector('.portfolio__grid-img');
const imgArray = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
};

for (let i = 1; i <= 12; i++) {
  imgArray.push(`
    <img class="portfolio__img" src="./src/img/portfolio-${i}.png" alt="img">
    `)
};
gridImg.innerHTML = imgArray.join('');

function clickBtn(value, array) {
  if (!value.classList.contains('portfolio__filter-active')) {
    gridImg.innerHTML = shuffle(imgArray).join("");
    array.forEach((value) => {
      value.classList.remove('portfolio__filter-active');
    });
    value.classList.add('portfolio__filter-active');
  };
};

document.querySelectorAll('.btn-filter')
  .forEach((value, id, array) => {
    value.addEventListener('click', () => clickBtn(value, array));
  });

//burgerMenu

document.querySelector('.burger-menu-icon').addEventListener('click', (elem) => {
  elem.target.classList.toggle('active')
  document.querySelector('.header__nav').classList.toggle('active')
});
document.querySelectorAll('.link').forEach((elem) => {
  elem.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.remove('active')
  });
})

//headerFocus

document.querySelector('.header__nav').addEventListener('click', (elem) => {
  document.querySelector('.select').classList.remove('select')
  elem.target.classList.add('select')
});



