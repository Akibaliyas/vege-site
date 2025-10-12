// ===== Testimonial Slider =====
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showTestimonial(n) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === n) t.classList.add('active');
  });
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});

// Auto-slide every 5 seconds
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);


// ===== Countdown Timer for Deal =====
const endDate = new Date();
endDate.setDate(endDate.getDate() + 3); // 3 days from now

function updateCountdown() {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    document.querySelector('.countdown').innerHTML = "<h3>Deal Expired!</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
