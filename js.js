const slider = document.querySelector('.slider');
const sliderItems = document.querySelector('.slider-items');
const sliderItem = document.querySelectorAll('.slider-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderDots = document.querySelector('.slider-dots');

let slideIndex = 1;
let slideWidth = slider.offsetWidth;

function showSlides(n) {
    if (n > sliderItem.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = sliderItem.length;
    }
    sliderItems.style.left = -(slideWidth * (slideIndex - 1)) + 'px';
  
    // update active dot
    for (let i = 0; i < sliderDots.children.length; i++) {
      sliderDots.children[i].classList.remove('active');
    }
    sliderDots.children[slideIndex - 1].classList.add('active');
  }

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prevBtn.addEventListener('click', () => {
  plusSlides(-1);
});

nextBtn.addEventListener('click', () => {
  plusSlides(1);
});

window.addEventListener('resize', () => {
  slideWidth = slider.offsetWidth;
  showSlides(slideIndex);
});

showSlides(slideIndex);


// Dots

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prevBtn.addEventListener('click', () => {
  plusSlides(-1);
});

nextBtn.addEventListener('click', () => {
  plusSlides(1);
});

// add dots
for (let i = 0; i < sliderItem.length; i++) {
  const dot = document.createElement('span');
  dot.classList.add('slider-dot');
  dot.addEventListener('click', () => {
    showSlides(i + 1);
  });
  sliderDots.appendChild(dot);
}

window.addEventListener('resize', () => {
  slideWidth = slider.offsetWidth;
  showSlides(slideIndex);
});

showSlides(slideIndex);

// Validate form
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  if (!nameInput.checkValidity()) {
    alert('Venligst indtast et gyldigt navn');
    event.preventDefault();
  }

  if (!surnameInput.checkValidity()) {
    alert('Venligst indtast et gyldigt efternavn');
    event.preventDefault();
  }

  if (!emailInput.checkValidity()) {
    alert('Venligst indtast en gyldig email');
    event.preventDefault();
  }
});