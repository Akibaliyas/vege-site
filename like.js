// Toggle mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Animate slider
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const sliderContainer = document.querySelector('.slider');

  function showSlide(index) {
    sliderContainer.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000); // change slide every 5 seconds

  // Countdown timer for Deal of the Day
  const countdown = () => {
    const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now
    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;
      if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('days').innerHTML = '00d';
        document.getElementById('hours').innerHTML = '00h';
        document.getElementById('minutes').innerHTML = '00m';
        document.getElementById('seconds').innerHTML = '00s';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').innerHTML = days.toString().padStart(2, '0') + 'd';
      document.getElementById('hours').innerHTML = hours.toString().padStart(2, '0') + 'h';
      document.getElementById('minutes').innerHTML = minutes.toString().padStart(2, '0') + 'm';
      document.getElementById('seconds').innerHTML = seconds.toString().padStart(2, '0') + 's';
    }, 1000);
  };
  countdown();

  // Testimonials carousel
  const testimonials = document.querySelectorAll('.testimonial-item');
  let currentTestimonial = 0;
  setInterval(() => {
    testimonials.forEach((t, i) => {
      t.style.display = 'none';
    });
    testimonials[currentTestimonial].style.display = 'block';
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  }, 4000); // change testimonial every 4 seconds

  // Loader hide after page load
  window.onload = () => {
    document.getElementById('loader').style.display = 'none';
  };
});