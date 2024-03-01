
// main sliders

$(document).ready(function() {
  const $slider = $('.carousel-track');
  const $navigation = $('.navigation');
  const $slides = $('.carousel-slide');
  const numSlides = $slides.length;
  let index = 1;

  $slider.css('transform', `translateX(-${index * 23}%)`);

  function nextSlide() {
    index = (index + 1) % numSlides;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + numSlides) % numSlides;
    updateSlider();
  }

  function updateSlider() {
    $slider.css('transform', `translateX(-${index * 23}%)`);
  }

  const intervalDuration = 2000;
  let intervalId;

  function startAutoLoop() {
    intervalId = setInterval(() => {
      nextSlide();
    }, intervalDuration);
  }

  function stopAutoLoop() {
    clearInterval(intervalId);
  }

  startAutoLoop();
  $navigation.on('mouseenter', stopAutoLoop).on('mouseleave', startAutoLoop);
  
  $('.next').click(nextSlide);
  $('.prev').click(prevSlide);
});
// const slider = document.querySelector('.carousel-track');
// const navigation = document.querySelector('.navigation');
// const slides = document.querySelectorAll('.carousel-slide');
// const numSlides = slides.length;
// let currentIndex = 1;

// let index = currentIndex;

// slider.style.transform = `translateX(-${index * 23}%)`;

// function nextSlide() {
//   index = (index + 1) % numSlides;
//   updateSlider();
// }

// function prevSlide() {
//   index = (index - 1 + numSlides) % numSlides;
//   updateSlider();
// }

// function updateSlider() {
//   slider.style.transform = `translateX(-${index * 23}%)`;
// }
// const intervalDuration = 3000; 
// let intervalId;

// function startAutoLoop() {
//   intervalId = setInterval(() => {
//     nextSlide();
//   }, intervalDuration);
// }

// function stopAutoLoop() {
//   clearInterval(intervalId);
// }


// startAutoLoop();
// navigation.addEventListener('mouseenter', stopAutoLoop);
// navigation.addEventListener('mouseleave', startAutoLoop);


// clien reviews slider
const reviewS = document.querySelector("slider");
const reviewSlide = document.querySelectorAll("slide");
const nmbrofSlides = reviewSlide.length 
 let ReviewcurrentIndex=  1
 let   Reviewindex = ReviewcurrentIndex ;
 reviewS.style.transform = `translateX(-${Reviewindex * 394}px)`;
 function nextreview(){
  Reviewindex  = (Reviewindex +1) % nmbrofSlides
  updateReview();

 }
 function prevreview(){
   Reviewindex = ((Reviewindex -1 + nmbrofSlides) % nmbrofSlides)
  updateReview();
  
 }
function updateReview(){
  reviewS.style.transform = `translateX(-${Reviewindex * 394}px)`;
}
let ReviewId;
let reviewDuration = 3000;
function startreviewLoop(){
ReviewId = setInterval(() => {
  nextreview();
}, reviewDuration);
}
function stopReviewLoop() {
  clearInterval(ReviewId);
}
startreviewLoop();
reviewS.addEventListener('mouseenter', startreviewLoop);
reviewS.addEventListener('mouseleave', stopReviewLoop);



// mouseevents
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let x = e.pageX - window.scrollX;
  let y = e.pageY - window.scrollY;
  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
})
const elements = document.querySelectorAll('.hover');
const whitecursor = document.querySelectorAll('.white-cursor')
// Add an event listener to each element
elements.forEach(element => {
  element.addEventListener('mouseenter', handleMouseOver);
  element.addEventListener('mouseout', handleMouseOut);
});
whitecursor.forEach(element => {
  element.addEventListener('mouseenter', whitemouseover)
  element.addEventListener('mouseleave', whitemouseleave)
})
function whitemouseover() {
  cursor.style.backgroundColor = '#00000077'
  cursor.style.width = '60px'
  cursor.style.height = '60px'
  // cursor.style.transform = "translate(-50% , -50%)"
}
function whitemouseleave() {
  cursor.style.backgroundColor = '#7700ff'
  cursor.style.width = '10px'
  cursor.style.height = '10px'
}
function handleMouseOver() {
  cursor.style.width = '60px'
  cursor.style.height = '60px'
  // cursor.style.transform = "translate(-50% , -50%)"

}
function handleMouseOut() {
  cursor.style.width = '10px'
  cursor.style.height = '10px'
}


// counters for Projects
const projectTarget = 150
const projectCounter = document.querySelectorAll('.project-counter');
function updateCounter(projectCounter,count) {
  projectCounter.textContent = count
}
// startCounter
function startCounter() {
  projectCounter.forEach((projectCounter, index) => {
  let count = 1
  const interval = setInterval(() => {
    updateCounter(projectCounter,count);
    if (count === projectTarget) {
      clearInterval(interval);
    }
    else {
      count++
    }
  }, 20 * (index + 1))
})}
window.onload = startCounter();

// for submition form
// frontend.js
function submitForm() {
  const form = document.getElementsByClassName('main-form')[0];
  const formData = new FormData(form);

  fetch('/', {
      method: 'POST',
      body: formData,
  })
  .then(response => response.text())
  .then(message => {
      console.log(message);

      // Handle the message as needed, e.g., display it on the page
      const resultElements = document.getElementsByClassName('result');
      if (resultElements.length > 0) {
          resultElements[0].innerText = message;
      }

      // Clear the form after successful submission
      // clearForm(form);
  })
  .catch(error => {
      console.error('Error:', error);
  });
}



// faq jawa
var faq = document.getElementsByClassName('faq-head');
var i;
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var para = this.nextElementSibling;
    if (para.style.display === 'block') {
      para.style.display = 'none'
    } else {
      para.style.display = 'block'
      para.style.transition = "1s ease"

    }
  });

}

// tab for casestudy page

function opentab(evt,tabname){
  var i ,tabhead,tabcontent;
  tabcontent = document.getElementsByClassName("tab-content");
  for ( i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none"
  }
  tabhead = document.getElementsByClassName("tab-head");
  for (  i= 0;  i< tabhead.length; i++) {
  tabhead[i].className = tabhead[i].className.replace(" active" ," ")  
  }
  document.getElementById(tabname).style.display = "block"
  evt.currentTarget.className += " active";
}



document.getElementById("carisal-nav").addEventListener("mouseover", mousein);
document.getElementById("carisal-nav").addEventListener("mouseout", mouseOut);
function mousein(){
  document.getElementById("carisal-nav").style.color = "red";
  document.getElementById("carisal-nav").style.transition = ".5s ease-out";

}
function mouseOut() {

  document.getElementById("carisal-nav").style.transition = ".5s ease-out";
}



