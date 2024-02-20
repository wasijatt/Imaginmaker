
function submitForm() {
  const form = document.getElementsByClassName('main-form')[0]; // Assuming there's only one element with the class 'contactForm'
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(message => {
    console.log(message); // Log the message received from the server

    // Handle the message as needed, e.g., display it on the page
    const resultElements = document.getElementsByClassName('result');
    if (resultElements.length > 0) {
      resultElements[0].innerText = message;
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

// sliders
let currentIndex = 0;

function showSlide(index) {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const slideWidth = slides[0].clientWidth;

  currentIndex = index;

  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function handleMouseWheel(event) {
  event.preventDefault();
  const delta = Math.max(-1, Math.min(1, event.deltaY));

  if (delta < 0) {
    nextSlide();
  } else {
    prevSlide();
  }
}

function nextSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex = (currentIndex + 4) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex = (currentIndex - 4 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.carousel-slide');
  currentIndex = (currentIndex - 4 + slides.length) % slides.length;
  showSlide(currentIndex);
}

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
// input phone Number
function Phonenmbrformat(input) {
  var Phonenmbr = input.value.replace(/\D/g, '');
  if (Phonenmbr.length === 11) {
    Phonenmbr = Phonenmbr.replace(/(\d{4})(\d{7})/, '$1-$2');
  } else if (Phonenmbr.length > 11) {
    Phonenmbr = Phonenmbr.slice(0, 11);
  }
  input.value = Phonenmbr;
}

// function phonenmbrformat(input) {
//   var phonenmbr = input.value.replace('/\D/g', '');
//   if (phonenmbr.length === 11) {
//     phonenmbr = phonenmbr.replace('/(\d{4})(\d{7})/', '$1-$2');
//   } else if (phonenmbr.length > 11) {
//     phonenmbr = phonenmbr.slice(0, 11);
//   };
//   input.value = phonenmbr
// }

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


// lottie

  // document.addEventListener('DOMContentLoaded', function () {
    
//     var animationDataPaths = [
//       "motion grafics/shoes animation.json",
//       "motion grafics/parents with child.json",
//       "motion grafics/mans with box.json",
//       "motion grafics/Illustration.json",
//       "motion grafics/logo.json",
//       "motion grafics/computer earth.json",
//       "motion grafics/dog with man.json",
//       "motion grafics/girl boy with plant.json",
//       "motion grafics/graphic design.json",
//       "motion grafics/happy winner.json",
//       "motion grafics/Super Hero Json.json",
//       "motion grafics/tree animation_0.json",
//       "motion grafics/stree animation.json",
//   ]

// animationDataPaths.forEach(function(path, index) {
  
//   var container = document.getElementById('loti-container-' + (index + 1));

//   var animation = bodymovin.loadAnimation({
//     container: container,
//     renderer: 'svg', 
//     loop: true,
//     autoplay: true,
//     path : path,
//   });
// })
// animation.play();

var animationData =  [
  "shoes animation.json",
  "parents with child.json",
  "mans with box.json",
  "Illustration.json",
  "logo.json",
  "computer earth.json",
  "dog with man.json",
  "girl boy with plant.json",
  "graphic design.json",
  "happy winner.json",
  "Super Hero Json.json",
  "tree animation_0.json",
  "stree animation.json"
];
animationData.forEach(function (path,index) {  
var container = document.getElementById('animation-container-'+ (index + 1));

const anim = bodymovin.loadAnimation({
  container: container,
 
  loop: true,
  autoplay: true,
  path: path // Path to your animation JSON file
});
anim.play();
})

// Array of animation data paths
// var animationDataPaths = "logo.json";
    

// // Loop through each animation data path
// // animationDataPaths.forEach(function(path, index) {
//   // Get reference to the HTML container for this animation
//   var container = document.getElementById('animation-container-1');

//   // Load animation
//   var animation = bodymovin.loadAnimation({
//     container: container,
//     renderer: 'svg', // or 'canvas'
//     loop: true,
//     autoplay: true,
//     animationDataPaths: animationDataPaths// Path to the animation JSON file
//   });
// animation.play();



// scroll animation
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#scrollEvents'),
//   smooth: true
// });

// document.getElementById("carisal-nav").addEventListener("mouseout" , function(){
//   this.style.transition = "0.3 ease in "
//   console.log("wasi")
// })
document.getElementById("carisal-nav").addEventListener("mouseover", mousein);
document.getElementById("carisal-nav").addEventListener("mouseout", mouseOut);
function mousein(){
  document.getElementById("carisal-nav").style.color = "red";
  document.getElementById("carisal-nav").style.transition = ".5s ease-out";

}
function mouseOut() {

  document.getElementById("carisal-nav").style.transition = ".5s ease-out";
}