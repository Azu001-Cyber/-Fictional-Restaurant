
// JS logic for sliding background image in the hero section
const images = ['img/chicken-skewers-with-slices-sweet-peppers-dill.jpg', 'img/closeup-delicious-roasted-meat-with-vegetables-lights.jpg', 'img/hero-img-incase.jpg', 'img/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg', 'img/milkshake-set-table.jpg', 'img/pexels-valeriya-842571.jpg', 'img/stewed-white-beans-sliced-pumpkin-tomato-sauce.jpg'];
let current = 0;
const slider = document.getElementById('slider');

function changeBackground(){
    slider.style.backgroundImage = `url('${images[current]}')`;
    current = (current + 1) % images.length;
}

changeBackground(); //set initial
setInterval(changeBackground, 5000) // Change every 5 secs