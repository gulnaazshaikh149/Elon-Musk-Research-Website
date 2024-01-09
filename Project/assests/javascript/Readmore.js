// This Code is referred from WEBCIFAR- https://www.youtube.com/watch?v=TvVY8c1uvG8&t=31s&ab_channel=WEBCIFAR
document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtns = document.querySelectorAll(".read-more-btn");
  
    readMoreBtns.forEach(function(btn) {
      btn.addEventListener("click", function() {
        const text = btn.previousElementSibling; 
  
        text.classList.toggle("show-more");
  
        if (btn.innerText === "Read More") {
          btn.innerText = "Read Less";
        } else {
          btn.innerText = "Read More";
        }
      });
    });
  });
  