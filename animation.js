$(document).ready(function() {
    // This code is run when the document is ready to be manipulated.
    $(window).scroll(function() {
      // This function is triggered whenever the user scrolls the window.
      $('.animated-div').each(function() {
        // This loop iterates over all elements with the class "animated-div".
        if ($(this).offset().top < $(window).scrollTop() + $(window).height() * 0.7 && $(this).offset().top + $(this).height() > $(window).scrollTop()) {
          // This condition checks whether the element is within 70% of the visible window height and if it is currently in view.
          $(this).addClass('animate');
          // If the element is within view, add the "animate" class to trigger a CSS animation.
        } else {
          $(this).removeClass('animate');
          // If the element is out of view, remove the "animate" class to stop the animation.
        }
      });
    });
  });




  // document.querySelector('#scroll-down').addEventListener('click', function() {
  //   alert("I have been clicked!!!")
  //   // This function is triggered when the user clicks the icon.
  //   // It calculates the current position of the icon, adds the viewport height (100vh), and scrolls to that position.
  //   // const iconPosition = icon.getBoundingClientRect().top + window.scrollY;
  //   // const scrollPosition = iconPosition + window.innerHeight;
    
  //   // window.scrollTo({
  //   //   top: scrollPosition,
  //   //   behavior: 'smooth'
  //   // });
  // });
  
