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

// // Animation slides
// let slideIndexA = 1;
// showSlides(slideIndexA);

// function plusSlides(n) {
//   showSlides(slideIndexA += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndexA = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlidesA");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndexA = 1}
//   if (n < 1) {slideIndexA = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexA-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
//   captionText.innerHTML = dots[slideIndexA-1].alt;
// }


// // Photography slides
// let slideIndexP = 1;
// showSlides(slideIndexP);

// function plusSlides(n) {
//   showSlides(slideIndexP += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndexP = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlidesP");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndexP = 1}
//   if (n < 1) {slideIndexP = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexP-1].style.display = "block";
//   dots[slideIndexP-1].className += " active";
//   captionText.innerHTML = dots[slideIndexP-1].alt;
// }

// // Web Design/Development slides
// let slideIndexW = 1;
// showSlides(slideIndexW);

// function plusSlides(n) {
//   showSlides(slideIndexW += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndexW = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlidesW");
//   let dots = document.getElementsByClassName("demo");
//   let captionText = document.getElementById("caption");
//   if (n > slides.length) {slideIndexW = 1}
//   if (n < 1) {slideIndexW = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndexW-1].style.display = "block";
//   dots[slideIndexW-1].className += " active";
//   captionText.innerHTML = dots[slideIndexW-1].alt;
// }

