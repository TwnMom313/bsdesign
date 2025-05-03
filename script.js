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

//testimonails
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// //logo swap dark mode
// const logoImage = document.getElementById('your-logo-id');

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   logoImage.src = "images/3.3_Soto_Logo.png";
// } else {
//   logoImage.src = "images/3.3_Soto_Logo_R.png";
// }

//Graphics slides
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

// Animation slides
let slideIndexA = 1;
showSlidesA(slideIndexA);

function plusSlidesA(n) {
  showSlidesA(slideIndexA += n);
}

function currentSlideA(n) {
  showSlidesA(slideIndexA = n);
}

function showSlidesA(n) {
  let j;
  let slidesA = document.getElementsByClassName("mySlidesA");
  let dotsA = document.getElementsByClassName("demo");
  let captionTextA = document.getElementById("caption");
  if (n > slides.length) {slideIndexA = 1}
  if (n < 1) {slideIndexA = slidesA.length}
  for (j = 0; j < slidesA.length; j++) {
    slidesA[i].style.display = "none";
  }
  for (j = 0; j < dotsA.length; j++) {
    dotsA[j].className = dotsA[j].className.replace(" active", "");
  }
  slidesA[slideIndexA-1].style.display = "block";
  dotsA[slideIndexA-1].className += " active";
  captionText.innerHTML = dotsA[slideIndexA-1].alt;
}


// Photography slides
let slideIndexP = 1;
showSlidesP(slideIndexP);

function plusSlidesP(n) {
  showSlidesP(slideIndexP += n);
}

function currentSlideP(n) {
  showSlidesP(slideIndexP = n);
}

function showSlidesP(n) {
  let y;
  let slidesP = document.getElementsByClassName("mySlidesP");
  let dotsP = document.getElementsByClassName("demo");
  let captionTextP = document.getElementById("caption");
  if (n > slidesP.length) {slideIndexP = 1}
  if (n < 1) {slideIndexP = slides.length}
  for (y = 0; y < slidesP.length; y++) {
    slidesP[y].style.display = "none";
  }
  for (y = 0; y < dotsP.length; y++) {
    dotsP[y].className = dotsP[y].className.replace(" active", "");
  }
  slidesP[slideIndexP-1].style.display = "block";
  dotsP[slideIndexP-1].className += " active";
  captionTextP.innerHTML = dotsP[slideIndexP-1].alt;
}

// Web Design/Development slides
let slideIndexW = 1;
showSlidesW(slideIndexW);

function plusSlidesW(n) {
  showSlidesW(slideIndexW += n);
}

function currentSlideW(n) {
  showSlidesW(slideIndexW = n);
}

function showSlidesW(n) {
  let g;
  let slidesW = document.getElementsByClassName("mySlidesW");
  let dotsW = document.getElementsByClassName("demo");
  let captionTextW = document.getElementById("caption");
  if (n > slides.length) {slideIndexW = 1}
  if (n < 1) {slideIndexW = slidesW.length}
  for (g = 0; g < slidesW.length; g++) {
    slidesW[g].style.display = "none";
  }
  for (g = 0; g < dotsW.length; g++) {
    dotsW[g].className = dotsW[g].className.replace(" active", "");
  }
  slidesW[slideIndexW-1].style.display = "block";
  dotsW[slideIndexW-1].className += " active";
  captionTextW.innerHTML = dotsW[slideIndexW-1].alt;
}

