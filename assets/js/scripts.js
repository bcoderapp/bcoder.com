// Smooth scrolling for internal links
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function onScroll() {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // Initial trigger
});

// Owl Carousel for Clients Section
$(document).ready(function () {
    $(".clients-carousel").owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 2500,
      autoplayHoverPause: true,
      responsiveClass: true,
      dots: false,
      nav: false,
      responsive: {
        0: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    });
  });