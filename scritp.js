//carousel
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
