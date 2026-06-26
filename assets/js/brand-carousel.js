$(document).ready(function () {
  var brandSwiper = new Swiper('.brand-carousel', {
    slidesPerView: 2,          // Mobile par default 2 items dikhengi
    spaceBetween: 30,          // Slides ke darmiyan gap
    loop: true,                // Infinite loop chalega
    autoplay: {
      delay: 2000,             // 2.5 seconds baad khud slide hoga
      disableOnInteraction: false,
    },
    breakpoints: {
      // Jab screen width >= 576px ho (Small devices/Tablets)
      576: {
        slidesPerView: 3,
      },
      // Jab screen width >= 992px हो (Large screens/Laptops)
      992: {
        slidesPerView: 4,      // Ek waqt me 4 logos nazar aayenge
      }
    }
  });
});