// Show/hide the scroll-to-top button based on scroll position
        window.onscroll = function() {
          scrollFunction();
        };
    
        function scrollFunction() {
          var scrollBtn = document.getElementById("scrollBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollBtn.style.display = "block";
          } else {
            scrollBtn.style.display = "none";
          }
        }
    
        // Scroll to the top of the page smoothly
        function scrollToTop() {
          var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
    
          if (currentPosition > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, currentPosition - currentPosition / 8);
          }
        }