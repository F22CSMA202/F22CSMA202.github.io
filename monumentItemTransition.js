document.getElementById("transitionButton").addEventListener("click", function() {
    // Get the images container element
    var imagesContainer = document.querySelector(".images");
  
    // Set the initial left position of the images container
    imagesContainer.style.left = "0";
  
    // Animate the left position of the images container to move it to the right
    var animation = imagesContainer.animate([
      { left: "0" },
      { left: "100%" }
    ], {
      duration: 1000,
      easing: "ease-out"
    });
  
    // Remove the images container from the DOM after the animation completes
    animation.onfinish = function() {
      imagesContainer.remove();
    };
  });