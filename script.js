//carousel graphics
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//carousel animation
let slideIndexAnimation = 1;
showSlides(slideIndexAnimation);

function plusSlides(n) {
  showSlides(slideIndexAnimation += n);
}

function currentSlide(n) {
  showSlides(slideIndexAnimation = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesAnimation");
  let dots = document.getElementsByClassName("demoAnimation");
  let captionText = document.getElementById("captionAnimation");
  if (n > slides.length) {slideIndexAnimation = 1}
  if (n < 1) {slideIndexAnimation = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//carousel photography
let slideIndexPhoto = 1;
showSlides(slideIndexPhoto);

function plusSlides(n) {
  showSlides(slideIndexPhoto += n);
}

function currentSlide(n) {
  showSlides(slideIndexPhoto = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesPhoto");
  let dots = document.getElementsByClassName("demoPhoto");
  let captionText = document.getElementById("captionPhoto");
  if (n > slides.length) {slideIndexPhoto = 1}
  if (n < 1) {slideIndexPhoto = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//carousel web design
let slideIndexWeb = 1;
showSlides(slideIndexWeb);

function plusSlides(n) {
  showSlides(slideIndexWeb += n);
}

function currentSlide(n) {
  showSlides(slideIndexWeb = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesWeb");
  let dots = document.getElementsByClassName("demoWeb");
  let captionText = document.getElementById("captionWeb");
  if (n > slides.length) {slideIndexWeb = 1}
  if (n < 1) {slideIndexWeb = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//dark mode
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

function toggleDarkMode(event) {
  if (event.matches) {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.add('light-theme');
  }
}

prefersDark.addEventListener('change', toggleDarkMode);


//logo swap dark mode
const logoImage = document.getElementById('your-logo-id');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  logoImage.src = "images/3.3_Soto_Logo.png";
} else {
  logoImage.src = "images/3.3_Soto_Logo_R.png";
}
