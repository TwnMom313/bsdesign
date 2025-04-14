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


// tabs
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}


// === GRAPHIC DESIGN SLIDESHOW ===
let slideIndexG = 1;
showSlides(slideIndexG);

function plusSlides(n) {
  showSlides(slideIndexG += n);
}

function currentSlide(n) {
  showSlides(slideIndexG = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndexG = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexG-1].style.display = "block";
  dots[slideIndexG-1].className += " active";
  captionText.innerHTML = dots[slideIndexG-1].alt;
}

// === ANIMATION SLIDESHOW ===
let slideIndexA = 1;
showSlides(slideIndexA);

function plusSlides(n) {
  showSlides(slideIndexA += n);
}

function currentSlide(n) {
  showSlides(slideIndexA = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexA = 1}
  if (n < 1) {slideIndexA = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexA-1].style.display = "block";
  dots[slideIndexA-1].className += " active";
  captionText.innerHTML = dots[slideIndexA-1].alt;
}

// === PHOTOGRAPHY SLIDESHOW ===
let slideIndexP = 1;
showSlides(slideIndexP);

function plusSlides(n) {
  showSlides(slideIndexP += n);
}

function currentSlide(n) {
  showSlides(slideIndexP = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexP = 1}
  if (n < 1) {slideIndexP = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexP-1].style.display = "block";
  dots[slideIndexP-1].className += " active";
  captionText.innerHTML = dots[slideIndexP-1].alt;
}

// === WEB DESIGN/DEVELOPMENT SLIDESHOW ===
let slideIndexW = 1;
showSlides(slideIndexW);

function plusSlides(n) {
  showSlides(slideIndexW += n);
}

function currentSlide(n) {
  showSlides(slideIndexW = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndexW = 1}
  if (n < 1) {slideIndexW = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexW-1].style.display = "block";
  dots[slideIndexW-1].className += " active";
  captionText.innerHTML = dots[slideIndexW-1].alt;
}

//TESTIMONIALS
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}