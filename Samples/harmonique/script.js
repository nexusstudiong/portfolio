let lastScrollTop = 0;
const sticktop = document.getElementById('sticktop');
const btt = document.getElementById('btt');
let sw = window.innerWidth;

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(sw)

  if(sw > 800) {
    if (scrollTop > 90) {
      sticktop.style.top = "0px"; /* Adjust according to stickout height */
    } else {
      sticktop.style.top = "-90px";
    }
    
    if (scrollTop > 300) {
      btt.style.bottom = "20px"; /* Adjust according to stickout height */
    } else {
      btt.style.bottom = "-90px"; /* Adjust according to stickout height */
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});