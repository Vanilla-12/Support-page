let slides = document.querySelectorAll('.slider__item');
let slider = [];
let itemToShow = 4;
let container = document.querySelector('.slider__wrapper');

for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i];
}

function clearSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].remove();
    }
}

function draw() {
    let itemWidth = slider[0].clientWidth;
    for (let i = 0; i < itemToShow; i++) {
        slider[i].style.left = itemWidth * i + 'px';
        container.appendChild(slider[i]);
    }
}

function rotateRight() {
    let newSlider = [];
    for (let i = 1; i < slider.length; i++) {
        newSlider[i] = slider[i - 1];
    }
    newSlider[0] = slider[slider.length - 1];
    slider = newSlider;
}

let sliderButton = document.querySelector('.slider__button');
sliderButton.addEventListener('click', () => {
    clearSlides();
    rotateRight();
    draw();
})

function chageSize() {
    if (container.clientWidth <= 300) {
        itemToShow = 1;
    } else if (container.clientWidth <= 600) {
        itemToShow = 2;
    } else if (container.clientWidth <= 900) {
        itemToShow = 3;
    } else {
        itemToShow = 4;
    }
    clearSlides();
    draw();
}

window.addEventListener('resize', chageSize);