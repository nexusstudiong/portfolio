let lastScrollTop = 0;
const btt = document.getElementById('btt');

window.addEventListener("scroll", function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 90) {
    btt.style.bottom = "0px"; /* Adjust according to stickout height */
  } else {
    btt.style.bottom = "-90px";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});