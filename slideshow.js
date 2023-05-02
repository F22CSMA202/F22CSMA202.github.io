let slideIndex = 0; //<---Starts from the very beginning
showSlides();


//Slideshow function by sliding through the current images
function showSlides(){
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let progressBar = document.getElementsByClassName("progress-bar")[0];

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex-1].style.display = "block";

    // Update progress bar
    progressBar.style.width = "0%";
    progressBar.style.transition = "width 5s ease";
    setTimeout(() => {
      progressBar.style.width = "100%";
    }, 10);

    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a[href*="#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        var target = document.querySelector(this.hash);
        if (target) {
          var targetId = target.id.startsWith('section') ? target.id : 'section' + target.id;
          smoothScroll(targetId);
          if (window.location.pathname === target.pathname) {
            e.preventDefault();
            history.pushState(null, null, '#' + targetId);
          }
        }
      });
    }
  
    function smoothScroll(target) {
      var targetElem = document.getElementById(target);
      var distance = targetElem.getBoundingClientRect().top;
      var start = window.pageYOffset;
      var duration = 500;
      var startTime = null;
  
      function step(currentTime) {
        if (startTime === null) {
          startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(step);
        } else {
          window.removeEventListener('scroll', scrollListener);
        }
      }
  
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
  
      var scrollListener = function () {
        cancelAnimationFrame(step);
        window.removeEventListener('scroll', scrollListener);
      };
  
      requestAnimationFrame(step);
      window.addEventListener('scroll', scrollListener);
    }
  });
  