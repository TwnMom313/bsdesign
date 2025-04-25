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
  if (n > slides.length) {slideIndex = 1};
  if (n < 1) {slideIndex = slides.length};
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
  let i;
  let slides = document.getElementsByClassName("mySlidesA");
  let dots = document.getElementsByClassName("dotA");
  let captionText = document.getElementById("captionA");

  // Check if slides and dots exist
  if (slides.length === 0 || dots.length === 0) {
    console.error("Slides or dots for Animation slides are missing.");
    return;
  }

  if (n > slides.length) { slideIndexA = 1; }
  if (n < 1) { slideIndexA = slides.length; }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeA", "");
  }

  // Ensure slideIndexA is within bounds
  if (slideIndexA - 1 >= 0 && slideIndexA - 1 < slides.length) {
    slides[slideIndexA - 1].style.display = "block";
  } else {
    console.error("Invalid slideIndexA:", slideIndexA);
  }

  if (slideIndexA - 1 >= 0 && slideIndexA - 1 < dots.length) {
    dots[slideIndexA - 1].className += " activeA";
  } else {
    console.error("Invalid dot index:", slideIndexA - 1);
  }
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
window.onload = 
function showSlidesP(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesP");
  let dots = document.getElementsByClassName("demoP");
  let captionText = document.getElementById("captionP");
  if (n > slides.length) {slideIndexP = 1};
  if (n < 1) {slideIndexP = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexP-1].style.display = "block";
  dots[slideIndexP-1].className += " active";
  captionText.innerHTML = dots[slideIndexP-1].alt;
};
  showSlidesP(slideIndexP);

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
  let i;
  let slides = document.getElementsByClassName("mySlidesW");
  let dots = document.getElementsByClassName("demoW");
  let captionText = document.getElementById("captionW");
  if (n > slides.length) {slideIndexW = 1};
  if (n < 1) {slideIndexW = slides.length};
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