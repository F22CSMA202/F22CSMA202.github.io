document.getElementById("transitionButton").addEventListener("click", function() {
    // Get the images container element
    var imagesContainer = document.querySelector(".images");
  
    // Set the initial right position of the images container
    imagesContainer.style.right = "0";
  
    // Animate the right position of the images container to move it to the left
    var animation = imagesContainer.animate([
      { right: "0" },
      { right: "100%" }
    ], {
      duration: 1000,
      easing: "ease-out"
    });
  
    // Remove the images container from the DOM after the animation completes
    animation.onfinish = function() {
      imagesContainer.remove();
    };
  });