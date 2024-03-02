
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

  const intervalDuration = 3000;
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




  // cursor animation
  var $cursor = $(".cursor");
  $(document).on("mousemove", function(e) {
    var x = e.pageX - window.scrollX;
    var y = e.pageY - window.scrollY;
    $cursor.css("top", y + "px");
    $cursor.css("left", x + "px");
  });

  var $elements = $('.hover');
  var $whitecursor = $('.white-cursor');
  
  $elements.on('mouseenter', handleMouseOver);
  $elements.on('mouseout', handleMouseOut);

  $whitecursor.on('mouseenter', whitemouseover);
  $whitecursor.on('mouseleave', whitemouseleave);

  function whitemouseover() {
    $cursor.css("background-color", "#00000077");
    $cursor.css("width", "60px");
    $cursor.css("height", "60px");
    // cursor.css("transform", "translate(-50%, -50%)");
  }

  function whitemouseleave() {
    $cursor.css("background-color", "#7700ff");
    $cursor.css("width", "10px");
    $cursor.css("height", "10px");
  }

  function handleMouseOver() {
    $cursor.css("width", "60px");
    $cursor.css("height", "60px");
    // cursor.css("transform", "translate(-50%, -50%)");
  }

  function handleMouseOut() {
    $cursor.css("width", "10px");
    $cursor.css("height", "10px");
  }


  // project counter
  const projectTarget = 150;
  const $projectCounter = $('.project-counter');
  
  function updateCounter($projectCounter, count) {
    $projectCounter.text(count);
  }
  
  function startCounter() {
    $projectCounter.each(function(index) {
      let count = 1;
      const interval = setInterval(() => {
        updateCounter($(this), count);
        if (count === projectTarget) {
          clearInterval(interval);
        } else {
          count++;
        }
      }, 20 * (index + 1));
    });
  }

  startCounter();



  // client revieew

  const $reviewS = $("slider");
  const $reviewSlide = $("slide");
  const nmbrofSlides = $reviewSlide.length;
  let ReviewcurrentIndex = 1;
  let Reviewindex = ReviewcurrentIndex;
  $reviewS.css("transform", `translateX(-${Reviewindex * 394}px)`);

  function nextreview() {
    Reviewindex = (Reviewindex + 1) % nmbrofSlides;
    updateReview();
  }

  function prevreview() {
    Reviewindex = ((Reviewindex - 1 + nmbrofSlides) % nmbrofSlides);
    updateReview();
  }

  function updateReview() {
    $reviewS.css("transform", `translateX(-${Reviewindex * 394}px)`);
  }

  let ReviewId;
  let reviewDuration = 3000;

  function startreviewLoop() {
    ReviewId = setInterval(() => {
      nextreview();
    }, reviewDuration);
  }

  function stopReviewLoop() {
    clearInterval(ReviewId);
  }

  startreviewLoop();

  $reviewS.on('mouseenter', startreviewLoop);
  $reviewS.on('mouseleave', stopReviewLoop);

// .carousal-nav hover
  $(".carousal-nav").on("mouseover", mousein);
  $(".carousal-nav").on("mouseout", mouseOut);

  function mousein() {
    $(".carousal-nav").css("backgrounColor", "black");
    $(".carousal-nav").css("transition", "2s ease-in-out");
  }

  function mouseOut() {
    $(".carousal-nav").css("transition", ".5s ease-out");
  }
});


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



      // faq jawa
      $('.faq-head').on('click', function() {
        $(this).toggleClass('active');
        $(this).next().toggle('slow');
      });
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





